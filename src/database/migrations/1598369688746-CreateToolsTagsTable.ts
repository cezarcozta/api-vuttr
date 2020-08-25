import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateToolsTagsTable1598369688746 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'tools_tags',
        columns: [
          {
            name: 'tool_id',
            type: 'uuid',
          },
          {
            name: 'tag_id',
            type: 'uuid',
          }
        ]
      }),
    );

    await queryRunner.createForeignKey(
      'tools_tags',
      new TableForeignKey({
        columnNames: ['tool_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'tools',
        name: 'fk_tools_tags_',
        onDelete: 'CASCADE',
        onUpdate: 'SET NULL',
      }),
    );

    await queryRunner.createForeignKey(
      'tools_tags',
      new TableForeignKey({
        columnNames: ['tag_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'tags',
        name: 'fk_tags_tools_',
        onDelete: 'CASCADE',
        onUpdate: 'SET NULL',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('tools_tags', 'fk_tools_tags_');

    await queryRunner.dropForeignKey('tools_tags', 'fk_tags_tools_');

    await queryRunner.dropTable('tools_tags');
  }

}
