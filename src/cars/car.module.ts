import { Module } from '@nestjs/common';
import { CarAdminModule } from './admin/car-admin.module';

@Module({
  imports: [CarAdminModule],
})
export class CarModule {}
