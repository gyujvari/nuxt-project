
<template>
    <div>
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
        name: 'Table',
    }

</script>