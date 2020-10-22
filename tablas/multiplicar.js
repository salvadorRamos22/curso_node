const { rejects } = require('assert');
const fs = require('fs');
const { resolve } = require('path');
const colors = require('colors/safe');

let data = '';

let crearArchivo = (base, limit = 10) => {

    return new Promise((resolve, rejects) => {
        if (!Number(base)) {
            return rejects('No es numero')
        }
        for (let index = 1; index <= limit; index++) {
            let m = base * index;
            //console.log('2x' + index + '=' + m);
            data += `${base}*${index}=${m}\n`;
        }

        fs.writeFile(`tablas/multiplicar-${base}.txt`, data, (err) => {
            if (err) {
                return rejects(err)
            } else {
                resolve(`tabla-${base}.txt`)
            }

        })
    });
}

let listarTabla = (base, limite = 10) => {
    for (let index = 1; index <= limite; index++) {
        let m = base * index
        console.log(colors.red(`${base}x${index}=${m}`));
    }
}

module.exports = {
    crearArchivo,
    listarTabla
};