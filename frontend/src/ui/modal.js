const checkIcon = `
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="green" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
    </svg>`

const exclamationIcon = 
    `<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-exclamation-circle" viewBox="0 0 16 16">
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
        <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0M7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0z"/>
    </svg>`

export function activarModal(data, tla = null){
    let icono;
    let status;
    if(data.titulo === 'Exito'){
        icono = checkIcon;
        status = 'success';
    }else{
        icono = exclamationIcon;
        status = 'danger';
    }
    const modal = 
    `
    <div class="modal fade" id="modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header alert alert-${status}">
                    <h1 class="modal-title fs-5" id="modalLabel"> ${data.titulo}</h1>
                    <i>${icono}</i>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    ${data.mensaje}
                </div>
                <div class="modal-footer ">
                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal" id="boton-modal-ok">OK</button>
                </div>
            </div>
        </div>
    </div>
    `
    document.getElementById('div-modal').insertAdjacentHTML('afterend', modal);
    var myModal = new bootstrap.Modal(document.getElementById('modal'));
    document.getElementById('boton-modal-ok').onclick = ()=>{
        
        if(tla === null){
            if(!location.href.includes('index.html')){
                location.href=`../pages/index.html`;
            }
        }else{
            location.href=`../pages/equipo.html?tla=${tla}`;
        }
    }
    myModal.show();
};