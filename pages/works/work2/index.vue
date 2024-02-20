<template>
    <div class="">
        <div class="main-text w-5/6 md:w-1/2 2xl:w-1/3 mx-auto">
            <h1 class="text-3xl pt-5 text-center">Foley</h1>
            <div class="flex justify-center" >
                <img 
                    class="my-5 rounded-lg"
                    src="/image/works/work2/MICRO.jpeg" 
                    alt="ftd"
                />
            </div>
            <p class="my-5">
                Direct sound capture is essential for my film shoots, as well as recording foley and ambient sounds. Authenticity and sound immersion are crucial elements in my projects, as they allow me to faithfully translate reality and bring an authentic dimension to my creations.
            </p>
            <h2 class="text-2xl mt-10 mb-5">Report</h2>
            <div class="flex justify-center mt-5 mb-10">
                <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1752092922%3Fsecret_token%3Ds-oLOfJaM6SNL&color=%23909090&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/bluenoise2" title="‍" target="_blank" style="color: #cccccc; text-decoration: none;">‍</a> · <a href="https://soundcloud.com/bluenoise2/foley-sebastien-rigaudie/s-oLOfJaM6SNL" title="Foley - Sébastien Rigaudie" target="_blank" style="color: #cccccc; text-decoration: none;">Foley - Sébastien Rigaudie</a></div>
            </div>
            <blockquote class="twitter-tweet"><p lang="en" dir="ltr">Foley <a href="https://t.co/pqX31dm3zl">pic.twitter.com/pqX31dm3zl</a></p>&mdash; BLUE NOISE (@BLUEN0ISE) <a href="https://twitter.com/BLUEN0ISE/status/1725939795111596183?ref_src=twsrc%5Etfw">November 18, 2023</a></blockquote> <component is="script" async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></component>
        </div>

       
    </div>
    </template>
    <script setup>
    useHead({
      title: 'Foley',
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