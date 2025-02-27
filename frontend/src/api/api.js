const URL_BASE = 'http://localhost:8080';

export async function obtenerListaEquipos() {
    try{
        const respuesta = await fetch(`${URL_BASE}/equipos/`);
        if(!respuesta.ok){
            throw new Error(`Error en la solicitud: ${respuesta.status} ${respuesta.statusText}`)
        }
        const equipos = await respuesta.json();
        return equipos;
    }
    catch(error){
        console.error(`Mensaje: ${error.message}`);
        throw error;
    }
    
};

export async function obtenerEquipo(tla){
    try{
        const respuesta = await fetch(`${URL_BASE}/equipos/${tla}`);
        if(!respuesta.ok){
            throw new Error(`Error en la solicitud: ${respuesta.status} ${respuesta.statusText}`)
        }
        const equipo = await respuesta.json();
        return equipo;
    }
    catch(error){
        console.error(`Mensaje: ${error.message}`);
        throw error;
    }
};

export async function agregarEquipo(data) {
    try{
        const respuesta =  await fetch(`${URL_BASE}/form`,{
            method: 'POST',
            body: data
        });
        if(!respuesta.ok){
            throw new Error(`Error en la solicitud: ${respuesta.status} ${respuesta.statusText}`);
        }
        const resultado = await respuesta.json()
        return resultado;
    }catch(error){
        console.error(`Error en la solicitud: ${error.message}`);
        throw error;
    }
};

export async function modificarEquipo(data, tla) {
    try{
        const respuesta =  await fetch(`${URL_BASE}/form/${tla}`,{
            method: 'PUT',
            body: data
        });
        if(!respuesta.ok){
            throw new Error(`Error en la solicitud: ${respuesta.status} ${respuesta.statusText}`)
        }
        const resultado = await respuesta.json()
        return resultado;
    }catch{
        console.error(`Error en la solicitud: ${error.message}`);
        throw error;
    }
};

export async function eliminarEquipo(tla){
    try{
        const respuesta = await fetch(`${URL_BASE}/delete/${tla}`, {
            method: 'DELETE'
        });
        if(!respuesta.ok){
            throw new Error(`Error en la solicitud: ${respuesta.status} ${respuesta.statusText}`)
        }
        const resultado = await respuesta.json()
        return resultado;
    }catch{
        console.error(`Error en la solicitud: ${error.message}`);
        throw error;
    }
}