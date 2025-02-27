class Equipo{
    constructor(data){
        this.nombre =  data.nombre;
        this.tla = String(data.tla).toUpperCase();
        this.escudo = data.escudo;
        this.nombreCorto = data['nombre-corto'];
        this.fundacion =  data.fundacion;
        this.direccion = data.direccion;
        this.email = data.email;
        this.telefono = data.telefono;
        this.colores = data['colores-equipo'];
        this.sitioWeb = data['sitio-web'];
        this.estadio = data.estadio;
    }
};

export default Equipo