let block = (true)

function confirmcheckbox() {
    alert ('Você concordou com os termos chads')
}

function exibirgaleriachad() {
    const elemento = document.getElementById ('galeriachad')

    elemento.innerHTML = elemento.innerHTML + '<img src="https://www.thesun.co.uk/wp-content/uploads/2021/10/OFF-PLAT-JD-GIGACHAD.jpg?w=660"></img>',
    (false)
} 

function darktheme() {
    const body = document.querySelector ('body')
    
    if (body.classList.contains('boasvindas')) {
    body.classList.replace ('boasvindas', 'blackbody');
} else {
    body.classList.replace ('blackbody', 'boasvindas');
}
}
