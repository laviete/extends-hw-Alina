"use strict";

class Product {
  /**
   *
   * @param {string} name
   * @param {number} price
   * @param {string} currency
   * @param {number} quantity
   */
  constructor(name, price, currency, quantity) {
    this.name = name;
    this.price = price;
    this.currency = currency;
    this.quantity = quantity;
  }

  get name() {
    return this._name;
  }
  set name(name) {
    if (typeof name !== "string") {
      throw new TypeError("name must be a string");
    }
    if (name === "") {
      throw new RangeError("name not empty");
    }
    this._name = name;
  }

  get price() {
    return this._price;
  }
  set price(price) {
    if (typeof price !== "number") {
      throw new TypeError("price must be a number");
    }
    if (price < 0) {
      throw new RangeError("price must be positive");
    }
    this._price = price;
  }

  get currency() {
    return this._currency;
  }
  set currency(currency) {
    if (typeof currency !== "string") {
      throw new TypeError("currency must be a string");
    }
    if (currency === "") {
      throw new RangeError("currency not empty");
    }
    this._currency = currency;
  }

  get quantity() {
    return this._quantity;
  }
  set quantity(quantity) {
    if (!Number.isInteger(quantity)) {
      throw new TypeError("quantity must be an integer");
    }
    if (quantity < 0) {
      throw new RangeError("quantity must be positive");
    }
    this._quantity = quantity;
  }

  /**
   *
   * @returns {string}
   */
  getInformationProduct() {
    return `name: ${this.name}, price: ${this.price} ${this.currency}, quantity: ${this.quantity}`;
  }

  /**
   *
   * @param {number} value
   * @returns {string|error}
   */
  buyProduct(value) {
    if (!Number.isInteger(value)) {
      throw new TypeError("value must be a number");
    }
    if (value < 0) {
      throw new RangeError("value must be positive");
    }
    if (value > this.quantity) {
      throw new RangeError(
        "insufficient quantity of goods in stock. enter a lower value"
      );
    }
    this.quantity -= value;
    return `to pay: ${value * this.price} ${this.currency}`;
  }
}

class PhysicalProduct extends Product {
  /**
   *
   * @param {string} name
   * @param {number} price
   * @param {string} currency
   * @param {number} quantity
   * @param {number} weight
   */
  constructor(name, price, currency, quantity, weight) {
    super(name, price, currency, quantity);
    this.weight = weight;
  }
  get weight() {
    return this._weight;
  }
  set weight(weight) {
    if (typeof weight !== "number") {
      throw new TypeError("weight must be a number");
    }
    if (weight < 0) {
      throw new RangeError("weight must be positive");
    }
    this._weight = weight;
  }
  /**
   *
   * @returns {string}
   */
  getInformationProduct() {
    return `name of physical product: ${this.name}, price: ${this.price} ${this.currency}, quantity: ${this.quantity}, weight: ${this.weight}`;
  }
}

class VirtualProduct extends Product {
  /**
   *
   * @param {string} name
   * @param {number} price
   * @param {string} currency
   * @param {number} quantity
   * @param {number} memorySize
   */
  constructor(name, price, currency, quantity, memorySize) {
    super(name, price, currency, quantity);
    this.memorySize = memorySize;
  }
  get memorySize() {
    return this._memorySize;
  }
  set memorySize(memorySize) {
    if (typeof memorySize !== "number") {
      throw new TypeError("memorySize must be a number");
    }
    if (memorySize < 0) {
      throw new RangeError("memorySize must be positive");
    }
    this._memorySize = memorySize;
  }
  /**
   *
   * @returns {string}
   */
  getInformationProduct() {
    return `name of virtual product: ${this.name}, price: ${this.price} ${this.currency}, quantity: ${this.quantity}, memorySize: ${this.memorySize}`;
  }
}

try {
  const product = new Product("headphone", 100, "$", 50);
  console.log(product.getInformationProduct()); // name: headphone, price: 100 $, quantity: 50
  console.log(product.buyProduct(10)); // to pay: 1000 $
  console.log(product.quantity); // 40
  //console.log(product.buyProduct(100)); //RangeError: insufficient quantity of goods in stock. enter a lower value

  const physicalProduct = new PhysicalProduct("water", 2, "₴", 2000, 250);
  console.log(physicalProduct.getInformationProduct()); // name of physical product: water, price: 2 ₴, quantity: 1000, weight: 250
  console.log(physicalProduct.buyProduct(2)); // to pay: 4 ₴
  console.log(physicalProduct.quantity); // 1998
  console.log(physicalProduct.buyProduct(100)); // to pay: 200 ₴
  console.log(physicalProduct.quantity); // 1898

  const virtualProduct = new VirtualProduct("excel", 99, "€", 5000, 250);
  console.log(virtualProduct.getInformationProduct()); // name of virtual product: excel, price: 99 $, quantity: 5000, memorySize: 250
  console.log(virtualProduct.buyProduct(1)); // to pay: 99 €
  console.log(virtualProduct.quantity); // 4999
} catch (error) {
  console.log(error);
}
