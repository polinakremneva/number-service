import { NumbersService } from './numbers.service';
import { CreateNumberDto } from './dto/create-number.dto';
import { NumberParamDto } from './dto/number-param.dto';
export declare class NumbersController {
    private readonly numbersService;
    constructor(numbersService: NumbersService);
    add(body: CreateNumberDto): Promise<{
        message: string;
        number: number;
    }>;
    delete(params: NumberParamDto): Promise<{
        message: string;
        number: number;
    }>;
    check(params: NumberParamDto): Promise<{
        exists: boolean;
        addedAt?: string;
    }>;
}
