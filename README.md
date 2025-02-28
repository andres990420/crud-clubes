# crud-clubes

## Descripción

CRUD Clubes es una aplicación web que permite gestionar información sobre clubes deportivos. Los usuarios pueden crear, leer, actualizar y eliminar información de los clubes, incluyendo detalles como el nombre, escudo, colores del equipo, y más.

## Características

- **Agregarr**: Permite agregar nuevos clubes con toda su información relevante.
- **Ver**: Permite visualizar la lista de clubes y los detalles de cada uno.
- **Editar**: Permite modificar la información de los clubes existentes.
- **Eliminar**: Permite eliminar clubes de la lista.

# Tecnología

- **bootstrap**: Uso de estilos para las interfaces.
- **HTML**: Estructura de la interfaz.
- **JavaScript**: Lógica de la aplicación y modulación del código.
- **Express**: Creación del servidor backend y manejo de rutas.
- **Multer**: Manejo de la carga de archivos (escudos de los clubes).
- **Node.js**: Entorno de ejecución para el servido backend

## Instalación

Sigue estos pasos para instalar y ejecutar la aplicación en tu entorno local:

### Pasos

1. Clona el repositorio en tu máquina local:
    ```bash
    git clone https://github.com/tu-usuario/crud-clubes.git
    ```

2. Navega al directorio del proyecto:
    ```bash
    cd crud-clubes
    ```

3. Instala las dependencias del backend:
    ```bash
    cd backend
    npm install
    ```

4. Instala las dependencias del frontend:
    ```bash
    cd ../frontend
    npm install
    ```

5. Inicia el servidor backend:
    ```bash
    cd ../backend
    npm start
    ```

6. Inicia el servidor frontend:
    ```bash
    cd ../frontend
    npm start
    ```
## API Endpoints

### Obtener lista de equipos

- **URL**: `/equipos`
- **Método**: `GET`
- **Descripción**: Obtiene la lista de todos los equipos.

### Obtener detalles de un equipo

- **URL**: `/equipos/:tlaEquipo`
- **Método**: `GET`
- **Descripción**: Obtiene los detalles de un equipo específico.

### Agregar un nuevo equipo

- **URL**: `/form`
- **Método**: `POST`
- **Descripción**: Agrega un nuevo equipo.
- **Cuerpo**: FormData con los datos del equipo y el archivo del escudo.

### Modificar un equipo existente

- **URL**: `/form/:tlaEquipo`
- **Método**: `PUT`
- **Descripción**: Modifica los detalles de un equipo existente.
- **Cuerpo**: FormData con los datos actualizados del equipo y el archivo del escudo (opcional).

### Eliminar un equipo

- **URL**: `/delete/:tlaEquipo`
- **Método**: `DELETE`
- **Descripción**: Elimina un equipo específico.