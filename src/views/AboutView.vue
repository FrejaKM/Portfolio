<script> 
export default {
  mounted() {
      document.body.style.cursor = 'auto'; // Hide cursor when component is mounted
  }
}
</script>


<template>
  <div id="about-grid" class="clash about-grid">
    
    <h3 style="grid-area: a">A bit about me</h3>

    <p style="grid-area: c" >As a designer, I have always been interested in visual communication and grew up in a family of photographers and filmmakers. At the age of 16, I started at a photography school, where my passion for the craft took off. I delved into exploring various genres and techniques, and began photographing at festivals and large concerts, on streets and in alleys, and especially my younger sister had to model for photoshoots at home. Over time, my interest evolved towards the more technical aspects of being a photographer, where I could truly implement a</p>

    <!-- <p style="grid-area: c"> Over time, my interest evolved towards the more technical aspects of being a photographer, and I started looking for other ways to combine my visual sense and passion for aesthetics and communication with something where I could truly implement a significant element of technique into it. And that's <br> when I discovered code.</p> -->
    
    <p style="grid-area: d">  significant element of technique into it. And that's when I discovered code. I find a lot of my inspiration in the maritime. The shapes and textures found in and around the ocean are some of my favourite, and I love combining the organic, wild, and untamed with the precise, controlled, and elegant digital environment that code offers. The site you're on right now is made in VUE with a color palette inspired by my own home - the place where I feel the safest in the world. The projects here are carefully selected to show you what I can do and what I love. </p>
    
    <img src="/assets/pictures/selfie.jpg" alt="" style="grid-area: f; object-fit: cover; width: 100%; height: 100%;" class="object-cover">
  
  </div>
</template>

<style>
#about-grid {
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(8, 4.8vw);
  display: grid;
  width: 100vw;
  gap: 20px;
  padding-left: 30px;
  padding-right: 30px;
  margin: px;
  font-size: 1.4vw;
  line-height: 1.5;
  grid-template-areas: 
  "a a f f f f"
  "a a f f f f"
  "a a f f f f"
  "a a f f f f"
  "a a f f f f"
  "a a c c d d"
  "a a c c d d"
  "a a c c d d"
  "a a c c d d"
  ;
}

h3 {
  font-size: 8vw;
  line-height: 0.8;
  color: #8aa977;
}

.object-cover {
  object-fit: cover;
}
#behance{
  text-decoration: underline;
}
</style>
