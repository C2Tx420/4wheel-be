import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import config from './config/config';
import { ParkingModule } from './parking/parking.module';
import { CarModule } from './cars/car.module';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config],
    }),
    TypeOrmModule.forRootAsync({
      useFactory: (configService: ConfigService) => ({
        autoLoadEntities: true,
        ...configService.get('db'),
        entities: [__dirname + '/../**/*.entity.{js,ts}'],
      }),
      inject: [ConfigService],
    }),
    UserModule,
    ParkingModule,
    CarModule,
  ],
})
export class AppModule {}
