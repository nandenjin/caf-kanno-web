<script setup lang="ts">
import PrinterClock from "./PrinterClock.vue";
</script>

<template>
  <header>
    <PrinterClock class="printer" />
    <img class="cover" src="../assets/untitled04.jpg" alt="" />
    <div class="title">
      <span class="font-dotted">Ayumi Kanno Solo Exhibition</span>
      <h1>boring process たいくつな掘削かてい</h1>
      <div class="abstract font-dotted">
        <span>2025.5.29 - 6.28</span>
        <span>Roppongi Piramide Bldg 4F</span>
      </div>
    </div>
  </header>
</template>

<style scoped>
.printer {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  height: 3rem;
  font-size: 3rem;
  animation: blink 0.7s ease 0.5s both 1;
}

@keyframes blink {
  0% {
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  20% {
    opacity: 0;
  }
  30% {
    opacity: 1;
  }
  40% {
    opacity: 0;
  }
  70% {
    opacity: 1;
  }
}

header {
  position: relative;
  text-align: center;
  height: 100vh;

  &::after {
    content: "";
    display: block;
    position: absolute;
    bottom: calc(2rem + 3.5vmax);
    left: 0;
    right: 0;
    width: 1rem;
    height: 1rem;
    margin: auto;
    border: 0.15rem solid white;
    border-style: none none solid solid;
    transform: rotate(-45deg) translateX(50%);
    animation: jump 1s ease-in-out infinite;
  }
}

@keyframes jump {
  0% {
    transform: rotate(-45deg) translateX(50%);
  }
  50% {
    transform: translateY(-0.5rem) rotate(-45deg) translateX(50%);
  }
  100% {
    transform: rotate(-45deg) translateX(50%);
  }
}

.cover {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100svw;
  height: 100svh;
  margin: auto;
  object-fit: cover;
  animation: lazy-in 1s ease-in-out 2.5s both;
}

@keyframes lazy-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.title {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80vw;
  color: white;
  font-size: 1.4rem;
  animation: lazy-in 1s ease-in-out 3s both;
}

h1 {
  text-indent: 100vw;
  overflow: hidden;
  aspect-ratio: 135/56;
  width: 40vw;
  margin: 3rem auto;
  user-select: none;
  white-space: nowrap;
  background-image: url("../assets/logo.svg");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;

  @media screen and (max-width: 1000px) {
    width: 75vw;
    max-width: 600px;
  }
}

.abstract {
  font-size: 0.8em;
  span {
    display: inline-block;
    margin-left: 0.5em;
  }
}
</style>
