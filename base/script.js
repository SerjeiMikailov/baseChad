var checarchad = require("./checkchad");
checarchad.confirmcheckbox();
function darktheme() {
    var body = document.querySelector("body");
    if (body.classList.contains("boasvindas")) {
        body.classList.replace("boasvindas", "blackbody");
    }
    else {
        body.classList.replace("blackbody", "boasvindas");
    }
}
var withUniqueCall = function (fn) {
    var isCalled = false;
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (!isCalled) {
            isCalled = true;
            return fn.apply(void 0, args);
        }
    };
    var exibirGaleriaChadUmaVez = withUniqueCall(exibirgaleriachad);
    exibirGaleriaChadUmaVez();
    exibirGaleriaChadUmaVez();
    exibirGaleriaChadUmaVez();
};
function exibirgaleriachad() {
    var elemento = document.getElementById("galeriachad");
    elemento.innerHTML =
        elemento.innerHTML +
            '<img src="https://www.thesun.co.uk/wp-content/uploads/2021/10/OFF-PLAT-JD-GIGACHAD.jpg?w=660"></img>';
}
