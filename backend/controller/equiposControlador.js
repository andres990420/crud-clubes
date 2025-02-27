const { error } = require('console');
const fs = require('fs');
const directorio = './data';
const archivo = `${directorio}/equipos.json`;

exports.obtenerListaEquipos = (req, res, next) => {
    try{
        const equipos = JSON.parse(fs.readFileSync(archivo));
        res.status(200).json(equipos);
    }catch(error){
        next(error)
    }
    
};

exports.obtenerEquipo = (req, res, next) =>{
    
    try{
        const equipos = JSON.parse(fs.readFileSync(archivo));
        const tlaEquipo = req.params.tlaEquipo;
        const equipo = equipos.find(equipo => equipo.tla === tlaEquipo);
        if(!equipo){
            return res.status(404).json({message: 'Equipo no encontrado'})    
        }
        res.status(200).json(equipo)
    }catch(error){
        next(error);
    }
};

exports.agregarEquipo = (req, res , next) => {
    try{
        const equipos = JSON.parse(fs.readFileSync(archivo));   
        req.body.escudo = req.file !== undefined ? `http://localhost:8080/escudos/` + req.file.filename : ""; 
        equipos.push(req.body);
        // fs.writeFileSync(archivo, JSON.stringify(equipos));
        res.status(200).json({title : 'Exito', message:`Equipo ${req.body.nombre} Agregado con exito`})
    }catch(error){
        next(error)
    }
};


exports.modificarEquipo = (req, res , next)=>{
    try{
        const nuevoEscudo = req.file !== undefined ? `http://localhost:8080/escudos/` + req.file.filename : '';
        let equipos = JSON.parse(fs.readFileSync(archivo));
        equipos.map(equipo => {
            if(equipo.tla === req.params.tlaEquipo){
                equipo.nombre = req.body.nombre;
                equipo['nombre-corto'] = req.body['nombre-corto'];
                equipo.tla = req.body.tla;
                equipo.telefono = req.body.telefono;
                equipo.escudo = nuevoEscudo;
                equipo.email = req.body.email;
                equipo['sitio-web'] = req.body['sitio-web'];
                equipo['colores-equipo'] = req.body['colores-equipo'];
                equipo.fundacion = req.body.fundacion;
                equipo.estadio  = req.body.estadio;
                equipo.direccion = req.body.direccion;
            }
    });
        // fs.writeFileSync(archivo, JSON.stringify(equipos))
        res.status(200).json({title: 'Exito',message: `Informacion del ${req.body.nombre} actualizada con exito`})
    }catch(error){
        next(error)
    }
};

exports.eliminarEquipo =  (req, res, next) =>{
    try{
        let equipos = JSON.parse(fs.readFileSync(archivo));
        let nuevaLista = equipos.filter(equipo => equipo.tla !== req.params.tlaEquipo);
        if(nuevaLista ===  equipos){
            res.status(404).json({message: 'Equipo no econtrado'});
        }
        // fs.writeFileSync(archivo, JSON.stringify(nuevaLista))
        res.status(200).json({title: 'Exito', message: 'Equipo eliminado con exito'});
    }catch(error){
        next(error);
    }
    
};