<script setup lang="ts">
import { onMounted, provide, shallowRef } from "vue";
import { InteractiveViewHub } from "../lib/3dview";

const interactiveViewHub = shallowRef<InteractiveViewHub>(
  new InteractiveViewHub()
);
provide("interactiveViewHub", interactiveViewHub);

onMounted(() => {
  if (location.search.includes("dev")) {
    const guiDom = interactiveViewHub.value.gui.domElement;
    guiDom.style.position = "fixed";
    guiDom.style.top = "0";
    guiDom.style.right = "0";
    guiDom.style.zIndex = "1000";

    document.body.appendChild(interactiveViewHub.value.stats.dom);
    document.body.appendChild(interactiveViewHub.value.gui.domElement);
  }
});
</script>

<template>
  <slot></slot>
</template>
