<template>
  <router-view/>
</template>

<script>

</script>

<style lang="scss">
@import "./style.scss";

// setup default styles
* {
  font-family: 'Inter', sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body, #app {
  width: 100%;
  height: 100%;
  position: relative;
}

// animation
.fade-enter-active,
.fade-leave-active {
  transition: opacity 2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

// disable blue shift on touch (mobile)
* {
  -webkit-tap-highlight-color: transparent;
}
</style>
