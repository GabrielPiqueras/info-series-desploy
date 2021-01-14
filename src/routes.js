import Search from '@/components/Search.vue'
import About from '@/components/About.vue'
import SerieDetail from '@/components/SerieDetail.vue'

const routes = [
    { path: '/', component: Search, name: 'search' },
    { path: '/about', component: About, name: 'about' },
    { path: '/serie/:id', component: SerieDetail, name: 'serie' }
]

export default routes;