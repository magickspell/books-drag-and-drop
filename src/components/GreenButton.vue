<template>
  <button
      @click="$router.push(`./${this.url}`)"
  >{{ this.text }}
  </button>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "GreenButton",
  props: {
    url: String,
    text: String,
  }
})
</script>

<style lang="scss" scoped>
@import "../style.scss";

button {
  @include green-button;
}
</style>