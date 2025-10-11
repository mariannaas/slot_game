import * as PIXI from "pixi.js";
import { Symbol } from "./Symbol";

export class SlotReel extends PIXI.Container {
    private symbols: Symbol[] = [];

    constructor() {
        super();
        this.createInitialSymbols();
    }

    public setResult(result: string[]) {
        // Clear old symbols
        this.removeChildren();
        this.symbols = [];

        // Create new ones based on backend result
        result.forEach((s, i) => {
            const symbol = new Symbol(s);
            symbol.x = i * 120;
            symbol.y = 0;
            this.addChild(symbol);
            this.symbols.push(symbol);
        });
    }

    private createInitialSymbols() {
        // Create 3 random symbols on start
        const initialSymbols = ["0", "1", "2", "3", "4"];
        for (let i = 0; i < 3; i++) {
            const randomSymbol = initialSymbols[Math.floor(Math.random() * initialSymbols.length)];
            const symbol = new Symbol(randomSymbol);

            symbol.x = i * 120; // horizontal spacing
            symbol.y = 0;
            this.addChild(symbol);
            this.symbols.push(symbol);
        }
    }
}