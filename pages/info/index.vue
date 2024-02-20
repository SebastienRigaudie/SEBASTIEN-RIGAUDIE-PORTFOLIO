<template>
<div class="">
    <div class="main-text w-5/6 md:w-1/2 2xl:w-1/3 mx-auto">
        <h1 class="text-3xl pt-5 text-center">INFO</h1>
        <h2 class="text-2xl mb-5">Experience</h2>
        <p class="mb-10">
            <span class="date-text"></span>
            <NuxtLink class="my-link" to="http://localhost:3002/works/work6" target="_blank">Mixeur et Montage son pour divers projets</NuxtLink><br>
            <span class="date-text">2024/01</span><br>
            <NuxtLink class="my-link" to="https://www.youtube.com/watch?v=040Yu1gxLyo&t=0s" target="_blank">Installation sonore et lumière pour la Fashion Week 2024 de Ziad Nakad</NuxtLink><br>
            <span class="date-text">2024/01</span><br>
            <NuxtLink class="my-link" to="http://localhost:3002/works/work11" target="_blank">Technicien Son (Stagiaire) chez REMOTE</NuxtLink><br>
            <span class="date-text">2023/11</span><br>
            <NuxtLink class="my-link" to="https://www.festivalnikon.fr/index.php/video/2023/3490" target="_blank">Opérateur son  pour le court métrage Farfadet (Nikon Festival)</NuxtLink><br>
            <span class="date-text">2023/07</span><br>
            <NuxtLink class="my-link" to="http://localhost:3002/works/work10" target="_blank">Régisseur Technicien Son à Saint-Rémy-lès-Chevreuse</NuxtLink><br>
            <span class="date-text">2023/03</span><br>
            <NuxtLink target="_blank">Technicien Son (Stagiaire) chez 4J Événements</NuxtLink><br>
            
        </p>
        <h2 class="text-2xl mb-5">Exibition</h2>
        <p class="mb-10">
          <span class="date-text">2023/06</span><br>
            <NuxtLink>Primeria (DJ Set)</NuxtLink><br>
          <span class="date-text">2023/01</span><br>
            <NuxtLink class="my-link" to="https://www.galleriesnow.net/shows/sleeve-shock/" target="_blank">Sleeve Shock London (Sound for the animation of Grostesque Vertige)</NuxtLink><br>

        </p>
        <h2 class="text-2xl my-5">My CV</h2>
        <p class="mb-10">
            <NuxtLink class="my-link" to="/image/works/work12/CV.webp" target="_blank">CV Sébastien Rigaudie</NuxtLink>
        </p>
        <h2 class="text-2xl my-5">Social Media</h2>
        <p class="mb-10">
            <NuxtLink class="my-link" to="https://www.linkedin.com/in/s%C3%A9bastien-rigaudie/" target="_blank">Linkedin</NuxtLink><br>
            <NuxtLink class="my-link" to="https://twitter.com/BLUEN0ISE" target="_blank">Twitter</NuxtLink><br>
            <NuxtLink class="my-link" to="https://soundcloud.com/bluenoise2" target="_blank">Soundcloud</NuxtLink><br>
            <NuxtLink class="my-link" to="https://bluenoise1.bandcamp.com/track/blue-noise-jhl-zy-magma-sonore" target="_blank">Bandcamp</NuxtLink><br>
        </p>
        <h2 class="text-2xl mb-5">Tool</h2>
        <p class="mb-10">
            <NuxtLink class="my-link" to="https://derivative.ca/" target="_blank">TouchDesigner</NuxtLink><br>
            <NuxtLink class="my-link" to="https://cycling74.com/products/max" target="_blank">Max MSP</NuxtLink><br>
            <NuxtLink class="my-link" to="https://www.avid.com/fr/pro-tools" target="_blank">Pro Tools</NuxtLink><br>
            <NuxtLink class="my-link" to="https://www.ableton.com/en/" target="_blank">Ableton</NuxtLink><br>
            <NuxtLink class="my-link" to="https://code.visualstudio.com/" target="_blank">Visual Studio Code</NuxtLink><br>
          </p>
    </div>
</div>
</template>
<style lang="scss" scoped>
.date-text{
  font-size: 0.75rem;
}
</style>
<script setup>
useHead({
  title: 'PORTFOLIO',
  meta: [
    {
      name: 'description',
      content: 'Info Page',
    },
  ],
});
</script>