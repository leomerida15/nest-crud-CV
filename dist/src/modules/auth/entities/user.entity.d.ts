import { RolEntity } from './rol.entity';
export declare class UserEntity {
    id?: string;
    email: string;
    password: string;
    rol: string | RolEntity;
}
