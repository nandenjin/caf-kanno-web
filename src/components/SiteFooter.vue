<template>
  <footer>
    <div class="logo-container">
      <a
        href="https://www.gendai-art.or.jp/"
        target="_blank"
        rel="noopener noreferrer"
      >
        公益財団法人現代芸術振興財団
      </a>
    </div>
    <p>
      本展覧会は、公益財団法人現代芸術振興財団の行う「CAF(Contemporary Art
      Foundation)賞」の最優秀賞の副賞として開催されます。CAF賞とは学生の方々を対象に若手アーティスト育成を目的として2014年から毎年実施しているアートアワードです。最優秀賞者には賞金100万円のほか、副賞として個展開催の機会を提供しております。
    </p>
    <p lang="en">
      This exhibition is part of the eighth annual “CAF Award” organized by the
      Contemporary Art Foundation supporting young art students. The Grand Prix
      winner is honored with 1 million yen and a solo exhibition.
    </p>
  </footer>
</template>

<style scoped>
footer {
  margin: 6rem auto;
  width: calc(100vw - 1em * 2);
  max-width: 800px;
  font-size: 0.8em;
  line-height: 1.8em;
}
.logo-container {
  margin: 1rem auto;
  text-align: center;

  a {
    display: inline-block;
    background-image: url("../assets/caf-logo.svg");
    width: 3rem;
    height: 3rem;
    background-size: contain;
    background-repeat: no-repeat;
    overflow: hidden;
    text-indent: 100vw;
    white-space: nowrap;
  }
}
</style>
