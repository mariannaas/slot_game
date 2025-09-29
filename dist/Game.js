"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
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
exports.Game = void 0;
const PIXI = __importStar(require("pixi.js"));
const ServerResponse_1 = require("./api/ServerResponse");
const SlotReel_1 = require("./components/SlotReel");
const Button_1 = require("./components/Button");
class Game {
    constructor() {
        this.app = new PIXI.Application({
            width: 800,
            height: 600,
            backgroundColor: 0x1099bb,
        });
        document.body.appendChild(this.app.canvas);
        this.serverResponse = new ServerResponse_1.ServerResponse();
        this.slotReel = new SlotReel_1.SlotReel();
        this.slotReel.x = 200;
        this.slotReel.y = 200;
        this.app.stage.addChild(this.slotReel);
        const spinButton = new Button_1.Button("SPIN", 350, 500, () => this.onSpin());
        this.app.stage.addChild(spinButton);
    }
    onSpin() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.serverResponse.spin();
            console.log(result);
            this.slotReel.setResult(result.result);
            if (result.win) {
                const winText = new PIXI.Text("YOU WIN!", {
                    fontSize: 48,
                    dropShadow: {
                        alpha: 0.5, // 50% opacity shadow
                        angle: Math.PI / 6, // 30 degrees
                        blur: 4, // Soft shadow edge
                        color: '#000000', // Black shadow
                        distance: 6 // Shadow offset
                    }
                });
                winText.x = 300;
                winText.y = 300;
                this.app.stage.addChild(winText);
                setTimeout(() => {
                    this.app.stage.removeChild(winText);
                }, 1500);
            }
        });
    }
}
exports.Game = Game;
