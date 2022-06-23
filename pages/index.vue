<template>
<div v-if="!this.$store.state.isLoggedIn">
  <Login/>
</div>
<div v-else>
  <Table/>
</div>
</template>

<script>
import Login from '../components/Login.vue';
import Table from '../components/Table.vue';
export default {
    name: "IndexPage",
    components: { Login ,Table }
}
</script>
