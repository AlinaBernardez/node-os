import os from 'os'

export function getNetworkData() {
    const networkArray = Object.entries(os.networkInterfaces())
    for(let i = 0; i < networkArray.length; i++) {
        let interfaz = networkArray[i][0]
        let family = networkArray[i][1][1].family
        let address = networkArray[i][1][1].address
        let internal = networkArray[i][1][1].internal
        console.log(`Interfaz: ${interfaz} , Familia: ${family} , Dirección: ${address}, Interno: ${internal}`)
    }
}

