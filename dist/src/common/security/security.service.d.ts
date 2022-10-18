import { UserLoginDto } from 'src/modules/auth/dto/user.dto';
import { UserEntity } from 'src/modules/auth/entities/user.entity';
import { Repository } from 'typeorm';
export declare class SecurityService {
    private readonly userRepository;
    constructor(userRepository: Repository<UserEntity>);
    validateUser({ email, password, }: UserLoginDto): Promise<UserEntity | null>;
}
