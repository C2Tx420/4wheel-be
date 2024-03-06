import { Module } from '@nestjs/common';
import { CarAdminController } from './car-admin.controller';
import { CarService } from '../service/car.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cars } from 'lib/entities/car.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Cars])],
  controllers: [CarAdminController],
  providers: [CarService],
})
export class CarAdminModule {}
