module.exports = class Password {

  constructor(length, symbols, digits) {

    if (length < symbols + digits)
      throw new Error("Configuration error: length needs to be >= digits + symbols")

    this.length = length
    this.symbols = symbols
    this.digits = digits

    this.generalChars = [
      "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n",
      "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
    ]

    this.symbolChars = [
      "@", "#", "&", "(", ")", "§", "!", "{", "}", ">", "<", "[", "]",
      "*", "/", "^", "%", "+", "-", ":", ";", "?", "=", ".", "$"
    ]
  }

  toString() {
    return this.generate()
  }

  get generalCount() {
    return this.length - this.symbols - this.digits
  }

  _general() {
    const index = Math.floor(Math.random() * this.generalChars.length)
    const value = this.generalChars[index]

    return index < (this.generalChars.length / 2)
      ? value.toUpperCase()
      : value
  }

  _special() {
    const index = Math.floor(Math.random() * this.symbolChars.length)
    const value = this.symbolChars[index]
    return value
  }

  _number() {
    const value = Math.floor(Math.random() * 10)
    return value
  }

  shuffle(array) {
    let m = array.length, t, i
    while (m) {
      i = Math.floor(Math.random() * m--)
      t = array[m]
      array[m] = array[i]
      array[i] = t
    }
    return array
  }

  generate() {

    let array = []

    for (let i=0; i<this.generalCount; i++) array.push(this._general())
    for (let i=0; i<this.symbols; i++) array.push(this._special())
    for (let i=0; i<this.digits; i++) array.push(this._number())

    let password = this.shuffle(array)
    password = password.join("")

    return password
  }

}
