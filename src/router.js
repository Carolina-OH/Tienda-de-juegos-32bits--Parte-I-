import Vue from 'vue'
import Router from 'vue-router'
const Inicio = () => import('./components/Inicio')
const busquedas = () => import('./views/busquedas.vue')
const ventas = () => import('./views/ventas.vue')
const total = () => import('./views/total.vue')

Vue.use(Router)

export default new Router({
    mode: 'history', 
    routes: [

        {
            path:'/inicio',
            name:'inicio',
            component:Inicio
        },
        {
            path:'/busquedas',
            name:'busquedas',
            component:busquedas
        },    
        {
            path:'/ventas',
            name:'ventas',
            component:ventas
        },    
        {
            path:'/total',
            name:'total',
            component:total
        }         

    ]
})