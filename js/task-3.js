
class StringBuilder {
    #value; // Приватна властивість
  
    constructor(initialValue) {
      this.#value = initialValue;
    }
  
    getValue() {
      return this.#value;
    }
  
    padEnd(str) {
      this.#value += str;
    }
  
    padStart(str) {
      this.#value = str + this.#value;
    }
  
    padBoth(str) {
      this.#value = str + this.#value + str;
    }
  }
  
  // Код для перевірки (нічого не змінювати)
  const builder = new StringBuilder(".");
  console.log(builder.getValue()); // "."
  
  builder.padStart("^");
  console.log(builder.getValue()); // "^."
  
  builder.padEnd("^");
  console.log(builder.getValue()); // "^.^"
  
  builder.padBoth("=");
  console.log(builder.getValue()); // "=^.^="
  
  