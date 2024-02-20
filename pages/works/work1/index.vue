<template>
    <div class="">
        <div class="main-text w-5/6 md:w-1/2 2xl:w-1/3 mx-auto">
            <h1 class="text-3xl pt-5 text-center">Analogique</h1>
            <div class="flex justify-center" >
                <img 
                    class="my-5 rounded-lg"
                    src="/image/works/work1/2.webp" 
                    alt="ftd"
                />
            </div>
            <p class="my-5">

                I'm drawn to both the digital and analog worlds. I've delved into the realm of Eurorack modular systems, starting with my first semi-modular module, the Behringer Neutron. Later on, I expanded my horizons by adding a groove box to my collection.
            </p>
            <div class="flex justify-center" >
                <img 
                    class="my-5 rounded-lg"
                    src="/image/works/work1/IMG_2841.jpeg" 
                    alt="ftd"
                />
            </div>
            <p class="my-5">
                Additionally, I'm intrigued by analog mixing modules, which impart warmth and character to my sonic creations.
            </p>
        </div>
       
    </div>
    </template>
    <script setup>
    useHead({
      title: 'Analogue',
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