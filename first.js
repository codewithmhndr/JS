let company = ["Bloomberg", "Microsoft", "Uber", "Google", "IMB", "Netflix"];

//  Removing First Company From Array

console.log(company.splice(0,1));

// Removing Uber And Adding Ola

console.log(company.splice(1,1, "Ola"));

// Adding Amazon At End

console.log(company.push("Amazon"));
