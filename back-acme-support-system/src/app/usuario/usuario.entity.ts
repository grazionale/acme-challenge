import { Column, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity()
@Unique(["username"])
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column({ name: "last_name" })
  lastName: string;

  @Column()
  username: string;

  @Column()
  password: string;
}
