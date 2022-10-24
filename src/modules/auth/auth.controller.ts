import { Body, Controller, HttpCode, Patch, Post, UseGuards, HttpStatus } from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { JWT, JwtData } from 'src/common/decorators/jwt.decorator';
import { Local, LocalData } from 'src/common/decorators/local.decorator';
import { JwtAuthGuard } from 'src/common/security/guards/jwt-auth.guard';
import { LocalAuthGuard } from 'src/common/security/guards/local-auth.guard';
import { AuthService } from './auth.service';
import { AuthRespDto, UserDto, UserEditPassDto, UserLoginDto } from './dto/user.dto';

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

	@UseGuards(JwtAuthGuard)
	@Post('recover')
	@HttpCode(HttpStatus.NO_CONTENT)
	@ApiBearerAuth()
	async recover(@JWT() jwtData: JwtData) {
		return await this.authService.recover(jwtData);
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
}
