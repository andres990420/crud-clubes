class ModalData{
    constructor(data = null){
        if(data){
            this.titulo = data.title;
            this.mensaje = data.message;
        }
    }

    setError(titulo, mensaje){
        this.titulo = titulo;
        this.mensaje = mensaje;
        return this;
    }

    errorElminarEquipo(){
        return this.setError('Error','Error al intentar eliminar al equipo');
    }

    errorAgregarEquipo(){
        return this.setError('Error','Error al intentar agregar el nuevo equipo');
    }

    errorModificarEquipo(){
        return this.setError('Error','Error al intentar actualizar la informacion del equipo');
    }

    errorObtenerListaEquipos(){
        return this.setError('Error','Error al obtener la lista de equipos');
    }

    errorObtenerEquipo(){
        return this.setError('Error','Error al obtener la informacion del equipo');
    }
}

export default ModalData