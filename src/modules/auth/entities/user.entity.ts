import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
import { IsEmail, IsString, IsUUID, Matches } from 'class-validator';
import { RolEntity } from './rol.entity';
import configuration from 'src/config/configuration';

@Entity()
@Unique(['email'])
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  @IsUUID()
  id?: string;

  @Column()
  @IsEmail()
  email: string;

  @Matches(configuration().global.regexPass)
  @IsString()
  @Column()
  password: string;

  @ManyToOne(() => RolEntity, (RolEntity) => RolEntity.id)
  @JoinColumn()
  rol: string | RolEntity;
}
