<template>
    <div>
    Listado de ventas registradas: 
    <ul>
    <li v-for="juego in JuegosParaVender" :key="juego.codigo">
      <div>Codigo:{{juego.codigo}} - Nombre:{{juego.nombre}} - Precio: ${{juego.precio}} </div>
    </li>
    </ul>
    Monto total de ventas:
    </div>
</template>

<script>
export default {
    name: 'component-name',
    props: {
        JuegosParaVender:{
            type:Array,
        }
    },
    data: function(){
        return {}
    },
    // computed: {},
    methods: {
        // -- Metodos
    },
    // components: {},
}
</script>

<style scoped>
    
</style>