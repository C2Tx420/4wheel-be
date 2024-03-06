import { Module } from '@nestjs/common';
import { ParkingAdminController } from './parking-admin.controller';
import { ParkingService } from '../service/parking.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Parking } from 'lib/entities/parking.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Parking])],
  controllers: [ParkingAdminController],
  providers: [ParkingService],
})
export class ParkingAdminModule {}
