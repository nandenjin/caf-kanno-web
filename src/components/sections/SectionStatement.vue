<script setup lang="ts">
import InteractiveView from "../InteractiveView.vue";
import TextSection from "../TextSection.vue";
import { Vector3 } from "three";
</script>

<template>
  <TextSection>
    <hr />
    <div class="column-root">
      <div class="text">
        <p>
          私がフォークロアをテーマにしてきた背景には、祖父母との関係がある。毎日祖父母と土建屋の事務所で夕食を食べ、食後のフルーツの時間になると、祖母がこの町でかつてあった出来事を面白おかしく語ってくれた。話はいつも誇張され、脚色もされていて、それが本当なのか嘘なのか、よくわからない。けれど知らない話に驚いた反応をすると祖母は喜び、話に熱が入る。このように過ごした時間が、今の制作につながっている気もする。
        </p>
        <p>
          私はここ4年ほど、家族と分担して、自宅から車で20分ほどの山あいに暮らす祖父母の買い物や病院への送迎をしてきた。そしてこの春、しばらく前に閉業した祖父の事務所の整理を始めた。土建屋だった事務所からは、ボーリング調査の残骸や道具なども出てきた。整理作業はなかなか進まず退屈な作業だが、ときに知らなかった過去や、忘れていた記憶を掘り起こすこともある。
        </p>
        <p>
          退屈を意味する「Boring」と、掘削作業を意味する「Boring」は、語源は異なるものの、偶然にも同じ綴りと音を持つ言葉だ。本展示では、この退屈な過程を通して、私がこれまで興味を持ってきたものの根っこを掘り起こすものにしたい。そうすることで、その根の先に思いがけないものが繋がっていることを発見することができるはずだ。
        </p>
      </div>
      <div class="visual">
        <InteractiveView
          :width="200"
          :height="300"
          :onRender="
            (camera, progress, control) => {
              camera.fov = 60;
              camera.position.set(0.586416, 1, 3.3 + progress / 5);
              control.target = new Vector3(0.2585, 0.565, 3.428);
              camera.lookAt(control.target);
            }
          "
        />
      </div>
    </div>
  </TextSection>
</template>

<style scoped>
.column-root {
  position: relative;
  display: grid;
  grid-template-columns: 1fr 200px;
  gap: 6em;
  margin-top: 4em;
  margin-bottom: 8em;
}
.column-root .visual {
  padding-top: 4em;
  border-top: 0.1px solid transparent;
}

@media screen and (max-width: 800px) {
  .column-root {
    grid-template-columns: 1fr;
    gap: 2em;

    .text {
      padding-top: 0;
      border-top: none;
      grid-row: 2;
    }

    .visual {
      grid-row: 1;
    }
  }
}
</style>
