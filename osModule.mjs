import os from 'os'

export function getOsData() {
    const Osname = os.type()
    const type = os.platform()
    const version = os.version()
    const arch = os.arch()
    const cpus = os.cpus()[0].model
    const totalMemory = (os.totalmem() / 1048576).toFixed(2)
    const freeMemory = (os.freemem() / 1048576).toFixed(2)
    console.log(`Nombre: ${Osname}, Tipo: ${type}, Versión: ${version}, Arquitectura: ${arch}, CPUs: ${cpus}, Memoria Total: ${totalMemory} MB, Memoria Libre: ${freeMemory} MB`)
};

