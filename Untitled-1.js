const rango =document.querySelector("#rango");
const texto = document.querySelector("#valor1");



rango.oninput = () => {
    texto.innerHTML = rango.value
}


