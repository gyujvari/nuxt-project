<template>
    <div>
        <div v-if="!this.$store.state.isLoggedIn">
            <div class="not-logged-in">
                You Need To Login First..
            </div>
        </div>
        <div  v-else>
            <div class="container">
                <b-card class="mt-3" header="Table">
                    <b-table striped hover :items="this.$store.state.data"></b-table>
                    <b-button class="mt-3" @click="Logout"  variant="primary">Log out</b-button>
                </b-card>
            </div>
        </div>
    </div>
   
</template>
<script>
    export default{
        name: 'Table',
          methods: {
            Logout() {
                this.$router.push({name: 'index'});
                // this.$store.commit("setLoggedIn", false)
            },
        }
    }
</script>