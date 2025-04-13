"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumbersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const number_entity_1 = require("./entities/number.entity");
let NumbersService = class NumbersService {
    numberRepo;
    constructor(numberRepo) {
        this.numberRepo = numberRepo;
    }
    async addNumber(value) {
        const exists = await this.numberRepo.findOneBy({ value });
        if (exists) {
            throw new common_1.ConflictException('Number already exists');
        }
        const number = this.numberRepo.create({ value });
        return this.numberRepo.save(number);
    }
    async deleteNumber(value) {
        const number = await this.numberRepo.findOneBy({ value });
        if (!number) {
            throw new common_1.NotFoundException('Number not found');
        }
        await this.numberRepo.remove(number);
        return number;
    }
    async checkNumber(value) {
        const number = await this.numberRepo.findOneBy({ value });
        if (!number) {
            return { exists: false };
        }
        return {
            exists: true,
            addedAt: number.createdAt.toISOString(),
        };
    }
};
exports.NumbersService = NumbersService;
exports.NumbersService = NumbersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(number_entity_1.NumberEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], NumbersService);
//# sourceMappingURL=numbers.service.js.map