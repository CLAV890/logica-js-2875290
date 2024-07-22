const mover= document.getElementById('text')
const mini= document.getElementsByTagName('mini');
const miniatura= document.getElementsByClassName('miniatura') [0];

function cambiar1 (){
 var botones = this.getAttribute('src');
  miniatura.setAttribute('src',botones)
    
   
  }


miniatura[0].addEventListener('click',cambiar1)
mini[1].addEventListener('click',cambiar1)
mini[2].addEventListener('click',cambiar1)
mini[3].addEventListener('click',cambiar1)


const pantalla = document.getElementsByClassName("imagenMario") [0] ;
const miniaturas = document.getElementsByClassName("miniatura");

function cambiar (){
    var atributo = this.getAttribute("src");

    var titulo = this.getAttribute("name");

   /*  parrafo.innerHTML = titulo; */

    pantalla.setAttribute("src", atributo)

}

miniaturas[0].addEventListener("click", cambiar)
miniaturas[1].addEventListener("click", cambiar)
miniaturas[2].addEventListener("click", cambiar)
miniaturas[3].addEventListener("click", cambiar)






