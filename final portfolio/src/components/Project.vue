<template>
    <div class="project-container" id="projects"> 
        <div class="title">
            <h1>Projects and <span>work</span>  experiance</h1>
        </div>
        <div class="experiance">
            <div class="year" data-aos="left" data-aos-duration="2000" data-aos-delay="1000">
                <h3>Insa Addis Ababa Ethiopia</h3>
                <p>2022 - now</p>
            </div>
            <div class="info">
                <div class="line-circle">
                <div class="outer-circle">
                    <div class="inner-circle"  data-aos="top" data-aos-duration="2000" data-aos-delay="1000">
                    </div>
                </div>
                <div class="vl"></div>
            </div>
                <div class="info-wrapper" data-aos="top" data-aos-duration="2000" data-aos-delay="1000">
                <h3>full stack developer</h3>
                <p>vue js + spring boot web application for internal certificate authority deployment(public website and admin dashboard)</p>
            </div>
            </div>
        </div>
        <div class="experiance">
            <div class="year" data-aos="left" data-aos-duration="2000" data-aos-delay="750">
                <h3>Insa Addis Ababa Ethiopia</h3>
                <p>2020 - 2022</p>
            </div>
            <div class="info">
                <div class="line-circle">
                <div class="outer-circle">
                    <div class="inner-circle"  data-aos="top" data-aos-duration="2000" data-aos-delay="750">
                    </div>
                </div>
                <div class="vl"></div>
            </div>
                <div class="info-wrapper" data-aos="top" data-aos-duration="2000" data-aos-delay="750">
                <h3>Back End developer</h3>
                <p>a maven java project for digital signing of document and code</p>
            </div>
            </div>
        </div>
        <div class="experiance">
            <div class="year" data-aos="left" data-aos-duration="2000" data-aos-delay="500">
                <h3>Insa Addis Ababa Ethiopia</h3>
                <p>2019 - 2020</p>
            </div>
            <div class="info">
                <div class="line-circle">
                <div class="outer-circle">
                    <div class="inner-circle"  data-aos="top" data-aos-duration="2000" data-aos-delay="500">
                    </div>
                </div>
                <div class="vl"></div>
            </div>
                <div class="info-wrapper" data-aos="top" data-aos-duration="2000" data-aos-delay="500">
                <h3>Front End developer</h3>
                <p>a dynamic java web project for managing cryptographic keys</p>
            </div>
            </div>
        </div>
        <div class="experiance">
            <div class="year" data-aos="left" data-aos-duration="2000" data-aos-delay="0">
                <h3>Insa Addis Ababa Ethiopia</h3>
                <p>2018 - 2019</p>
            </div>
            <div class="info">
                <div class="line-circle">
                <div class="outer-circle">
                    <div class="inner-circle"  data-aos="top" data-aos-duration="2000" data-aos-delay="0">
                    </div>
                </div>
                <div class="vl"></div>
            </div>
                <div class="info-wrapper" data-aos="top" data-aos-duration="2000" data-aos-delay="0">
                <h3>Trainee</h3>
                <p>Study java EE and get Certified in oracle Certified Professional java EE application Developer </p>
            </div>
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

.project-container{
    
    color: var(--light);
    display: block;
    padding: 5rem 9%;
    min-height: 100vh;
}
.title{
    text-align: center;
    margin: 2rem auto;
}
.title h1{
    font-size: 3rem;
    font-family: 'PoppinsBold';
    padding-bottom: 3rem;
    animation: left  4s forwards;
}

.title h1 span{
    font-family: 'PoppinsBold';
    font-size: 3rem;
    color: var(--secondary);
}
.experiance{
    display: flex;
    
}
/* .experiance:nth-child(2) .info-wrapper{
    animation: top 4s forwards;
}
.experiance:nth-child(3) .info-wrapper{
    animation: top 3s forwards;
}
.experiance:nth-child(4) .info-wrapper{
    animation: top 2s forwards;
}
.experiance:nth-child(5) .info-wrapper{
    animation: top 1s forwards;
} */
[data-aos="top"]{
        transform: translateY(-300px);
        opacity: 0;
}
[data-aos="top"].aos-animate{
        transform: translateY(0);
        opacity: 1;
}

.experiance .year{
    width: 40%;
}
.experiance .year h3{
    font-size: 1rem;
}
.experiance .year p{
    font-family: 'PoppinsMedium';
    color: var(--secondary);
    font-size: 0.8rem;
}
/* .experiance:nth-child(2) .year{
    animation: left 4s forwards;
}
.experiance:nth-child(3) .year{
    animation: left 3s forwards;
}
.experiance:nth-child(4) .year{
    animation: left 2s forwards;
}
.experiance:nth-child(5) .year{
    animation: left 1s forwards;
} */
[data-aos="left"]{
        transform: translateX(-700px);
        opacity: 0;
}
[data-aos="left"].aos-animate{
        transform: translateX(0);
        opacity: 1;
}

.experiance .info{
    width: 60%;
    display: flex;
}
.experiance .info .outer-circle{
    width: 50px;
    height: 50px;
    border-radius: 50px;
    background: none;
    border: 1px dashed white;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 1rem;
    min-width: 50px;
}
.experiance .info .inner-circle{
    width: 20px;
    height: 20px;
    border-radius: 20px;
    background: white;
}
.experiance .line-circle{
    display: flex;
    flex-direction: column;
}
.experiance .vl{
    margin-top: 2px;
    border-left: 1px dashed white;
    height: 100px;
    align-self: center;
}
.experiance .info-wrapper{
    width: 70%;
}
.experiance .info-wrapper h3{
    margin-bottom: 0.5rem;
    font-size: 1rem;
}
.experiance .info-wrapper p{
    font-size: .8rem;
}
.experiance:nth-child(2) .info .inner-circle {
    background:  rgb(255, 255, 255);
    /* animation: top 4s forwards; */
}
.experiance:nth-child(3) .info .inner-circle {
    background:  rgb(4, 135, 241);
    /* animation: top 3s forwards; */
}
.experiance:nth-child(4) .info .inner-circle {
    background:  rgb(7, 88, 84);
    /* animation: top 2s forwards; */
}
.experiance:nth-child(5) .info .inner-circle {
    background:  rgb(197, 9, 135);
    /* animation: top 1s forwards; */
}
</style>