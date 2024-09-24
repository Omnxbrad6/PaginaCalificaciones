let name = 0;
let alumnos = [];
let registro = {
    tallerdenvestigacion : 0,
    programacuionWeb: 0,
    inteligenciaartificial: 0,
    programacionlogicayfuncioanl: 0,
    sistemasprogramables: 0,
    conmutacionyenrutamientoderedesdedatos: 0,
    competencia: 0
};

/* let alumnos = [
    {
        NombreAlumno: "Omar",
        Calificaiones: [
            {
                competencia:1,
                tallerdenvestigacion : 80,
                programacuionWeb: 90,
                inteligenciaartificial: 80,
                programacionlogicayfuncioanl: 90,
                sistemasprogramables: 70,
                conmutacionyenrutamientoderedesdedatos: 70,
            },
            {
                competencia:2,
                tallerdenvestigacion : 80,
                programacuionWeb: 90,
                inteligenciaartificial: 80,
                programacionlogicayfuncioanl: 90,
                sistemasprogramables: 70,
                conmutacionyenrutamientoderedesdedatos: 70,
            },
            {
                competencia:3,
                tallerdenvestigacion : 80,
                programacuionWeb: 90,
                inteligenciaartificial: 80,
                programacionlogicayfuncioanl: 90,
                sistemasprogramables: 70,
                conmutacionyenrutamientoderedesdedatos: 70,
            }
        ]
    },
    {
        NombreAlumno: "Fernando",
        Calificaiones: [
            {
                competencia:1,
                tallerdenvestigacion : 80,
                programacuionWeb: 90,
                inteligenciaartificial: 80,
                programacionlogicayfuncioanl: 90,
                sistemasprogramables: 70,
                conmutacionyenrutamientoderedesdedatos: 70,
            }
        ]
    }
];
 */


function aAlumno(){
    let nombreAlumno = document.getElementById('nombreAlumno').value;
    alumnos.push(nombreAlumno);
    actualizarAlumnos(nombreAlumno);
    alert('Se inserto el alumno');
}

function actualizarAlumnos(nuevoAlumno){
    let cmbAlumnos = document.getElementById('cmbAlumnos');
    let optAlumno = document.createElement('option')
    optAlumno.text = nuevoAlumno;
    optAlumno.value = nuevoAlumno;
    cmbAlumnos.appendChild(optAlumno);
}

function seleccionAlumno(){
    let alumno = document.getElementById('cmbAlumnos').value;
    let lblAlumnoSeleccionado = document.getElementById('alumnoSeleccionado').innerHTML = "Alumno: " + alumno;
    let lblAlumnoCalificaciones = document.getElementById('calificacionesNombre').innerHTML = "Ingresa Calificaciones para: " + alumno;
    alert('El alumno seleccionado es ' + alumno)
    limpiarTabla();
    llenadoTabla();
}

