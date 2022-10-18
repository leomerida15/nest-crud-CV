import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/common/security/guards/jwt-auth.guard';
import { LocalAuthGuard } from 'src/common/security/guards/local-auth.guard';
import { AuthService } from './auth.service';
import { UserDto } from './dto/user.dto';
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Body() data: UserDto) {
    return await this.authService.register(data);
  }

  @UseGuards(LocalAuthGuard)
  // @UseGuards(JwtAuthGuard)
  @Post('login')
  async login(@Request() req) {
    return await this.authService.login(req.user);
  }
}
