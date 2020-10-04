<template>
    <div>
    <div class="filtro">
    <label>Seleccione código de juego</label>
    <select>
    <option v-for="juego in Juegos" :key="juego.codigo" v-text="juego.codigo"></option>
    </select>
    <button>Buscar</button>
    </div>
</div>
</template>

<script>
export default {
    name: 'filter',
        props: {    
        Juegos:{
            type: Array,
            required: true,
        }
    },
    data: function(){
        return {}
    },
    // computed: {},
    methods: {
        // -- Metodos
    },
    components: {

    },
}
</script>

<style scoped>
        label, button{
        margin-right:20px;
        margin-left:20px
    }
</style>