const watchedTutorial = false;

const myPromise = new Promise((resolve, reject) => {
    if (watchedTutorial) {
        resolve('Tutorial completed successfully!');
    } else {
        reject('Tutorial not completed yet.');
    };
});

myPromise.then((message) => {
    console.log(message);
});

myPromise.catch((error) => {
    console.error(error);
});