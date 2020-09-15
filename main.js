

function insertMaterialDirecto() {
    let fecha = document.getElementById("fecha").value;
    let tipo_Proceso = document.getElementById("tipo_Proceso").value;
    let costoMP = document.getElementById("costoMP").value;
    let Concepto = document.getElementById("Concepto").value;
    let fecha_op = document.getElementById("fecha_op").value;
    fecha_op = fecha_op + " 12:00:00";

    console.log(fecha, tipo_Proceso, costoMP, Concepto, fecha_op);
    axios.post('http://localhost:3000/i/costo_material_directo/', {
            Fecha_idFecha: fecha,
            idtipo_proceso: tipo_Proceso,
            costo: costoMP,
            concepto: Concepto,
            fecha_op: fecha_op
        })
        .then(function (response) {
            //SI FUNCIONA
            console.log("Consulta exitosa");
            document.getElementById("fecha").value = "";
            document.getElementById("tipo_Proceso").value="";
            document.getElementById("costoMP").value="";
            document.getElementById("Concepto").value="";
            document.getElementById("fecha_op").value="";
        })
        .catch(function (error) {
            //SI NO FUNCIONA
            console.log("Consulta fallida");
        })
}