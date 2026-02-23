"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRefreshToken = exports.hashThis = void 0;
const argon2_1 = __importDefault(require("argon2"));
const crypto_1 = require("crypto");
const hashThis = async (value) => await argon2_1.default.hash(value);
exports.hashThis = hashThis;
const createRefreshToken = () => {
    return (0, crypto_1.randomBytes)(64).toString("hex");
};
exports.createRefreshToken = createRefreshToken;
//# sourceMappingURL=helper.js.map