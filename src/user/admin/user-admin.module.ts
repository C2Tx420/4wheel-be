import { Module } from '@nestjs/common';
import { userAdminController } from './user-admin.controller';

@Module({
  imports: [],
  controllers: [userAdminController],
  providers: [],
})
export class UserAdminModule {}
