<template>
    <div>
    Juegos con stock: 
    <ul>
    <li v-for="juego in JuegosParaVender" :key="juego.codigo">
      <div>{{juego.codigo}}|{{juego.nombre}}|{{juego.stock}}|{{juego.precio}} <button>Vender</button></div>
    </li>
    </ul>
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