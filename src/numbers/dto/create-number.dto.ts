import { IsNumber } from 'class-validator';

export class CreateNumberDto {
  @IsNumber()
  number: number;
}
