import { IsOptional, IsString, IsUUID } from 'class-validator';

export class RolDto {
  @IsUUID()
  @IsOptional()
  id?: string;

  @IsString()
  name: string;
}
