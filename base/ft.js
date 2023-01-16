function confirmcheckbox() {
  alert("Você concordou com os termos chads");
}

function darktheme() {
  const body = document.querySelector("body");

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
};

const uniqueLog = withUniqueCall(() => console.log("Called"));
uniqueLog();
uniqueLog();
uniqueLog();
uniqueLog();
uniqueLog();
uniqueLog();

function exibirgaleriachad() {
    const elemento = document.getElementById ('galeriachad')

    elemento.innerHTML = elemento.innerHTML + '<img src="https://www.thesun.co.uk/wp-content/uploads/2021/10/OFF-PLAT-JD-GIGACHAD.jpg?w=660"></img>'
}