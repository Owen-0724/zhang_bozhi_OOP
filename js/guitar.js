class Guitar{
  constructor(
    //Define paramaters
    brand,
    model,
    color,
    strings,
    pickupsNeck,
    pickupsBridge
) {
    //Define properties
    this.brand = brand;
    this.model = model;
    this.color = color;
    this.strings = strings;
    this.pickups = {
        neck: pickupsNeck,
        bridge: pickupsBridge
        }  
    }
    // Add methods like normal functions:
    strum() {
        let p = document.createElement("p");
        p.textContent = `${this.strings} strings are strumming on this ${this.brand} ${this.model}`;
        document.body.appendChild(p);
    }
}

class BaseGuitar extends Guitar {
    constructor(){
    super(
        "Fender",
        "Jazzmaster",
        "Black",
        4,
        "62 Precision Bass Pickup"

    )
    }
    SlapDaBass() {
        let p = document.createElement("p");
        p.textContent = `Slappin' ${this.strings} strings on this on this ${this.brand} ${this.model} bass`;
        document.body.appendChild(p);
    }
}



export default (Guitar, BaseGuitar);