import { IsNumberString } from 'class-validator';

export class NumberParamDto {
  @IsNumberString()
  number: string;
}
