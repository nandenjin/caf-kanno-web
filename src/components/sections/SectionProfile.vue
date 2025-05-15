<script setup lang="ts">
import TextSection from "../TextSection.vue";
</script>

<template>
  <TextSection>
    <div class="profile">
      <img
        src="../../assets/profile_kanno.jpg"
        alt=""
        width="150"
        height="150"
      />
      <div>
        <h3>菅野歩美</h3>
        <p>
          1994年生まれ。2025年東京藝術大学大学院美術研究科博士後期過程（油画）修了。
        </p>
        <p>
          どこの土地にも存在する、土地にまつわる物語や伝説、幽霊譚。フォークロアと呼ばれるそれらは、なぜ人々によって紡がれてきたのか、その背後にある歴史や個人の感情を想像することで生まれる「オルタナティヴ・フォークロア」を映像やインスタレーションによって表現する。主な個展に「明日のハロウィン都市/
          Halloween Cities of To-Morrow」（2023/東京）
        </p>
      </div>
    </div>
  </TextSection>
</template>

<style scoped>
.profile {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 2rem;
  margin: 2em 0;
  font-size: 0.9em;

  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  h3 {
    margin: 0 0 1em;
  }
}
</style>
