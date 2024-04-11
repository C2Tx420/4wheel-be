import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UserService } from '../service/user.service';

@Controller('/user')
export class userAdminController {
  constructor(private userService: UserService) { }

  @Post('/create')
  async createUser(@Body() createUserData: any) {
    return 'aaa';
  }

  @Get()
  async getUserList() {
    try {
      return await this.userService.getList();
    } catch (e) {
      throw new HttpException(e?.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get(':id')
  async getUserDetail(@Param('id') id: string) {
    try {
      return 'user detail';
    } catch (e) {
      throw new HttpException(e?.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Put(':id')
  async updateUserDetail(@Param('id') id: string, @Body() updateUserData: any) {
    try {
      return 'update user detail';
    } catch (e) {
      throw new HttpException(e?.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Delete(':id')
  async removeUser(@Param('id') id: string) {
    try {
      return 'removed user';
    } catch (e) {
      throw new HttpException(e?.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
