<script setup lang="ts">
import SiteHeader from "./components/SiteHeader.vue";
import SiteFooter from "./components/SiteFooter.vue";
import SectionStatement from "./components/sections/SectionStatement.vue";
import SectionProfile from "./components/sections/SectionProfile.vue";
import SectionOverview from "./components/sections/SectionOverview.vue";
</script>

<template>
  <div class="app">
    <SiteHeader />
    <SectionStatement />
    <SectionProfile />
    <SectionOverview />
    <SiteFooter />
  </div>
</template>

<style scoped>
.app {
  margin: 6rem auto;
}
</style>
