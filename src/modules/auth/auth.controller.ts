import { Body, Controller, Patch, Post, Request, UseGuards } from '@nestjs/common';
import { JWT, JwtData } from 'src/common/decorators/jwt.decorator';
import { JwtAuthGuard } from 'src/common/security/guards/jwt-auth.guard';
import { LocalAuthGuard } from 'src/common/security/guards/local-auth.guard';
import { AuthService } from './auth.service';
import { UserDto, UserEditPassDto } from './dto/user.dto';
@Controller('auth')
export class AuthController {
	constructor(private readonly authService: AuthService) {}

	@Post('register')
	async register(@Body() data: UserDto) {
		return await this.authService.register(data);
	}

	@UseGuards(LocalAuthGuard)
	@Post('login')
	async login(@Request() req) {
		return await this.authService.login(req.user);
	}

	@UseGuards(JwtAuthGuard)
	@Post('recover')
	async recover(@JWT() jwtData: JwtData) {
		return await this.authService.recover(jwtData);
	}

	@UseGuards(JwtAuthGuard)
	@Patch('recover')
	async editPass(@JWT() jwtData: JwtData, @Body() data: UserEditPassDto) {
		return await this.authService.edtPass(jwtData, data);
	}

	@UseGuards(JwtAuthGuard)
	@Patch('confir')
	async confir(@JWT() jwtData: JwtData) {
		return await this.authService.confir(jwtData);
	}
}
