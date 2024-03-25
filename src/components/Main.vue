<script>
import {store} from '../data/store';
    export default{
        data(){
            return{
                store
            }
        }
    }
</script>

<template>
    <div>{{ store.counter }}</div>
</template>

<style lang="scss">

</style>
