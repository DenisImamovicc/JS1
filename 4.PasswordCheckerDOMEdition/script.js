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

const PasswInput = document.querySelector("input");
const PasswSubmitBtn = document.querySelector("button");
const PasswResult = document.querySelector("#PasswordResultText");

console.log(PasswResult);

PasswSubmitBtn.addEventListener("click", () => {
  PasswResult.innerText = handlePasswStrength(
    PasswInput.value,
    getSpecialCharAmount(PasswInput.value)
  );
});

getSpecialCharAmount = (password) => {
  let specialCharAmount = 0;

  for (let passIndex = 0; passIndex < password.length; passIndex++) {
    for (let arrIndex = 0; arrIndex < specialChars.length; arrIndex++) {
      if (password[passIndex].includes(specialChars[arrIndex])) {
        specialCharAmount++;
      }
    }
  }

  return specialCharAmount;
};

const handlePasswStrength = (password, specialCharAmount) => {
  console.log(
    `🕵🏻 Checking password '${password}',we know its ${password.length} chars long`
  );

  if (password.length >= 16) {
    return "Valid password brah!.Dang its atleast 16 characters long.Nice!";
  } else if (password.length >= 12 && password.includes("-")) {
    return "Valid password brah!.Dang its atleast 12 characters long and has `-` aswell!";
  } else if (password.length >= 8 && specialCharAmount >= 1) {
    return "Valid password brah!.Dang its atleast 8 characters long and has atleast one special chars!";
  } else if (password.length >= 6 && specialCharAmount >= 2) {
    return "Valid password brah!.Dang its atleast 6 characters long and has atleast two special chars!";
  } else {
    return "Invalid password brah!";
  }
};
