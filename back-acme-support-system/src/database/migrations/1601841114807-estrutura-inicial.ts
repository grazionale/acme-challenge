import { MigrationInterface, QueryRunner } from "typeorm";

export class estruturaInicial1601841114807 implements MigrationInterface {
  name = "estruturaInicial1601841114807";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "plain" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "description" character varying NOT NULL, "price" numeric(10,2) NOT NULL, CONSTRAINT "PK_b9962c54c97aec2a64056ad7f43" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `CREATE TABLE "user" ("id" SERIAL NOT NULL, "firstName" character varying NOT NULL, "last_name" character varying NOT NULL, "username" character varying NOT NULL, "password" character varying NOT NULL, CONSTRAINT "UQ_78a916df40e02a9deb1c4b75edb" UNIQUE ("username"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "user"`);
    await queryRunner.query(`DROP TABLE "plain"`);
  }
}
