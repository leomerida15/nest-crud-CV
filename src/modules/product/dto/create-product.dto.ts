import { Transform } from 'class-transformer';
import { IsArray, IsDate, IsJSON, IsNumber, IsOptional, IsString, IsUUID } from 'class-validator';

export class CreateProductDto {
	@IsUUID()
	@IsOptional()
	id?: string;

	@IsString()
	@Transform(({ value }) => String(value).toLowerCase())
	name: string;

	@IsNumber()
	price: number;

	@IsNumber()
	stog: number;

	@IsArray()
	@IsJSON({ each: true })
	imgs: {
		image: { get: string; delete: string };
		thumb: { get: string; delete: string };
		medium: { get: string; delete: string };
	}[];

	@IsDate()
	createdDate?: Date;

	@IsDate()
	@IsOptional()
	updatedDate?: Date;

	@IsString()
	@IsOptional()
	category: string;
}
