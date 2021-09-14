

import {mostrarDatos} from "./calculador.js";


export let respuesta = document.querySelector("#respuesta");


let boton = document.querySelector("#boton");


function botonFormulario(){
     let libras = document.querySelector("#inputLibras").value;
    mostrarDatos(libras)
 
}

boton.addEventListener('click',botonFormulario);

