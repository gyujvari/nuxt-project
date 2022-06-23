
<template>
    <div>
          <b-card class="mt-3" header="Login">
             <b-form-input  v-model="credentials.user" placeholder="username" required></b-form-input>
             <b-form-input v-model="credentials.password" placeholder="password" type="password" required></b-form-input>
              <b-button @click="Login"  variant="primary">Login</b-button>
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
            Login() {
                console.log('click')
                this.$store.dispatch("fetchLogin", this.credentials)
            },
        }
    }

</script>