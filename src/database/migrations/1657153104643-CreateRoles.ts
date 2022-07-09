import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateRoles1657153104643 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: "roles",
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
        await queryRunner.dropTable("roles");
    }

}
