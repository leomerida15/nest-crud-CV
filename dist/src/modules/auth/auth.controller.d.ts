import { AuthService } from './auth.service';
import { UserDto } from './dto/user.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    register(data: UserDto): Promise<{
        email: string;
        password: string;
        rol: import("./entities/rol.entity").RolEntity;
    } & import("./entities/user.entity").UserEntity>;
    login(req: any): Promise<{
        access_token: string;
        email: string;
    }>;
}
