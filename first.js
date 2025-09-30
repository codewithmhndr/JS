// Generate Username From Users Input


let username = prompt("Enter Your Name");
let len = username.length;
let id = `@${username}${len}`;
console.log(id);