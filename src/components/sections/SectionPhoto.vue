<script setup lang="ts">
import TextSection from "../TextSection.vue";
</script>

<template>
  <TextSection>
    <img
      src="../../assets/photos/top_image.jpg?format=webp&w=400"
      alt=""
      loading="lazy"
      srcset="
        ../../assets/photos/top_image.jpg?format=webp&w=400 400w,
        ../../assets/photos/top_image.jpg?format=webp&w=600 600w,
        ../../assets/photos/top_image.jpg?format=webp&w=800 800w
      "
      sizes="(min-width: 1024px) 800px, (min-width: 768px) 600px, 400px"
    />
    <img
      src="../../assets/photos/0803.jpg?format=webp&w=400"
      alt=""
      loading="lazy"
      srcset="
        ../../assets/photos/0803.jpg?format=webp&w=400 400w,
        ../../assets/photos/0803.jpg?format=webp&w=600 600w,
        ../../assets/photos/0803.jpg?format=webp&w=800 800w
      "
      sizes="(min-width: 1024px) 800px, (min-width: 768px) 600px, 400px"
    />
    <img
      src="../../assets/photos/0806.jpg?format=webp&w=400"
      alt=""
      loading="lazy"
      srcset="
        ../../assets/photos/0806.jpg?format=webp&w=400 400w,
        ../../assets/photos/0806.jpg?format=webp&w=600 600w,
        ../../assets/photos/0806.jpg?format=webp&w=800 800w
      "
      sizes="(min-width: 1024px) 800px, (min-width: 768px) 600px, 400px"
    />
    <img
      src="../../assets/photos/0828.jpg?format=webp&w=400"
      alt=""
      loading="lazy"
      srcset="
        ../../assets/photos/0828.jpg?format=webp&w=400 400w,
        ../../assets/photos/0828.jpg?format=webp&w=600 600w,
        ../../assets/photos/0828.jpg?format=webp&w=800 800w
      "
      sizes="(min-width: 1024px) 800px, (min-width: 768px) 600px, 400px"
    />
    <img
      src="../../assets/photos/0834.jpg?format=webp&w=400"
      alt=""
      loading="lazy"
      srcset="
        ../../assets/photos/0834.jpg?format=webp&w=400 400w,
        ../../assets/photos/0834.jpg?format=webp&w=600 600w,
        ../../assets/photos/0834.jpg?format=webp&w=800 800w
      "
      sizes="(min-width: 1024px) 800px, (min-width: 768px) 600px, 400px"
    />
    <img
      src="../../assets/photos/0841.jpg?format=webp&w=400"
      alt=""
      loading="lazy"
      srcset="
        ../../assets/photos/0841.jpg?format=webp&w=400 400w,
        ../../assets/photos/0841.jpg?format=webp&w=600 600w,
        ../../assets/photos/0841.jpg?format=webp&w=800 800w
      "
      sizes="(min-width: 1024px) 800px, (min-width: 768px) 600px, 400px"
    />
  </TextSection>
</template>

<style scoped>
img {
  width: 100%;
  height: auto;
  margin: 0.5rem 0;
}
</style>
