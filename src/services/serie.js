/* Servicio que interactuará con InfoSeries, buscará las canciones y obtendrá información sobre ellas. */

import infoSeriesService from './info-series.js'

const serieService = {}

serieService.search = function(q, parametros) {
    
    const type = 'serie';

    return infoSeriesService.get('/search/anime', {
        params: {
            q: q,
            order_by: parametros.order_by,
            order_by2: parametros.order_by2,
            limit: parametros.limit
        }
    })
    
    .then(res => {
        return res.data.results
    })
}

serieService.details = function(id) {
    return infoSeriesService.get(`/anime/${id}`)
    .then(res => {
        return res.data
    })
}

/* Exportamos el servicio  */
export default serieService