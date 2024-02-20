<template>
    <div class="">
        <div class="main-text w-5/6 md:w-1/2 2xl:w-1/3 mx-auto">
            <h1 class="text-3xl pt-5 text-center">Max MSP</h1>
            <div class="flex justify-center" >
                <img 
                    class="my-5 rounded-lg"
                    src="/image/works/work5/Max.jpeg" 
                    alt="ftd"
                />
            </div>
            <p class="my-5">
                I use  <NuxtLink class="my-link" to="https://www.galleriesnow.net/shows/sleeve-shock/" target="_blank">Max MSP</NuxtLink>, a programming software that allows me to create personalized musical and visual experiences. With Max MSP, I can craft my own sounds by exploring a variety of sound synthesis techniques and manipulating audio and visual data in real-time.
            </p>
            <h2 class="text-2xl mt-10 mb-5">Report</h2>
            <div class="flex justify-center mt-5 mb-10">
                <iframe class="rounded-lg w-full h-80 youtube" data-src="https://www.youtube.com/embed/gyb6qyKCLZc?si=sXaQhWNZlgOG25jB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            <p class="my-5">
                To enhance my creative possibilities, I sometimes integrate Max MSP with an <NuxtLink class="my-link" to="https://www.arduino.cc/" target="_blank">Arduino</NuxtLink>, an electronic prototyping platform. By connecting these two tools, I can create interactive and tangible synthesizers.
            </p>
        </div>
       
    </div>
    </template>
    <script setup>
    useHead({
      title: 'Max MSP',
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