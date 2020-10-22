const argv = require('yargs').command('listar', 'imprime la tabla de multiplicar', {
    base: {
        demand: true,
        alias: 'b',
        describe: 'base para multiplicar'
    },
    limite: {
        alias: 'l',
        default: 10,
        describe: 'limite de tabla'
    }
}).command('crear', 'crea txt la tabla de multiplicar', {
    basem: {
        demand: true,
        alias: 'b',
        describe: 'base para multiplicar'
    },
    limit: {
        alias: 'l',
        default: 10,
        describe: 'limite de tabla'
    }
}).help().argv;

module.exports = {
    argv,
}