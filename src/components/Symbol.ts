import * as PIXI from "pixi.js";


export class Symbol extends PIXI.Container {
    constructor(symbol: string) {
        super();

        const graphic = new PIXI.Graphics();
        graphic.fill({ color: 0xffffff * Math.random() }).rect(0, 0, 100, 100);
 //test
        const txt = new PIXI.Text({
            text: symbol,
            style: {
                fontSize: 48,
                fill: 0x000000,
            },
        });
        txt.anchor.set(0.5);
        txt.x = 50;
        txt.y = 50;

        this.addChild(graphic, txt);
    }
}