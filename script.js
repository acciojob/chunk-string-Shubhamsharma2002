function stringChop(str, size) {
  // your code here
  // Requirement: If the input string is null (or undefined), return an empty array
  if (str === null || str === undefined || str === "") {
    return [];
  }

  // Convert size to an integer to ensure accurate math
  const chunkSize = parseInt(size, 10);
  const chunks = [];

  // Loop through the string, jumping forward by the chunk size each iteration
  for (let i = 0; i < str.length; i += chunkSize) {
    // Extract a substring from index 'i' to 'i + chunkSize'
    chunks.push(str.substring(i, i + chunkSize));
  }

  return chunks;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));