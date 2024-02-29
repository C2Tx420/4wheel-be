import { Module } from '@nestjs/common';
import { ParkingWebController } from './parking-web.controller';

@Module({
  imports: [],
  controllers: [ParkingWebController],
  providers: [],
})
export class ParkingWebModule {}
