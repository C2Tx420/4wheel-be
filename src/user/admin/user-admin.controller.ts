import { Controller, Post } from '@nestjs/common';

@Controller('/user')
export class userAdminController {
  @Post('/create')
  async createUser() {
    return 'aaa';
  }
}
