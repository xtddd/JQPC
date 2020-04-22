<template>
  <div class="policeDetails flex">
    <!-- <h2 style="font-size:36px;padding:0 0 0 32px;">3中队12车72人</h2> -->
    <div class="centent">
      <div class="leftcentent">
        <div class="leftMian" style="height:480px;border:2px #2B8FFF solid">
          <ZHDX title="灾害对象" :func="getImage"></ZHDX>
        </div>
        <div class="leftMian" style="height:342px;border:2px #2B8FFF solid">
          <ZHQK title="灾害情况" :func="getImage"></ZHQK>
        </div>
      </div>
      <div class="rightcentent">
        <div class="bgcimg" :style="{
          backgroundImage:'url(' + url + ')'
        }"></div>
      </div>
    </div>
  </div>
</template>

<script>
/**
 * 今日警情-详情
 *          ----张磊 2020.04.21
 */
import ZHDX from "./ZHDX";
import ZHQK from "./ZHQK";
export default {
  name: "policeDetails",
  components: {
    ZHDX,
    ZHQK
  },
  props: {
    list: {
      type: Array,
      default: () => {}
    }
  },
  data() {
    return {
      form: {},
      url: ""
    };
  },
  created() {},
  methods: {
    //接受图片
    getImage(url) {
      console.log(url);
      this.url = url;
    }
  }
};
</script>

<style lang="scss" scope>
.policeDetails {
  height: 100%;
  display: flex;
  .btop {
    height: 30px;
    line-height: 30px;
    font-size: 20px;
    // border-bottom: 1px #2b8fff solid;
    padding: 0 0 0 10px;
    padding: 18px 20px;
    mark {
      background-color: #00ffff;
      color: #00ffff;
      border-radius: 3px;
    }
  }
  .centent {
    display: flex;
    flex-grow: 1;
    overflow: hidden;
    .leftcentent {
      width: 470px;
      // display: flex;
      // flex-wrap: wrap;
      margin-right: 10px;
      overflow: hidden;
      // margin-top: 10px;
      padding-bottom: 20px;
      .leftMian {
        display: flex;
        flex-flow: column;
        // height: 50%;
        width: 100%;
        overflow: auto;
        box-sizing: border-box;
        background: rgba(7, 46, 75, 0.6);
        margin-top: 10px;
      }
    }
    .rightcentent {
      flex: 1;
      padding: 0 15px;
      .bgcimg {
        width: 100%;
        height: 100%;
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
      }
    }
  }
}
</style>
