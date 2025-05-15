<template>
  <section>
    <slot />
  </section>
</template>

<style scoped>
section {
  width: calc(100vw - 1.5rem * 2);
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

:deep(h3) {
  font-size: 1.2em;
  margin: 2em 0 1em;
}

:deep(h4) {
  font-size: 1em;
  margin: 1.5em 0 0.5em;
}

:deep(li) {
  margin-bottom: 0.5em;
  line-height: 1.5em;
}

:deep(hr) {
  width: 50%;
  border: none;
  border-top: 1px solid #000;
  margin: 4rem auto;
}

:deep(a) {
  color: #000;
  text-decoration: underline;
  text-underline-offset: 0.2em;
}
</style>
