"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PHONE_REGEX = exports.PASSWORD_REGEX = exports.JWT_REGEX = void 0;
exports.JWT_REGEX = /^[A-Za-z0-9_-]+\.[A-Za-z0-9_-]+\.[A-Za-z0-9_-]+$/;
exports.PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#^()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/;
exports.PHONE_REGEX = /^\+[1-9]\d{7,14}$/;
//# sourceMappingURL=regex.js.map