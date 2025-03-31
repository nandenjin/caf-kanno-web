<template>
  <section>
    <slot />
  </section>
</template>

<style scoped>
section {
  width: calc(100vw - 1em * 2);
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 3rem;
}

@media screen and (min-width: 1500px) {
  section {
    width: 60rem;
    max-width: none;
  }
}

:deep(p) {
  line-height: 1.8em;
  margin: 0.8em 0 0 0;
}

:deep(h2) {
  font-size: 1.4em;
  margin: 1.5em 0 0 0;
}

:deep(li) {
  margin-bottom: 0.5em;
  line-height: 1.5em;
}
</style>
