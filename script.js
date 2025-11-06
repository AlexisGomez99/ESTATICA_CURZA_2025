document.addEventListener('DOMContentLoaded', function() {

    const form = document.querySelector('form');
    const campos = form.querySelectorAll('input, textarea'); 
    const mapaFilas = {
        'nombre': 0,
        'apellido': 1,
        'email': 2,
        'telefono': 3,
        'edad': 4,
        'direccion': 5,
        'provincia': 6,
        'codigoPostal': 7
    };

    
    function actualizarFila(rowIndex, valor) {
        const tabla = document.querySelector('table tbody');
        if (tabla && tabla.rows[rowIndex]) {
            tabla.rows[rowIndex].cells[1].textContent = valor;
        }
    }

    campos.forEach(campo => {
        if (campo.type !== 'radio' && campo.type !== 'checkbox') {
            campo.addEventListener('input', function() {
                const idCampo = this.id; 
                const indiceFila = mapaFilas[idCampo];
                
                if (indiceFila !== undefined) {
                    actualizarFila(indiceFila, this.value);
                }
            });
        }
    });

    
    const radiosContacto = document.querySelectorAll('input[name="contacto"]');
    radiosContacto.forEach(radio => {
        radio.addEventListener('change', function() {
            if (this.checked) {
                actualizarFila(8, this.value);
            }
        });
    });

    const radioInicial = document.querySelector('input[name="contacto"]:checked');
    if (radioInicial) {
         actualizarFila(8, radioInicial.value);
    }

    
    const checkboxesSuscripcion = document.querySelectorAll('input[name="suscripcion"]');
    function actualizarSuscripcion() {
        const valoresSeleccionados = [];
        checkboxesSuscripcion.forEach(cb => {
            if (cb.checked) {
                valoresSeleccionados.push(cb.value);
            }
        });
        actualizarFila(9, valoresSeleccionados.join(', '));
    }
    
    checkboxesSuscripcion.forEach(checkbox => {
        checkbox.addEventListener('change', actualizarSuscripcion);
    });

    actualizarSuscripcion();

});