<template>
    <div class="">
        <div class="main-text w-5/6 md:w-1/2 2xl:w-1/3 mx-auto">
            <h1 class="text-3xl pt-5 text-center">Jitter</h1>
            <h3 class="text-1xl mt-4 text-center">2024/01</h3>
            <div class="flex justify-center" >
                <img 
                    class="my-5 rounded-lg"
                    src="/image/works/work5/GIF.gif" 
                    alt="ftd"
                />
            </div>
            <p class="my-5">
                Using Max MSP's <NuxtLink class="my-link" to="https://cycling74.com/products/jitter" target="_blank">Jitter</NuxtLink> I leverage its graphical capabilities and real-time data manipulation features to create 3D animations. With this data, I can generate dynamic and interactive animations based on various parameters such as time and sound.
                 
            </p>
            <h2 class="text-2xl mt-10 mb-5">Report</h2>
            <div class="flex justify-center mt-5 mb-10">
                <iframe class="rounded-lg w-full h-80 youtube" data-src="https://www.youtube.com/embed/-00lHA5LF4A?si=9Y4YcHdhMbz5Nw_5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        </div>
    </div>
    </template>
    <script setup>
    useHead({
      title: 'Jitter',
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