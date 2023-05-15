const {registrar, leer} = require('./operaciones');
const operacionInfo = process.argv.slice(2);

if(operacionInfo[0] === 'registrar'){
    registrar(operacionInfo[1], operacionInfo[2], operacionInfo[3], operacionInfo[4], operacionInfo[5]);
};

if(operacionInfo[0] === 'leer'){
    leer();
};