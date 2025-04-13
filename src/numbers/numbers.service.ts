import {
  Injectable,
  ConflictException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NumberEntity } from './entities/number.entity';

@Injectable()
export class NumbersService {
  constructor(
    @InjectRepository(NumberEntity)
    private readonly numberRepo: Repository<NumberEntity>,
  ) {}

  async addNumber(value: number): Promise<NumberEntity> {
    const exists = await this.numberRepo.findOneBy({ value });
    if (exists) {
      throw new ConflictException('Number already exists');
    }
    const number = this.numberRepo.create({ value });
    return this.numberRepo.save(number);
  }

  async deleteNumber(value: number): Promise<NumberEntity> {
    const number = await this.numberRepo.findOneBy({ value });
    if (!number) {
      throw new NotFoundException('Number not found');
    }
    await this.numberRepo.remove(number);
    return number;
  }

  async checkNumber(
    value: number,
  ): Promise<{ exists: boolean; addedAt?: string }> {
    const number = await this.numberRepo.findOneBy({ value });
    if (!number) {
      return { exists: false };
    }
    return {
      exists: true,
      addedAt: number.createdAt.toISOString(),
    };
  }
}
