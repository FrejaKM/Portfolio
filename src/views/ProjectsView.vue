<script>
import ProjectCard from '../components/ProjectCard.vue'

export default {
    components: {
        ProjectCard
    }, 
    mounted() {
        document.body.style.cursor = 'auto'; // Hide cursor when component is mounted
    }
}
 
</script>

<template>

    <div id="project-grid" class="project-grid object-cover">

            <ProjectCard title="Random Walkers" description="Random walkers move across the canvas, leaving a trail of colorful points in their path. Each walker is represented by a point that changes color as it moves, selected from a predefined color palette. You can interact with the mouse by dragging it across the canvas, creating new walkers at each mouse position. The walkers then continue their random movement, adding to the dynamic and evolving visual composition. " video="/assets/videos/randomwalker2_1.mp4" style="grid-area: a"></ProjectCard>
        
            <ProjectCard title="Venus of Willendorf" description="The image of my favourite mythical figue, Venus of Willenford, is divided into a grid of rows and columns, and the brightness of each section is used to scale the size of the circles accordingly." gif="/assets/videos/venus.gif" style="grid-area: b"></ProjectCard>
        
            <ProjectCard  title="Perlin Pulse" description="A dynamic pattern created of dots connected by lines within a specified radius. By utilizing Perlin noise, I've infused organic movement into the dots, making them evolve over time. To optimize performance, I've efficiently looped through the dots, connecting them with lines only if they are within a defined distance from each other. " video="/assets/videos/flot_1.mp4" style="grid-area: c"></ProjectCard>
        
            <ProjectCard title="Curved Motion" description="By manipulating trigonometric functions and Perlin noise, I've generated an array of curved shapes that morph across the canvas. The code efficiently adjusts the size and position of these shapes based on sinusoidal curves and noise values, resulting in a dynamic visual composition. The project was orininally made to be saved as an SVG and penplotted on an AxiDraw." video="/assets/videos/perlinblop_1.mp4" link="/reklame" style="grid-area: d" ></ProjectCard>
        
            <ProjectCard title="Jazz in Willisau" description="This was made as part of a project based on making coded versions of different pre-existing posters. Each row of the grid is uniquely colored, with the number of colored squares per row determined by a set of predefined rules. By manipulating color arrays and incorporating randomization, I've created a dynamic composition that offers a diverse visual experience. The code arranges the squares in rows and columns, ensuring a visually balanced layout while adhering to the specified color distribution rules. " video="assets/videos/jazzy_1.mp4" style="grid-area: e"></ProjectCard>
        
            <ProjectCard title="Fibonacci particles" description="By manipulating physics principles and image analysis, I've created a dynamic composition of particles that react to the brightness of any reference image. The code efficiently manages thousands of particles, updating their positions and interactions to produce an organic and evolving visual effect. Additionally, I've implemented edge detection and boundary conditions to ensure realistic behavior of the particles within the canvas. " video="/assets/videos/spiralling_1.mp4" link="/reklame" style="grid-area: f"></ProjectCard>
        
            <ProjectCard title="Scribbles" description="This animated point simulation is made of points that move randomly within the canvas, changing its position at each frame. By adjusting the frame rate and stroke weight, the movement appears fluid and visually prominent. Additionally, boundary conditions ensure the point stays within the canvas, creating a seamless visual experience. " video="/assets//videos/scribble2_1.mp4"  link="/reklame" style="grid-area: g" ></ProjectCard>
        
            <ProjectCard title="Infinity Doughnut" gif="/assets/videos/nyd2.gif" description="The code utilizes transformation functions like translate(), rotate(), and scale() to manipulate the position and orientation of shapes. It dynamically modifies the parameters of the doughnut-like shape based on trigonometric functions (cos() and sin()) and time (millis())." style="grid-area: i"></ProjectCard>
        
            <ProjectCard title="Particle Spiral" description="The mouse position affects the direction and strength of the particle movement. The user can toggle the display of a vector field representing the underlying forces influencing particle movement, as well as toggle the visibility of the particles themselves. Additionally, the user can interactively add or remove particles from the simulation. " video="/assets/videos/spiral_1.mp4" style="grid-area: k"></ProjectCard>
        
            <ProjectCard title="Seaweed" description="This code creates an interactive particle system with three types of particles - A, B, and C. Each particle type has a unique color and behavior. The particles move across the canvas, changing direction based on Perlin noise. The user can interact with the simulation by moving the mouse, which affects the color of particles of type C. Additionally, the particles leave a fading trail behind them as they move. "  video="/assets/videos/seaweed_1.mp4"   style="grid-area: l"></ProjectCard>
        
            <ProjectCard title="Perlin Rhapsody" description="By manipulating Perlin noise, I've created a pattern of lines that smoothly fluctuate across the canvas. The code efficienorated a fixed random seed, allowing for infinite possibilities to generate static images with the code. " gif="/assets/videos/PERLIN.gif"  style="grid-area: m"></ProjectCard>

        </div>
 
</template>



<style>
.project-grid{
    display: grid;
    width: 100vw;
    height: 44.5vw;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(6, 1fr);
    gap: 10px;
    padding: 15px;
    margin: 0px;
 

    grid-template-areas:
    "a b c d d l"
    "a b c d d l"
    "a b k d d m"
    "f f k d d m"
    "f f e i g m"
    "f f e i g m";
    
    
}
.project-grid:hover > * {
    transition: 0.4s;
}
.project-grid:hover > *:hover {
    scale:1.01;
    transition: 0.4s;
}

@media (max-width: 1400px) {
    .project-grid {
        /* Define new grid template areas for smaller screens */
        
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-template-rows: repeat(9, 1fr);
        height: 150vw;
        grid-template-areas: 
        "a b d d"
        "a b d d"
        "a b d d"
        "f f d d"
        "f f c e"
        "m k g e"
        "m l h h"
        "m i h h"
        "j j h h";
    }
}

@media (max-width: 900px) {
    .project-grid {
        /* Define new grid template areas for smaller screens */
        grid-template-columns: 1fr 1fr;
        grid-template-rows: repeat(24, auto);
        height: 650vw;
        grid-template-areas: 
        "a b"
        "a b"
        "d d"
        "d d"
        "d d"
        "d d"
        "i e"
        "c e"
        "c e"
        "f f"
        "f f"
        "f f"
        "j j"
        "m g"
        "m g"
        "m k"
        "m k"
        "h h"
        "h h"
        "h h"
        "h h"
        "l l"
        "l l"
        "l l";
    }
}
</style>