function guardarAlumno(){
    let alumno = document.getElementById('cmbAlumnos').value;
    let competencia = document.getElementById('cmbCompetencias').value;
    let calificacionTallerdenvestigacion = document.getElementById('txtTallerdenvestigacion').value;
    let calificacionProgramacionWeb = document.getElementById('txtProgramacionWeb').value;
    let calificacionInteligenciaArtificial = document.getElementById('txtInteligenciaArtificial').value;
    let calificacionProgramacionLogicaFuncioanl = document.getElementById('txtProgramacionLogicaFuncioanl').value;
    let calificacionSistemasProgramables = document.getElementById('txtSistemasProgramables').value;
    let calificacionConmutacionRedes = document.getElementById('txtConmutacionRedes').value;
/* 
    alert(alumno + " " + competencia  + " " + calificacionTallerdenvestigacion + " " + calificacionProgramacionWeb + " " + calificacionInteligenciaArtificial + " " + calificacionProgramacionLogicaFuncioanl + " " + calificacionSistemasProgramables  + " " + calificacionConmutacionRedes);
 */

    // Buscar si el alumno ya existe
    let alumnoExistente = alumnos.find(a => a.NombreAlumno === alumno);

    let nuevaCalificacion = {
        competencia: competencia,
        tallerdenvestigacion: calificacionTallerdenvestigacion,
        programacionWeb: calificacionProgramacionWeb,
        inteligenciaArtificial: calificacionInteligenciaArtificial,
        programacionLogicaFuncional: calificacionProgramacionLogicaFuncioanl,
        sistemasProgramables: calificacionSistemasProgramables,
        conmutacionRedes: calificacionConmutacionRedes
    };
    
    if (alumnoExistente) {
            // Si el alumno ya existe, añadir la nueva competencia
        alumnoExistente.Calificaciones.push(nuevaCalificacion);
    } else {
    // Si el alumno no existe, crearlo y añadir las calificaciones
        alumnos.push({
        NombreAlumno: alumno,
        Calificaciones: [nuevaCalificacion]
        });
    }
    
    console.log(alumnos); // Para verificar que el objeto se actualiza correctamente
    llenadoTabla();
    }


    function llenadoTabla() {
        // Obtener el nombre del alumno seleccionado
        let alumnoSeleccionado = document.getElementById('cmbAlumnos').value;
    
        // Buscar el alumno en el arreglo alumnos
        let alumno = alumnos.find(a => a.NombreAlumno === alumnoSeleccionado);
    
        // Si el alumno existe, proceder a rellenar la tabla
        if (alumno) {
            // Iterar sobre las calificaciones del alumno
            alumno.Calificaciones.forEach(calificacion => {
                let competenciaIndex = parseInt(calificacion.competencia); // Índice de competencia (C1, C2, etc.)
    
                // Verifica si las celdas existen antes de intentar llenarlas
                let rowTaller = document.querySelector(`#rowTallerInvestigacion td:nth-child(${competenciaIndex + 1})`);
                let rowProgramacionWeb = document.querySelector(`#rowProgramacionWeb td:nth-child(${competenciaIndex + 1})`);
                let rowInteligenciaArtificial = document.querySelector(`#rowInteligenciaArtificial td:nth-child(${competenciaIndex + 1})`);
                let rowProgramacionLogicaFuncional = document.querySelector(`#rowProgramacionLogicaFuncional td:nth-child(${competenciaIndex + 1})`);
                let rowSistemasProgramables = document.querySelector(`#rowSistemasProgramables td:nth-child(${competenciaIndex + 1})`);
                let rowConmutacionRedes = document.querySelector(`#rowConmutacionRedes td:nth-child(${competenciaIndex + 1})`);
    
                // Función para aplicar el color si la calificación es menor a 70
                function aplicarEstiloSiEsMenorA70(celda, calificacion) {
                    if (celda) {
                        celda.textContent = calificacion;
                        if (parseInt(calificacion) < 70) {
                            celda.style.backgroundColor = '#fd0000'; // Cambiar color de fondo si es menor a 70
                        } else {
                            celda.style.backgroundColor = ''; // Resetear color si es mayor o igual a 70
                        }
                    }
                }
    
                // Aplicar las calificaciones y el estilo a cada fila
                aplicarEstiloSiEsMenorA70(rowTaller, calificacion.tallerdenvestigacion);
                aplicarEstiloSiEsMenorA70(rowProgramacionWeb, calificacion.programacionWeb);
                aplicarEstiloSiEsMenorA70(rowInteligenciaArtificial, calificacion.inteligenciaArtificial);
                aplicarEstiloSiEsMenorA70(rowProgramacionLogicaFuncional, calificacion.programacionLogicaFuncional);
                aplicarEstiloSiEsMenorA70(rowSistemasProgramables, calificacion.sistemasProgramables);
                aplicarEstiloSiEsMenorA70(rowConmutacionRedes, calificacion.conmutacionRedes);
            });
        } else {
            console.log('Alumno no encontrado');
        }
    }
    
    
function limpiarTabla() {
    // Seleccionamos todas las filas de la tabla excepto la cabecera (thead)
    let filas = document.querySelectorAll('#tabla-calificaciones-alumno tbody tr');

    // Recorrer todas las filas
    filas.forEach(fila => {
        // Recorrer todas las celdas desde la segunda columna en adelante (las calificaciones)
        for (let i = 1; i < fila.children.length; i++) {
            fila.children[i].textContent = ''; // Limpiar el contenido de la celda
            fila.children[i].style.backgroundColor = ''; // Restablecer el color de fondo a blanco
        }
    });
}
    

