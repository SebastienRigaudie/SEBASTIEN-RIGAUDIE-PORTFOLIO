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
                I held the position of sound director at the Theatre of Saint-Rémy-lès-Chevreuse, where I was responsible for overseeing all aspects related to sound production for theatrical performances. This role involved close collaboration with the production team, including directors, actors, and technical staff, to ensure the seamless integration of sound elements into each production.
                My responsibilities included designing soundscapes, selecting and preparing sound equipment, conducting rehearsals to refine sound cues, and operating audio consoles during performances. I worked diligently to create immersive auditory experiences that complemented and enhanced the storytelling on stage.
                Through this role, I gained valuable experience in managing complex sound systems, troubleshooting technical issues under pressure, and working effectively within a dynamic and creative environment.
            </p>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21064.73006190281!2d2.0613365193910314!3d48.70373667856339!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e680015ccff7a1%3A0x40b82c3688c3790!2sSaint-R%C3%A9my-l%C3%A8s-Chevreuse!5e0!3m2!1sfr!2sfr!4v1708377668849!5m2!1sfr!2sfr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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