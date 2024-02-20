<template>
<div class="">
    <div class="main-text w-5/6 md:w-1/2 2xl:w-1/3 mx-auto">
        <h1 class="text-3xl pt-5 text-center">ABOUT</h1>
        <div id="icon-area" >
            <nuxt-img preload  
                ref="profileIcon"
                id="profile-icon"
                class="w-1/2 md:w-1/2 xl:w-1/3 my-5 rounded-full"
                src="/image/about/1676906946340.jpeg" 
                alt="ftd-icon"
            />
        </div>
        <p class="text-center mb-16">
            Sébastien Rigaudie<br> Sound Designer / Sound Editor / Sound Mixer / Sound Technician / Visual Artist  
            <br>  
           
        </p>
        <h2 class="text-2xl">Biography</h2>
        <p class="my-5">
            My name is Sébastien Rigaudie and I am in my second year of a Bachelor's degree in Sound Engineering at 3IS International Institute of Image and Sound. Passionate about sound, I have devoted a large part of my professional journey to exploring the multiple facets of sound design and sound editing. My passion has led me to undertake a multitude of projects in these fields, ranging from immersive sound design to creating unique atmospheres for various productions.
        </p>
        <p class="mb-10">
            Je m'appelle Sébastien Rigaudie et je suis en deuxième année de bachelor en ingénierie sonore à 3IS Institut International de l'Image et du Son. Passionné par le son, j'ai consacré une grande partie de mon parcours professionnel à explorer les multiples facettes du design sonore et du montage son. Ma passion m'a conduit à réaliser une multitude de projets dans ces domaines, allant de la conception sonore immersive à la création d'ambiances uniques pour diverses productions.
        </p>
        <p class="mb-10">
            <span class="text-sm">Related:</span><br>
            <NuxtLink class="my-link" to="https://www.youtube.com/channel/UCmVPKCzRcJJT2IMEffAkxew" target="_blank" c>Other Works</NuxtLink>
        </p>
        <h2 class="text-2xl">Visual Artist</h2>
        <div class="flex justify-center mt-5 mb-10">
            <iframe class="rounded-lg w-full h-80" src="https://www.youtube.com/embed/pwL50w_DEdQ?si=-ue8eAqRQK7knEaL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>

    </div>
   
</div>
</template>
<style lang="scss" scoped>
#icon-area {
    display: flex;
    justify-content: center;
	position: relative;
	//height: 100%;
    #profile-icon{
        cursor: pointer;
        -webkit-touch-callout: none;
        -moz-touch-callout: none;
        -webkit-user-select: none;
        user-select: none;
        //pointer-events: none;
        //background: rgba(250, 0, 250, 0.9);
        //border-radius: 0.5rem;
        opacity: 1.0;
        display: block;
        aspect-ratio: 1 / 1;
        transition: .3s ease-out;
        transform: translateX(0) rotate(0);
        //transform: rotate(45deg);
    }
    .notdisp{
        opacity: 0.0;
    }
}
</style>
<script setup>
useHead({
  title: 'PORTFOLIO',
  meta: [
    {
      name: 'description',
      content: 'About Page',
    },
  ],
  script: [
    {
    }
  ],
});
</script>
<script>
export default {
    components: {
    },
    props: [],
    data () {
        return {
            iconOpacity: 1.0,
            timerID: 0,
            iconPosX: 0,
            iconDegree: 0,
        }
    },
    computed: {
    },
    mounted () {
        //console.log("ABOUT mounted....");

        // Set icon image interaction
        const profileIcon = this.$refs.profileIcon.$el
        profileIcon.addEventListener("mousedown", e => {
            let posX = e.pageX;
            let clientRect = profileIcon.getBoundingClientRect();
            let clientCenterX = (clientRect.right+clientRect.left)/2+window.pageXOffset;
            let clickedRightOfElment = posX > clientCenterX ? true : false;
            this.moveIcon(clickedRightOfElment);
        }, { passive: true });
        profileIcon.addEventListener("touchstart", e => {
            e.preventDefault();
            let posX = e.touches[0].pageX;
            let clientRect = profileIcon.getBoundingClientRect();
            let clientCenterX = (clientRect.right+clientRect.left)/2+window.pageXOffset;
            let clickedRightOfElment = posX > clientCenterX ? true : false;
            this.moveIcon(clickedRightOfElment);
        }, { passive: true });
        profileIcon.oncontextmenu = () => {
            return false;
        };
    },
    methods: {
        reduceIconOpacity(){
            //console.log("iconOpacity:",this.iconOpacity);
            this.iconOpacity -= 0.1;
            if(this.iconOpacity < 0)this.iconOpacity=0.0;
            this.$refs.profileIcon.$el.style.opacity = this.iconOpacity; 
        },
        moveIcon(clickedRightOfElment){
            let disp = window.innerWidth / 5;
            this.iconPosX += clickedRightOfElment ? -disp : disp;
            this.iconDegree += clickedRightOfElment ? -45 : 45;
            this.$refs.profileIcon.$el.style.transform = 'translateX(' + (this.iconPosX) + 'px) rotate(' + (this.iconDegree) + 'deg)';
        },
    }
}
</script>