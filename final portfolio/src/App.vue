<script setup>
  import Home from "./components/Home.vue"
  import Skills from "./components/Skills.vue"
  import Project from "./components/Project.vue"
  import Service from "./components/Service.vue"
  import Contact from "./components/Contact.vue"
  import { RouterView,  RouterLink } from "vue-router"
  import Nav from "./components/Nav.vue"
  import { provide, ref} from "vue"
  import { onMounted } from 'vue';

const activesec = ref('')
 const winsize = ref(0)
 const scrollTop = ref(0)
 const showmenu  = ref(false)
//  provide('showmenu', showmenu)

      // const windowSize = ref(window.innerWidth)
      //   onMounted(() => {
      //       window.addEventListener('resize', () => {windowSize.value = window.innerWidth} )
      //   })
      //   onUnmounted(() => {
      //       window.removeEventListener('resize', () => {windowSize.value = window.innerWidth})
      //   })
      //   return { 
      //       windowSize
      //   }


     onMounted(() => {
      window.addEventListener("scroll", handleScroll);
      const mobileView = window.matchMedia("(max-width: 599px)");
      showmenu.value = mobileView.matches;
      mobileView.addListener((event)=>{
        showmenu.value = event.matches;
      })
      const sections = document.querySelectorAll(".sec")
 const observer = new IntersectionObserver(entries =>{
  entries.forEach(entry => {
    if (entry.isIntersecting) {
    activesec.value = entry.target.id
    }
  })
 }, 
 {
  threshold: 0.6
 }
 )
 sections.forEach(sec =>{
  observer.observe(sec)
 })
      })
      
  function toggleNav() {
    showmenu.value = !showmenu.value;
}
 function scrollToHome() {
      const homesec = document.getElementById("home");
      window.scrollTo({
        top: homesec.offsetTop,
        behavior: "smooth",
      });
    }
    function scrollToSer() {
      const homesec = document.getElementById("service");
      window.scrollTo({
        top: homesec.offsetTop,
        behavior: "smooth",
      });
    }
    function scrollToPro() {
      const homesec = document.getElementById("project");
      window.scrollTo({
        top: homesec.offsetTop,
        behavior: "smooth",
      });
    }
    function scrollToSkil() {
      const homesec = document.getElementById("skills");
      window.scrollTo({
        top: homesec.offsetTop,
        behavior: "smooth",
      });
    }
    function scrollToCont() {
      const homesec = document.getElementById("contact");
      window.scrollTo({
        top: homesec.offsetTop,
        behavior: "smooth",
      });
    }
  function handleScroll() {
      scrollTop.value = window.scrollY;
      // console.log("scroll;"+ this.scrollTop)
    }    
    function  displayNav() {
      let size = false;
      const mobileView = window.matchMedia("(max-width: 599px)");
      size = mobileView.matches;

      mobileView.addListener((event) => {
        this.showmenu = event.matches;
      });
      if (size) {
        this.showmenu = !this.showmenu;
      }
    } 
function isMobile(){
 
}

</script>

<template>
  <div class="container">
  <header :class="{bg: (activesec === 'service' || activesec === 'skills')}">
    <div class="header-wrapper">
    <div class="logo-icon">
    <a href="/"><img alt="my logo" src="./assets/logo.png" width="125" /></a>
    </div>
    <i class='bx bx-menu' id="burger-icon" @click="toggleNav"></i>
    <!-- <Nav :class="showmenu ? 'closed-menu' : 'open-menu'"/> -->
    <nav :class="showmenu ? 'closed-menu' : 'open-menu'">
     <ul>
      <li><a :class="{ active: activesec === 'home' }" @click="displayNav() , scrollToHome()">Home</a></li>
      <!-- <span class="openchar">&lt;</span> Home <span class="closechar">/></span> -->
      <li><a :class="{ active: activesec === 'service' }" @click="displayNav(), scrollToSer()">Service</a></li>
      <li><a :class="{ active: activesec === 'project' }" @click="displayNav(), scrollToPro()">Projects</a></li>
      <li><a :class="{ active: activesec === 'skills' }" @click="displayNav(), scrollToSkil()">Skills</a></li>
      <li><a :class="{ active: activesec === 'contact' }" @click="displayNav(), scrollToCont()">Contact</a></li>
     </ul>
    </nav>
  </div>
  </header> 

  <main>
    <!-- <RouterView /> -->
    <Home id="home" class="sec"/>
   <Service  id="service" class="sec"/>
   <Project  id="project" class="sec"/>
   <Skills id="skills" class="sec"/>
   <Contact id="contact" class="sec"/>
  </main>
  <footer>
    <span>© Copyright 2015 Betsegaw Gebreyohannes All rights reserved.</span>
    <div class="go-up">
      <a href="#">
      <i class='bx bx-up-arrow-alt'></i>
      </a>
    </div>
  </footer>
