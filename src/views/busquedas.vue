<template>
<div>
    <div class="filtro">
    <label>Seleccione código de juego</label>
    <select>
    <option></option>
    </select>
    <button>Buscar</button>
    </div>
</div>
</template>

<script>
export default {
    name: 'presentación',
    props: {    
        Juegos:{
            type: Array,
            required: true,
    },
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
    .filtro{
        display:flex;
        justify-content:center;
        margin-top:40px;
        font-size:20px;
    }
    label, button{
        margin-right:20px;
        margin-left:20px
    }
</style>