const myAsyncFunction = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = 0; // if it become false then it will throw an error
      if (success) {
        resolve("Operation completed successfully");
      } else {
        reject("Operation failed");
      }
    }, 2000);
  });
};

myAsyncFunction()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => {
    console.log("mai to humesha chalunga");
  });
