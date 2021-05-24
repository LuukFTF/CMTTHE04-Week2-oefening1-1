export class Bubble {
    // Parameters

    // Fields
    private element : HTMLElement
    private gameInstance : Game

    private posX : number
    private posY : number
 
    // Properties

    // Constructor
    constructor(gameInstance : Game) {
        this.gameInstance = gameInstance

        this.element = document.createElement("bubble")

        this.element.addEventListener("click", this.clickHandler)

        this.posY = gameInstance.randomPosY()
        this.posX = gameInstance.randomPosX()

        let game = document.getElementsByTagName("game")[0]
        game.appendChild(this.element)

        this.element.style.transform = `translate(${this.posX}px, ${this.posY}px)`

        console.log("bubble created", this.posX, this.posY)
    }

        // Functions

        spawn() {

        }
    
        kill(e : any) {
            e.target.remove()
            this.gameInstance.bruhSound.play()
        }
    
        clickHandler(e : any){
            this.kill(e)
        }
}