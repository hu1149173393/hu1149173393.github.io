<template>
  <div id="app" :style="back">
    <div class="bar">
      <bar></bar>
    </div>
    <div class="content">
      <transition  name="fade" mode="in-out">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
import bar from "./components/navionBar";
export default {
  name: "app",
  data() {
    return {
      back: {
        backgroundImage: "url(" + require("../src/static/bannerTop.jpg") + ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
      },
    };
  },
  components: {
    bar,
  },
};
</script>
<style lang="less">
* {
  margin: 0;
  padding: 0;
}
#app {
  width: 100%;
  height: 100vh;
  min-height: 500px;
   overflow: hidden;
  .bar {
    width: 1200px;
    margin: 0 auto;
  }
  .content {
    width: 1200px;
    min-width: 1200px;
    margin: 10px auto;
    height: 480px;
    min-height: 480px;
     overflow: hidden;
    // border: 1px solid red;
  }
}
.fade-enter {
  opacity: 0;
}
.fade-leave {
  opacity: 1;
}
.fade-enter-active {
  transition: opacity 0.5s;
}
.fade-leave-active {
  opacity: 0;
  transition: opacity 0.5s;
}
</style>
