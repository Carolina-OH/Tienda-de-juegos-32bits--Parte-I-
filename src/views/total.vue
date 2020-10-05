<template>
<div>
    
    <h1> TOTAL VENTAS</h1>
    <div class="total">
    <sumatoria :JuegosParaVender="JuegosParaVender"></sumatoria>
    </div>
</div>
</template>

<script>
import {mapState, mapGetters} from 'vuex';
import sumatoria from '../components/sumatoria'
export default {
    name: 'presentación',
    // props: {},
    data: function(){
        return {}
    },
    computed: {
        ...mapState(['Juegos']),
        ...mapGetters(['totalJuegos','JuegosParaVender']),
    },
    methods: {
        // -- Metodos
    },
     components: {
         'sumatoria':sumatoria
     },
}
</script>

<style scoped>
    h1{
        text-align:center;
        margin-top:70px;
        margin-bottom:30px;
    }
     .total{
        text-align:left;
        display:flex;
        flex-direction:column;
        width:800px;
        justify-content:center;
        margin:auto ;
        margin-top:50px;
    
    }
</style>