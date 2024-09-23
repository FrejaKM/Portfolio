<script>
import { RouterLink } from 'vue-router'
export default {
    props: ['title'],
}
</script>


<template>
    <div class="button" v-if="this.title === $route.name" >< {{title}} ></div>
    <div class="button" v-else >{{title}}</div>
</template>

<style>
.button{
    padding-top: 50px;
    padding-bottom: 50px;
    font-size: 1.5vw;
}
.button:hover{
    scale: 1.2;
  }

.button:active{
    color:rgb(254, 136, 0);
    scale:1;
}
</style>