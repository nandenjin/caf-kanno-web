<script setup lang="ts">
import SiteHeader from "./components/SiteHeader.vue";
import SiteFooter from "./components/SiteFooter.vue";
import SectionStatement from "./components/sections/SectionStatement.vue";
import SectionProfile from "./components/sections/SectionProfile.vue";
import SectionOverview from "./components/sections/SectionOverview.vue";
import SectionEvents from "./components/sections/SectionEvents.vue";
import SectionGreeting from "./components/sections/SectionGreeting.vue";
import InteractiveViewProvider from "./components/InteractiveViewProvider.vue";
</script>

<template>
  <div class="app">
    <InteractiveViewProvider>
      <SiteHeader />
      <SectionGreeting />
      <SectionStatement />
      <SectionProfile />
      <SectionOverview />
      <SectionEvents />
      <SiteFooter />
    </InteractiveViewProvider>
  </div>
</template>

<style scoped>
.app {
  margin: 0 auto 6rem;
}
</style>
