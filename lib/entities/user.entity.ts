import {
  Column,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Cars } from './car.entity';
@Entity()
export class Users {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  dateOfBirth: string;

  @Column()
  phoneNumber: number;

  @Column()
  cicNumber: number;

  @Column()
  cicImage: string;

  @OneToMany(() => Cars, (car) => car.user)
  cars: Cars[];
}
