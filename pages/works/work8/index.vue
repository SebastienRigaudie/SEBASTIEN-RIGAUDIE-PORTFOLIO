<template>
    <div class="">
        <div class="main-text w-5/6 md:w-1/2 2xl:w-1/3 mx-auto">
            <h1 class="text-3xl pt-5 text-center">PointCloud</h1>
            <h3 class="text-1xl mt-4 text-center">2023/07</h3>
            <div class="flex justify-center" >
                <img 
                    class="my-5 rounded-lg"
                    src="/image/works/work8/IMG_2961.jpeg" 
                    alt="ftd"
                />
            </div>
            <p class="my-5">
                By leveraging <NuxtLink class="my-link" to="https://derivative.ca/" target="_blank">TouchDesigner's</NuxtLink> graphical capabilities and real-time data manipulation features, I import point cloud files from the internet to incorporate them into my creations. These files contain data about the three-dimensional position of each point, along with additional information such as color or intensity.
            </p>
            <h2 class="text-2xl mt-10 mb-5">Report</h2>
            <div class="flex justify-center mt-5 mb-10">
                <iframe class="rounded-lg w-full h-80 youtube" data-src="https://www.youtube.com/embed/dj9nIX1Hfq8?si=Lmx_5dfFHVJnudfP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        </div>
    </div>
    </template>
    <script setup>
    useHead({
      title: 'Point Cloud',
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