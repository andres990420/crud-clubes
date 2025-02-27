import { obtenerListaEquipos, eliminarEquipo as eliminar} from "../api/api.js";
import { activarModal } from "./modal.js";
import ModalData from "../entities/modal-data.js";

const cuerpoDeTabla = document.getElementById('cuerpo-tabla');

export async function listaEquipos(){
    let listaEquipos;
    try
    {
        listaEquipos = await obtenerListaEquipos();
        const numeroDeEquipos = Object.values(listaEquipos).length; 
        definirNumerosEquipos(numeroDeEquipos);
    }
    catch(error)
    {
        const dataModal = new ModalData().errorObtenerListaEquipos()
        console.log(dataModal)
        activarModal(dataModal);
    }
    
    if(listaEquipos && Array.isArray(listaEquipos))
    {
        listaEquipos.forEach(equipo => {    
            const html = 
            `
            <td>${equipo.nombre}</td>
            <td>${equipo.tla}</td>
            <td>
                <button class='btn btn-secondary' data-tla='${equipo.tla}' id='ver-${equipo.tla}'>Ver</button>
                <button class='btn btn-primary' data-tla='${equipo.tla}' id='editar-${equipo.tla}'>Editar</button>
                <button class='btn btn-danger' data-tla='${equipo.tla}' id='eliminar-${equipo.tla}'>Eliminar</button>
            </td>    
            `
            cuerpoDeTabla.insertAdjacentHTML("afterend",html);

            document.getElementById(`ver-${equipo.tla}`).addEventListener('click', verEquipo);
            document.getElementById(`editar-${equipo.tla}`).addEventListener('click', editarEquipo);
            document.getElementById(`eliminar-${equipo.tla}`).addEventListener('click', eliminarEquipo);
        });
    }
 
    
}
function verEquipo(){
    location.href=`../pages/equipo.html?tla=${this.dataset['tla']}`;
}

function editarEquipo(){
    location.href=`../pages/form.html?tla=${this.dataset.tla}`;
}

async function eliminarEquipo(){
    try{
        const respuesta = await eliminar(this.dataset.tla)
        const dataModal = new ModalData(respuesta);
        activarModal(dataModal);
    }catch{
        const dataModal = new ModalData().errorElminarEquipo()
        activarModal(dataModal);
    }
    
}

function definirNumerosEquipos(cantidad){
    document.querySelector('#cantidad-equipos').textContent = cantidad;
}