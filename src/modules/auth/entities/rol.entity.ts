import { IsInstance, IsString } from 'class-validator';
import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { UserEntity } from './user.entity';

export enum Rols {
	USER = 'user',
	ADMIN = 'admin',
}

@Entity()
export class RolEntity extends BaseEntity {
	@PrimaryGeneratedColumn('uuid')
	id?: string;

	@Column({ type: 'enum', enum: Rols })
	@IsString()
	name: Rols;

	@OneToMany(() => UserEntity, (UserEntity) => UserEntity.rol)
	@IsInstance(UserEntity, { each: true })
	user?: UserEntity[];
}
