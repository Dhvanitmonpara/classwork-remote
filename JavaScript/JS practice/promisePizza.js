const getCheeze = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (true) {
        resolve("🧀");
      } else {
        reject(err);
      }
    }, 2000);
  });
};

const makeDough = (cheese) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (true) {
        resolve(cheese + "🫓");
      } else {
        reject(err);
      }
    }, 2000);
  });
};

const bakePizza = (dough) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (true) {
        resolve(dough + "🍕");
      } else {
        reject(err);
      }
    }, 2000);
  });
};

// Using .then and .catch

// const pizzaOrder = () => {
//   getCheeze()
//     .then((cheese) => {
//       console.log("Here's the chhese", cheese);
//       return makeDough(cheese);
//     })
//     .then((dough) => {
//       console.log("Here's the dough", dough);
//       return bakePizza(dough);
//     })
//     .then((pizza) => {
//       console.log("Here's the pizza", pizza);
//     })
//     .catch((error) => {
//       console.log("An error occured", error);
//     })
//     .finally(() => {
//       console.log("Process done!");
//     });
// };

// Using async/await and try/catch

async function pizzaOrder() {
  try {
    let cheese = await getCheeze();
    console.log("Here's the chhese", cheese);

    let dough = await makeDough();
    console.log("Here's the dough", dough);

    let pizza = await bakePizza();
    console.log("Here's thepizza", pizza);
  } catch (err) {
    console.log("An error occured", err);
  }

  console.log("Process done");
}

pizzaOrder();
