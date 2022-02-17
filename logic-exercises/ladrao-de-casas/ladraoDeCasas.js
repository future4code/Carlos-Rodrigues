const stealHouse = (moneyInHouses) => {
  let oddHouses = 0;
  let evenHouses = 0;
  let jackpot = 0;

  for (let i = 0; i < moneyInHouses.length; i++) {
    if (i % 2 === 0) {
      evenHouses += moneyInHouses[i];
    } else {
      oddHouses += moneyInHouses[i];
    }
  }

  if (oddHouses > evenHouses) {
    jackpot = oddHouses;
    return jackpot;
  } else if (evenHouses > oddHouses) {
    jackpot = evenHouses;
    return jackpot;
  } else if (evenHouses === oddHouses) {
    jackpot = evenHouses;
    return `O dinheiro roubado será o mesmo: ${jackpot} `;
  }
};

const steal = stealHouse([2,2,2,2,2,2,2,2]);
console.log(steal);
