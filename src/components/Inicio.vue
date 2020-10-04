<template>
     <div>
    
    </div>
</template>

<script>
import {mapState} from 'vuex'
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
    // components: {},
}
</script>

<style scoped>
    
</style>