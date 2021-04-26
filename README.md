# CMTTHE04 Week 2

Pixel Aquarium Typescript

<br>
<br>
<br>

## Voorbereiding

- [Installeer Visual Studio Code en Typescript](https://github.com/HR-CMGT/Typescript#werkomgeving)
- Bekijk de bestanden van dit project
- Druk op CMD + SHIFT + B en kies voor `watch mode`
- Kijk of de `.js` files in de `docs/js` map zijn aangemaakt.
- Open `index.html` via localhost. Tip: gebruik [live-server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)

<br>
<br>
<br>

## Opdracht

- Open de oefening van week 1
- Verplaats de code die één Vis en één Bubble tekent naar de juiste plek in dit project
- maak in game.ts een nieuw vis aan
```
let fish : Fish = new Fish()
```
- De vis heeft een random kleur en positie
- De bubble heeft een random positie

<br>
<br>
<br>

## Event Listeners

Je kan binnen een class werken met `addEventListener`. Om de juiste functie aan te roepen gebuik je de arrow notatie: `() => this.doSomething()`

In dit voorbeeld zie je dat `div` een `property` (eigenschap) is van de `Car` class. Het type is `HTMLElement`. Dit type kan je altijd makkelijk vinden door met de muis over de variabele `this.div` te bewegen.

```typescript
class Car {
    
    div:HTMLElement

    constructor() {
        this.div = document.createElement("car")
        document.body.appendChild(this.div)
        this.div.addEventListener("click", () => this.drive())
    }

    drive() {
        console.log("VROOOM 🚗💨")
    }
}
```

<br>
<br>
<br>

## Opdracht

- Geef de vis een click handler die op zijn element de CSS class "dead" toevoegt. Dit kan je doen met `element.classList.add("dead")`
- Geef de bubble een click handler die het html element weghaalt. Dit kan je doen met `element.remove()`
- Kan je ook een "plop" geluidje afspelen als de bubble wordt verwijderd?
