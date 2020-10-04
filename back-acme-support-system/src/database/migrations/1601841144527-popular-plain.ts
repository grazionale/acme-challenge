import { MigrationInterface, QueryRunner } from "typeorm";

export class popularPlain1601841144527 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager
      .createQueryBuilder()
      .insert()
      .into("plain")
      .values([
        {
          title: "Plano Básico",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc facilisis tortor id diam viverra, non lacinia risus hendrerit. Vestibulum pellentesque, metus non ultricies vehicula, odio felis fermentum nulla, sed tempor nulla enim non sapien. Donec gravida ut sapien sit amet tincidunt. Suspendisse potenti. ",
          price: 29.9,
        },
        {
          title: "Plano Super",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc facilisis tortor id diam viverra, non lacinia risus hendrerit. Vestibulum pellentesque, metus non ultricies vehicula, odio felis fermentum nulla, sed tempor nulla enim non sapien. Donec gravida ut sapien sit amet tincidunt. Suspendisse potenti. ",
          price: 39.9,
        },
        {
          title: "Plano Mega",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc facilisis tortor id diam viverra, non lacinia risus hendrerit. Vestibulum pellentesque, metus non ultricies vehicula, odio felis fermentum nulla, sed tempor nulla enim non sapien. Donec gravida ut sapien sit amet tincidunt. Suspendisse potenti. ",
          price: 49.9,
        },
      ])
      .execute();
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.query(`DELETE FROM PLAIN`);
  }
}
