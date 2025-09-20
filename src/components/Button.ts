import * as PIXI from "pixi.js";

export class Button extends PIXI.Text {
    constructor(name: string, x: number, y: number, onClick: () => void) {
        super({
            text: name,
            style: {
                fontSize: 32,
                fill: 0x4a4a4a
            }
        });

        this.interactive = true;
        this.x = x;
        this.y = y;

        this.on("pointerdown", onClick);
    }
}