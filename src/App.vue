<template>
    <div id="app"   :class="{'dark': thecheck}" :style="{'--mainColor':color}">


<navbar :color="color" :change="change" :toggle="toggle"/>

  <router-view v-slot="{Component}">
  <transition name="fade" mode="out-in">
       <component :is="Component"></component>
  </transition>
  </router-view>
  
  <div class="animate" :class="{'active': bubbles}">
       <div class="bubbles">
      <span style="--i:11;"></span>
      <span style="--i:12;"></span>
      <span style="--i:24;"></span>
      <span style="--i:14;"></span>
      <span style="--i:23;"></span>
      <span style="--i:18;"></span>
      <span style="--i:16;"></span>
      <span style="--i:19;"></span>
      <span style="--i:20;"></span>
      <span style="--i:22;"></span>
      <span style="--i:25;"></span>
      <span style="--i:18;"></span>
      <span style="--i:21;"></span>
      <span style="--i:15;"></span>
      <span style="--i:13;"></span>
      <span style="--i:26;"></span>
      <span style="--i:17;"></span>
      <span style="--i:13;"></span>
      <span style="--i:28;"></span>
      <span style="--i:11;"></span>
      <span style="--i:12;"></span>
      <span style="--i:24;"></span>
      <span style="--i:14;"></span>
      <span style="--i:23;"></span>
      <span style="--i:18;"></span>
      <span style="--i:16;"></span>
      <span style="--i:19;"></span>
      <span style="--i:20;"></span>
      <span style="--i:22;"></span>
      <span style="--i:25;"></span>
      <span style="--i:18;"></span>
      <span style="--i:21;"></span>
      <span style="--i:15;"></span>
      <span style="--i:13;"></span>
      <span style="--i:26;"></span>
      <span style="--i:17;"></span>
      <span style="--i:13;"></span>
      <span style="--i:28;"></span>
  
     </div>
  </div>

  <div class="theme" :class="{'active':check}">
    <div v class="color">
        <i @click="check = !check" class="fa-solid fa-palette"></i>
            <div class="thecolors" :class="{'active':check}">
            <div class="text"></div>
        <span class="the-colora" data-color="#fa5b0f" @click="change" ></span>
        <span class="the-colorb" data-color="#ec1839" @click="change" ></span>
        <span class="the-colorc" data-color="#37b182" @click="change" ></span>
        <span class="the-colord" data-color="#1854b4" @click="change" ></span>
        <span class="the-colorf" data-color="#f021b2" @click="change" ></span>
            </div>
         </div>

         <i @click="toggle" class="fa-solid  " :class="{'fa-sun': icon, 'fa-moon':!icon}"></i>
         <i @click="togglebuubles" class="fa-solid" :class="{'fa-droplet-slash': icon2 , 'fa-droplet': !icon2}"></i>
    
  </div>


</div>


</template>




<script>



import navbar from './components/navbar.vue'
import {ref} from 'vue'
export default {
 components:{
  navbar
 },
 setup(){
  const color = ref(localStorage.getItem("theColor") == null ? '#fa5b0f' : localStorage.getItem("theColor"));
const change = (event) => {
     color.value = event.target.getAttribute("data-color");   
     localStorage.setItem("theColor",color.value);
  
}

let icon = ref( JSON.parse(localStorage.getItem("iconn")));
let icon2 = ref( JSON.parse(localStorage.getItem("iconn2")));

let check = ref(false);

let thecheck = ref(JSON.parse(localStorage.getItem("theme")));
let toggle = ()=>{
     thecheck.value = !thecheck.value;
        localStorage.setItem("theme",thecheck.value);
        icon.value = !icon.value;
        localStorage.setItem("iconn",icon.value);
      }

let bubbles = ref(false);

let togglebuubles = ()=>{
  bubbles.value =  !bubbles.value;
  icon2.value =  !icon2.value
  localStorage.setItem("iconn2",icon.value);
}


return{color , change , thecheck , toggle , check , icon , bubbles , togglebuubles , icon2}
 }

}
</script>



<style lang="scss">
@import'./sass/main.scss';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
  z-index: 11111;
}




.theme{
  position: fixed;
  top: 22%;
  right: -120px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  z-index: 11111;
  // background-color: red;
  width: 200px;
  padding: 10px;
  transition: 0.5s;
  &.active{
            right: 40px;
        }
  i{
    cursor: pointer;
    font-size: 20px;
    color: var(--mainColor);
  }
  .fa-solid{
    width: 0;
  }
  .color{
        // position: relative;
        display: flex;
        align-items: center;
        gap: 20px;
        .thecolors{
    background-color: $bg-black-sec;
    // position: absolute;
padding: 5px;
    border-radius: 10px;
    // right: 0px;
    display: flex;
    align-items: center;
    gap: 5px;
    transform: translateX(130%);
    // top: 100%;
    transition: 0.5s;
        text-align: center;
        &.active{
            transform: translateX(0%);
        }
      & > span{
        cursor: pointer;
        width: 25px;
          height: 25px;
          display: inline-block;
          border-radius: 50%;
            // margin: 0px 20px;
       }

.the-colora{
    background-color: #fa5b0f;
}
.the-colorb{
   
    background-color:  #ec1839;
}
.the-colorc{
    background-color: #37b182;
}
.the-colord{
    background-color: #1854b4;
}
.the-colorf{
    background-color: #f021b2;
}
     
        }
    }
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
}

.fade-enter-from{
  opacity: 0;
  transform: translateX(100px);
}
.fade-leave-to{
  opacity: 0;
  transform: translateX(-100px);
}


.footer{
  padding: 50px;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  gap: 30px;
  margin-top: 20px;
  z-index: 11111;
  .theicon{
    display: flex;
    align-items: center;
    gap: 20px;
    cursor: pointer;
    font-size: 30px;
    a{
      color: var(--mainColor);
    }
  }
  .name{
    text-align: center;
    h3{
      span{
        color: var(--mainColor);
      }
    }
  }
}


@media(max-width:558px){
  .footer{
    .name{
      h3{
        font-size: 15px;
        line-height: 30px;
      }
    }
  }
}




.animate{
    position: fixed;
    width: 95%;
    height: 100%;
    display: none;

    top: 0%;
   
    &.active{
    display: block;
    }
    .bubbles{
      position: absolute;
      display: flex;
      // z-index: -111;
      width: 100%;
      height: 100%;
      span{
        position: relative;
        width: 50px;
        height: 20px;
        // z-index: -111;
        // background-color: #4fc3dc;
        background-color: var(--mainColor);
        margin: 0 5px;
        border-radius:50%;
        box-shadow: 0 0 0 10px var(--mainColor),
        0 0 50px var(--mainColor),
        0 0 50px var(--mainColor);
        animation: anim 20s linear infinite;
        animation-duration: calc(180s / var(--i));
        &:nth-child(even){
          background-color: #ff2d75;
          box-shadow: 0 0 0 10px #ff2d7544,
        0 0 50px #ff2d75,
        0 0 100px #ff2d75;
        } 
      }
    }
  }

  @keyframes anim {
    0%{
      transform: translateY(100vh) scale(0);
    }
    100%{
      transform: translateY(-100vh) scale(1);
    }
  }


</style>
