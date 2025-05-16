<template>
  <header>
    <img class="cover" src="../assets/untitled04.jpg" alt="" />
    <div class="title">
      <h1>boring process たいくつな掘削かてい</h1>
      <div class="abstract">
        <span>2025.5.29 - 6.28（水・木・金・土）</span>
        <span>12:00 - 19:00</span>
        <span>現代芸術振興財団（六本木）</span>
      </div>
    </div>
  </header>
</template>

<style scoped>
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
  width: calc(100svw - 7vmax);
  height: calc(100svh - 7vmax);
  margin: auto;
  object-fit: cover;
  z-index: -1;
}

.title {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80vw;
  color: white;
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
  span {
    display: inline-block;
    margin-left: 0.5em;
  }
}
</style>
