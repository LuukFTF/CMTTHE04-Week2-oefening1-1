"use strict";
var Bubble = (function () {
    function Bubble() {
        console.log("Blub... blub...");
        this.popBubble();
    }
    Bubble.prototype.popBubble = function () {
        console.log("Plop!");
    };
    return Bubble;
}());
var Fish = (function () {
    function Fish() {
        console.log("Fish was created!");
        this.killFish();
    }
    Fish.prototype.killFish = function () {
        console.log("Aargh!");
    };
    return Fish;
}());
var Game = (function () {
    function Game() {
        console.log("Game was created!");
    }
    return Game;
}());
window.addEventListener("load", function () { return new Game(); });
//# sourceMappingURL=main.js.map