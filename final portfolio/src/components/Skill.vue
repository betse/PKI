<script setup>
import { defineProps } from "vue"

const props = defineProps(['language', 'progress'])

</script>


<template>
     <div class="skill">
            <div class="lang">{{ language }}</div>
            <div class="percent">
                <div class="parent">
                    <div class="child">
                        <div class="background"></div>
                        <div class="top" :style="{ width: progress }"></div>
                    </div>
                </div>
            </div>
        </div>
</template>

<style scoped>
    .skill {
    display: flex;
    width: 100%;
    padding-bottom: 1rem;
    justify-content: center;
    align-items: center;
    
}
.skill .lang {
    width: 5rem;
    margin: auto 1rem;
    color: var(--primary);
    text-align: right;
    font-family: 'PoppinsRegular';   
}
.skill .percent {
    width: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 1rem;
}
.skill .percent .parent {
    width: 100%;
    height: 3rem;
    border: 1px solid rgb(70 68 68 / 17%);
    border-radius: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
}
.skill .percent .child {
    width: 95%;
    height: 1rem;
    position: relative;
    border-radius: .8rem;
    overflow: hidden;
}
.skill .percent .child .background {
    width: 100%;
    height: 100%;
    background-color: rgba(133, 133, 134, 0.411);
    position: absolute;
    z-index: 1;
}
.skill .percent .child .top{
    height: 100%;
    background: linear-gradient(90deg, var(--secondary), var(--primary));
    position: absolute;
    z-index: 2;
    border-radius: .8rem;
}
</style>