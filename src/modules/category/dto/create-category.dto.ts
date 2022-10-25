import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsUUID, IsString, IsOptional } from 'class-validator';

export class CreateCategoryDto {
	@IsUUID()
	@IsOptional()
	@ApiPropertyOptional()
	id?: string;

	@IsString()
	@Transform(({ value }) => String(value).toLowerCase())
	@ApiProperty()
	name: string;
}
