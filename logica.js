const panes = document.querySelectorAll('.btn-check');

panes.forEach(pan => {
    console.log(pan);
    pan.addEventListener('change', () => {
        console.log(`Seleccionaste: ${pan.id}`);
    });
});