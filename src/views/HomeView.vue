<template>
  <div class="mainhome">
    <div class="landing">
      <div class="text">
        <h3>hello , my name is <span>khaled sawada</span></h3>
         <h2>i'm <span class="type">{{ theword }}</span> </h2>
         <p>I'm excited to put my knowledge and expertise to good 
         use in all areas that will help me become more
          competent and responsible at work .</p>
         <router-link to="/about">
          <button>more about me</button>        
         </router-link>
      </div>
      <div class="image">
       <img src="../assets/khaled2.jpg" alt="">
      </div>
  </div>
<hr>
  <div class="me">
    <div class="image">
    <img src="../assets/khaled4.jpg" alt="">
   </div>
   <div class="text">
   <h2>👋 khaled mohamed ( <span>sawada</span> )</h2>
   <h4>khaledsawada1@gmail.com</h4>
   </div>
 
  </div>
<hr>
  <div class="me2">
   <div class="text">
    <h3>this is khaled's resume</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque dolore explicabo distinctio ipsa fuga at ducimus culpa nam quae laboriosam.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque dolore explicabo distinctio ipsa fuga at ducimus culpa nam quae laboriosam.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque dolore explicabo distinctio ipsa fuga at ducimus culpa nam quae laboriosam.</p>
   </div>
   <div class="image">
    <img src="../assets/back.jpg" alt="">
   </div>
  </div>

<hr>

