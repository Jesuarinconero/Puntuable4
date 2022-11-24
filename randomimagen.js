const principal = document.getElementById('tododisco');
const carruseltabla = ['img/carrusel/1.png','img/carrusel/2.png','img/carrusel/3.png'];
var enlaces=document.getElementsByTagName("a");
var repuesta = prompt("Cuanto enlaces crees que tiene la pagina");

function enlacesalerta(){
    if(repuesta==8){
        alert("Numero total de enlaces "+enlaces.length);
    }
    else if(repuesta==0){
        alert("Vale lo pillo no te apetece contestar");
    }
    else{
        alert("Ups... me temo que te has equivocado hay 8 enlaces. Más suerte la próxima vez..");
    }
}

const randomnumero = (Math.floor (Math.random()*3));
let seleccion = randomnumero;
principal.src=carruseltabla[randomnumero];
function cambiarimagen(){
    seleccion++
    if(seleccion===3){
        seleccion=0
    }
    principal.src=carruseltabla[seleccion];
}
setInterval(cambiarimagen, 5000)
enlacesalerta()