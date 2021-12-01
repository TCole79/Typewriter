// Implement the logic to have each letter delay its appearance by 50ms (or so) longer than the previous letter. 

const sentence = ('Hello there from Tristan\n');

let interval = 1000;

for (const char of sentence) {

  setTimeout(() => {
    process.stdout.write(char);
    }, interval);

  interval += 90;

}



// setTimeout(() => {
//   // print the char here
  
// }, 1000) // <= 1s delay to make it noticeable. Can dial it down later.
