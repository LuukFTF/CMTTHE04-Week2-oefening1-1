import { Bubble } from "./bubble.js";
import { Fish } from "./fish.js";


class Game {
    // Parameters
    public plopSound = new Audio('./sound/plop.mp3')
    public bruhSound = new Audio('./sound/bruh.mp3')
    public leaveSound = new Audio('./sound/leave.mp3')
    public fishAmount = Math.floor(Math.random() * 10);
    public bubbleAmount = Math.floor(Math.random() * 10); 

    // Fields 

    // Properties

    // Constructor
    constructor() {
        console.log("Game was created!")

        this.spawn(10)
    }

    // Functions

    // gameLoop
    private gameLoop() : void {

        requestAnimationFrame(() => this.gameLoop()) 
    }

    spawn(x : number) {
        for (let i = 0; i < x * this.fishAmount; i++) {
            this.fish = new Fish(this)
        }
        
        for (let i = 0; i < x * this.bubbleAmount; i++) {
            this.bubble = new Bubble(this)
        }    
    }

    randomPosX(){
        return Math.floor(Math.random() * window.innerWidth);
    }
    
    randomPosY(){
        return Math.floor(Math.random() * window.innerHeight);
    }
    
    randomHue(){
        return Math.floor(Math.random() * 360);
    }
} 

new Game()