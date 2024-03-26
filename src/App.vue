<script>
import axios from 'axios';
import Main from './components/Main.vue';
import Header from './components/Header.vue';
import {store} from './data/store';
export default{
  components:{
    Header,
    Main
  },

  data(){
    return{
      store
    }
  },

  methods:{
    getApi(){
      axios.get(this.store.apiUrl, {
        params:{
          page: 14
        }
      })
      .then(result =>{
        this.store.cardList = result.data.results
        console.log(this.store.cardList);
      })
      .catch(error =>{
        console.log(error);
      })
    },

    getAllName(){
      axios.get(this.store.nameUrl)
      .then(newRes =>{
        console.log(newRes.data.results);
        // rimappo la lista di tutti i personaggi
        this.store.nameList = newRes.data.results.map(name => name.name);
        // in questo modo ottengo solo i nomi
        console.log(this.store.nameList);
      })
    }
  },

  mounted(){
    this.getApi();
    this.getAllName();
  }
}
</script>

<template>

  <Header />

  <Main />

</template>

<style lang="scss">

body{
  background-color: rgb(141, 128, 202);
  background-image: linear-gradient(180deg, rgb(139, 128, 189) 0%, rgba(89, 81, 136, 1) 100%);
}

</style>
