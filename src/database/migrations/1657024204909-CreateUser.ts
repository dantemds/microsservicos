import { trusted } from "mongoose"
import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateUser1657024204909 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "users",
                columns:[
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "name",
                        type: "varchar",
                        isUnique: false
                    },
                    {
                        name: "email",
                        type: "varchar",
                        isUnique: true
                    },
                    {
                        name:"password",
                        type: "varchar",
                        isUnique:false
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()",
                        isUnique: false
                    }

                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users");
    }

}
