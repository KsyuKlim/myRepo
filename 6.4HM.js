function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function resolveNumber() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = getRandomNumber(0, 10);
      if (randomNumber > 5) {
        resolve(`Resolved ${randomNumber}`);
      } else {
        reject(`Rejected ${randomNumber}`);
      }
    }, 3000);
  });
}

resolveNumber()
  .then((result) => {
    console.log(result); // Виведе "Resolved <число>" або "Rejected <число>"
  })
  .catch((error) => {
    console.error(error);
  });
