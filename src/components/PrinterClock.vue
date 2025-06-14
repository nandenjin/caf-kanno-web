<template>
  <div
    class="printer font-dotted"
    :class="{ 'is-active': isActive }"
    ref="root"
  >
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
import { onMounted, onUnmounted, ref, watch } from "vue";

const now = ref(new Date());
const isActive = ref(false);
const root = ref<HTMLElement | null>(null);

let observer = ref<IntersectionObserver>(
  new IntersectionObserver(
    (entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        isActive.value = true;
        now.value = new Date();
      }
    },
    { threshold: 0 }
  )
);

onMounted(() => {
  if (root.value) {
    observer.value.observe(root.value);
  }
});

watch(isActive, (active) => {
  if (active) {
    observer.value?.disconnect();
  }
});

onUnmounted(() => {
  if (observer.value) {
    observer.value.disconnect();
  }
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

  &:not(.is-active) {
    visibility: hidden;
  }

  &.is-active {
    animation: blink 0.7s ease 0.5s both;
  }
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
</style>
