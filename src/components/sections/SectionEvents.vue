<script setup lang="ts">
import TextSection from "../TextSection.vue";
</script>

<template>
  <TextSection>
    <h2>イベント</h2>
    <h3>オープニングパーティー</h3>
    <time datetime="2025-05-29 17:00:00">5/29（木） 17:00-</time>
    <h3>トークイベント</h3>
    <time datetime="2025-06-07 14:00:00">6/20（土） 18:00-19:00</time>
    <p>
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSdY4hVIGKlqpGQhAKquVG52v4hs7oogAXHaVL_ghRqoekwqRw/viewform"
        >オンラインフォームで予約いただけます。</a
      >
    </p>
    <div class="guest-profile">
      <img
        src="../../assets/profile_yuki.jpg"
        alt=""
        width="150"
        height="101"
      />
      <div>
        <h4>ゲスト：結城敬介（ジャグリングパフォーマー）</h4>
        <p>
          1987年生まれ。仙台市出身。13歳よりジャグリングを始める。16歳で日本大会銀賞を受賞後、国内外でパフォーマンスを行う傍ら、異ジャンル並立をコンセプトにした『多夢多夢茶会』『あるばとろす』などのオムニバスパフォーマンス公演を企画する。また『アイドル批評誌
          かいわい』やストリップの文集『ab-』の編集・執筆活動も行っている。
        </p>
      </div>
    </div>
  </TextSection>
</template>

<style scoped>
.guest-profile {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 2rem;
  margin: 2em 0;

  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  h4 {
    margin: 0;
  }
}
</style>
