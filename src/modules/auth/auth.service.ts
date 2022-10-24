import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEditPassDto, UserDto } from './dto/user.dto';
import { RolEntity } from './entities/rol.entity';
import { UserEntity } from './entities/user.entity';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { MailerService } from '@nestjs-modules/mailer';
import { ConfigService } from '@nestjs/config';
import MailConfig from 'src/config/mail';
import { JwtData } from 'src/common/decorators/jwt.decorator';
import { LocalData } from 'src/common/decorators/local.decorator';
import { ConfigKeys } from 'src/config/configuration';
import { confirTemplate, recoverTemplate } from './mails/createTemplate';

@Injectable()
export class AuthService {
	constructor(
		@InjectRepository(UserEntity)
		private readonly userRepository: Repository<UserEntity>,

		@InjectRepository(RolEntity)
		private readonly rolRepository: Repository<RolEntity>,

		private readonly jwtService: JwtService,

		private readonly mailerService: MailerService,

		private readonly configService: ConfigService,
	) {}

	public async register({ password, email, rol }: UserDto) {
		const rolDB = await this.rolRepository.findOneBy({ name: rol });

		const criptPass = bcrypt.genSaltSync();

		const user = await this.userRepository.save({
			email,
			password: bcrypt.hashSync(password, criptPass),
			rol: rolDB,
		});

		const token = this.jwtService.sign({ data: user.id });
		const url = this.configService.get<MailConfig>(ConfigKeys.MAIL).recoverURL(token);

		await this.mailerService.sendMail({
			to: user.email,
			from: this.configService.get<MailConfig>(ConfigKeys.MAIL).user,
			subject: 'Confirmation email',
			html: confirTemplate({ email: user.email, url }),
		});

		return {
			access_token: token,
			email,
		};
	}

	public async login({ id, email }: LocalData) {
		const payload = { data: id };
		return {
			access_token: this.jwtService.sign(payload),
			email,
		};
	}

	public async recover(jwtData: JwtData) {
		const user = await this.userRepository.findOneBy({ id: jwtData.userId });
		if (!user) throw new HttpException('ERROR_TO_REGISTER', HttpStatus.NOT_FOUND);

		const token = this.jwtService.sign({ data: user.id });
		const url = this.configService.get<MailConfig>(ConfigKeys.MAIL).recoverURL(token);

		await this.mailerService.sendMail({
			to: user.email,
			from: this.configService.get<MailConfig>(ConfigKeys.MAIL).user,
			subject: 'Recover password',
			html: recoverTemplate({ email: user.email, url }),
		});
	}

	public async confir(jwtData: JwtData) {
		const user = await this.userRepository.findOneBy({ id: jwtData.userId, confirEmail: false });
		if (!user) throw new HttpException('ERROR_TO_REGISTER', HttpStatus.NOT_FOUND);

		await this.userRepository.update(jwtData.userId, { confirEmail: true });
	}

	public async editPass(jwtData: JwtData, { password }: UserEditPassDto) {
		const user = await this.userRepository.findOneBy({ id: jwtData.userId, confirEmail: false });
		if (!user) throw new HttpException('NOT_FOUND_USER', HttpStatus.NOT_FOUND);

		await this.userRepository.update(jwtData.userId, { password });
	}
}
