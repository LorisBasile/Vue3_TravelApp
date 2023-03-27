    <template>
        <nav id="nav">
            <router-link to="/" id="logo">Travel App</router-link> 
             <router-link v-for="destination in destinations" :key="destination.id" :to="{ name: 'destination.show', params: {id:destination.id, slug:destination.slug}}"  >
                        {{destination.name}}
            </router-link> 
        </nav>
    </template>

    <style lang="css">
        #nav .vue-forte{
            color: rgb(0, 255, 234);
            border-bottom: 2px solid rgb(0, 255, 234) ;
        }
    </style>

    <script>
        import sourceData from '@/data.json'
        export default {
            data(){
                return {
                    destinations: sourceData.destinations,
                };
            },
        };
    </script>