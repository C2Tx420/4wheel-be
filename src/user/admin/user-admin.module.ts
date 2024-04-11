import { Module } from '@nestjs/common';
import { userAdminController } from './user-admin.controller';
import { UserService } from '../service/user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from 'lib/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Users])],
  controllers: [userAdminController],
  providers: [UserService],
})
export class UserAdminModule {}
