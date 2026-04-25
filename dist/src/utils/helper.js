"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createToken = exports.hashThis = void 0;
const argon2_1 = __importDefault(require("argon2"));
const crypto_1 = require("crypto");
const hashThis = async (value) => await argon2_1.default.hash(String(value));
exports.hashThis = hashThis;
const createToken = (size = 64) => {
    return (0, crypto_1.randomBytes)(size).toString("hex");
};
exports.createToken = createToken;
//# sourceMappingURL=helper.js.map