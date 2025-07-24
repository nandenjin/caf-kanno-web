<script setup lang="ts">
import { ref } from "vue";

const { videoId } = defineProps<{
  videoId: string;
}>();
const isActive = ref(false);
</script>

<template>
  <div>
    <iframe
      v-if="isActive"
      :src="`https://www.youtube.com/embed/${videoId}?autoplay=1`"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
      width="100%"
      height="100%"
    ></iframe>
    <div v-else class="video-placeholder" @click="isActive = true">
      <img
        class="thumbnail"
        :src="`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`"
        alt=""
        loading="lazy"
      />
    </div>
  </div>
</template>

<style scoped>
.video-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #000;
  color: #fff;
  cursor: pointer;
  text-align: center;
  position: relative;
  overflow: hidden;

  .thumbnail {
    width: 100%;
    height: auto;
    max-height: 100%;
    object-fit: cover;
    filter: brightness(0.8);
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    width: 0;
    height: 0;
    border: 30px solid transparent;
    border-width: 30px 0 30px 60px;
    border-left-color: rgba(255, 255, 255, 1);
  }
}
</style>
