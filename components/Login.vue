
<template>
    <div>
         <input type="text" v-model="credentials.user" placeholder="email"/>
         <input type="text" v-model="credentials.password" placeholder="email"/>
         <button @click="Login">Login</button>
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