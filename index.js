module.exports = class Password {
  constructor(length = 20, digits = 0, symbols = 0) {
    if (length < symbols + digits)
      throw new Error(
        "Configuration error: length needs to be >= digits + symbols"
      );

    this.length = length;
    this.digits = digits;
    this.symbols = symbols;

    this.generalChars = "abcdefghijklmnopqrstuvwxyz".split("");
    this.symbolChars = "@#&()§!{}><[]*/^%+-:;?=.$".split("");
  }

  toString() {
    return this.create();
  }

  get generalCount() {
    return this.length - this.symbols - this.digits;
  }

  _general() {
    const index = Math.floor(Math.random() * this.generalChars.length);
    const value = this.generalChars[index];

    return index < this.generalChars.length / 2 ? value.toUpperCase() : value;
  }

  _special() {
    const index = Math.floor(Math.random() * this.symbolChars.length);
    const value = this.symbolChars[index];
    return value;
  }

  _number() {
    const value = Math.floor(Math.random() * 10);
    return value;
  }

  _shuffle(array) {
    let m = array.length,
      t,
      i;
    while (m) {
      i = Math.floor(Math.random() * m--);
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }
    return array;
  }

  create() {
    let array = [];

    for (let i = 0; i < this.generalCount; i++) array.push(this._general());
    for (let i = 0; i < this.symbols; i++) array.push(this._special());
    for (let i = 0; i < this.digits; i++) array.push(this._number());

    let password = this._shuffle(array);
    password = password.join("");

    return password;
  }
};
