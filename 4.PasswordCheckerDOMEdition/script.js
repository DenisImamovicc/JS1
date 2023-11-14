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

const mssgs = {
  weakPassw: "Is it in yet 🤨🤨🤨?Invalid password!",
  passablePassw: "It could be worse 🤦‍♀️🤦‍♀️🤦‍♀️.Valid password!",
  averagePassw: "Mediocrity,enemy of man and its member 😐😐😐.Valid password!",
  aboveAveragePassw:
    "One of the longer and stronger ones for sure 😃😃😃.Valid password!",
  godTierPassw: "Oh my gawd its so behg and strong !!!😍😍😍.Valid password!",
};

const PasswInput = document.querySelector("input");
const PasswSubmitBtn = document.querySelector("button");
const PasswResult = document.querySelector(".alert");

PasswSubmitBtn.addEventListener("click", () => {
  const result = handlePasswStrength(
    PasswInput.value,
    getSpecialCharAmount(PasswInput.value)
  );

  handleAlertType(result);
});

const getSpecialCharAmount = (password) => {
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

const handleClassnameAssign = (classname) => {
  return PasswResult.classList[1]
    ? PasswResult.classList.replace(PasswResult.classList[1], classname)
    : PasswResult.classList.add(classname);
};

const handleAlertType = (result) => {
  console.log(PasswResult.classList[1]);

  if (result !== mssgs.weakPassw && result !== mssgs.godTierPassw) {
    handleClassnameAssign("alert-info");
    PasswResult.innerText = result;
  } else if (result === mssgs.weakPassw) {
    handleClassnameAssign("alert-danger");
    PasswResult.innerText = result;
  } else {
    handleClassnameAssign("alert-success");
    PasswResult.innerText = result;
  }
};

const handlePasswStrength = (password, specialCharAmount) => {
  console.log(
    `🕵🏻 Checking password '${password}',we know its ${
      password.length
    } chars long  ${getSpecialCharAmount(password)}`
  );

  if (password.length >= 16) {
    return mssgs.godTierPassw;
  } else if (password.length >= 12 && password.includes("-")) {
    return mssgs.aboveAveragePassw;
  } else if (password.length >= 8 && specialCharAmount >= 1) {
    return mssgs.averagePassw;
  } else if (password.length >= 6 && specialCharAmount >= 2) {
    return mssgs.passablePassw;
  } else {
    return mssgs.weakPassw;
  }
};
