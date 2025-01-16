function greeter(person: string) {
    return "Hello, " + person;
}

let user = ["Jane", "Doe"];

// Solution 1: Accessing the first element
console.log(greeter(user[0])); // Accesses the first element of the array

// Solution 2: Using template literal for multiple elements
console.log(`Hello, ${user.join(' ')}`); // Joins array elements with space

// Solution 3: Overloading the function
function greeter(person: string): string;
function greeter(person: string[]): string;
function greeter(person: string | string[]): string {
    if (typeof person === 'string') {
        return "Hello, " + person;
    } else {
        return "Hello, " + person.join(' ');
    }
}
console.log(greeter(user)); // Works with both string and string[]
console.log(greeter("Jane Doe")); // Works with string too