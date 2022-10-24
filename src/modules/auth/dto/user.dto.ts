import { OmitType, PickType } from '@nestjs/swagger';
import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsEnum, IsJWT, IsOptional, IsString, IsUUID, Matches } from 'class-validator';
import configuration from 'src/config/configuration';
import { Rols } from '../entities/rol.entity';

export class UserDto {
	@IsUUID()
	@IsOptional()
	@ApiProperty()
	id?: string;

	@ApiProperty()
	@IsEmail()
	email: string;

	@ApiProperty()
	@Matches(configuration().global.regexPass)
	@IsString()
	password: string;

	@IsEnum(Rols)
	@ApiProperty()
	rol: Rols;
}

export class UserLoginDto extends OmitType(UserDto, ['rol', 'id'] as const) {}

export class UserRecoverDto extends PickType(UserDto, ['email'] as const) {}

export class UserEditPassDto extends PickType(UserDto, ['password'] as const) {}

export class AuthRespDto {
	@ApiProperty()
	@IsJWT()
	access_token: string;

	@ApiProperty()
	@IsEmail()
	email: string;
}
