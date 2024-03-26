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

<h1 class="text-center my-5">-Rick&Morty-</h1>

<div class="container p-2 w-50 mb-5 text-center">

    <label for="exampleDataList" class="form-label fs-4">Ricerca per nome</label>
    <input class="form-control form-control-lg" list="datalistOptions" id="exampleDataList" placeholder="Type to search...">
    <datalist id="datalistOptions">
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
