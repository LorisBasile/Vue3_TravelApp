<template>
    <div>
        <h1>Ben tornato, {{ username }} </h1>
        <button class="btn" @click="loguot">Loguot</button>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                username: window.user
            }
        },
        methods:{
            loguot(){
                window.user = null 
                this.$router.push({name:'home'})
            }
        }
    }
</script>