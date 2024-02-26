import {
  Column,
  Entity,
  JoinTable,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Users } from './user.entity';
import { Parking } from './parking.entity';

@Entity()
export class Cars {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  brand: string;

  @Column()
  name: string;

  @Column({ type: 'json', default: '[]' })
  images: string;

  @Column()
  isStart: boolean;

  @Column()
  isPaid: boolean;

  @Column()
  startDate: string;

  @ManyToOne(() => Users, (user) => user.cars)
  @JoinTable()
  user: Users;

  @ManyToOne(() => Parking, (parking) => parking.cars)
  @JoinTable()
  parking: Parking;
}