</div>
</template>

<style scoped>

.container{
   padding: 0;
}
header {
  position: fixed;
  width: 100%;
  padding: 0 4rem;
  /* background: linear-gradient(180deg, #dde6fd , #120E1D 30%); */
  line-height: 1.5;
  color: white;
  z-index: 100;
  box-shadow: 0 0 10px 1px rgb(0,0,0, 0.25); 
  backdrop-filter: blur(15px); 
}
.bg ul li a{
  color: black;
 
}
.header-wrapper{
  display: flex;
  justify-content: space-between;
  animation: ani-header 1.5s ease forwards;
  align-items: center;
  
}
#burger-icon{
  display: none;
}
.logo-icon img{
  width: 8rem;
}
.open-menu {
opacity: 1;
}
.closed-menu {
opacity: 0;
height: 0;
padding: 0;
}
.active{
  color:#fda400 !important;
  font-weight: 800;
  animation: ani-char 1s ease-out forwards;
}
.active::before{
  content: '< ';
  animation: ani-char 1s ease-out forwards;
}
.active::after{
  content: ' />';
  animation: ani-char 1s ease-out forwards;
}
ul{
  display: flex;
}
li{
  list-style: none;
  padding: 1rem;
  font-size: 1rem;
}
li a{
  text-decoration: none;
  cursor: pointer;
  font-family: 'PoppinsRegular';
}

@media (max-width: 600px) {
  header{
    padding: 1rem 3rem ;
    
  }
  .logo {
    margin: 2rem;
  }

  .logo-icon img{
    width: 8rem;
  }
  #burger-icon{
    display: block;
    font-size: 1.5rem;
    color: var(--secondary);
  }
  nav{
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    padding: 1rem 3%;
    /* background: var(--primary); */
    
  }
  
  nav ul{
    display: block;
  }
  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  } 
}
@media (min-width: 600px){
header{
    padding: 1rem 3rem ;
    
  }
  .logo-icon img{
    width: 8.5rem;
  }
}
@media (min-width: 768px){
  header{
    padding: 1rem 3rem ;
    
  }
  .logo-icon img{
    width: 9rem;
  }
}
 
@keyframes ani-char {
  0%{
    transform: translateX(300px);
    opacity: 0;
  }
  100%{
    transform: translateX(0);
    opacity: 1;
  }
}
@keyframes ani-header {
  0%{
    transform: translateX(-100px);
    opacity: 0;
  }
  100%{
    transform: translateX(0);
    opacity: 1;
  }
}

@media (max-width: 600px) {
  header{
    padding: 1rem 3rem ;
    
  }
  .logo {
    margin: 2rem;
  }

  .logo-icon img{
    width: 8rem;
  }
  #burger-icon{
    display: block;
    font-size: 1.5rem;
    color: var(--secondary);
  }
  nav{
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    padding: 1rem 3%;
    background: var(--primary);
  }
  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  } 
  nav a{
    color: white !important;
  }
}
@media (min-width: 600px){
header{
    padding: 1rem 3rem ;
    
  }
  .logo-icon img{
    width: 8.5rem;
  }
}
@media (min-width: 768px){
  header{
    padding: 1rem 3rem ;
    
  }
  .logo-icon img{
    width: 9rem;
  }
}
main{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
}
footer{
  padding: 1rem 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background:
		linear-gradient(90deg, black (1rem - 1px), transparent 1%) center,
		linear-gradient(black (1rem - 1px), transparent 1%) center,
		white;
	background-size: 1rem 1rem;
}
footer .go-up{
  
  width: 3.5rem;
  height: 3.5rem;
  background: var(--secondary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
footer .go-up i{
  color: var(--primary);
  font-size: 1.5rem;
  font-weight: bold;
}
footer span{
  font-size: .9rem;
  color: var(--light);
  font-family: 'PoppinsLight';
  opacity: .7;
}
.animated {
  animation-duration: 1s;
  animation-fill-mode: both;
}

@keyframes slideInUp {
  from {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
}

.slideInUp {
  animation-name: slideInUp;
}
</style>
