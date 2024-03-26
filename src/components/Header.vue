<script>
import {store} from '../data/store';
export default{
    data(){
        return{
            store,
            nameToSearch: ''
        }
    },

    methods:{
        // aggiungo la funzione per la ricerca del nome
        search(){
        console.log('ricerca');
        }
    }
}
</script>

<template>

<h1 class="text-center my-5">-Rick&Morty-</h1>

<div class="container p-2 w-50 mb-5 text-center">

    <input
        class="form-control form-control-lg"
        list="datalistOptions"
        id="exampleDataList"
        placeholder="Cerca un personaggio"
        v-model.trim="nameToSearch"
        @keyup.enter="search"
    >
    <datalist id="datalistOptions">
        <!--  effettuo un ciclo v-for nell'array rimappato con solo i nomi -->
        <option 
            v-for="(name, index) in this.store.nameList"
            :key="index"
            :value="name"
        ></option>
    </datalist>
</div>

</template>

<style lang="scss" scoped>

h1{
    font-size: 4rem;
}

</style>
