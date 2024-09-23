<script>
import NavButton from './components/NavButton.vue';
import { RouterLink, RouterView } from 'vue-router';

export default {
  components: {
    NavButton,
    RouterLink,
    RouterView
  },
};
</script>

<template>
  <div id="app">
    <nav class="navbar grid grid-cols-7 grid-rows-1 text-4xl clash sticky w-screen top-0 z-10">
      <RouterLink to="/" class="col-start-1 col-span-1"><NavButton title="Home" class="text-center"></NavButton></RouterLink>
      <RouterLink to="/projects" class="col-start-2 col-span-1"><NavButton title="Processing" class="text-center"></NavButton></RouterLink>
      <RouterLink to="/new" class="col-start-3 col-span-1"><NavButton title="Photography" class="text-center"></NavButton></RouterLink>
      <RouterLink to="/about" class="col-start-6 col-span-1"><NavButton title="About" class="text-center"></NavButton></RouterLink>
      <RouterLink to="/contact" class="col-start-7 col-span-1"><NavButton title="Contact" class="text-center"></NavButton></RouterLink>
  </nav>
  
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
    
  </div>
</template>

<style>
.navbar{
color: #7ebce8;
}
body {
  background-color: #E5E4D3;
  /*overflow-x: hidden;
  overflow-y: hidden;*/
}

#app{
  color: #E96F08;
}

/*.router-link-active{
  text-decoration: underline;
}*/

.fade-enter-from,
.fade-leave-to {
opacity: 0;
transform: opacity(0.1);
}

.fade-enter-active{
  transition: 0.5s ease-in;
}
.fade-leave-active { 
transition: 0.5s ease-out;
}

</style>
