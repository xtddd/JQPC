<template>
  <div class="app-wrapper">
    <el-main id="elMain">
      <transition name="fade-transform" mode="out-in">
        <keep-alive>
          <router-view v-if="$route.meta.keepAlive" ref="page" :key="key"></router-view>
        </keep-alive>
      </transition>
      <transition name="fade-transform" mode="out-in">
        <router-view v-if="!$route.meta.keepAlive" :key="key"></router-view>
      </transition>
      <transition name="slide-transform" mode="out-in">
        <router-view
          v-if="floaterTag && (!currentRouteName || currentRouteName == 'details')"
          name="details"
          :key="'details_' + key"
          class="float-right"
        ></router-view>
      </transition>
      <transition name="slide-transform" mode="out-in">
        <router-view
          v-if="floaterTag && currentRouteName == 'detailSecond'"
          name="detailSecond"
          :key="'details_' + key"
          class="float-right"
        ></router-view>
      </transition>
    </el-main>
  </div>
</template>

<script>
import resizeHandler from "../mixins/resize-handler.js";
import * as utils from "../js/utils.js";

export default {
  name: "default.vue",
  mixins: [resizeHandler],
  computed: {
    key() {
      return this.$route.fullPath;
    },
    fullScreenTag() {
      let rtn = false;
      if (this.$route.name === "car-routes") rtn = true;
      return rtn;
    }
  },
  watch: {
    floaterTag(val) {
      // TODO: 根据浮动窗口的状态动态创建modal遮罩层，写的太糙。。。回头记得改。。。Author by Dio Zhu. on 2018.6.1
      // console.log('app.watch.floaterTag: ', val);
      if (val)
        utils.getModal({
          clickFunc: () => this.$store.commit("CLOSE_FLOATER")
        });
      else utils.removeModal();
    }
  },
  mounted() {
    // console.log('app.mounted... ');
    this.init();
  },
  methods: {
    init() {
      console.log("default.init: ", this.$route.name);
    }
  }
};
</script>

<style rel="stylesheet/scss" lang="scss">
// @import "../scss/_variables.scss";

.app-wrapper {
  height: 100%;
  display: flex;
  flex-direction: column;

  // .page {
  /*height: 100%;*/
  /*font-size: 14px;*/
  /*overflow-x: hidden;*/
  /*overflow-y: auto;*/

  // .btns {
  //   // 所有按钮行,按钮靠右对齐
  //   width: 100%;
  //   text-align: right;
  // }
  // }

  /*fade-transform*/
  .fade-transform-leave-active,
  .fade-transform-enter-active {
    transition: all 0.3s;
  }

  .fade-transform-enter {
    opacity: 0;
    transform: translateX(-30px);
  }

  .fade-transform-leave-to {
    opacity: 0;
    transform: translateX(30px);
  }

  /*slide-transform*/
  .slide-transform-leave-active,
  .slide-transform-enter-active {
    transition: all 0.3s ease-in-out;
  }

  .slide-transform-enter {
    opacity: 0;
    /*width: 1%;*/
    transform: translate3d(100%, 0, 0);
  }

  .slide-transform-leave-to {
    opacity: 0;
    /*width: 1%;*/
    transform: translate3d(100%, 0, 0);
  }

  .app-container {
    position: relative;
    width: 100%;
  }

  .el-container,
  .el-main {
    flex: 1 1 auto;
    width: 100%;
    height: 100%;
    position: relative;
    /*transform: translate3d(0, 0, 0);*/
    /*overflow-x: hidden;*/
    /*overflow-y: auto;*/
    // -webkit-overflow-scrolling: touch;
    // background: #f5f6fa;

    // ::-webkit-scrollbar {
    //   width: 10px;
    //   background-color: #f5f5f5;
    // }
    // ::-webkit-scrollbar-thumb {
    //   border-radius: 10px;
    //   background-color: #2575ec;
    // }
    // ::-webkit-scrollbar-track {
    //   box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    //   background-color: #f5f5f5;
    //   border-radius: 10px;
    // }
    // &::-webkit-scrollbar {
    //   /*滚动条整体样式*/
    //   width: pxTorem(10); /*高宽分别对应横竖滚动条的尺寸*/
    //   height: pxTorem(1);
    // }

    // &::-webkit-scrollbar-thumb {
    //   /*滚动条里面小方块*/
    //   border-radius: pxTorem(10);
    //   -webkit-box-shadow: inset 0 0 pxTorem(5) rgba(0, 0, 0, 0.2);
    //   background: #535353;
    // }

    // &::-webkit-scrollbar-track {
    //   /*滚动条里面轨道*/
    //   -webkit-box-shadow: inset 0 0 pxTorem(5) rgba(0, 0, 0, 0.2);
    //   border-radius: pxTorem(10);
    //   background: #ededed;
    // }

    // .el-main {
    //   padding: 0 20px 20px;
    // }
  }

  .el-container {
    display: flex;
    flex-direction: column;
  }

  .float-right {
    /* 右侧浮动窗口 */
    /*transform: translate3d(0, 0, 0);*/
    border-left: #2d2f33 1px solid;
    background: #fff;
    width: 61.8%;
    height: 100%;
    overflow: auto;
    position: fixed;
    z-index: 999;
    top: 0;
    right: 0;
    margin: 0;
    box-sizing: border-box;
    padding: 0;
    box-shadow: -10px 0px 30px #333; /* 左侧阴影过度 add by Dio Zhu. on 2019.5.11 */

    > h2 {
      font-size: 16px;
      color: #373737;
      background: #eef3ff;
      text-align: center;
      margin: 0;
      padding: 27px 0;
    }

    > .el-form {
      padding: 40px 80px;
    }

    // 浮动窗口下，面包屑的样式
    .el-breadcrumb {
      .el-breadcrumb__item {
        display: none;

        &:last-child {
          display: inline-block;
        }
      }
    }
  }

  .el-table {
    .el-button {
      padding: 4px 10px;
    }
  }
}

.app-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  overflow-y: auto;
}

/*table表格空状态的高度*/
.el-table__empty-block {
  min-height: 34.5px !important;
}

.el-form-item__error {
  top: 37px !important;
}
</style>
