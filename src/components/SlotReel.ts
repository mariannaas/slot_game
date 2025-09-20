import * as PIXI from "pixi.js";
import { Symbol } from "./Symbol";

export class SlotReel extends PIXI.Container {
    private symbols: Symbol[] = [];

    constructor() {
        super();
    }

    setResult(results: string[]) {
        this.removeChildren();
        this.symbols = results.map((s, i) => {
            const sym = new Symbol(s);
            sym.x = i * 120;
            this.addChild(sym);
            return sym;
        });
    }
}