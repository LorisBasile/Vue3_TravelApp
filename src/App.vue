  <template>
    <TheNavigation></TheNavigation>
    <div class="container">
      <router-view v-slot="{Component}">
        <transition name="moveUp" >
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
    /* .moveUp-enter-active {
      animation: fedeIn 1.3s ease-in;
    }

    @keyframes fedeIn {
      0% {opacity:0;}
      50% {opacity:0.5;}
      100% {opacity:1;}
    }

    .moveUp-leave-active{
      animation: moveUp 0.3s ease-in;
    }

    @keyframes moveUp {
      0% {transform: translateY(0);}
      90% {transform: translateY(-400px);}
    } */

  </style>
