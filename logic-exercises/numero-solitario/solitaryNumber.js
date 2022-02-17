const findSolitaryNumber = (array) => {
  for (let char of array) {
    if (array.indexOf(char) === array.lastIndexOf(char)) {
      return `O número solitário é ${char}`;
    }
  }
};

const solitaryNumber = findSolitaryNumber([4,1,2,1,2]);
console.log(solitaryNumber)