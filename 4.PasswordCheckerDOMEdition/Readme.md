# Password Checker

My solution to The assignment that works with all the checks.


## Solution

```python
/**
 * Workshop: Password Checker
 *
 * Skriv kod som kollar att lösenordet i variabeln password har
 * - minst 6 tecken varav minst två specialtecken enligt nedan
 * - minst 8 tecken varav minst ett specialtecken enligt nedan
 * - eller har minst 12 tecken och minst 1 bindestreck
 * - eller har minst 16 tecken
 *
 * Googla för att hitta lämpliga metoder för att lösa uppgiften.
 *
 * Du ska alltså precis som i första dagens workshop ta bort kommentarerna
 * en efter en och testa att alla olika kombinationer av lösenord fungerar
 * och ger rätt resultat.
 */

let password;
//password = "password"; // inte giltigt
// password = "pa$sword"; // giltigt
// password = "p@ssw%rd"; // giltigt
// password = "pa$$word"; // giltigt
// password = "secretpassword"; // inte giltigt
// password = "secret-password"; // giltigt
// password = "such-password-much-secure-very-long"; // giltigt

const specialChars = [
  "@",
  "$",
  "%",
  "*",
  "^",
  "<",
  ">",
  "?",
  "!",
  "(",
  ")",
  "[",
  "]",
  "{",
  "}",
  "'",
];

console.log(`🕵🏻 Checking password '${password}'`);

// Skriv din kod här
let specialCharAmount = 0;

for (let passIndex = 0; passIndex < password.length; passIndex++) {
  for (let arrIndex = 0; arrIndex < specialChars.length; arrIndex++) {
    if (password[passIndex].includes(specialChars[arrIndex])) {
      specialCharAmount++;
    }
  }
}

if (password.length >= 16) {
  console.log("Valid password brah!.Dang its atleast 16 characters long.Nice!");
} else if (password.length >= 12 && password.includes("-")) {
  console.log(
    "Valid password brah!.Dang its atleast 12 characters long and has `-` aswell!"
  );
} else if (password.length >= 8 && specialCharAmount >= 1) {
  console.log(
    "Valid password brah!.Dang its atleast 8 characters long and has atleast one special chars!"
  );
} else if (password.length >= 6 && specialCharAmount >= 2) {
  console.log(
    "Valid password brah!.Dang its atleast 6 characters long and has atleast two special chars!"
  );
} else {
  console.log("Invalid password brah!");
}
```