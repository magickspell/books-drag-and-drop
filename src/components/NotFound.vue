<template>
  <div></div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import router from "../router/index";

export default defineComponent({
  name: "NotFoundPage",
  mounted() {
    alert("page not found")
    router.push("/")
  }
})
</script>

<style lang="scss" scoped>

</style>