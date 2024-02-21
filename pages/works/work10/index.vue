<template>
    <div class="">
        <div class="main-text w-5/6 md:w-1/2 2xl:w-1/3 mx-auto">
            <h1 class="text-3xl pt-5 text-center">Sound Technician</h1>
            <h3 class="text-1xl mt-4 text-center">2023/07</h3>
            <div class="flex justify-center" >
                <img 
                    class="my-5 rounded-lg"
                    src="/image/works/work10/IMG_1814 2.webp" 
                    alt="ftd"
                />
            </div>
            <p class="my-5">
                I provided temporary the replacement (2 months) for the sound director of the Jean Racine theatre in Saint-Rémy-lès-Chevreuse, where I supervised all aspects related to the sound production of shows (plays and concerts). This role involved working closely with the production team, including the stage directors, actors and technical staff, to ensure the smooth running of the sound program during the shows. My responsibilities included the designing of the soundscapes, selecting and preparing sound equipment, and operating audio consoles during the shows. Through this role, I gained valuable experience in the management of the complex audio systems and working effectively in a dynamic and creative environment.
            </p>
            <div class="flex justify-center" >
                <img 
                    class="my-5 rounded-lg"
                    src="/image/works/work10/IMG_1813 2.jpeg" 
                    alt="ftd"
                />
            </div>
        </div> 
    </div>
    </template>
    <script setup>
    useHead({
      title: 'Régisseur Son',
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