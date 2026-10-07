// select the variabl that open and close calc
let open = document.querySelector(".open");
let ovarlay = document.querySelector(".overlay");
let close = document.querySelector(".close");
let calc = document.querySelector(".calc");

open.onclick = function () {
  ovarlay.style.display = "block";
};
close.onclick = function () {
  ovarlay.style.display = "none";
  result.innerHTML = "";
};
// select all namber
let allNamber = document.querySelectorAll(".allbutton .number button");
let result = document.querySelector(".result");
let afterecul = false;
allNamber.forEach((b) => {
  b.onclick = function () {
    // console.log(b.textContent);
    if (afterecul) return;
    result.textContent += b.textContent;
  };
});
// select all opraitors
let Operators = document.querySelectorAll(".allbutton .Operators button");
Operators.forEach((e) => {
  e.onclick = function () {
    let thelast = result.textContent.slice(-1);
    if (
      thelast === "+" ||
      thelast === "*" ||
      thelast === "/" ||
      thelast === "-"
    ) {
      return;
    } else {
      console.log(e.textContent);
      result.textContent += e.textContent;
      afterecul = false;
    }
  };
});
// the result
let ecul = document.querySelector(".ecul");
ecul.onclick = function () {
  let k = result.textContent;

  if (k.includes("+")) {
    let part = k.split("+");
    let num1 = Number(part[0]);
    let num2 = Number(part[1]);
    let sum = num1 + num2;
    result.innerHTML = `${sum}`;
  }
  if (k.includes("-")) {
    let part = k.split("-");
    let num1 = Number(part[0]);
    let num2 = Number(part[1]);
    let minse = num1 - num2;
    result.innerHTML = `${minse}`;
  }
  if (k.includes("*")) {
    let part = k.split("*");
    let num1 = Number(part[0]);
    let num2 = Number(part[1]);
    let Multiply = num1 * num2;
    result.innerHTML = `${Multiply}`;
  }
  if (k.includes("/")) {
    let part = k.split("/");
    let num1 = Number(part[0]);
    let num2 = Number(part[1]);
    let Divide = num1 / num2;
    result.innerHTML = `${Divide}`;
  }
  afterecul = true;
};
//  select the delete
let delet = document.querySelector(".delete");

delet.onclick = function () {
  if (result.textContent === "NaN") {
    result.textContent = "";
    afterecul = false;
  } else {
    result.textContent = result.textContent.slice(0, -1);
    afterecul = false;
  }
};

// select delete all
let deletAll = document.querySelector(".delete-all");
deletAll.onclick = function () {
  result.textContent = "";
  afterecul = false;
};
