import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Cars } from './car.entity';

@Entity()
export class Parking {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  address: string;

  @OneToMany(() => Cars, (car) => car.parking)
  cars: Cars;
}
