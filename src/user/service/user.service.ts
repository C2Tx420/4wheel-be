import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from 'lib/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(Users)
    private userRepository: Repository<Users>,
  ) {}
  async addUser(user: Users) {
    try {
      await this.userRepository.create(user);
      return {
        message: 'created user success',
      };
    } catch (e) {
      throw new Error(e);
    }
  }

  async getList() {
    try {
      return this.userRepository.find();
    } catch (e) {
      throw new Error(e);
    }
  }

  async getDetail(id: string) {
    try {
      return await this.userRepository.findBy({ id });
    } catch (e) {
      throw new Error(e);
    }
  }

  async removeUser(id: string) {
    try {
      await this.userRepository.delete({ id });
      return {
        message: 'deleted user',
      };
    } catch (e) {
      throw new Error(e);
    }
  }

  async updateUser(id: string, updateData: any) {
    try {
      await this.userRepository.save({ id, ...updateData });
      return {
        message: 'updated user',
      };
    } catch (e) {
      throw new Error(e);
    }
  }
}
