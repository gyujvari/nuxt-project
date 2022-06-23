<template>
    <div class="container">
        <b-card class="mt-3" header="Table">
            <b-table striped hover :items="this.$store.state.data"></b-table>
        </b-card>
    </div>
</template>
<script>
    export default{
        name: 'Table',
    }
</script>