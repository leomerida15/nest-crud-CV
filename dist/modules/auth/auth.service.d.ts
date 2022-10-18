import { Supabase } from 'src/common/supabase/supabase';
import { Repository } from 'typeorm';
import { UserDto } from './dto/user.dto';
import { RolEntity } from './entities/rol.entity';
import { UserEntity } from './entities/user.entity';
export declare class AuthService {
    private readonly userRepository;
    private readonly rolRepository;
    private readonly supabase;
    constructor(userRepository: Repository<UserEntity>, rolRepository: Repository<RolEntity>, supabase: Supabase);
    register(data: UserDto): Promise<{
        user: import("@supabase/supabase-js").AuthUser;
        session: import("@supabase/supabase-js").AuthSession;
    } | {
        user: null;
        session: null;
    }>;
}
