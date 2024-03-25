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
          page: 2
        }
      })
      .then(result =>{
        this.store.pageList = result.data.results
        console.log(this.store.pageList);
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

</style>
