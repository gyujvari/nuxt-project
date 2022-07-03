<template>
  <div v-if="this.$store.state.isLoading">
      <Loading/>
  </div>
  <div v-else>
      <Login/>
  </div>
  
 
</template>

<script>
import Login from '../components/Login.vue';
import Table from '../components/Table.vue';
import Loading from '../components/Loading.vue';

export default {
    name: "IndexPage",
    components: { Login ,Table, Loading },
}
</script>
