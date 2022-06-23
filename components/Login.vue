
<template>
    <div class="container">
          <b-card class="mt-3" header="Login">
            <b-form  @submit.stop.prevent="onSubmit">
                <b-form-input   v-model="credentials.user" placeholder="username" required></b-form-input>
                <b-form-input  class="mt-3" v-model="credentials.password" placeholder="password" type="password" required></b-form-input>
                <b-button class="mt-3" type="submit" variant="primary">Login</b-button>
            </b-form>
            <div  class="mt-3" v-if="this.$store.state.unAuthorized">{{this.$store.state.errorMessage}}</div>
          </b-card>
    </div>
</template>
<script>
    export default{
        name: 'Login',
        data () {
            return{
                 credentials:{
                    user:'',
                    password:'',
                },
            }
        },
        methods: {
            onSubmit() {
                this.$store.dispatch("fetchLogin", this.credentials)
            },
        }
    }

</script>
<style>
    .container{
        padding: 100px;
    }
</style>