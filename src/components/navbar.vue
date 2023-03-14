<template>
    <div>
        <div class="navbar">
        <div class="bar">
            <i @click="check = !check" class="fa-solid fa-bars"></i>
        </div>
         <div class="logo">
         <router-link to="/">
            <h1 @click="check = false" >saw<span>ada</span></h1>         
         </router-link>
         </div>
         <div class="list" :class="{'active': check}">
         <ul>
            <i @click="check = !check" class="fa-solid fa-xmark close"></i>         
         <router-link to="/">
         <li @click="check = !check">
            <i class="fa-solid fa-house"></i>
            home
         </li>
         </router-link>
         
           <router-link to="/about">
           <li @click="check = !check">
            <i class="fa-solid fa-user"></i>
             about
           </li>
        </router-link>


           <router-link to="/services">
           <li @click="check = !check">
            <i class="fa-solid fa-list"></i>
            services
           </li>
        </router-link>


           <router-link to="/portfolio">
           <li @click="check = !check">
            <i class="fa-solid fa-briefcase"></i>
                  portfolio
           </li>
        </router-link>
          
           <router-link to="/contact">
           <li @click="check = !check">
            <i class="fa-solid fa-comments"></i>
                  contact
           </li>
        </router-link>
          
         
         </ul>
         
        
         </div>
      
        </div>
    </div>
</template>

<script>
 import {ref} from 'vue';
 export default {
    props:['color','change' , 'toggle'],
    setup(props){
     let check = ref(false);
    
      return{check}
    }
 }
</script>

<style lang="scss">
@import'../sass/main.scss';

// .colors{
//     color: #ec1839;
//     color: #fa5b0f;
//     color: #37b182;
//     color: #1854b4;
//     color: #f021b2;
// }
.navbar{
    display: flex;
    align-items: center;
    padding: 20px;
    justify-content: space-between;
     position: relative;


     a {
        color: #333;
         &.router-link-exact-active {
        color: var(--mainColor);
       }
    }

   .bar{
    display: none;
    i{
       font-size: 40px;
       cursor: pointer;
    }
   }


    .list{
        ul{
            display: flex;
            align-items: center;
            gap: 10px;
            i{
                &.close{
                    display: none;
                }
            }
            li{
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 5px;
                margin: 0px 10px;
                transition: 0.5s;
                &:hover{
                    color: var(--mainColor);
                    
                }
                  
            }
        }
    }
    .logo{
        h1{
            padding: 20px;
            position: relative;
            color: #333;
            span{
                color: var(--mainColor);
            }
            &::before{
                content: '';
                position: absolute;
                width: 20px;
                height: 20px;
                border-bottom: 5px solid var(--mainColor);
                border-left: 5px solid var(--mainColor);
                bottom: 0;
                left: 0;
            }
            &::after{
                content: '';
                position: absolute;
                width: 20px;
                height: 20px;
                border-right: 5px solid var(--mainColor);
                border-top: 5px solid var(--mainColor);
                right: 0;
                top: 0;
            }
        }
    }
}


@media(max-width:760px){
    .navbar{
        .bar{
            display: block;
        }
        position: relative;
        .list{
            left: 0;
            z-index: 111111;
            height: 100vh;
            width: 200px;
            padding: 10px;
            position: fixed;
            top: 0%;
            background-color: $bg-black-main;
            transition: 0.5s;
            transform: translateX(-100%);
            // color: #333;
            &.active{
                transform: translateX(0);
            }
            ul{
                flex-direction: column;
                height: 100%;
                justify-content: space-around;
                position: relative;
                i{
                    &.close{
                        display: block;
                            position: absolute;
                            top: 20px;
                            right: 20px;
                            font-size: 30px;
                            cursor: pointer;
                        }
                }
            }
        }
    }
}


</style>