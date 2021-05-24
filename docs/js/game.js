import { Bubble } from "./bubble.js";
import { Fish } from "./fish.js";
class Game {
    constructor() {
        this.plopSound = new Audio('./sound/plop.mp3');
        this.bruhSound = new Audio('./sound/bruh.mp3');
        this.leaveSound = new Audio('./sound/leave.mp3');
        this.fishAmount = Math.floor(Math.random() * 10);
        this.bubbleAmount = Math.floor(Math.random() * 10);
        console.log("Game was created!");
        this.spawn(10);
    }
    gameLoop() {
        requestAnimationFrame(() => this.gameLoop());
    }
    spawn(x) {
        for (let i = 0; i < x * this.fishAmount; i++) {
            this.fish = new Fish(this);
        }
        for (let i = 0; i < x * this.bubbleAmount; i++) {
            this.bubble = new Bubble(this);
        }
    }
    randomPosX() {
        return Math.floor(Math.random() * window.innerWidth);
    }
    randomPosY() {
        return Math.floor(Math.random() * window.innerHeight);
    }
    randomHue() {
        return Math.floor(Math.random() * 360);
    }
}
new Game();
//# sourceMappingURL=game.js.map