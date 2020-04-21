<template>
  <div id="app" :style='bgc'>
    <router-view></router-view>
    <p-footer :actIndex="$route.name" :footerName="'首页'"></p-footer>
  </div>
</template>

<script>
import pFooter from "./components/p-footer.vue";
export default {
  components: { pFooter },
  data() {
    return {
      bgc: {
        background: "url(" + require("./assets/背景.png") + ")",
        backgroundSize:'100% 100%'
      },
    }
  },
};
</script>

<style lang="scss">
@import "./scss/iconfont.css";
#app {
  width: 100%;
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-wrap: wrap;
  overflow:hidden;
  position:relative;
}
.page {
  width: 100%;
  // padding: 10px;
  height: calc(100% - 50px);
  box-sizing: border-box;
  // flex: 1;
}
</style>
