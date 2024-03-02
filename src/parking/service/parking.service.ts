import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Parking } from 'lib/entities/parking.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ParkingSerrvice {
  constructor(
    @InjectRepository(Parking)
    private parkingRepository: Repository<Parking>,
  ) {}
  async getList() {
    return await this.parkingRepository.find();
  }

  async getParkingDetail(id: number) {
    try {
      return await this.parkingRepository.findBy({ id });
    } catch (e) {
      throw new Error(e);
    }
  }

  async editParking(id: number, updateData: any) {
    try {
      this.parkingRepository.save({
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

  async addParking(carData: Parking) {
    try {
      await this.parkingRepository.create(carData);
      return {
        message: 'create car success',
      };
    } catch (e) {
      throw new Error(e);
    }
  }

  async removeParking(id: number) {
    try {
      await this.parkingRepository.delete({ id });
      return {
        message: 'remove car success',
      };
    } catch (e) {
      throw new Error(e);
    }
  }
}
