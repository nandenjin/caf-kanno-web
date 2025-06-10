<template>
  <div class="printer font-dotted">
    {{ now.getDate()
    }}<span
      class="day"
      :style="`background-position: calc(100% / 6 * ${now.getDay()}) 0%`"
    ></span>
    {{ now.getHours().toString().padStart(2, "0") }}<span class="tick">:</span
    >{{ now.getMinutes().toString().padStart(2, "0") }}
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";

const now = ref(new Date());

onMounted(() => {
  now.value = new Date();
});
</script>

<style scoped>
.printer {
  .day {
    display: inline-block;
    height: 0.67em;
    aspect-ratio: 65.75 / 79.5;
    background-image: url("../assets/days.svg");
    background-size: cover;
  }
}
</style>
