import { Module } from '@nestjs/common';
import { ParkingAdminController } from './parking-admin.controller';
import { ParkingSerrvice } from '../service/parking.service';

@Module({
  imports: [],
  controllers: [ParkingAdminController],
  providers: [ParkingSerrvice],
})
export class ParkingAdminModule {}
