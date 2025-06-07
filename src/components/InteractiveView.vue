<script setup lang="ts">
import {
  inject,
  onMounted,
  onUnmounted,
  ref,
  Ref,
  useTemplateRef,
  watch,
} from "vue";
import type { InteractiveViewHub } from "../lib/3dview";
import { PerspectiveCamera } from "three";
import { OrbitControls } from "three/examples/jsm/Addons.js";

const root = useTemplateRef<HTMLDivElement>("root");
const interactiveViewHub =
  inject<Ref<InteractiveViewHub>>("interactiveViewHub");
const visible = ref(true);
const usingRenderer = ref(false);

const { width, height, onRender } = defineProps<{
  width: number;
  height: number;
  onRender?: (
    camera: PerspectiveCamera,
    scrollProgress: number,
    control: OrbitControls
  ) => void;
}>();

const onScroll = () => {
  const bound = root.value?.getBoundingClientRect();
  if (!bound) return;
  if (!root.value) return;

  const hub = interactiveViewHub?.value;
  if (!hub) {
    return;
  }

  const requestRender = () => {
    onRender?.(
      hub.camera,
      (bound.top + bound.height) / (bound.height * 2 + window.innerHeight),
      hub.control
    );
  };

  const isVisible =
    bound.bottom >= 0 &&
    bound.top <= window.innerHeight &&
    bound.right >= 0 &&
    bound.left <= window.innerWidth;

  if (isVisible) {
    if (!usingRenderer.value) {
      const rendererDom = hub.renderer.domElement;
      if (rendererDom && !rendererDom?.parentElement) {
        hub.setSize(width, height);
        root.value?.appendChild(rendererDom);
        usingRenderer.value = true;
        visible.value = true;
        requestRender();
      } else {
        visible.value = false;
      }
    } else {
      if (!hub.control.enabled) {
        requestRender();
      }
    }
  } else {
    visible.value = false;

    if (usingRenderer.value) {
      const rendererDom = hub.renderer.domElement;
      if (rendererDom && rendererDom?.parentElement === root.value) {
        root.value?.removeChild(rendererDom);
      } else {
        console.warn("Renderer DOM is not in the expected location.");
      }
      usingRenderer.value = false;
    }
  }
};

watch(
  () => [width, height],
  () => {
    if (!root.value) return;
    if (!interactiveViewHub?.value) return;

    const hub = interactiveViewHub.value;
    hub.setSize(width, height);
    onScroll();
  },
  { immediate: true }
);

onMounted(() => {
  if (!root) return;
  if (!interactiveViewHub) return;

  window.addEventListener("scroll", onScroll);
  window.addEventListener("resize", onScroll);
  onScroll();
});

onUnmounted(() => {
  window.removeEventListener("scroll", onScroll);
  window.removeEventListener("resize", onScroll);

  if (usingRenderer.value && root.value && interactiveViewHub?.value) {
    const hub = interactiveViewHub.value;
    const rendererDom = hub.renderer.domElement;
    if (rendererDom && rendererDom.parentElement === root.value) {
      root.value.removeChild(rendererDom);
    }
  }
});
</script>

<template>
  <div
    ref="root"
    :style="{
      width: width + 'px',
      height: height + 'px',
      opacity: visible ? 1 : 0,
    }"
    class="container"
  ></div>
</template>

<style scoped>
.container {
  transition: opacity 1s ease-in-out 0.5s;
}
</style>
