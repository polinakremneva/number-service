import { Repository } from 'typeorm';
import { NumberEntity } from './entities/number.entity';
export declare class NumbersService {
    private readonly numberRepo;
    constructor(numberRepo: Repository<NumberEntity>);
    addNumber(value: number): Promise<NumberEntity>;
    deleteNumber(value: number): Promise<NumberEntity>;
    checkNumber(value: number): Promise<{
        exists: boolean;
        addedAt?: string;
    }>;
}
