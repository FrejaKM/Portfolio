

<script>
export default {
  mounted() {
    this.$overlay = document.getElementById('overlay');
    this.$container = document.getElementById('container');
    this.overlayHalfWidth = this.$overlay.clientWidth / 2;
    document.body.style.cursor = 'none'; // Hide cursor when component is mounted
  },
  methods: {
    revealImage(e) {
      this.leftPosition = e.pageX - this.$container.offsetLeft;
      this.topPosition = e.pageY - this.$container.offsetTop;
      this.$overlay.style.left = this.leftPosition - this.overlayHalfWidth + 'px';
      this.$overlay.style.top = this.topPosition - this.overlayHalfWidth + 'px';
    }
  },
  destroyed() {
    document.body.style.cursor = 'auto'; // Reset cursor style when component is destroyed
  },
  data() {
    return {
      leftPosition: 0,
      topPosition: 0,
      overlayHalfWidth: 0,
    };
  }
};
</script>

<template>
  <section id="container" class="w-screen h-screen relative" @mousemove="revealImage">
    <div id="overlay"></div>
    <h1 class="clash name text-left absolute bottom-10">Freja Kvistgaard Marott</h1>
  </section>
</template>

<style scoped>
h1 {
  font-size: 15vw;
  z-index: 10; /* Set a higher z-index to make sure it's in front */
  color: #bf2d18;
}

#container {
  background: url('/assets/pictures/selfie.jpg') center/cover no-repeat;
  position:absolute;
  top: 0;
  left: 0;

}

#overlay {
  position: absolute;
  z-index: 1; 
  width: 350px;
  height: 350px;
  border-radius: 50%;
  box-shadow: 0 0 0 100vw #e5e4d3; 
  background: #e5e4d3;
  transition: background .5s;
}

#container:hover #overlay {
  background: transparent;
}
</style>