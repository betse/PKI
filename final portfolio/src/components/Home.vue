<script setup>
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import { onMounted } from "vue";
function download_resume() {
  axios({
    url: "http://172.20.79.45:5373/resume.pdf",
    method: "GET",
    responseType: "blob",
  }).then((response) => {
    var fileURL = window.URL.createObjectURL(new Blob([response.data]));
    var fileLink = document.createElement("a");

    fileLink.href = fileURL;
    fileLink.setAttribute("download", "Betsegaw_G_resume.pdf");
    document.body.appendChild(fileLink);

    fileLink.click();
  });
  onMounted(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-back",
      once: true,
      anchorPlacement: "top-bottom",
      offset: 50,
      delay: 100,
      startEvent: "load",
      disable: "mobile",
      useClassNames: true,
      initClassName: "aos-init",
      animatedClassName: "aos-animate",
      /* Define the custom animation */
      custom: "ani-hand",
    });
  });
}
</script>
<template>
  <div class="resume-container" id="home">
    <div class="column-wrapper">
      <div class="first-column">
        <div class="greeting" data-aos="ani-left" data-aos-duration="2000">
          <div class="hand">
            <img
              class="wave"
              src="../assets/images/wave-thumb.png"
              data-aos="wave"
              data-aos-delay="2000"
            />
            <h1>there,</h1>
          </div>
          <h1>I'm Betsegaw</h1>
        </div>

        <p class="summary" data-aos="ani-right" data-aos-duration="3000">
          Energetic software developer offering wealth of experience in both front and
          back end software development, technical troubleshooting and problem-solving
          business issues. Hardworking, educated and willing to go extra mile to complete
          any task.
        </p>
        
        <button @click="download_resume()" data-aos="ani-left" data-aos-duration="2000">
          Download Resume
        </button>
      </div>
      <div class="second-column">
        <div class="photo-col" data-aos="ani-top" data-aos-duration="3000">
          <div class="moon"></div>
          <img class="photo" src="../assets/photo.png" />
        </div>
      </div>
    </div>
    <div class="light-bg"></div>
  </div>
</template>

<style scoped>
.resume-container {
  color: var(--light);
  padding: 4rem 9%;

  min-height: 100vh;

  display: flex;
  overflow: hidden;
}
.column-wrapper {
  display: flex;
}
.greeting {
  display: block;
  /* animation: ani-left 1s  ease-in-out; */
}
.greeting .hand {
  display: flex;
  align-items: center;
}
.first-column h1 {
  font-size: 4rem;
  white-space: nowrap;
  font-family: "PoppinsBold";
}

.greeting .wave {
  margin: 0.5rem 2rem 0.5rem 0;
}
.first-column {
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}
[data-aos="ani-left"] {
  transform: translateX(-400px);
  opacity: 0;
}
[data-aos="ani-left"].aos-animate {
  transform: translateX(0);
  opacity: 1;
}
[data-aos="ani-right"] {
  transform: translateX(1000px);
  opacity: 0;
}
[data-aos="ani-right"].aos-animate {
  transform: translateX(0);
  opacity: 1;
}
.first-column img {
  width: 80px;
  /* animation: ani-hand 0.5s ease-in-out 2; */
  /* animation-delay: 3s; */
}

[data-aos="wave"] {
  animation-name: wave;
  animation-duration: 0.5s;
  animation-delay: 2s;
}
@keyframes wave {
  0% {
    transform: rotate(0);
    opacity: 0;
  }
  20% {
    transform: rotate(-10deg);
    opacity: 1;
  }
  40% {
    transform: rotate(20deg);
    opacity: 1;
  }
  60% {
    transform: rotate(-10deg);
    opacity: 1;
  }
  80% {
    transform: rotate(20deg);
    opacity: 1;
  }
  100% {
    transform: rotate(0);
    opacity: 1;
  }
}
.summary {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-self: center;
  font-size: 1rem;
}

