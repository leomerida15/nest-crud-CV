import { MigrationInterface, QueryRunner } from 'typeorm';
import { RolEntity, Rols } from '../src/modules/auth/entities/rol.entity';

export class sql1665937287682 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const user = new RolEntity();
    user.name = Rols.USER;
    const admin = new RolEntity();
    admin.name = Rols.ADMIN;

    const rol = await queryRunner.manager.insert(RolEntity, [user, admin]);

    console.log('rol', rol);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
