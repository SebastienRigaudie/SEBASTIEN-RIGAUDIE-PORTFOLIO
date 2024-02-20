<template>
    <div class="">
        <div class="main-text w-5/6 md:w-1/2 2xl:w-1/3 mx-auto">
            <h1 class="text-3xl pt-5 text-center">ProTools</h1>
            <div class="flex justify-center" >
                <img 
                    class="my-5 rounded-lg"
                    src="/image/works/work6/12.jpeg" 
                    alt="ftd"
                />
            </div>
            <p class="my-5">
                For me, <NuxtLink class="my-link" to="https://www.avid.com/fr/pro-tools" target="_blank">Pro Tools</NuxtLink> is an essential tool for sound mixing and editing. Thanks to its advanced features, I have been able to work on several projects as a sound mixer and editor, including the short film "Farfadet" presented at the Nikon Festival.
            </p>
            <h2 class="text-2xl mt-10 mb-5">Report</h2>
            <div class="flex justify-center mt-5 mb-10">
                <iframe class="rounded-lg w-full h-80 youtube" data-src="https://www.youtube.com/embed/iGmzcii9v-E?si=zzn2k59YGHtFd-c0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        </div>
       
    </div>
    </template>
    <script setup>
    useHead({
      title: 'Pro Tools',
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