/* Este archivo creará el servicio que interactuará con la API de info-series */

/* Si quisieramos interactuar con otras API como las de Twitter,Facebook,Github...  deberíamos crear un archivo
para cada servicio para cada una y así poder centralizar las llamadas y acceder a esas llamadas desde su propio servicio */

/* Importamos la librería trae y el archivo de configuración de servicios.
Cuando no pongo ruta en el import se refiere a una librería de npm, webpack lo identifica por mi */
import trae from 'trae'
import configService from './config.js'

/* Este objeto será para crear una nueva instancia de la librería trae.
El método que permite la creación es create() y baseUrl hará referencia a nuestra
API de config.js para que no estemos repitiendola en otros archivos */
const infoSeriesService = trae.create({
    baseUrl: configService.apiUrl
})

/* Exportamos el servicio para poder usarlo desde fuera */
export default infoSeriesService;