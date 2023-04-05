
    <template>
        <div>
            <h1>Invoices</h1>
        </div>
    </template>

    <script>
        import {onBeforeRouteLeave} from 'vue-router'
        export default {
            setup(){
                onBeforeRouteLeave((to,from) => {
                    const answer = window.confirm('are you sure you to leave ?  invoices are super')
                    if(!answer) return false 
                })
            }
        }
       
    </script>