<div class="testi">
<h3>What People say</h3>
<div class="mainbox">
  <swiper
    :slidesPerView="1"
    :spaceBetween="10"
    :pagination="{
      clickable: true,
    }"
    :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
    }"
    :breakpoints="{
      '640': {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      '768': {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      '1024': {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    }"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide>
     <div class="box">
     <img src="../assets/kk.jpg" alt="">
     <div class="text">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, est!</p>
      <h4>khaled sawada</h4>
      <h5>web designer</h5>
     </div>
     </div>
    </swiper-slide>
    <swiper-slide>
     <div class="box">
     <img src="../assets/back.jpg" alt="">
     <div class="text">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, est!</p>
      <h4>khaled sawada</h4>
      <h5>web designer</h5>
     </div>
     </div>
    </swiper-slide>
    <swiper-slide>
     <div class="box">
     <img src="../assets/khaled2.jpg" alt="">
     <div class="text">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, est!</p>
      <h4>khaled sawada</h4>
      <h5>web designer</h5>
     </div>
     </div>
    </swiper-slide>
    <swiper-slide>
     <div class="box">
     <img src="../assets/kk.jpg" alt="">
     <div class="text">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, est!</p>
      <h4>khaled sawada</h4>
      <h5>web designer</h5>
     </div>
     </div>
    </swiper-slide>
    <swiper-slide>
     <div class="box">
     <img src="../assets/kk.jpg" alt="">
     <div class="text">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, est!</p>
      <h4>khaled sawada</h4>
      <h5>web designer</h5>
     </div>
     </div>
    </swiper-slide>
    <swiper-slide>
     <div class="box">
     <img src="../assets/kk.jpg" alt="">
     <div class="text">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, est!</p>
      <h4>khaled sawada</h4>
      <h5>web designer</h5>
     </div>
     </div>
    </swiper-slide>
  </swiper>
</div>
</div>

    <footter/>
  </div>
 
</template>

<script>
// @ is an alias to /src





import {ref} from 'vue'
import footter from '../components/footer.vue'
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';

// import required modules
import { Autoplay,Pagination } from 'swiper';
export default {
  components:{
    footter,
    Swiper,
      SwiperSlide,
  },
setup(){
 let theword = ref("khaled sawada");
  
 let changeText = ()=>{
    setTimeout(() => {
          theword.value = "khaled sawada "     
    }, 0);
    setTimeout(() => {
        theword.value = "a web developer"     
    },4000);
    setTimeout(() => {
        theword.value = "a front end"     
    }, 8000);
   
}
changeText();
setInterval(() => {
    changeText();
}, 12000);


return{
  theword , 
   modules: [Autoplay,Pagination],}
}
}
</script>


<style lang="scss">
  @import'../sass/main.scss';


  
.mainhome{
  position: relative;
  width: 100%;
  height: 100vh;
  z-index: 11111;
}


  .landing{
    margin:50px 0px;
    width: 100%;
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 20px;
    justify-content: center;
    .text{
      width: 50%;
      text-align: center;
    }
    .image{
      width: 50%;
      position: relative;
      padding: 30px;
      animation: animate 4s ease-in infinite;
      &::before{
          content: '';
          position: absolute;
          width: 80px;
          height: 80px;
          border-bottom: 8px solid var(--mainColor);
          border-left: 8px solid var(--mainColor);
          left: 0;
          bottom: 0;
        }
      &::after{
          content: '';
          position: absolute;
          width: 80px;
          height: 80px;
          border-top: 8px solid var(--mainColor);
          border-right: 8px solid var(--mainColor);
          top: 0;
          right: 0;
        }
      img{
        position: relative;
        width: 100%;
        border-radius: 20px;
      
      }
    }
    .text{
      display: flex;
      align-items: center;
      flex-direction: column;
      gap: 30px;
      h2{
        font-size: 30px;
        position: relative;
        span{
          color: var(--mainColor);
          position: relative;

          &::before{
          content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border-left: 5px solid  var(--mainColor);
    animation: change 4s steps(12) infinite;
        }
        }
     

      }
      h3{
        font-size: 25px;
        position: relative;
        span{
          color: var(--mainColor);
        }
  
      }
      p{
        font-size: 20px;
        line-height: 30px;
        color: gray;
      }
      button{
        padding: 10px 20px; 
        color: #fff;
        background-color: var(--mainColor);
        border: none;
        border-radius: 10px;
        font-size: 20px;
        transition: 0.5s;
        cursor: pointer;
        &:hover{
          transform: translateX(10px);
        }
      }
    }
  }
  .me,.me2{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 90%;
    margin: 70px auto;
    gap: 20px;
    .image{
      width: 40%;
      z-index: 111;
      img{
        width: 100%;
        border-radius: 20px;
      }
    }
    .text{
      z-index: 111;
      width: 60%;
      text-align: center;
      display: flex;
      flex-direction: column;
      gap: 30px;
      h3{
        z-index: 111;
        font-size: 30px;
        font-weight: bolder;
        color: var(--mainColor);
      }
      p{
        z-index: 111;
        line-height: 30px;
      }
      h2{
        z-index: 111;
        font-size: 35px;
        font-weight: bolder;
        span{
          color: var(--mainColor);
        }
      }
      h4{
        z-index: 111;
        font-size: 20px;
        font-weight: bolder;
      }
    }
  }


  .testi{
    width: 90%;
    margin: 30px auto;
    .swiper{
      height: 300px;
    }
    h3{
      text-align: center;
      font-size: 30px;
      font-weight: bolder;
      margin: 30px 0px;
    }
    .box{
      margin: 5px;
      display: flex;
      align-items: center;
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.386);
      height: 200px;
      padding: 20px;
      border-radius: 20px;
      gap: 20px;
      .text{
        display: flex;
        flex-direction: column;
        gap: 10px;
        text-align: center;
        p{
          line-height: 25px;
        }
        h4,h5{
          font-weight: bolder;
        }
      }
      img{
        width: 100px;
        height: 100px;
        border-radius: 50%;
      }
    }
  }

@media(max-width:800px){
  .me,.me2{
    flex-direction: column;
    .text{
      width: 100%;
      h2{
        font-size: 22px;
      }
      h3{
        font-size: 25px;
      }
      h4{
        font-size: 18px;
      }
    }
    .image{
      width: 70%;
    }
  }
  .me2{
    .image{
      width: 100%;
    }
  }
}
  @keyframes animate{
    0%, 100%{
      transform: translateY(0px);
    }
    50%{
      transform: translateY(30px);
    }


  
  }

@media (max-width: 740px){
 
  .landing{
    flex-direction: column;
    gap: 80px;
    .text{
    
      width: 100%;
      h3{
    font-size: 20px;
  }
    }
    .image{
      width: 100%;
    }
  }
}
</style>