const { argv } = require('./config/yargs');
const colors = require('colors');

const { crearArchivo, listarTabla } = require('./tablas/multiplicar');
//console.log(argv);
let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.basem, argv.limit).then(archivo => console.log(archivo)).catch(err => console.log(err));
        break;
    default:
        console.log('no existe comando');
}
//let base = '10';

//let argv = process.argv;
//console.log(argv.limite);
/* let parametro = argv[2];
let base = parametro.split('=')[1]; */