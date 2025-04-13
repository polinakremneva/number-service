import { Test, TestingModule } from '@nestjs/testing';
import { NumbersController } from './numbers.controller';
import { NumbersService } from './numbers.service';
import { NumberEntity } from './entities/number.entity';

describe('AppController', () => {
  let numbersController: NumbersController;
  let numbersService: NumbersService;

  const mockService = {
    addNumber: jest.fn(
      (value: number): NumberEntity => ({
        id: 1,
        value,
        createdAt: new Date(),
      }),
    ),
    checkNumber: jest.fn((value: number) => ({
      exists: true,
      addedAt: new Date().toISOString(),
    })),
    deleteNumber: jest.fn(
      (value: number): NumberEntity => ({
        id: 1,
        value,
        createdAt: new Date(),
      }),
    ),
  };

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      controllers: [NumbersController],
      providers: [
        {
          provide: NumbersService,
          useValue: mockService,
        },
      ],
    }).compile();

    numbersController = moduleRef.get<NumbersController>(NumbersController);
    numbersService = moduleRef.get<NumbersService>(NumbersService);
  });

  it('should add a number', async () => {
    const result = await numbersController.add({ number: 42 });
    expect(result).toEqual({
      message: 'Number added successfully',
      number: 42,
    });
    expect(mockService.addNumber).toHaveBeenCalledWith(42);
  });

  it('should check a number', async () => {
    const result = await numbersController.check({ number: '42' });
    expect(result.exists).toBe(true);
  });

  it('should delete a number', async () => {
    const result = await numbersController.delete({ number: '42' });
    expect(result).toHaveProperty('message', 'Number deleted successfully');
    expect(result).toHaveProperty('number', 42);
  });
});
