<template>
    <div class="container">
        <b-card class="mt-3" header="Table">
            <b-table striped hover :items="this.$store.state.data"></b-table>
             <b-button class="mt-3" @click="Logout"  variant="primary">Log out</b-button>
        </b-card>
    </div>
</template>
<script>
    export default{
        name: 'Table',
          methods: {
            Logout() {
                this.$store.commit("setLoggedIn", false)
            },
        }
    }
</script>