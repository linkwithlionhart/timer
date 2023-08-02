// Process command line arguments, skipping the first two elements in the string array
const CLargs = process.argv.slice(2);

CLargs 
  // Convert string numbers to numbers
  .map(Number)
  // Filter out any non-numbers or negative numbers
  .filter(num => !isNaN(num) && num >= 0)
  // Sort the numbers in ascending order
  .sort((a,b) => a - b) 
  // For each number, set a timeout to beep after the number of seconds
  .forEach((num, i) => {
    setTimeout(() => {
      process.stdout.write('\x07');
      console.log(`Beep at ${num} second${num === 1 ? '' : 's'}`);
    }, num * 1000); // Convert s to ms
  });
