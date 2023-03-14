<template>
    <div>
        <div class="services">
        <h1>services</h1>

        <div class="mainbox">
         <div class="box">
            <i class="fa-solid fa-mobile-screen-button"></i>
            <h4>web design</h4>
            <p>Lorem ipsum dolor, sit amet consectetur 
            adipisicing elit. Temporibus facere voluptas,
             ratione ut fugit mollitia!</p>
         </div>
         <div class="box">
            <i class="fa-solid fa-volume-high"></i>
            <h4>web design</h4>
            <p>Lorem ipsum dolor, sit amet consectetur 
            adipisicing elit. Temporibus facere voluptas,
             ratione ut fugit mollitia!</p>
         </div>
         <div class="box">
            <i class="fa-solid fa-laptop-code"></i>
            <h4>web design</h4>
            <p>Lorem ipsum dolor, sit amet consectetur 
            adipisicing elit. Temporibus facere voluptas,
             ratione ut fugit mollitia!</p>
         </div>
         <div class="box">
            <i class="fa-solid fa-palette"></i>
            <h4>web design</h4>
            <p>Lorem ipsum dolor, sit amet consectetur 
            adipisicing elit. Temporibus facere voluptas,
             ratione ut fugit mollitia!</p>
         </div>
         <div class="box">
            <i class="fa-solid fa-code"></i>
            <h4>web design</h4>
            <p>Lorem ipsum dolor, sit amet consectetur 
            adipisicing elit. Temporibus facere voluptas,
             ratione ut fugit mollitia!</p>
         </div>
         <div class="box">
            <i class="fa-solid fa-magnifying-glass"></i>
            <h4>web design</h4>
            <p>Lorem ipsum dolor, sit amet consectetur 
            adipisicing elit. Temporibus facere voluptas,
             ratione ut fugit mollitia!</p>
         </div>
        </div>
    </div>
    <footter/>
    </div>
    
</template>

<script>
import footter from '../components/footer.vue'
export default {
  components:{
    footter,
  },
}
</script>

<style lang="scss">
  @import'../sass/main.scss';


  .services{
    margin-top: 50px;
    display: flex;
    align-items: center;
    flex-direction: column;
    h1{
      font-size: 35px;
      position: relative;
      &::before{
        content: '';
        width: 50%;
        height: 5px;
        background-color: var(--mainColor);
        position: absolute;
        top: 100%;
      }
      &::after{
        content: '';
        width: 20%;
        height: 5px;
        left: 0;
        background-color: var(--mainColor);
        position: absolute;
        top: 130%;
      }
    }

    .mainbox{
        margin-top: 50px;
        display: grid;
        grid-template-columns: repeat(3 , 1fr);
        gap: 30px;
        width: 80%;
        .box{
            margin: 20px 0px;
            box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.462);
            background-color: #fff;
            padding: 30px;
            border-radius: 20px;
            display: flex;
            align-items: center;
            flex-direction: column;
            gap: 20px;
            cursor: pointer;
            transition: 0.6s;
            &:hover{
                transform: scale(1.1);
            }
            i{
                font-size: 40px;
                color: var(--mainColor);
            }
            h4{
                font-size: 25px;
            }
            p{
                line-height: 30px;
                color: gray;
            }
        }
    }
  }



@media(max-width:920px){
    .services{
        .mainbox{
            grid-template-columns: repeat(2 , 1fr);
        }
    }
}
@media(max-width:700px){
    .services{
        .mainbox{
            grid-template-columns: repeat(1 , 1fr);
        }
    }
}
</style>