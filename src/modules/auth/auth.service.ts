import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserDto, UserLoginDto } from './dto/user.dto';
import { RolEntity } from './entities/rol.entity';
import { UserEntity } from './entities/user.entity';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  [x: string]: any;
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,

    @InjectRepository(RolEntity)
    private readonly rolRepository: Repository<RolEntity>,

    private readonly jwtService: JwtService,
  ) {}

  public async register({ password, email, rol }: UserDto) {
    const rolDB = await this.rolRepository.findOneBy({ name: rol });

    const criptPass = bcrypt.genSaltSync();

    const resp = await this.userRepository.save({
      email,
      password: bcrypt.hashSync(password, criptPass),
      rol: rolDB,
    });

    return resp;
  }

  public async login({ id, email }: UserLoginDto) {
    const payload = { data: id };
    return {
      access_token: this.jwtService.sign(payload),
      email,
    };
  }

  public async recover() {}

  // public async recover({ email }: UserRecoverDto) {
  //   const { data: resp, error } =
  //     await this.supabase.Auth.resetPasswordForEmail(email, {
  //       redirectTo: 'http://localhost:3000/update-password',
  //     });

  //   if (error)
  //     throw new HttpException('ERROR_TO_REGISTER', HttpStatus.NOT_FOUND);

  //   return resp;
  // }
}
