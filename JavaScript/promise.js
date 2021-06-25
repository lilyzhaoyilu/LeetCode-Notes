const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(console.log('food'));
  }, 1000);
});
