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


    <footter/>
  </div>
 
</template>

<script>
// @ is an alias to /src





import {ref} from 'vue'
import footter from '../components/footer.vue'
export default {
  components:{
    footter,
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


return{theword}
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
    margin-top: 50px;
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