import { Body, Controller, HttpCode, Patch, Post, UseGuards, HttpStatus, Get } from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { JWT, JwtData } from 'src/common/decorators/jwt.decorator';
import { Local, LocalData } from 'src/common/decorators/local.decorator';
import { JwtAuthGuard } from 'src/common/security/guards/jwt-auth.guard';
import { LocalAuthGuard } from 'src/common/security/guards/local-auth.guard';
import { AuthService } from './auth.service';
import { AuthRespDto, UserDto, UserEditPassDto, UserLoginDto, UserRecoverDto, UserSetRolDto } from './dto/user.dto';
import { Rols } from './entities/rol.entity';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
	constructor(private readonly authService: AuthService) {}

	@Post('register')
	@HttpCode(HttpStatus.CREATED)
	@ApiBody({
		type: UserDto,
	})
	@ApiCreatedResponse({
		type: AuthRespDto,
	})
	async register(@Body() data: UserDto) {
		return await this.authService.register(data);
	}

	@UseGuards(LocalAuthGuard)
	@Post('login')
	@HttpCode(HttpStatus.ACCEPTED)
	@ApiBody({
		type: UserLoginDto,
	})
	@ApiCreatedResponse({
		type: AuthRespDto,
	})
	async login(@Local() localData: LocalData) {
		return await this.authService.login(localData);
	}

	@Post('recover')
	@HttpCode(HttpStatus.NO_CONTENT)
	@ApiBody({
		type: UserRecoverDto,
	})
	async recover(@Body() body: UserRecoverDto) {
		return await this.authService.recover(body);
	}

	@UseGuards(JwtAuthGuard)
	@Patch('recover')
	@HttpCode(HttpStatus.NO_CONTENT)
	@ApiBearerAuth()
	@ApiBody({
		type: UserEditPassDto,
	})
	@ApiCreatedResponse({
		type: AuthRespDto,
	})
	async editPass(@JWT() jwtData: JwtData, @Body() data: UserEditPassDto) {
		return await this.authService.editPass(jwtData, data);
	}

	@UseGuards(JwtAuthGuard)
	@Patch('confir')
	@HttpCode(HttpStatus.NO_CONTENT)
	@ApiBearerAuth()
	async confir(@JWT() jwtData: JwtData) {
		return await this.authService.confir(jwtData);
	}

	@Post('reconfir')
	@HttpCode(HttpStatus.NO_CONTENT)
	@ApiBody({
		type: UserRecoverDto,
	})
	async reconfir(@Body() body: UserRecoverDto) {
		return await this.authService.reconfir(body);
	}

	@Get('rol')
	@HttpCode(HttpStatus.OK)
	async rol() {
		return await this.authService.rol();
	}

	@Patch('rol')
	@HttpCode(HttpStatus.OK)
	@ApiBody({
		type: UserSetRolDto,
		enum: Rols,
	})
	@ApiBearerAuth()
	async setRol(@JWT() jwtData: JwtData, @Body() data: UserSetRolDto) {
		return await this.authService.setRol(jwtData, data.rol);
	}

	@UseGuards(JwtAuthGuard)
	@Get('user')
	@HttpCode(HttpStatus.OK)
	@ApiBearerAuth()
	async user(@JWT() jwtData: JwtData) {
		return await this.authService.user(jwtData);
	}
}
