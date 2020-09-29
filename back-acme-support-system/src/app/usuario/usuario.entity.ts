import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ name: "last_name" })
  lastName: string;

  @Column()
  username: string;

  @Column()
  password: string;
}
