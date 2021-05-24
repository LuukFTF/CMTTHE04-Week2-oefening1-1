export class Bubble {
    constructor(gameInstance) {
        this.gameInstance = gameInstance;
        this.element = document.createElement("bubble");
        this.element.addEventListener("click", this.clickHandler);
        this.posY = gameInstance.randomPosY();
        this.posX = gameInstance.randomPosX();
        let game = document.getElementsByTagName("game")[0];
        game.appendChild(this.element);
        this.element.style.transform = `translate(${this.posX}px, ${this.posY}px)`;
        console.log("bubble created", this.posX, this.posY);
    }
    spawn() {
    }
    kill(e) {
        e.target.remove();
        this.gameInstance.bruhSound.play();
    }
    clickHandler(e) {
        this.kill(e);
    }
}
//# sourceMappingURL=bubble.js.map