import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Users } from './user.entity';

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
}
