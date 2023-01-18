const checarchad = require("./checkchad");

checarchad.confirmcheckbox();

function darktheme() {
  const body: any = document.querySelector("body");

  if (body.classList.contains("boasvindas")) {
    body.classList.replace("boasvindas", "blackbody");
  } else {
    body.classList.replace("blackbody", "boasvindas");
  }
}

const withUniqueCall = (fn) => {
  let isCalled = false;
  return (...args) => {
    if (!isCalled) {
      isCalled = true;
      return fn(...args);
    }
  };
  const exibirGaleriaChadUmaVez = withUniqueCall(exibirgaleriachad);
  exibirGaleriaChadUmaVez();
  exibirGaleriaChadUmaVez();
  exibirGaleriaChadUmaVez();
};

function exibirgaleriachad() {
  const elemento: any = document.getElementById("galeriachad");

  elemento.innerHTML =
    elemento.innerHTML +
    '<img src="https://www.thesun.co.uk/wp-content/uploads/2021/10/OFF-PLAT-JD-GIGACHAD.jpg?w=660"></img>';
}
