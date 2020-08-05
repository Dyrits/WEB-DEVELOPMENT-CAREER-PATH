const _ = {
  clamp(number, lowerBound, upperBound) {
    return Math.min(Math.max(number, lowerBound), upperBound);
  },

  inRange(number, endValue, startValue = 0) {
    if(startValue > endValue) {[endValue, startValue] = [startValue, endValue];}
    return (startValue <= number && number < endValue);
  },

  words(string) { return string.split(" ");},

  pad(string, length) {
    if (length <= string.length) { return string; }
    let totalPadLength = length - string.length;
    let startPadLength = Math.floor(totalPadLength / 2);
    let endPadLength = totalPadLength - startPadLength;
    return `${" ".repeat(startPadLength)}${string}${" ".repeat(endPadLength)}`;
  },

  has(object, key) { return !!object[key] },

  invert(object) { 
    return Object.entries(object).reduce((newObject, [key, value]) => {
      newObject[value] = key;
      return newObject;
    }, {})
  },

  findKey(object, predicate) { 
    for (let [key, value] of Object.entries(object)) {
      if (predicate(value)) { return key; }
    }
    return;
  },

  drop(array, number = 1) { return array.slice(number); },

  dropWhile(array, predicate) {
    let index = array.findIndex((element, index) => {
      if (!predicate(element, index, array)) { return index; }
    });
    return this.drop(array, index); 
  },

  chunk(array, size = 1) {
    let index = 0;
    return array.reduce(function (newArray, element) {
      if (!newArray[index]) { newArray[index] = []; }
      newArray[index].push(element);
      if (newArray[index].length === size) { index++ }
      return newArray;
    }, []);
  }
  
};

// Do not write or modify code below this line.
module.exports = _;
