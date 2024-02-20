<template>
    <div class="">
        <div class="main-text w-5/6 md:w-1/2 2xl:w-1/3 mx-auto">
            <h1 class="text-3xl pt-5 text-center">Arduino</h1>
            <div class="flex justify-center" >
                <img 
                    class="my-5 rounded-lg"
                    src="/image/works/work3/6.webp" 
                    alt="ftd"
                />
            </div>
            <p class="my-5">

I began to develop a passion for the world of electronics at a young age, and this passion has only grown over time. I was fascinated by how electronic components could be assembled to create circuits and systems that cater to specific needs. This fascination intensified when I realized that I could combine my knowledge of electronics with my interests in sound and visual creation.
            </p>
            <div class="flex justify-center" >
                <img 
                    class="my-5 rounded-lg"
                    src="/image/works/work3/8.jpeg" 
                    alt="ftd"
                />
            </div>
            <p class="my-5">
                <NuxtLink class="my-link" to="https://www.arduino.cc/" target="_blank">Arduino</NuxtLink> is an open-source platform for electronic prototyping widely used to create interactive projects. It consists of hardware and software that are easy to use, making it a popular tool for enthusiasts, artists, students, and professionals. Additionally, Arduino is an electronic board equipped with a microcontroller and various input/output pins, enabling users to control a variety of electronic components and create custom prototypes.
            </p>
            <div class="flex justify-center" >
                <img 
                    class="my-5 rounded-lg"
                    src="/image/works/work3/4.jpeg" 
                    alt="ftd"
                />
            </div>
        </div>
       
    </div>
    </template>
    <script setup>
    useHead({
      title: 'Arduino',
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