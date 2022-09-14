<template>
  <div class="wrapper_start-page">
    <transition name="fade" mode="out-in" appear>
      <h1>В мире книг</h1>
    </transition>

    <article>
      <h2>Инструкция:</h2>
      <p>
        Распредели книги, ориентируясь на названия, по соответствующим рубрикам таблицы: «Жанры фольклора», «Не являются
        жанрами фольклора».
      </p>
    </article>

    <green-button
        :text="'Продолжить'"
        :url="'books'"
    />

  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import GreenButton from "@/components/GreenButton.vue";

export default defineComponent({
  name: "StartPage",
  components: {GreenButton},
  data() {
    return {
      show: false,
    }
  },
  mounted() {
    this.show = true;
  }
})
</script>

<style lang="scss" scoped>
@import "../style.scss";

.wrapper_start-page {
  min-width: $mediumWrapperWidth;
  max-width: $maxWrapperWidth;
  margin: 0 auto;
  padding: 12px;


  h1 {
    color: #8BD74B;
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 48px;
  }

  article {
    width: 100%;
    margin: 36px 0;
    background: lightgray;
    border-top: 2px solid #8BD74B;
    background: rgba(0, 0, 0, 0.05);
    border-radius: 0 0 20px 20px;
    padding: 22px 36px;
    color: #183B59;

    h2 {
      margin-bottom: 12px;
      font-style: normal;
      font-weight: 700;
      font-size: 25px;
      line-height: 30px;
    }

    p {
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      line-height: 140%;
    }
  }

  button {
    @include green-button;
  }

}
</style>