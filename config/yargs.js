// const opts = {
//     crear: {
//         demand: true,
//         alias: 'd',
//         desc: 'Descripcion de la tarea por hacer'
//     },
//     actualizar: {
//         demand: true,
//         alias: 'a',
//         descripcion: 'd',
//         completado: 'c'
//     },
// }

const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Description de la tarea por hacer'

}

const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completado o pendiente la tarea'
}

const argv = require('yargs')
    .command('crear', 'Crea en console una elemento por hacer', {descripcion})
    .command('actualizar', 'Actualizar el estado completado de una tarea', {descripcion, completado})
    .command('borrar', 'Registro borrado exitosamente', {descripcion})
    .help()
    .argv;

module.exports = {
    argv
}