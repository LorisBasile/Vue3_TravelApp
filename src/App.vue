  <template>
    <TheNavigation></TheNavigation>
    <div class="container">
      <router-view v-slot="{Component}">
        <transition name="slide" mode="out-in">
          <component :is="Component" :key="$route.path"></component>
        </transition>
      </router-view>
   
    </div>
  </template>
  <script>
    import TheNavigation from './components/TheNavigation.vue';
    
    export default{
      components: {TheNavigation}
    }
  </script>

  <style lang="css">
    .slide-enter-active,
    .slide-leave-active{
      transition: opacity 1s, transform 1s;
      
    }
    .slide-ender-from,
    .slide-leave-to{
      opacity: 0;
      transform: translateX( -30%);
    }

  </style>
