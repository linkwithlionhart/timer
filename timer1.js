// Process the command line arguments, skipping the first two elements in the string array
const CLargs = process.argv.slice(2);

// Using 'method chaining' on the command line arguments variable
// Using arrow functions for brevity
CLargs 
  // Convert the string command line arguments to numbers
  .map(Number)
  // Filter out any non-numbers or negative numbers
  .filter(num => !isNaN(num) && num >= 0)
  // Sorting the numbers in ascending order
  .sort((a,b) => a - b) 
  // For each number, set a timeout to beep after the number of seconds
  .forEach((num, i) => {
    setTimeout(() => {
      process.stdout.write('\x07');
      console.log(`Beep at ${num} second${num === 1 ? '' : 's'}`); // Using ternary operator to apply second or seconds depending if more than 1
    }, num * 1000);
  });
