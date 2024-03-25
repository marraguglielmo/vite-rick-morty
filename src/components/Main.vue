<script>
import {store} from '../data/store';
import Card from './partials/Card.vue';
    export default{
        components:{
            Card
        },
        
        data(){
            return{
                store
            }
        }
    }
</script>

<template>

    <div class="container d-flex row row-cols-4 m-auto ">

        <Card 
            v-for="card in this.store.cardList" 
            :key="card.id"
            :name="card.name"
            :status="card.status"
            :species="card.species"
            :img="card.image"
        />

    </div>
    
</template>

<style lang="scss" scoped>

</style>
