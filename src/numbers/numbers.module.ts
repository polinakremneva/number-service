import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NumberEntity } from './entities/number.entity';
import { NumbersController } from './numbers.controller';
import { NumbersService } from './numbers.service';

@Module({
  imports: [TypeOrmModule.forFeature([NumberEntity])],
  controllers: [NumbersController],
  providers: [NumbersService],
})
export class NumbersModule {}
