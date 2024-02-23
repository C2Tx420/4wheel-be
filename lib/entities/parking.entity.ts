import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Parking {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  address: string;
}
