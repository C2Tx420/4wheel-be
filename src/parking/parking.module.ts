import { Module } from '@nestjs/common';
import { ParkingAdminModule } from './admin/parking-admin.module';
import { ParkingWebModule } from './web/parking-web.module';
import { Parking } from 'lib/entities/parking.entity';

@Module({
  imports: [ParkingAdminModule, ParkingWebModule],
})
export class ParkingModule {}