function promedioGeneral() {
    let alumnoSeleccionado = document.getElementById('cmbAlumnos').value;

    // Buscar el alumno en el arreglo alumnos
    let alumno = alumnos.find(a => a.NombreAlumno === alumnoSeleccionado);

    if (alumno) {
        let totalCompetencias = alumno.Calificaciones.length;

        let sumTallerInvestigacion = 0;
        let sumProgramacionWeb = 0;
        let sumInteligenciaArtificial = 0;
        let sumProgramacionLogicaFuncional = 0;
        let sumSistemasProgramables = 0;
        let sumConmutacionRedes = 0;
        let totalSumatoriaCalificaciones = 0;
        let totalCalificaciones = 0;

        // Sumar las calificaciones de todas las competencias para cada asignatura
        alumno.Calificaciones.forEach(calificacion => {
            sumTallerInvestigacion += parseFloat(calificacion.tallerdenvestigacion) || 0;
            sumProgramacionWeb += parseFloat(calificacion.programacionWeb) || 0;
            sumInteligenciaArtificial += parseFloat(calificacion.inteligenciaArtificial) || 0;
            sumProgramacionLogicaFuncional += parseFloat(calificacion.programacionLogicaFuncional) || 0;
            sumSistemasProgramables += parseFloat(calificacion.sistemasProgramables) || 0;
            sumConmutacionRedes += parseFloat(calificacion.conmutacionRedes) || 0;

            // Sumar todas las calificaciones de todas las materias y competencias
            totalSumatoriaCalificaciones += (parseFloat(calificacion.tallerdenvestigacion) || 0) +
                                            (parseFloat(calificacion.programacionWeb) || 0) +
                                            (parseFloat(calificacion.inteligenciaArtificial) || 0) +
                                            (parseFloat(calificacion.programacionLogicaFuncional) || 0) +
                                            (parseFloat(calificacion.sistemasProgramables) || 0) +
                                            (parseFloat(calificacion.conmutacionRedes) || 0);

            // Contar el total de calificaciones (número de materias por número de competencias)
            totalCalificaciones += 6;  // Número de materias
        });

        // Calcular los promedios por asignatura
        let promedioTallerInvestigacion = sumTallerInvestigacion / totalCompetencias;
        let promedioProgramacionWeb = sumProgramacionWeb / totalCompetencias;
        let promedioInteligenciaArtificial = sumInteligenciaArtificial / totalCompetencias;
        let promedioProgramacionLogicaFuncional = sumProgramacionLogicaFuncional / totalCompetencias;
        let promedioSistemasProgramables = sumSistemasProgramables / totalCompetencias;
        let promedioConmutacionRedes = sumConmutacionRedes / totalCompetencias;

        // Calcular el promedio general de todas las materias
        let promedioGeneralCalificaciones = totalSumatoriaCalificaciones / totalCalificaciones;

        // Mostrar los promedios en los respectivos lugares
        document.getElementById('promedioTallerInvestigacion').textContent = promedioTallerInvestigacion.toFixed(2);
        document.getElementById('promedioProgramacionWeb').textContent = promedioProgramacionWeb.toFixed(2);
        document.getElementById('promedioInteligenciaArtificial').textContent = promedioInteligenciaArtificial.toFixed(2);
        document.getElementById('promedioProgramacionLogicaFuncional').textContent = promedioProgramacionLogicaFuncional.toFixed(2);
        document.getElementById('promedioSistemasProgramables').textContent = promedioSistemasProgramables.toFixed(2);
        document.getElementById('promedioConmutacionRedes').textContent = promedioConmutacionRedes.toFixed(2);
        
        // Mostrar el promedio general
        document.getElementById('promedioGeneral').textContent = promedioGeneralCalificaciones.toFixed(2);
    } else {
        console.log('Alumno no encontrado');
    }
}

function limpiarAlumno() {
    // Limpiar el campo de nombre del alumno
    document.getElementById('nombreAlumno').value = '';

    // Limpiar las calificaciones
    document.getElementById('txtTallerdenvestigacion').value = '';
    document.getElementById('txtProgramacionWeb').value = '';
    document.getElementById('txtInteligenciaArtificial').value = '';
    document.getElementById('txtProgramacionLogicaFuncioanl').value = '';
    document.getElementById('txtSistemasProgramables').value = '';
    document.getElementById('txtConmutacionRedes').value = '';

    // Restablecer la selección de competencias y alumnos
    document.getElementById('cmbCompetencias').selectedIndex = 0;
    document.getElementById('cmbAlumnos').selectedIndex = 0;

    // Restablecer el título de "Ingresar Calificaciones para:"
    document.getElementById('calificacionesNombre').textContent = 'Ingresa Calificaciones para: ';

    limpiarTabla();
    limpiarPromedioGeneral();

}

function limpiarPromedioGeneral() {
    // Limpiar los promedios individuales de las materias
    document.getElementById('promedioTallerInvestigacion').textContent = '';
    document.getElementById('promedioProgramacionWeb').textContent = '';
    document.getElementById('promedioInteligenciaArtificial').textContent = '';
    document.getElementById('promedioProgramacionLogicaFuncional').textContent = '';
    document.getElementById('promedioSistemasProgramables').textContent = '';
    document.getElementById('promedioConmutacionRedes').textContent = '';

    // Limpiar el promedio general
    document.getElementById('promedioGeneral').textContent = '';
}

