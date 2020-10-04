<template>
<div>
    <div class="filtro">
        <filtro :Juegos="Juegos"></filtro>

    </div>
</div>
</template>

<script>
import {mapState} from 'vuex';
import filter from '../components/filtro';
export default {
    name: 'presentacion',
    data: function(){
        return {}
    },
    computed: {
          ...mapState(['Juegos'])
    },
    methods: {
        // -- Metodos
    },
    components: {
        'filtro':filter,
    },
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