button {
  background-color: var(--secondary);
  border: none;
  font-family: "PoppinsMedium";
  text-decoration: none;
  color: var(--primary);
  padding: 0.8rem 1.5rem;
  border-radius: 30px;
  box-shadow: none;
}
button:hover {
  box-shadow: 0 5px 15px rgb(253, 164, 0);
  transition-duration: 0;
}
.second-column {
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.photo-col {
  border-radius: 50%;
  /* animation: ani-top 3s ease-in-out; */
  /* display: flex;
   flex-direction: row-reverse; */
}
[data-aos="ani-top"] {
  transform: translateY(-700px) rotate(360deg);
  opacity: 0;
}
[data-aos="ani-top"].aos-animate {
  transform: translateY(0) rotate(0);
  opacity: 1;
}
/* @keyframes ani-top {
  0% {
    transform: translateY(-700px) rotate(360deg);
    opacity: 0;
  }
  100% {
    transform: translateY(0) rotate(0);
    opacity: 1;
  }
} */

  /*.moon{
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #eba309;
  background-size: cover;
  position: absolute;
  right: 0;
  margin-right: -30px;
  margin-top: -30px;
  transform-origin: center center;
  animation: orbdit 10s linear infinite;
  width: 1.2rem;
  height: 1.2rem;
  background: white;
  border-radius: 50%;
  margin: 1rem 3rem;
  opacity: .6;
  box-shadow:
    0 0 60px 3px #fff, 
    0 0 30px 6px var(--primary), middle magenta 
    0 0 22px 9px var(--secondary);  outer cyan 
}
@keyframes orbit {
  from {
    transform: rotate(0deg) translateX(150px) rotate(0deg);
  }
  to {
    transform: rotate(360deg) translateX(150px) rotate(-360deg);
  }
}
  */
.photo-col .paint {
  z-index: 50;
  width: 400px;
  background: none;
  border: 1px solid;
  border-radius: 50%;
}
.photo-col .photo {
  box-shadow: 15px 8px 40px 2px #f91;
  border-radius: 50%;
  width: 300px;
  box-shadow: 0 0 30px 3px #fff, 0 0 30px 6px var(--secondary),
    0 0 30px 9px var(--primary);
}
.light-bg {
  position: absolute;
  width: 200px;
  height: 200px;
  border-radius: 200px;
  /* border: 1px solid white;
    top: calc(50% - 200px);
    left: calc(50% - 200px); */
  top: calc(50% - 100px);
  left: calc(50% - 100px);
  filter: blur(133px);
  background: var(--light);
  display: none;
}

@media (max-width: 600px) {
  .column-wrapper {
    padding: 6rem 9%;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: space-around;
  }
  .first-column {
    padding: 5rem 9%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }
  .first-column p {
    min-width: 20rem;
    margin: 3rem 0;
  }
  .hand img {
    width: 60px;
  }
  .first-column h1 {
    font-size: 3rem;
  }
  .first-column button {
    margin: 2rem;
    width: 150px;
  }

  .photo-col .photo {
    width: 10rem;
  }
}
@media (min-width: 600px) {
  .column-wrapper {
    display: flex;
    flex-direction: row;
  }
  .hand img {
    width: 70px;
  }
  .first-column {
    align-items: center;
  }
  .first-column h1 {
    font-size: 3rem;
  }
  .first-column button {
    width: max-content;
  }
  .photo-col .photo {
    width: 13rem;
  }
}

@media (min-width: 768px) {
  .column-wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 5rem;
    padding-top: 2rem;
  }
  .first-column {
    margin: 1rem;
    min-width: 300px;
    gap: 5rem;
    align-items: center;
  }
  .first-column button {
    margin: 2rem;
    width: max-content;
    font-size: 0.9rem;
  }

  .photo-col .photo {
    width: 15rem;
  }
}
@media (min-width: 992px) {
  .column-wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 5rem;
    padding-top: 2rem;
  }
  .photo-col .photo {
    width: 20rem;
  }
}
</style>
