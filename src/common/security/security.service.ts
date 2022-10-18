import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
// import { UsersService } from '../users/users.service';
// import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UserLoginDto } from 'src/modules/auth/dto/user.dto';
import { UserEntity } from 'src/modules/auth/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SecurityService {
  constructor(
    // private readonly usersService: UsersService,
    // private readonly jwtService: JwtService,
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  public async validateUser({
    email,
    password,
  }: UserLoginDto): Promise<UserEntity | null> {
    const user = await this.userRepository.findOneBy({ email });

    if (!user || !bcrypt.compareSync(password, user.password)) return null;

    delete user.password;

    return user;
  }
}
