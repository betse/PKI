<script>
    import Skill from "./Skill.vue"
    import AOS from 'aos';
import 'aos/dist/aos.css';
export default {
    components: {
        Skill
    },
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
<template>
     <div class="skill-container" id="skills">
        <div class="title">
            <h1 data-aos="left" data-aos-duration="2000">Skills</h1>
        </div>
        
        <Skill language="Java" progress="85%" data-aos="left" data-aos-duration="2000" data-aos-delay="1200"/>
        <Skill language="Html" progress="90%" data-aos="left" data-aos-duration="2000" data-aos-delay="1000"/>
        <Skill language="JavaScript" progress="70%" data-aos="left" data-aos-duration="2000" data-aos-delay="800"/>
        <Skill language="CSS" progress="80%" data-aos="left" data-aos-duration="2000" data-aos-delay="600"/>
        <Skill language="C#" progress="65%" data-aos="left" data-aos-duration="2000" data-aos-delay="400"/>
        <Skill language="C++" progress="60%" data-aos="left" data-aos-duration="2000" data-aos-delay="200"/>
        <Skill language="Python" progress="65%" data-aos="left" data-aos-duration="2000" data-aos-delay="0"/>
        <div class="certification">
            <h1 data-aos="left" data-aos-duration="2000"> Certifications</h1>
        <div class="cert-wrapper">    
        <div class="type" data-aos="bottom" data-aos-duration="500" data-aos-delay="0">
            <img src="../assets/images/certificate.png">
            <span>Oracle Certified professional <br> Java EE Application Developer</span>
        </div>
        <div class="type" data-aos="bottom" data-aos-duration="500" data-aos-delay="500">
            <img src="../assets/images/certificate.png">
            <span>CompTIA Security +</span>
        </div>
        <div class="type" data-aos="bottom" data-aos-duration="500" data-aos-delay="1000">
            <img src="../assets/images/certificate.png">
            <span> ISC² Certified in Cyber Security (CC)</span>
        </div>
    </div>
    </div>   
    </div>
    
</template>
<style scoped>

.skill-container{
    
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    padding: 5rem 9%;
    background: var(--light);
    min-height: 100vh;
}
.title h1{
    font-size: 3rem;
    font-family: 'PoppinsBold';
    padding-bottom: 2rem;
    /* animation: left  5s forwards; */
    color: var(--primary);
}
[data-aos="left"]{
    opacity: 0;
    transform: translateX(-700px);
}
[data-aos="left"].aos-animate {
    transform: translateX(0);
    opacity: 1;
}
[data-aos="bottom"]{
    opacity: 0;
    transform: translateY(100px);
}
[data-aos="bottom"].aos-animate {
    transform: translateY(0);
    opacity: 1;
}
/* @keyframes left {
    0%{
        transform: translateX(-700px);
        opacity: 0;
    }
    100%{
         transform: translateX(0);
        opacity: 1;
    }    
} */
 /* .skill:nth-child(2) {
    animation: left  4s forwards;
}
.skill:nth-child(3) {
    animation: left  3.5s forwards;
}
.skill:nth-child(4) {
    animation: left  3s forwards;
}
.skill:nth-child(5) {
    animation: left  2.5s forwards;
}
.skill:nth-child(6) {
    animation: left  2s forwards;
}
.skill:nth-child(7) {
    animation: left  1.5s forwards;
} 
.skill:nth-child(8) {
    animation: left  1s forwards;
} */
[data-aos="right"]{
    opacity: 0;
    transform: translateX(400px);
}
[data-aos="right"].aos-animate {
    transform: translateX(0);
    opacity: 1;
}
/* @keyframes right {
    0%{
        transform: translateX(400px);
        opacity: 0;
    }
    100%{
         transform: translateX(0);
        opacity: 1;
    }    
} */
.certification{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.certification h1{
    font-size: 3rem;
    font-family: 'PoppinsBold';
    padding: 4rem 0 0;
    animation: left  5s forwards;
    color: var(--primary);
}
.certification .cert-wrapper{
    display: flex;
    animation: left  1s forwards;
}
.certification .type{
    display: flex;
    flex-direction: column;
    margin: 3rem;
}
.certification .type img{
    width: 3rem;
    border-radius: 50%;
    margin: 1rem auto;
}
.certification .type span{
    margin: .5rem ;
    color: var(--primary);
    min-width: 5rem;
    text-align: center;
}
</style>