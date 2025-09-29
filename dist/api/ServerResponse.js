"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerResponse = void 0;
class ServerResponse {
    constructor(baseURl = "http://localhost:3000") {
        this.baseURL = baseURl;
    }
    spin() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield fetch(`${this.baseURL}/spin`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({}),
            });
            return result.json();
        });
    }
    getBalance() {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield fetch(`${this.baseURL}/balance`);
            return res.json();
        });
    }
}
exports.ServerResponse = ServerResponse;
