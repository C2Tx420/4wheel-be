import { Module } from '@nestjs/common';
import { CarAdminController } from './car-admin.controller';
import { CarService } from '../service/car.service';

@Module({
  imports: [],
  controllers: [CarAdminController],
  providers: [CarService],
})
export class CarAdminModule {}
