<template>
    <div>
        <h1>Ben tornato, {{ username }} </h1>
        <button class="btn" @click="loguot">Loguot</button>
        <router-link :to="{name: 'invoices'}">
            <button class="btn">Invoces</button>
        </router-link>
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
                this.$router.replace({name:'home', query:{loguot:null } })
            }
        }
    }
</script>