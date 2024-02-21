<template>
<div class="">
    <div class="main-text w-5/6 md:w-1/2 2xl:w-1/3 mx-auto">
        <h1 class="text-3xl pt-5 text-center">Sleeve Shock LONDON</h1>
        <h3 class="text-1xl mt-4 text-center">2023/01</h3>
        <div class="flex justify-center" >
            <img 
                class="my-5 rounded-lg"
                src="/public/image/works/work12/work12-s1.webp" 
                alt="ftd"
            />
        </div>
        <p class="my-5">
        Invited by GROSTESQUE VERTIGE to produce the sound of his Artificial Transcendence animation. Sleeve Shock was a great experience for me. Organized by Jonathan Armour, the theme of the exhibition was the
        <NuxtLink class="my-link" to="https://www.galleriesnow.net/shows/sleeve-shock/" target="_blank">Transhumanist</NuxtLink>.
        </p>
        <h2 class="text-2xl mt-10 mb-5">Report</h2>
        <div class="flex justify-center mt-5 mb-10">
            <iframe class="rounded-lg w-full h-80 youtube" data-src="https://www.youtube.com/embed/GdKReWA00k8?si=gj8ZH_R-QexCKN82" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <h2 class="text-2xl mt-10 mb-5">Other activity with Grotesque Vertige</h2>
        <div class="flex justify-center mt-5 mb-10">
            <iframe class="rounded-lg w-full h-80 youtube" data-src="https://www.youtube.com/embed/P1WDNgY5YfU?si=Z9Ums3TUb3tHNAr2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
    </div>
   
</div>
</template>
<script setup>
useHead({
  title: 'Sleeve Shock',
  meta: [
    {
      name: 'description',
      content: 'Work by FTD',
    },
  ],
});
</script>
<script>
export default {
    mounted () {
        console.log("work12 mounted...");
        initYoutubeIframe(this);
    }
}
</script>