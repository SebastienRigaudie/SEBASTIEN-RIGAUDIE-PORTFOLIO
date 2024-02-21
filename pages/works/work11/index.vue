<template>
<div class="">
    <div class="main-text w-5/6 md:w-1/2 2xl:w-1/3 mx-auto">
        <h1 class="text-3xl pt-5 text-center">Fashion Week PARIS 2024</h1>
        <h3 class="text-1xl mt-4 text-center">2024/01</h3>
        <div class="flex justify-center" >
            <img 
                class="my-5 rounded-lg"
                src="public/image/works/work11/1.jpeg" 
                alt="ftd"
            />
        </div>
        <p class="my-5">
            As intern at <NuxtLink class="my-link" to="http://www.remotefrance.com/" target="_blank">Remote</NuxtLink> company, I had the opportunity to participate on the sound and light installation of the Ziad Nakad's Fashion Week. Work on this event was an incredible and fulfilling experience for me.
        </p>
        <div class="flex justify-center" >
            <img 
                class="my-5 rounded-lg"
                src="public/image/works/work11/2.jpeg" 
                alt="ftd"
            />
        </div>
        <p class="my-5">
           My role was the assisting of the Remote team in the setting up of the sound and the light ambiance for the fashion show. I was involved in tasks such as equipment setup, cable organization, and general logistical support. This experience provided me with valuable practical knowledge in the production of high-profile fashion events. I learned a great deal working alongside experienced professionals, giving me a tangible insight into the fashion and entertainment industry. It was a fantastic experience that strengthened my interest in this field and provided me with valuable behind-the-scenes exposure to world-renowned events like the Fashion Week.
        </p>
        <h2 class="text-2xl mt-10 mb-5">Report</h2>
        <div class="flex justify-center mt-5 mb-10">
            <iframe class="rounded-lg w-full h-80 youtube" data-src="https://www.youtube.com/embed/040Yu1gxLyo?si=WqwknfG0hgYHfthI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <p class="my-5">
        </p>
        <p class="m-5">
        </p>
    </div>
   
</div>
</template>
<script setup>
useHead({
  title: 'Fashion Week 2024',
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
        console.log("work11 mounted...");
        initYoutubeIframe(this);
    }
}
</script>