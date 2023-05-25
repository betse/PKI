<script>
  export default {
  mixins: [VueScreenSizeMixin],
};
</script>

<script setup>
 import { inject, ref } from 'vue';

import { VueScreenSizeMixin } from 'vue-screen-size';
  const mixins = ref(VueScreenSizeMixin)
 const showmenu = inject('showmenu')
  


 function menu(){

    // showmenu.value = !showmenu.value
     console.log("test"+mixins)
 }
</script>
<template>
    <nav>
     <ul>
      <li><router-link active-class="active" to="/" @click="menu">Home</router-link></li>
      <!-- <span class="openchar">&lt;</span> Home <span class="closechar">/></span> -->
      <li><router-link active-class="active" to="/service" @click="menu">Service</router-link></li>
      <li><router-link active-class="active" to="/projects" @click="menu">Projects</router-link></li>
      <li><router-link active-class="active" to="/skills" @click="menu">Skills</router-link></li>
      <li><router-link active-class="active" to="/contact" @click="menu">Contact</router-link></li>
     </ul>
    </nav>
</template>
<style scoped>
.active{
  color:#fda400;
  animation: ani-char 3s ease-out forwards;
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
}
.active{
  color: #fda400;
  font-weight: 800;
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

</style>