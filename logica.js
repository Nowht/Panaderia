class breads {
    constructor(nombre, md, mod, cif){
        this.nombre = nombre;
        this.md = md;
        this.mod = mod;
        this.cif = cif;
    }

    calcularCosto(cantidad){
        let md_total = this.md * cantidad;
        let mod_total = this.mod * cantidad;
        let md_mod_total = md_total + mod_total;
        let cif_total = md_mod_total * this.cif;
        let costo_total = md_mod_total + cif_total;

        return{
            producto: this.nombre,
            cantidad,
            md: md_total,
            mod: mod_total,
            cif: cif_total,
            costo_total,
            unitario: costo_total / cantidad
        };
    }
}


const tipo_panes = {
    xecas: new breads("Xecas", 0.50, 0.07, 0.10),
    pan_dulce: new breads("Pan Dulce", 0.60, 0.60, 0.11),
    pan_frances: new breads("Pan Frances", 0.40, 0.05, 0.09),
    concha: new breads("Concha", 0.65, 0.08, 0.12),
    bolillo: new breads("Bolillo", 0.55, 0.06, 0.10)
};


const panes = document.querySelectorAll('.btn-check');
const btn = document.getElementById('calcular');
const unidades = document.getElementById('unidades');

const OutputMD = document.getElementById('MD');
const OutputMOD = document.getElementById('MOD');
const OutputCIF = document.getElementById('CIF');
const OutputCT = document.getElementById('CT');
const OutputCU = document.getElementById('CU');

let bread;

panes.forEach(pan => {
    pan.addEventListener('change', () => {
        bread = pan.id;
    });
});


btn.addEventListener('click', () => {
    let cantidad = unidades.value.trim();
    cantidad = Number(cantidad);
    if(isNaN(cantidad) || cantidad <= 0){
        alert("Por favor ingrese una cantidad válida.");
        return;
    }

    if(!bread){
        alert("Por favor seleccione un tipo de pan.");
        return;
    }
    let resultado = tipo_panes[bread].calcularCosto(cantidad);
    OutputMD.value = (resultado.md).toFixed(2);
    OutputMOD.value = (resultado.mod).toFixed(2);
    OutputCIF.value = (resultado.cif).toFixed(2);
    OutputCT.value = (resultado.costo_total).toFixed(2);
    OutputCU.value = (resultado.unitario).toFixed(2);
});
