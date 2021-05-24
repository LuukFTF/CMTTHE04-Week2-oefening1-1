export class Fish {
    // Parameters

    // Fields
    private element : HTMLElement
    private gameInstance : Game

    private posX : number
    private posY : number

    private hue : number
 
    // Properties

    // Constructor
    constructor(gameInstance : Game) {
        this.gameInstance = gameInstance

        this.element = document.createElement("fish")

        this.element.addEventListener("click", this.clickHandler)

        this.posY = gameInstance.randomPosY()
        this.posX = gameInstance.randomPosX()
        this.hue = gameInstance.randomHue()

        let game = document.getElementsByTagName("game")[0]
        game.appendChild(this.element)

        this.element.style.transform = `translate(${this.posX}px, ${this.posY}px)`
        this.element.style.filter = `hue-rotate(${this.hue}deg)`

        console.log("fish created", this.posX, this.posY, this.hue)
    }

    // Functions

    spawn() {

    }

    kill(e) {
        e.target.classList.add("dead")
        this.gameInstance.leaveSound.play()
    }

    clickHandler(e : any){
        this.kill(e)
    }

}