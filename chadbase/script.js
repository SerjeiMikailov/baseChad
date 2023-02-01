
function exibirgaleriachad() {
    const elemento = document.getElementById ('div-top-chads')

    elemento.innerHTML = elemento.innerHTML + '<img class="topChads-class" src="https://www.thesun.co.uk/wp-content/uploads/2021/10/OFF-PLAT-JD-GIGACHAD.jpg?w=660"></img>'
    elemento.innerHTML = elemento.innerHTML + '<img class="topChads-class" src="https://pbs.twimg.com/media/EURuzSWXkAAYKHW.jpg"></img>'
    elemento.innerHTML = elemento.innerHTML + '<img class="topChads-class" src="https://img.ifunny.co/images/9edf405a8ea74ce8b27337812206d335e5f5206c6d40f4d8a357023966fc4c57_1.jpg"></img>'
} 

function darktheme() {
    const body = document.querySelector ('body')
    
    if (body.classList.contains('boasvindas')) {
    body.classList.replace ('boasvindas', 'blackbody');
} else {
    body.classList.replace ('blackbody', 'boasvindas');
}
}

let el2 = document.getElementById('entrarnochad')

let el1 = document.getElementById('naoapto')

function showChadButton() {
    if (el2.className = 'chadform1') {
        el2.classList.remove('chadform1')
    } 
    el2.classList.add('chadform');

    el1.classList.add('chadform1')

    alert ('Você concordou com os termos chads')
}

function gg() {
    alert('kk')
}