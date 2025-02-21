// Create a function that accepts an array of names, and returns an array of each name with its first letter capitalized and the remainder in lowercase.

// Examples
// ['jo', 'nelson', 'jurie'] -->  ['Jo', 'Nelson', 'Jurie']
// ['KARLY', 'DANIEL', 'KELSEY'] --> ['Karly', 'Daniel', 'Kelsey']


// SOLUTIONS

function capitalizeNames(names) {
    return names.map(name => 
      name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
    );
}

// Explanation:
// names.map(...): Loops through each name in the array.
// name.charAt(0).toUpperCase(): Converts the first character of the name to uppercase.
// name.slice(1).toLowerCase(): Ensures the rest of the characters are in lowercase.
// Combines the two parts to return the correctly capitalized name.
// This function works for any array of strings!
