<script setup lang="ts">
import InteractiveView from "./InteractiveView.vue";
import PrinterClock from "./PrinterClock.vue";
</script>

<template>
  <div class="clock">
    <PrinterClock />
  </div>
  <footer>
    <div class="visual">
      <InteractiveView
        :width="300"
        :height="100"
        :onRender="
          (camera, progress, control) => {
            camera.fov = 30;
            camera.position.set(0.8 + progress / 5, 0.5, 1.4);
            control.target.set(0 + progress / 5, 0, 3);
            camera.lookAt(control.target);
          }
        "
      />
    </div>
    <div class="logo-container">
      <a
        href="https://gendai-art.org/"
        target="_blank"
        rel="noopener noreferrer"
      >
        公益財団法人現代芸術振興財団
      </a>
    </div>
    <p>
      本展覧会は、公益財団法人現代芸術振興財団の行う「CAF(Contemporary Art
      Foundation)賞」の最優秀賞の副賞として開催されます。CAF賞とは学生の方々を対象に若手アーティスト育成を目的として2014年から毎年実施しているアートアワードです。最優秀賞者には賞金100万円のほか、副賞として個展開催の機会を提供しております。
    </p>
    <p lang="en">
      This exhibition is part of the eighth annual “CAF Award” organized by the
      Contemporary Art Foundation supporting young art students. The Grand Prix
      winner is honored with 1 million yen and a solo exhibition.
    </p>
  </footer>
</template>

<style scoped>
.clock {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  margin-top: 3rem;
}

footer {
  margin: 6rem auto;
  width: calc(100vw - 1.5em * 2);
  max-width: 800px;
  font-size: 0.8em;
  line-height: 1.8em;
}
.visual {
  display: flex;
  justify-content: center;
  margin: 6em 0;
}
.logo-container {
  margin: 1rem auto;
  text-align: center;

  a {
    display: inline-block;
    background-image: url("../assets/caf-logo.svg");
    width: 3rem;
    height: 3rem;
    background-size: contain;
    background-repeat: no-repeat;
    overflow: hidden;
    text-indent: 100vw;
    white-space: nowrap;
  }
}
</style>
