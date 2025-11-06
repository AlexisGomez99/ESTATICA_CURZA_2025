document.addEventListener('DOMContentLoaded', function() {

    const botonLeerMas = document.getElementById('btn-leer-mas');

    if (botonLeerMas) {
        const cvCompleto = document.getElementById('cv-completo');
        const cvAbreviado = document.getElementById('cv-abreviado');

        botonLeerMas.addEventListener('click', function() {
            if (cvCompleto.style.display === 'none' || cvCompleto.style.display === '') {
                cvCompleto.style.display = 'block';
                cvAbreviado.style.display = 'none'; 
                botonLeerMas.textContent = 'Leer menos';
            } else {
                cvCompleto.style.display = 'none';
                cvAbreviado.style.display = 'block'; 
                botonLeerMas.textContent = 'Leer más';
            }
        });
    }







    
});