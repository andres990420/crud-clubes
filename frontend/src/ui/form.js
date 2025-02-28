import { agregarEquipo, modificarEquipo, obtenerEquipo } from "../api/api.js";
import Equipo from "../entities/equipos.js"
import { activarModal } from "./modal.js";
import ModalData from "../entities/modal-data.js";

const params = new URLSearchParams(window.location.search);
const tla = params.get('tla');

const $formulario =  document.querySelector('#formulario');
const $tituloFormulario = document.querySelector('#titulo');
const $tituloDocumento = document.querySelector('#titulo-documento');

const $nombre = document.querySelector('#nombre');
const $nombreCorto = document.querySelector('#nombre-corto');
const $equipoTla = document.querySelector('#tla');
const $escudo = document.querySelector('#escudo');
const $direccion = document.querySelector('#direccion');
const $telefono = document.querySelector('#telefono');
const $email = document.querySelector('#email');
const $coloresEquipo = document.querySelector('#colores-equipo');
const $fundacion = document.querySelector('#fundacion');
const $sitioWeb = document.querySelector('#sitio-web');
const $estadio = document.querySelector('#estadio');
const $renderEscudo = document.querySelector('#escudo-render');

const $botonEnviar = document.querySelector('#boton-enviar');
const $botonCancelar = document.querySelector('#boton-cancelar');

export function definirFormulario(){
    tla === null ? formularioAgregarEquipo() : formularioModificarEquipo(tla);
}

definirFormulario();

function formularioAgregarEquipo(){
    $tituloDocumento.textContent = 'Agregar Equipo'
    $tituloFormulario.textContent = 'Agrega un nuevo equipo a la lista';
    $botonEnviar.value = 'Agregar';
    verificarValidacion();
}

async function formularioModificarEquipo(tla){
    
    let datosEquipo;
    try
    {
        datosEquipo = await obtenerEquipo(tla)
    }catch(error){
        console.error(`Error al obtener los datos del equipo: ${error.message}`);
        return;
    } 
    const equipo = new Equipo(datosEquipo);
    
    $tituloDocumento.textContent = 'Modificar Equipo'
    $tituloFormulario.textContent = `${equipo.nombre}`
    
    $botonEnviar.value = 'Modificar';
    $nombre.value = equipo.nombre;
    $nombreCorto.value = equipo.nombreCorto;
    $equipoTla.value = equipo.tla;
    $direccion.value = equipo.direccion;
    $telefono.value = equipo.telefono;
    $email.value = equipo.email;
    $coloresEquipo.value = equipo.colores;
    $sitioWeb.value = equipo.sitioWeb;
    $fundacion.value = equipo.fundacion;
    $estadio.value = equipo.estadio;
    $renderEscudo.src =  equipo.escudo;

    verificarValidacion();
}

$botonCancelar.onclick = () => {
    if(tla){
        location.href=`./equipo.html?tla=${tla}`;
    }
    else{
        location.href='./index.html';
    }
};

$escudo.onchange = () =>{
    const formData = new FormData($formulario);
    const archivo = formData.get('escudo');
    const imagen = URL.createObjectURL(archivo);
    
    $renderEscudo.setAttribute('width', '100px');
    $renderEscudo.setAttribute('height', '100px');
    $renderEscudo.src = imagen;
}

async function envioDeFormulario(event){
    
    const formData = new FormData(event.target);

    if(tla !== null){
        try{    
            const respuesta = await modificarEquipo(formData, tla);
            const modalData = new ModalData(respuesta); 
            activarModal(modalData, tla);
        }catch(error){
            const modalData = new ModalData().errorModificarEquipo()
            activarModal(modalData);
        }
    }else{
        try{
            const respuesta = await agregarEquipo(formData);
            const modalData = new ModalData(respuesta);
            activarModal(modalData);
        }catch(error){
            const modalData = new ModalData().errorAgregarEquipo()
            activarModal(modalData);
        }
    }; 
}

function verificarValidacion(){

    const forms = document.querySelectorAll('.needs-validation');
    
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event =>{
            if (!form.checkValidity()){
                event.preventDefault();
                event.stopPropagation();
            }else{
                event.preventDefault()
                envioDeFormulario(event)
            }
            form.classList.add('was-validated');       
        }, false)
    })
}