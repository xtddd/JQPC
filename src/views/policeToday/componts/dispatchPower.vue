<template>
  <div class="dispatchPower flex">
    <!-- <h2 style="font-size:36px;padding:0 0 0 32px;">3中队12车72人</h2> -->
    <div class="centent">
      <div class="leftcentent" style="border:2px #2B8FFF solid">
        <div class="leftMian">
          <h2 style="padding:0 0 0 20px;color:#E1181A;margin:10px 0;fontSiae:24px">推荐派遣：3中队12车72人</h2>
          <div class="LIlist">
            <v-centent title="基层消防救援站" isCheck></v-centent>
          </div>
          <div class="button">
            <el-button>忽略建议</el-button>
            <el-button>确认增援</el-button>
          </div>
        </div>
        <div class="leftMian">
          <h2 style="padding:0 0 0 20px;margin:10px 0;fontSiae:24px">已调派：3中队12车72人</h2>
          <div class="LIlist">
            <v-centent title="基层消防救援站"></v-centent>
          </div>
        </div>
      </div>
      <div class="rightcentent" style="background:rgba(7,46,75,0.6)">
        <div class="button">
          <el-button size="mini" @click="centerDialogVisible = true">一键调派</el-button>
          <el-button size="mini">增援力量</el-button>
        </div>
        <div class="LIlist" style="border:2px #2B8FFF solid">
          <DNCY title="队内成员"></DNCY>
          <SZZT title="上装状态"></SZZT>
          <CLZB title="车辆装备"></CLZB>
        </div>
      </div>
      <div :class="{'youhua':centerDialogVisible}" @click="shouhui"></div>
      <div class="YHList" :class="{'out-in':centerDialogVisible}">
        <YJDP :func="shouhui"></YJDP>
      </div>
    </div>
  </div>
</template>

<script>
/**
 * 今日警情-派遣力量
 *          ----张磊 2020.04.15
 */
import vCentent from "./dispatchPowerCentent";
import DNCY from "./DNCY";
import CLZB from "./CLZB";
import SZZT from "./SZZT";
import YJDP from "./YJDP";
export default {
  name: "dispatchPower",
  components: {
    vCentent,
    DNCY,
    CLZB,
    SZZT,
    YJDP
  },
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      form: {},
      centerDialogVisible: false
    };
  },
  created() {},
  methods: {
    shouhui() {
      this.centerDialogVisible = false;
    }
  }
};
</script>

<style lang="scss" scope>
.dispatchPower {
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
      width: 40%;
      // display: flex;
      // flex-wrap: wrap;
      margin-right: 10px;
      overflow: auto;
      margin-top: 50px;
      background: rgba(7, 46, 75, 0.6);
      padding-bottom: 20px;
      .leftMian {
        display: flex;
        flex-flow: column;
        // height: 50%;
        width: 100%;
        // overflow: auto;
        box-sizing: border-box;
        h2 {
          margin: 14px 0 5px 0;
        }
      }
      .LIlist {
        flex: 1;
        background-color: #072e4b;
        ::-webkit-scrollbar {
          width: 10px;
          background-color: #f5f5f5;
        }
        ::-webkit-scrollbar-thumb {
          border-radius: 10px;
          background-color: #2575ec;
        }
        ::-webkit-scrollbar-track {
          box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
          background-color: #f5f5f5;
          border-radius: 10px;
        }
      }
      .button {
        padding: 20px 10px;
        // height: 50px;
        button {
          width: 50%;
          height: 100%;
          margin: 0;
          border-radius: 0;
          border: 1px #2b8fff solid;
          color: #ffffff;
          // :nth-child(1) {
          //   background-color: #0c3b5c;
          // }
        }
        button:nth-child(1) {
          background-color: #0c3b5c;
        }
        button:nth-last-child(1) {
          background-color: #0f47b8;
        }
      }
    }
    .rightcentent {
      flex: 1;
      // background-color: #072e4b;
      overflow: hidden;
      display: flex;
      flex-flow: column;
      .LIlist {
        flex: 1;
        overflow: auto;
      }
      .button {
        padding: 10px 10px;
        height: 50px;
        display: flex;
        justify-content: flex-end;
        box-sizing: border-box;
        button {
          // width: 50%;
          // height: 100%;
          // margin: 0;
          // border-radius: 0;
          border: 1px #2b8fff solid;
          color: #ffffff;
          background: linear-gradient(
            0deg,
            rgba(34, 80, 186, 1),
            rgba(37, 117, 236, 1)
          );
          box-shadow: 0px 2px 8px 0px #0b1f4c,
            0px 2px 4px 0px rgba(133, 219, 255, 1) inset;
          // :nth-child(1) {
          //   background-color: #0c3b5c;
          // }
        }
        // button:nth-child(1) {
        //   background-color: #0c3b5c;
        // }
        // button:nth-last-child(1) {
        //   background-color: #0f47b8;
        // }
      }
    }
    .youhua {
      position: fixed;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      opacity: 0;
      // transition: 0.6s;
      // background-color:#000;
      z-index: 9999;
    }
    .YHList {
      position: absolute;
      right: -1280px;
      top: 50%;
      transform: translate(0, -50%);
      background-color: #103c5c;
      transition: 0.6s;
      width: 1278px;
      height: 821px;
      z-index: 99999;
      border: 2px #2b8fff solid;
      border-right: none;
      padding: 20px 0;
    }

    .out-in {
      // opacity: 1;
      // width: 1278px;
      // height: 762px;
      right: 0;
    }
  }
}
</style>
