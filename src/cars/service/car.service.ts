import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cars } from 'lib/entities/car.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CarService {
  constructor(
    @InjectRepository(Cars)
    private carRepository: Repository<Cars>,
  ) {}

  async getCarList() {
    try {
      return await this.carRepository.find();
    } catch (e) {
      throw new Error(e);
    }
  }

  async getCarDetail(id: number) {
    try {
      return await this.carRepository.findBy({ id });
    } catch (e) {
      throw new Error(e);
    }
  }

  async addCar(carData: Cars) {
    try {
      await this.carRepository.create(carData);
      return {
        message: 'create car success',
      };
    } catch (e) {
      throw new Error(e);
    }
  }

  async editCar(id: number, updateData: any) {
    try {
      await this.carRepository.save({
        id,
        ...updateData,
      });
      return {
        message: 'create car success',
      };
    } catch (e) {
      throw new Error(e);
    }
  }

  async removeCar(carId: number) {
    try {
      await this.carRepository.delete({ id: carId });
      return {
        message: 'remove car success',
      };
    } catch (e) {
      throw new Error(e);
    }
  }
}
