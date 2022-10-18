import { Repository } from 'typeorm';
import { UserDto, UserLoginDto } from './dto/user.dto';
import { RolEntity } from './entities/rol.entity';
import { UserEntity } from './entities/user.entity';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private readonly userRepository;
    private readonly rolRepository;
    private readonly jwtService;
    [x: string]: any;
    constructor(userRepository: Repository<UserEntity>, rolRepository: Repository<RolEntity>, jwtService: JwtService);
    register({ password, email, rol }: UserDto): Promise<{
        email: string;
        password: string;
        rol: RolEntity;
    } & UserEntity>;
    login({ id, email }: UserLoginDto): Promise<{
        access_token: string;
        email: string;
    }>;
    recover(): Promise<void>;
}
