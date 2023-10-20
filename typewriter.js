let sentence = "hello there from lighthouse labs";

let delay = 0;
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, delay)
  delay += 50;
};
setTimeout(() => {
  console.log("");
}, delay + 50);


/*Using FOR EACH:

sentence = sentence.split("");
sentence.forEach((word, i) => {
  setTimeout(() => {
    process.stdout.write(word);
  }, 50 * i);
});
setTimeout(() => {
  console.log("");
}, 2000);

*/