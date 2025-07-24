<script setup lang="ts">
import TextSection from "../TextSection.vue";

const sizes = "(max-width: 400px) 100vw, 800px";
const style = {
  width: "100%",
  maxWidth: "100vw",
};
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
      :sizes="sizes"
      :style="style"
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
      :sizes="sizes"
      :style="style"
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
      :sizes="sizes"
      :style="style"
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
      :sizes="sizes"
      :style="style"
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
      :sizes="sizes"
      :style="style"
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
      :sizes="sizes"
      :style="style"
    />
  </TextSection>
</template>

<style scoped>
img {
  height: auto;
  margin: 0.5rem 0;
}
</style>
