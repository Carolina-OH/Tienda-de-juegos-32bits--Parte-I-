<template>
    <div>
    Listado de ventas registradas: 
    <ul>
    <li v-for="juego in JuegosParaVender" :key="juego.codigo">
      <div>Codigo:{{juego.codigo}} - Nombre:{{juego.nombre}} - Precio: ${{juego.precio}} </div>
    </li>
    </ul>

    <p>Monto total de ventas:</p>
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
    p{
        margin-bottom:100px;
    }
</style>