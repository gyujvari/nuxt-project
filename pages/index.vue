<template>
  <div v-if="this.$store.state.isLoading">
      <Loading/>
  </div>

  <div v-else>
      <div v-if="!this.$store.state.isLoggedIn">
        <Login/>
      </div>
      <div v-else>
        <Table/>
      </div>
  </div>
  
 
</template>

<script>
import Login from '../components/Login.vue';
import Table from '../components/Table.vue';
import Loading from '../components/Loading.vue';

export default {
    name: "IndexPage",
    components: { Login ,Table, Loading }
}
</script>
