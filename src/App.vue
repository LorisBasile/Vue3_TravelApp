  <template>
    <TheNavigation></TheNavigation>
    <div class="container">
      <router-view class="view left-sidebar" name="LeftSidebar"></router-view>
      <router-view v-slot="{Component}" class="main-view">
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
    .container{
      display: flex;
    }
    .left-sidebar{
      width: 20%;
    }
    .main-view{
      width: 100%;
    }
  </style>
