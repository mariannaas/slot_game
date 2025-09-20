import * as PIXI from "pixi.js";
import {ServerResponse} from "./api/ServerResponse";
import {SlotReel} from "./components/SlotReel";
import {Button} from "./components/Button";

export class Game {
    private app: PIXI.Application;
    private serverResponse: ServerResponse;
    private slotReel: SlotReel;

    constructor() {
        this.app = new PIXI.Application(
            {
                width: 800,
                height: 600,
                backgroundColor: 0x1099bb,
            }
        );
        document.body.appendChild(this.app.canvas as HTMLCanvasElement);

        this.serverResponse = new ServerResponse();
        this.slotReel = new SlotReel();

        this.slotReel.x = 200;
        this.slotReel.y = 200;
        this.app.stage.addChild(this.slotReel);

        const spinButton = new Button("SPIN", 350, 500, () => this.onSpin());
        this.app.stage.addChild(spinButton);
    }

    private async onSpin() {
        const result = await this.serverResponse.spin();
        console.log(result);

        this.slotReel.setResult(result.result);

        if (result.win) {
            const winText = new PIXI.Text("YOU WIN!", {

                fontSize: 48,
                dropShadow: {
                    alpha: 0.5,         // 50% opacity shadow
                    angle: Math.PI / 6, // 30 degrees
                    blur: 4,            // Soft shadow edge
                    color: '#000000',   // Black shadow
                    distance: 6         // Shadow offset
                }
            });
            winText.x = 300;
            winText.y = 300;

            this.app.stage.addChild(winText);

            setTimeout(() => {
                this.app.stage.removeChild(winText);
            }, 1500)
        }
    }
}