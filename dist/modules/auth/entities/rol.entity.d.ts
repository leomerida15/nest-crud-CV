import { BaseEntity } from 'typeorm';
import { UserEntity } from './user.entity';
declare enum Rols {
    USER = "user",
    ADMIN = "admin"
}
export declare class RolEntity extends BaseEntity {
    id?: string;
    name: Rols;
    user?: UserEntity[];
}
export {};
