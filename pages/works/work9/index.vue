<template>
    <div class="">
        <div class="main-text w-5/6 md:w-1/2 2xl:w-1/3 mx-auto">
            <h1 class="text-3xl pt-5 text-center">BLUE NOISE CD</h1>
            <h3 class="text-1xl mt-4 text-center">2023/07</h3>
            <div class="flex justify-center" >
                <img 
                    class="my-5 rounded-lg"
                    src="/image/works/work9/IMG_2322.webp" 
                    alt="ftd"
                />
            </div>
            <p class="my-5">
                I'm passionate about music, and under the artist name <NuxtLink class="my-link" to="https://soundcloud.com/bluenoise2" target="_blank">BLUE NOISE</NuxtLink>, I enjoy exploring different musical styles, drawing inspiration particularly from acousmatic and film music. In my compositions, I like to create various sound atmospheres by using elements of sound design and so bring my ideas to life. I enjoy to mix abstract sounds with suggestive melodies, thus offering an immersive listening experience. Additionally, I'm also interested in foley techniques, which allow me to add realistic touches to my music. This adds an extra dimension to my compositions, giving them a particular texture and depth.

            </p>
            <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1333488253&color=%23909090&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/bluenoise2" title="‍" target="_blank" style="color: #cccccc; text-decoration: none;">‍</a> · <a href="https://soundcloud.com/bluenoise2/la-fleur-du-mal" title="La Fleur du Mal" target="_blank" style="color: #cccccc; text-decoration: none;">La Fleur du Mal</a></div>
        </div>
        
       
    </div>
    </template>
    <script setup>
    useHead({
      title: 'BLUE NOISE CD',
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