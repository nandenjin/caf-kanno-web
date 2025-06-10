<script setup lang="ts">
import DottedTitle from "../DottedTitle.vue";
import TextSection from "../TextSection.vue";
</script>

<template>
  <TextSection>
    <DottedTitle style="margin: 6rem 0 2rem">Event</DottedTitle>
    <h3>オープニングパーティー「Reception Room」</h3>
    <time datetime="2025-05-29 17:00:00">5/29（木） 17:00-</time>
    <p>
      本展覧会のイメージに合わせた、ささやかなお菓子をご用意しております。該当の時間帯には作家も在廊いたしますので、どなたさまもどうぞお気軽にお立ち寄りください。
    </p>
    <h3>トークイベント「Drawing Room」</h3>
    <time datetime="2025-06-07 14:00:00">6/20（金） 18:00-19:00</time>
    <p>
      「drawing」には「描く」だけでなく、「応接」という意味もあるそうです。本トークイベントでは、ジャグリングのような手つきで対話を重ねながら、今回の展示テーマやこれまでの作品とのつながりを掘り下げていきます。
    </p>
    <p>
      例えば、そもそもなぜフォークロアに興味を持ったのか？そうした、本展示にも繋がる菅野のこれまでの作品をめぐる問いを、友人でジャグリングパフォーマーである結城敬介と共に掘り下げていきます。そこから生まれる作品のさらなる余白をめざして、トークイベント「Drawing
      Room」を開催します。
    </p>
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
  font-size: 0.9rem;

  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  h4 {
    margin: 0;
  }
}
</style>
