import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class createUser1665909172597 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "user",
            columns: [
                {
                    name: 'id',
                    type: 'int',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: "first_name",
                    type: "varchar",
                    default: 'first',
                },
                {
                    name: 'last_name',
                    type: 'varchar',
                    default: 'last',
                },
                {
                    name: 'is_active',
                    type: 'varchar',
                    default: 'Y',
                },
                {
                    name: 'delete_date',
                    type: 'datetime',
                    default: 'now()',
                }
            ]
        }), true)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
