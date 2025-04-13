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
exports.NumbersController = void 0;
const common_1 = require("@nestjs/common");
const auth_guard_1 = require("../auth/guards/auth.guard");
const numbers_service_1 = require("./numbers.service");
const create_number_dto_1 = require("./dto/create-number.dto");
const number_param_dto_1 = require("./dto/number-param.dto");
let NumbersController = class NumbersController {
    numbersService;
    constructor(numbersService) {
        this.numbersService = numbersService;
    }
    async add(body) {
        const added = await this.numbersService.addNumber(body.number);
        return {
            message: 'Number added successfully',
            number: added.value,
        };
    }
    async delete(params) {
        const value = Number(params.number);
        const removed = await this.numbersService.deleteNumber(value);
        return {
            message: 'Number deleted successfully',
            number: removed.value,
        };
    }
    async check(params) {
        const value = Number(params.number);
        return this.numbersService.checkNumber(value);
    }
};
exports.NumbersController = NumbersController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_number_dto_1.CreateNumberDto]),
    __metadata("design:returntype", Promise)
], NumbersController.prototype, "add", null);
__decorate([
    (0, common_1.Delete)(':number'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [number_param_dto_1.NumberParamDto]),
    __metadata("design:returntype", Promise)
], NumbersController.prototype, "delete", null);
__decorate([
    (0, common_1.Get)(':number/check'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [number_param_dto_1.NumberParamDto]),
    __metadata("design:returntype", Promise)
], NumbersController.prototype, "check", null);
exports.NumbersController = NumbersController = __decorate([
    (0, common_1.Controller)('numbers'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __metadata("design:paramtypes", [numbers_service_1.NumbersService])
], NumbersController);
//# sourceMappingURL=numbers.controller.js.map