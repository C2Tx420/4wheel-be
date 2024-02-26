import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import config from './config/config';
import { ParkingModule } from './parking/parking.module';
import { CarModule } from './cars/car.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config],
    }),
    UserModule,
    ParkingModule,
    CarModule,
  ],
})
export class AppModule {}
