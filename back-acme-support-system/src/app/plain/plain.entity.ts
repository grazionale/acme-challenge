import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Plain {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;

  @Column("decimal", { precision: 10, scale: 2 })
  price: number;
}
