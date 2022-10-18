import { Rols } from '../entities/rol.entity';
export declare class UserDto {
    id?: string;
    email: string;
    password: string;
    rol: Rols;
}
declare const UserLoginDto_base: import("@nestjs/mapped-types").MappedType<Omit<UserDto, "rol">>;
export declare class UserLoginDto extends UserLoginDto_base {
}
declare const UserRecoverDto_base: import("@nestjs/mapped-types").MappedType<Pick<UserDto, "email">>;
export declare class UserRecoverDto extends UserRecoverDto_base {
}
export {};
