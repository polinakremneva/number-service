"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseConfig = void 0;
const number_entity_1 = require("../numbers/entities/number.entity");
exports.databaseConfig = {
    type: 'sqlite',
    database: 'numbers.db',
    entities: [number_entity_1.NumberEntity],
    synchronize: true,
};
//# sourceMappingURL=database.config.js.map