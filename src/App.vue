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
          page: 15
        }
      })
      .then(result =>{
        this.store.cardList = result.data.results
        console.log(this.store.cardList);
      })
      .catch(error =>{
        console.log(error);
      })
    }
  },

  mounted(){
    this.getApi();
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
  background-image: linear-gradient(180deg, rgb(128, 114, 188) 0%, rgba(89, 81, 136, 1) 100%);
}

</style>
