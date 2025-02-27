import { obtenerEquipo, eliminarEquipo} from "../api/api.js";
import Equipo from "../entities/equipos.js";
import { activarModal } from "./modal.js";
import ModalData from "../entities/modal-data.js";

const urlParams = new URLSearchParams(window.location.search);
const tla = urlParams.get('tla');

const botonModificar = document.querySelector('#boton-modificar');
const botonEliminar = document.querySelector('#boton-eliminar');

async function verInformacionDeEquipo(){
    
    let datosEquipo;
    try{
        datosEquipo = await obtenerEquipo(tla);
    }catch(error){
        const modalData = new ModalData().errorObtenerEquipo()
        activarModal(modalData);
        return;
    }
    if(datosEquipo !== undefined){
        const equipo = new Equipo(datosEquipo);
    
        definirEscudo(equipo.escudo);
        definirNombre(equipo.nombre);
        definirDireccion(equipo.direccion);
        definirColoresEquipo(equipo.colores);
        definirEmail(equipo.email);
        definirEstadio(equipo.estadio);
        definirNombreCorto(equipo.nombreCorto);
        definirSitioWeb(equipo.sitioWeb);
        definirFundacion(equipo.fundacion);
        definirTLA(equipo.tla);
        definirTelefono(equipo.telefono);
    }
}

botonModificar.onclick = () =>{
    location.href=`../pages/form.html?tla=${tla}`
}

botonEliminar.onclick = async () => {
    try{
        const respuesta = await eliminarEquipo(tla);
        const dataModal = new ModalData(respuesta)
        activarModal(dataModal);
    }catch(error){
        const dataModal = new ModalData().errorElminarEquipo()
        activarModal(dataModal);
    }
} 

verInformacionDeEquipo();

function definirEscudo(nuevoEscudo){
    const escudo = document.querySelector('#escudo');
    escudo.src = nuevoEscudo !== "" ? nuevoEscudo : '/frontend/imagenes/imageNotFound.png';
}

function definirNombre(nombre){
    document.querySelector('#nombre-equipo').textContent = nombre;
}

function definirNombreCorto(nombreCorto){
    document.querySelector('#nombre-corto').textContent = nombreCorto;
}

function definirTLA(tla){
    document.querySelector('#tla').textContent = tla;
}

function definirDireccion(direccion){
    document.querySelector('#direccion').textContent = direccion;
    let linkDireccion = '';
    for(let char in direccion){
        direccion[char] !== ' ' ? linkDireccion += direccion[char] : linkDireccion += '+' ;
    }
    document.querySelector('#direccion').href="http://google.com/maps/search/?api=1&query="+linkDireccion;
}

function definirEmail(email){
    document.querySelector('#email').textContent = email;
}

function definirTelefono(telefono){
    document.querySelector('#telefono').textContent = telefono;
}

function definirSitioWeb(sitioWeb){
    document.querySelector('#sitio-web').textContent=sitioWeb
    document.querySelector('#sitio-web').href='http://'+sitioWeb;

}

function definirColoresEquipo(coloresEquipo){
    document.querySelector('#colores-equipo').textContent = coloresEquipo;
}

function definirEstadio(estadio){
    document.querySelector('#estadio').textContent = estadio;
}

function definirFundacion(fundacion){
    document.querySelector('#fundacion').textContent = fundacion;
}