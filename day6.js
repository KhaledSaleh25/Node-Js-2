// create a function that resolves after 1 second
function delayValue(value, ms) { 
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(value);
        }, ms);
    });

};

// create a function that rejects after 1 second
function delayFail(value, ms) {
    return new Promise(( reject) => {
        setTimeout(() => {
            reject(value);
        }, ms);
    });
};

// Task 2 — promisifyQuestion(rl, question)
// Wrap readline.question into a Promise that resolves with the
// user's trimmed answer, or rejects if something goes wrong.
// (No async/await; use new Promise + rl.question)
function promisifyQuestion(rl, question) {
    return new Promise((resolve, reject) => {
        rl.question(question, (answer) => {
            if (answer) {
                resolve(answer.trim());
            } else {
                reject(new Error("No answer provided"));
            }
        });

    });
};

delayValue("hello", 1000)
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.error(error);
    });
   delayFail("error", 1000)
   .then((result) => {
       console.log(result);
   })
   .catch((error) => {
       console.error(error);
   });

   const readline=require('node:readline').createInterface({
       input: process.stdin,
       output: process.stdout
   });
   promisifyQuestion(readline, "What is your name? ")
       .then((answer) => {
           console.log(answer);
       })
       .catch((error) => {
           console.error(error);
       });
