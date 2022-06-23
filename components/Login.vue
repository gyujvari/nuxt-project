
<template>
    <div>
         <input type="text" v-model="credentials.user" placeholder="email"/>
         <input type="text" v-model="credentials.password" placeholder="email"/>
         <button @click="test">clickme</button>
         <button @click="check">gettertest</button>
         <div v-for="p in this.$store.state.data" :key="p.id">
            {{ p.text }}
          </div>
          <tbody>
                <tr v-for="item in this.$store.state.data" :key="item.id">
                    <td>{{item.text}} {{item.id}}</td>
                </tr>
            </tbody>
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
                this.$store.dispatch("fetchSomething", this.credentials)
            },
        }
    }

</script>