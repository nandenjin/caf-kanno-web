<script setup lang="ts">
import InteractiveView from "../InteractiveView.vue";
import DottedTitle from "../DottedTitle.vue";
import TextSection from "../TextSection.vue";
</script>

<template>
  <TextSection>
    <DottedTitle style="margin: 6rem 0 2rem">Information</DottedTitle>
    <div class="column-root">
      <div class="text">
        <p>
          <strong>菅野歩美 個展『Boring process たいくつな掘削かてい』</strong>
        </p>
        <ul>
          <li>2025.5.29 - 6.28（水・木・金・土）12:00 - 19:00</li>
          <li>現代芸術振興財団<br />東京都港区六本木6-6-9 ピラミデビル4F</li>
        </ul>
      </div>
      <div class="visual">
        <InteractiveView
          :width="200"
          :height="200"
          :onRender="
            (camera, progress, control) => {
              camera.fov = 60;
              camera.position.set(1.4, 0.5, -0.2 + progress / 5);
              control.target.set(0, 0.2, 0.2 + progress / 5);
              camera.lookAt(control.target);
            }
          "
        />
      </div>
    </div>
  </TextSection>
</template>

<style scoped>
.column-root {
  display: grid;
  grid-template-columns: 1fr 200px;
  gap: 2em;
}

.visual {
  padding-top: 3em;
  border-top: 0.1px solid transparent;
}

@media screen and (max-width: 800px) {
  .column-root {
    grid-template-columns: 1fr;
  }
  .visual {
    border-top: none;
    transform-origin: 0 0;
    transform: scale(0.7);
  }
}
</style>
