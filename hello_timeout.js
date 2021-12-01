/* Challenge #1
First let's start with a simple exercise.
Have our file print out these three words 4311o th3r3 w0r1d three seconds after the file is run. */

function helloTimeout() {
  console.log("4311o th3r3 w0r1d");
}
setTimeout(helloTimeout, 3000);


// this code for arrow function version:
setTimeout(() => console.log("4311o"), 1000);
setTimeout(() => console.log("th3r3"), 2000);
setTimeout(() => console.log("w0r1d"), 3000);


/* Challenge #2
Next, let's make things more interesting...
Instead of printing the entire sentence together, have our code print out each of the three words one at a time, 1 second apart. */


setTimeout(() => {
  console.log('4311o');
    setTimeout(() => {
      console.log('th3r3');
        setTimeout(() => {
          console.log('w0rld');
    }, 1000)
  }, 2000)
}, 3000);