<script>
import { RouterLink } from 'vue-router'
export default {
    props: ['title', 'description', 'gif', 'video'],
    computed: {
        styles () {
            return [this.gif && `background-image: url(${this.gif}); background-position:center center;`]
        }
    }
}
</script>

<template>
   
    <div class="card clash justify-center items-center text-white bg-cover relative" :style="styles">
        <video v-if="video" :src="video" playsinline="true" autoplay="true" muted="true" loop class="w-full h-full object-cover
         absolute"></video>
        <div class="flex info p-1 bg-black/60 z-10 w-full h-full justify-center items-center">
            <div class="box">
            <h2 class="header text-center text-xl">{{title}}</h2>
            <p class="descripion text-center">{{description}}</p>
            </div>
           
        </div>
    </div>

</template>

<style scoped>

.card{
    font-size: .7vw;
}
.header{
    font-size: 1.2vw;
}
.box{
padding: 10px;
}

.info{
    opacity: 0;
    scale: 1;
}
.card:hover {
   .info{
    transition: 0.9s;
    scale: 1;
    opacity: 1;
    } 
}
</style>