<template>
    <div class="content">
      <section class="grid clash text-left absolute w-screen h-screen">
        <h4 class="grid-area-text clash">Let's talk!</h4>
        <div class="grid-area-links social-links">
          <a class="linkedIn" href="https://www.linkedin.com/in/freja-kvistgaard-marott/" target="_blank">LinkedIn</a>
          <a class="Instagram" href="https://www.instagram.com/frejamarott/" target="_blank">Instagram</a>
          <a class="Behance" href="https://www.behance.net/frejamarott" target="_blank">Behance</a>
        </div>
      </section>
    </div>
  </template>
  
  <style scoped>
  .grid {
    display: grid;
    grid-template-columns: auto auto; /* Auto-sized columns for h4 and links */
    gap: 30px; /* Space between text and links */
    justify-content: center; /* Horizontally center the grid */
    align-items: center; /* Vertically center the grid */
    height: 80vh; /* Full height of the screen */
    width: 100vw; /* Full width of the screen */
  }
  
  .grid-area-text {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  h4 {
    font-size: 15vw; /* Very large text */
    color: #e9b3d3;
    line-height: 0.8;
    white-space: nowrap; /* Prevent text wrapping */
    margin: 0; /* Remove default margins */
  }
  
  .grid-area-links {
    display: flex;
    flex-direction: column; /* Stack links vertically */
    justify-content: center; /* Vertically center the links */
    gap: 2vw; /* Space between each social link */
  }
  
  .social-links a {
    font-size: 1.5vw;
    color: #E96F08;
    text-decoration: none;
    transition: transform 0.2s ease-in-out;
  }
  
  .social-links a:hover {
    transform: scale(1.1); /* Hover effect to enlarge */
  }
  
  /* Media Queries for responsiveness */
  @media (max-width: 768px) {
    .grid {
      grid-template-columns: 1fr; /* Stack h4 and links vertically */
      gap: 10px;
    }
  
    h4 {
      font-size: 12vw;
    }
  
    .grid-area-links {
      align-items: center;
    }
  }
  
  @media (max-width: 480px) {
    h4 {
      font-size: 10vw;
    }
  
    .social-links a {
      font-size: 3.5vw;
    }
  }
  </style>
  