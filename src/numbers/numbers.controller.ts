import {
  Controller,
  Post,
  Delete,
  Param,
  Body,
  Get,
  UseGuards,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { AuthGuard } from '../auth/guards/auth.guard';
import { NumbersService } from './numbers.service';
import { CreateNumberDto } from './dto/create-number.dto';
import { NumberParamDto } from './dto/number-param.dto';

@Controller('numbers')
@UseGuards(AuthGuard)
export class NumbersController {
  constructor(private readonly numbersService: NumbersService) {}

  @Post()
  async add(@Body() body: CreateNumberDto) {
    const added = await this.numbersService.addNumber(body.number);
    return {
      message: 'Number added successfully',
      number: added.value,
    };
  }

  @Delete(':number')
  @HttpCode(HttpStatus.OK)
  async delete(@Param() params: NumberParamDto) {
    const value = Number(params.number);
    const removed = await this.numbersService.deleteNumber(value);
    return {
      message: 'Number deleted successfully',
      number: removed.value,
    };
  }

  @Get(':number/check')
  async check(@Param() params: NumberParamDto) {
    const value = Number(params.number);
    return this.numbersService.checkNumber(value);
  }
}
