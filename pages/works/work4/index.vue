<template>
    <div class="">
        <div class="main-text w-5/6 md:w-1/2 2xl:w-1/3 mx-auto">
            <h1 class="text-3xl pt-5 text-center">TouchDesigner</h1>
            <div class="flex justify-center" >
                <img 
                    class="my-5 rounded-lg"
                    src="/image/works/work4/TD.jpeg" 
                    alt="ftd"
                />
            </div>
            <p class="my-5">
              <NuxtLink class="my-link" to="https://derivative.ca/" target="_blank">TouchDesigner</NuxtLink> is the primary tool I use to bring my visual ideas to life. With its features, I can create immersive 3D environments and dynamic animations with great precision. I particularly appreciate using TouchDesigner to generate visuals from point clouds, allowing me to create unique and captivating animations. 
            </p>
            <h2 class="text-2xl mt-10 mb-5">Report</h2>
            <blockquote class="twitter-tweet"><p lang="en" dir="ltr">data_animation made with touchdesigner <a href="https://t.co/30tk7dWVmN">pic.twitter.com/30tk7dWVmN</a></p>&mdash; BLUE NOISE (@BLUEN0ISE) <a href="https://twitter.com/BLUEN0ISE/status/1746666297348194635?ref_src=twsrc%5Etfw">January 14, 2024</a></blockquote> <component is="script" async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></component>
        </div>
       </div>
    </template>
   
   <script setup>
    useHead({
      title: 'TouchDesigner',
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