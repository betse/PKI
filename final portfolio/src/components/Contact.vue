<script>
import AOS from 'aos';
import 'aos/dist/aos.css';
export default {
  mounted() {
  AOS.init({
    
  });
},
updated() {
  AOS.refresh();
}
}
// function sendEmail() {
//       console.log("email will be sent soon...")
//     }
</script>
<template>
  <div class="contact-container" id="contact">
    <div class="title">
      <h1 data-aos="ani-top" data-aos-duration="2000">Get in touch</h1>
    </div>
      <form @click="sendEmail()">
        <div class="input-box">
            <input type="text" name="name" id="name" data-aos="ani-left" data-aos-duration="2000" placeholder="Your name" />
            <input type="text" name="name" id="phone" data-aos="ani-right" data-aos-duration="2000" placeholder="Your Phone" />
        </div>
        <div class="input-box">
            <input type="text" name="name" id="email" data-aos="ani-left" data-aos-duration="2000" placeholder="Your Email" />
            <input type="text" name="name" id="subject" data-aos="ani-right" data-aos-duration="2000" placeholder="Subject" />
        </div>
          <textarea name="" id="" rows="10" data-aos="ani-bottom" data-aos-duration="2000" placeholder="your message"></textarea>
          <input type="submit" name="name" id="" value="Submit" data-aos="ani-bottom" data-aos-duration="2000" data-aos-delay="200" />
      </form>
    <div class="social" data-aos="zoom-in" data-aos-duration="2000" data-aos-delay="1000">
      <img src="../assets/icons/facebook.png" alt="" />
      <img src="../assets/icons/twitter.png" alt="" />
      <img src="../assets/icons/youtube.png" alt="" />
      <img src="../assets/icons/linkedin.png" alt="" />
      <img src="../assets/icons/telegram.png" alt="" />
    </div>
  </div>
</template>
<style scoped>
.contact-container {
  color: var(--primary);
  padding: 5rem 9%;
  min-height: 100vh;
  /* 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
   */
}
.title h1 {
  font-size: 3rem;
  font-family: "PoppinsBold";
  margin: 3rem 0;
  text-align: center;
   /* animation: ani-left 2s  ease-in-out; */
}
form{
    max-width: 50rem;
    margin: 1rem auto;
    text-align: center;
    margin-bottom: 3rem;
}
form .input-box{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
/* #name, #email{
     animation: ani-left 2s  ease-in-out;
} */
#phone, #subject{
     /* animation: ani-right 2s  ease-in-out; */
}
/* textarea, input[type="submit"]{
     animation: ani-bottom 2s  ease-in-out;
} */
form input, form textarea{
    width: 100%;
    padding: .8rem;
    border-radius: .4rem;
    border: none;
    margin: .5rem 0;
    color: var(--primary);
    font-family: 'PoppinsRegular';
}
form input{
    width: 49.2%;
}
form textarea{
    resize: none;
}
input[type="submit"] {
  width: 10rem;
  background-color: var(--secondary);
    border: none;
    font-family: 'PoppinsMedium';
    text-decoration: none;
    color: var(--primary);
    padding: .8rem 1rem;
    border-radius: 30px;
}
form input:focus, form textarea:focus{
    outline: none;
}
.social {
  display: flex;
  justify-content: center;
  align-items: center;
}
.social img {
  width: 2.5rem;
  height: 2.5rem;
  padding: 0.4rem;
}
@media (max-width: 600px){
       form input{
        width: 100%;
       }
}
@media (min-width: 600px) {
    form input{
        width: 49.2%;
       }

}
@media (min-width: 768px){
    form input{
        width: 49.2%;
       }
}
[data-aos="ani-top"]{
  transform: translateY(-100px);
  opacity: 0;
}
[data-aos="ani-top"].aos-animate{
  transform: translateY(0);
  opacity: 1;
}
[data-aos="ani-right"]{
  transform: translateX(400px);
    opacity: 0;
}
[data-aos="ani-right"].aos-animate{
  transform: translateX(0);
    opacity: 1;
}
[data-aos="ani-left"]{
  transform: translateX(-400px);
    opacity: 0;
}
[data-aos="ani-left"].aos-animate{
  transform: translateX(0);
    opacity: 1;
}
[data-aos="ani-bottom"]{
  transform: translateY(400px);
    opacity: 0;
}
[data-aos="ani-bottom"].aos-animate{
  transform: translateY(0);
    opacity: 1;
}
@keyframes ani-right {
  0%{
    transform: translateX(1000px);
    opacity: 0;
  }
  100%{
    transform: translateX(0);
    opacity: 1;
  }
}
@keyframes ani-left {
  0%{
    transform: translateX(-400px);
    opacity: 0;
  }
  100%{
    transform: translateX(0);
    opacity: 1;
  }
}
@keyframes ani-bottom {
  0%{
    transform: translateY(400px);
    opacity: 0;
  }
  100%{
    transform: translateY(0);
    opacity: 1;
  }
}

/* .input-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
}
.input-wrapper .first-row , .input-wrapper .second-row .textarea {
    flex: 1 1 1rem;
}
input[type="text"]{
    width: 20rem;
}
textarea{
    width: 40rem;
}
input[type="text"],
textarea {
  color: var(--primary);
  margin: 0.2rem;
  border-radius: 0.4rem;
  padding: 0.7rem;
  border: none;
  background: var(--light);
}
input[type="text"]:focus,
textarea:focus {
  border: none;
  outline: none;
}
input[type="submit"] {
  color: var(--primary);
  font-family: "PoppinsMedium";
  background-color: var(--secondary);
  padding: 0.8rem 3rem;
  border: none;
  border-radius: 0.4rem;
}
.submit {
  display: flex;
  justify-content: center;
  margin: 2rem auto;
}
.social {
  display: flex;
  justify-content: center;
  align-items: center;
}
.social img {
  width: 3rem;
  height: 3rem;
  padding: 0.4rem;
}
@media (max-width: 600px){
        input[type="text"]{
    min-width: 300px;
}
textarea{
    min-width: 300px;
}
.input-wrapper {
  
  width: 100%;
}
}
@media (min-width: 600px) {
    input[type="text"]{
    min-width: 300px
}
textarea{
   min-width: 300px;
}
} */
</style>
