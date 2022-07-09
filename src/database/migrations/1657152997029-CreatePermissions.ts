import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreatePermissions1657152997029 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: "permissions",
              columns: [
                {
                  name: "id",
                  type: "uuid",
                  isPrimary: true,
                },
                {
                  name: "name",
                  type: "varchar",
                  isUnique: false
                },
                {
                  name: "description",
                  type: "varchar",
                  isUnique: false
                },
                {
                  name: "created_at",
                  type: "timestamp",
                  default: "now()",
                  isUnique: false
                },
              ],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("permissions");
    }

}
