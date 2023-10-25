
// 37.	Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

// Define an object mapping t-shirt sizes to messages



// Define a Map object mapping t-shirt sizes to messages
const tShirtMessages = new Map([
  ["large", "i love python"],
  ["medium", "i love javascript"],
  ["small", "i love next.js"],
]);

// Iterate over the Map and generate the output
for (const [size, message] of tShirtMessages) {
  console.log(`${size} t-shirt shows ${message}`);
}



