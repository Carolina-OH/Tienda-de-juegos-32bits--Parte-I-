<template>
     <div>
    </div>
</template>

<script>
import {mapState} from 'vuex';
//import busqueda from '@/views/Presentacion';
export default {
    name: 'component-name',
    props: {
    },
    data: function(){
        return {}
    },
    computed: {
          ...mapState(['juegos']),
    },
    methods: {
        // -- Metodos
    },
    components: {
        //busqueda
    },
}
</script>

<style scoped>
    
</style>