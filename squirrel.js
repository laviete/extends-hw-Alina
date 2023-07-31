"use strict";

class Squirrel {
  /**
   *
   * @param {string} name
   * @param {string} color
   */
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }
  get name() {
    return this._name;
  }
  set name(name) {
    if (typeof name !== "string") {
      throw new TypeError("name must be string");
    }
    this._name = name;
  }
  get color() {
    return this._color;
  }
  set color(color) {
    if (typeof color !== "string") {
      throw new TypeError("color must be string");
    }
    this._color = color;
  }
  jump() {
    return `${this.name} jumping`;
  }
}

class SquirrelFly extends Squirrel {
  constructor(name, color, maxFlightDistance) {
    super(name, color);
    this.maxFlightDistance = maxFlightDistance;
  }
  get maxFlightDistance() {
    return this._maxFlightDistance;
  }
  set maxFlightDistance(maxFlightDistance) {
    if (typeof maxFlightDistance !== "number") {
      throw new TypeError("maxFlightDistance must be number");
    }
    this._maxFlightDistance = maxFlightDistance;
  }
  fly() {
    return `${this.name} flying ${this.maxFlightDistance} distance`;
  }
}

class SquirrelMagic extends SquirrelFly {
  constructor(name, color, maxFlightDistance, words) {
    super(name, color, maxFlightDistance);
    this.words = words;
  }
  get words() {
    return this._words;
  }
  set words(value) {
    if (!Array.isArray(value)) {
      throw new TypeError("words must be an array");
    }
    if (!value.every((word) => typeof word === "string")) {
      throw new TypeError("words must be strings");
    }
    this._words = value;
  }
  speak() {
    if (!this.words || this.words.length === 0) {
      console.log(`${this.name} does not know any words`);
      return;
    }
    this.words.forEach((word) => console.log(`${this.name} say: ${word}`));
  }
}

try {

  const squirrel = new Squirrel("Rob", "white");
  console.log(squirrel.name); // Rob
  console.log(squirrel.color); // white
  console.log(squirrel.jump()); // Rob jumping
  //const squirrel1 = new Squirrel("Rob", 100); //TypeError: color must be string
  
  const squirrelFly = new SquirrelFly("Spark", "gray", 200);
  console.log(squirrelFly.name); // Spark
  console.log(squirrelFly.color); // gray
  console.log(squirrelFly.maxFlightDistance); // 200
  console.log(squirrelFly.jump()); // Spark jumping
  console.log(squirrelFly.fly()); // Spark flying 200 distance
  //const squirrelFly1 = new SquirrelFly("Spark", "gray", 200);//TypeError: color must be string
  
  const squirrelMagic = new SquirrelMagic("Charlie", "brown", 300,[
    "Hello!",
    "I am squirrel",
    "I know many words!",
]);
  console.log(squirrelMagic.name); // Charlie
  console.log(squirrelMagic.color); // brown
  console.log(squirrelMagic.maxFlightDistance); // 300
  console.log(squirrelMagic.jump()); // Charlie jumping
  console.log(squirrelMagic.fly()); // Charlie flying 300 distance
  squirrelMagic.speak(); // Charlie say: Hello! // Charlie say: I am squirrel // Charlie say: I know many words!
  //const squirrelMagic1 = new SquirrelMagic("Charlie", "brown", 300,"Hello!", "I am squirrel","I know many words!",); //TypeError: words must be an array
  const squirrelMagic2 = new SquirrelMagic("Henry", "red", 300,[]);
  squirrelMagic2.speak(); // Henry does not know any words
} catch (error) {
  console.log(error);
}
