import { OmitType, PickType } from '@nestjs/mapped-types';
import { IsEmail, IsEnum, IsOptional, IsString, IsUUID, Matches } from 'class-validator';
import configuration from 'src/config/configuration';
import { Rols } from '../entities/rol.entity';

export class UserDto {
	@IsUUID()
	@IsOptional()
	id?: string;

	@IsEmail()
	email: string;

	@Matches(configuration().global.regexPass)
	@IsString()
	password: string;

	@IsEnum(Rols)
	rol: Rols;
}

export class UserLoginDto extends OmitType(UserDto, ['rol'] as const) {}

export class UserRecoverDto extends PickType(UserDto, ['email'] as const) {}

export class UserEditPassDto extends PickType(UserDto, ['password'] as const) {}
