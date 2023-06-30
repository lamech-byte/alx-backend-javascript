// Airport class
export default class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  // toString method
  toString() {
    return `[object ${this._code}]`;
  }

  // Default string description
  [Symbol.toStringTag]() {
    return this._code;
  }
}
