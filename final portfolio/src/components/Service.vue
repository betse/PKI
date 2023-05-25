<template>
    <div class="work-container" id="service">
        <h1 data-aos="new-animation">My Services</h1>
        <div class="left">
            <div class="box" data-aos="zoom-in-right" data-aos-delay="750" data-aos-duration="2000">
                    <div class="circle"><img src="../assets/images/web.png" /></div>
                    <h3>Web Development</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro repellendus id corrupti! Optio, nobis voluptate?</p>
                    <a href="#" class="btn">Read More</a>
            </div>
            <div class="box" data-aos="zoom-in-right" data-aos-delay="450" data-aos-duration="2000">
                <div class="circle"><img src="../assets/images/desktop.png" /></div>
                    <h3>Desktop Application</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro repellendus id corrupti! Optio, nobis voluptate?</p>
                    <a href="#" class="btn">Read More</a>
            </div>
            <div class="box" data-aos="zoom-in-right" data-aos-delay="150" data-aos-duration="2000">
                <div class="circle"> <img src="../assets/images/mobile.png" /></div>
                    <h3>Android App</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro repellendus id corrupti! Optio, nobis voluptate?</p>
                    <a href="#" class="btn">Read More</a>
            </div>
        </div>
    </div>
</template>

<script>
import AOS from 'aos';
import 'aos/dist/aos.css';
export default {
    mounted() {
  AOS.init({
    offset: 0,
  });
},
updated() {
  AOS.refresh();
}
}

</script>


<style scoped>

.work-container{
    background: var(--light);
    padding: 5rem 9%; /*top 10rem, left right 9% bottom 4rem*/
    min-height: 100vh;
}
.work-container h1{
    font-size: 3rem;
    margin-bottom: 5rem;
    text-align: center;
    color: var(--primary);
    font-family: 'PoppinsBold';
}

[data-aos="fade-right"]{
    opacity: 0;
    transform: translateX(-800px);
}
[data-aos="fade-right"].aos-animate {
    transform: translateX(0);
    opacity: 1;
}


[data-aos="fade-inn"] {
  opacity: 0;
  animation: fadeIn ease-in 2s;
  animation-fill-mode: forwards;
  animation-duration: 2s;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.ani-top {
    animation: aniTop 2s  ease-in-out;
}
@keyframes aniTop {
    0%{
        transform: translateY(-200px);
        opacity: 0;
    }
    100%{
        transform: translateY(0);
        opacity: 1;
    }
}
.left{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2rem;
}
.left .box:nth-child(1){
    /* animation: ani-left 2s  ease-in-out; */
}
.left .box:nth-child(2){
    /* animation: ani-left 1.5s  ease-in-out; */
}
.left .box:nth-child(3){
    /* animation: ani-left 1s  ease-in-out; */
}
@keyframes ani-left {
  0%{
    transform: translateX(-800px);
    opacity: 0;
  }
  100%{
    transform: translateX(0);
    opacity: 1;
  }
}
.left .box{
    flex: 1 1 20rem;
    padding: 0 2rem 4rem;
    border-radius: 2rem;
    text-align: center;
    box-shadow: 0px 2px 2px 2px rgba(253, 164, 0);
    margin-top: 40px;
    background: var(--primary);
    /* transition: .5s ease-in-out; */
    /* min-width: 300px;
    max-width: 600px; */
}
.left .box:hover{
    transform: translateY(20px);
    box-shadow: 0px 2px 2px 2px rgb(2, 168, 245);
    transition: 1s;
}
.left .box:hover a{
    background: var(--glow);
}
.left .box:hover .circle{
    transform: translateY(-20px);
    box-shadow: 0px 2px 2px 2px rgb(2, 168, 245);
}
.box .circle{
    width: 80px;
    height: 80px;
    border-radius: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    display: inline-flex;
    margin-top: -40px;
    transition: .5s ease-in-out;
}
.box img{
    font-size: 7rem;
    width: 45px;
    height: 50px;
    background: none;
}

.box h3{
    font-size: 1.8rem;
    background: none;
    white-space: nowrap;
    color: var(--light);
    font-family: 'PoppinsMedium';
}
.box p{
    background: none;
    padding-top: 1rem;
    color: var(--light);
    margin: 1rem 0 2rem;
    font-family: 'PoppinsLight';
}
.box a{
    background: var(--secondary);
    text-decoration: none;
    color: var(--primary);
    border: none;
    padding: .8rem 1rem;
    border-radius: 30px;
    font-family: 'PoppinsRegular';
}
.box .circle{
    background: var(--primary);
    box-shadow: 0px -4px 2px rgba(253, 164, 0);
}
/* .box:nth-child(1) .circle{
    background: #1945E3;
    
}
.box:nth-child(2) .circle{
    background: #D8158D;
    
}
.box:nth-child(3) .circle{
    background: #FDA400;
    
} */

</style>