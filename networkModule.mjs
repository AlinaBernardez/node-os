import os from 'os'

export function getNetworkData() {
    const networks = os.networkInterfaces()
    const redes = {}

    Object.keys(networks).forEach(net => {
        redes[net] = networks[net].map(interFace => ({
            familia: interFace.family,
            direccion: interFace.address,
            interno: interFace.internal
        }))
    })
    return redes
}

