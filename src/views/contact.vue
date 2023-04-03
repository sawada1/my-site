<template>

<div>
    <div class="contact">
        <h1>contact me</h1>
        <div class="text">
         <h3>have any qestions ?</h3>
         <p>i'm at your service</p>
        </div>
        <div class="maincontact">
         <div class="box">
            <i class="fa-solid fa-phone"></i>
             <h4>call me on</h4>
             <p>+201021189596</p>
          </div>
         <div class="box">
            <i class="fa-solid fa-location-dot"></i>
             <h4>address</h4>
             <p>1 ahmed-sawada street, giza</p>
          </div>
         <div class="box">
            <i class="fa-solid fa-envelope"></i>
             <h4>email</h4>
             <p>khaledsawada1@gmail.com</p>
          </div>
         <div class="box">
            <i class="fa-brands fa-github"></i>
             <h4>github</h4>
             <p>khaledsawada1@gmail.com</p>
          </div>
        </div>
         <div class="theform">
          <h2>send an email</h2>
          <p>i'm very responsive to messages</p>
          <form action="" >
            <div class="inp">
             <input type="text" placeholder="name" required>
             <input type="email" placeholder="email" required>
            </div>
             <input type="text" placeholder="subject">
             <textarea style="resize: none;" cols="30" rows="10" placeholder="message"></textarea>
             <div class="btn">
                <button>submit</button>      
             </div>
       
          </form>
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
.contact{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    h1{
        margin-top: 30px;
        margin-bottom: 50px;
      font-size: 35px;
      z-index: 1111;
      position: relative;
      &::before{
        content: '';
        width: 50%;
        height: 5px;
        background-color: var(--mainColor);
        position: absolute;
        top: 100%;
        z-index: 111;
      }
      &::after{
        content: '';
        width: 20%;
        height: 5px;
        left: 0;
        background-color: var(--mainColor);
        position: absolute;
        top: 130%;
        z-index: 111;
      }
    }

    .text{
        display: flex;
        flex-direction: column;
        align-items:center;
        font-size: 25px;
        gap:30px;
        z-index: 111;
        h3{
            color: var(--mainColor);
            z-index: 111;
        }
    }

    .maincontact{
        display: grid;
        grid-template-columns: repeat(4 , 1fr);
        gap: 20px;
        margin-top: 50px;
        width: 100%;
        z-index: 111111;
        .box{
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 20px;
            cursor: pointer;
            transition: 0.6s;
            &:hover{
                transform: scale(1.1);
            }
            i{
                font-size: 35px;
                color: var(--mainColor);
            }
            margin: 10px;
            box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.422);
            padding: 20px;
            border-radius: 20px;
            background-color: #fff;
        }
    }


    .theform{
        margin-top: 50px;
        display: flex;
        align-items: center;
        flex-direction: column;
        width: 100%;
        gap: 30px;
        padding: 30px;
        z-index: 11111;
        h2{
        font-size: 27px;
        color: var(--mainColor);
        z-index: 1111;
        }
        p{
            color: gray;
            z-index: 1111;
        }
        form{
            z-index: 1111111;
            display: flex;
            flex-direction: column;
            gap: 10px;
            width: 80%;
            .inp{
                display: flex;
                align-items: center;
                gap: 5px;
                // justify-content: space-around;
            }
            input,textarea{
                width: 100%;
                padding: 10px;
                font-size: 18px;
                border: none;
                outline: none;
                border-radius: 20px;
                &::placeholder{
                    font-size: 12px;
                }
            }
            .btn{
                text-align: center;
                button{
                padding: 10px 30px;
             
                font-size: 20px;
                background-color: var(--mainColor);
                cursor: pointer;
                border: none;
                border-radius: 20px;
                color: #fff;
                transition: 0.5s;
                &:hover{
                    transform: scale(1.1);
                }
                z-index: 11111;
            }
            }
           
        }
    }
}


@media(max-width:1000px){
.contact{
    .maincontact{
        grid-template-columns: repeat(3 , 1fr);
    }
}
}
@media(max-width:860px){
.contact{
    .maincontact{
        grid-template-columns: repeat(2 , 1fr);
    }
}
}
@media(max-width:600px){
.contact{
    .maincontact{
        grid-template-columns: repeat(1 , 1fr);
        gap: 50px;
    }
}
}
@media(max-width:460px){
.contact{
        .theform{
            form{
                button{
                    width: 100%;
                }
            }
        }
    
}
}
</style>