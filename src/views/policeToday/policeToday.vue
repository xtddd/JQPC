<template>
  <div class="page policeToday">
    <h2 class="header">今日警情</h2>
    <div class="main">
      <div class="left flex" :style="leftBGC">
        <!-- <div class="top">
          <mark>|</mark>
          检索
        </div>-->
        <!-- <el-form ref="form" :model="form" label-width="100px" size="mini">
          <el-form-item label="关 键 字">
            <el-input v-model="form.name" placeholder="请输入灾情名称或地点"></el-input>
          </el-form-item>
          <el-form-item label="所属辖区">
            <el-select v-model="form.name" placeholder="请选择">
              <el-option
                v-for="item in xqList"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="灾害类型">
            <el-select v-model="form.name" placeholder="请选择">
              <el-option
                v-for="item in xqList"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="灾害等级">
            <el-select v-model="form.name" placeholder="请选择">
              <el-option
                v-for="item in xqList"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="立案时间">
            <el-col :span="11">
              <el-time-select
                placeholder="起始时间"
                v-model="form.startTime"
                :picker-options="{
                  start: '00:00',
                  step: '00:15',
                  end: '23:59'
                }"
                style="width: 100%;"
              ></el-time-select>
            </el-col>
            <el-col class="line" :span="2">-</el-col>
            <el-col :span="11">
              <el-time-select
                placeholder="结束时间"
                v-model="form.endTime"
                :picker-options="{
                  start: '00:00',
                  step: '00:15',
                  end: '23:59',
                  minTime: form.startTime
                }"
                style="width: 100%;"
              ></el-time-select>
            </el-col>
          </el-form-item>
          <el-form-item>
            <el-button>重置</el-button>
            <el-button>查询</el-button>
          </el-form-item>
        </el-form>-->
        <div class="bottom">
          <!-- <div class="btop">
            <mark>|</mark>
            灾害研判
          </div>-->
          <div class="jqlb">
            <template v-for="(item,index) in list">
              <ZHLB :data="item" :key="index+'zh'" :func="handlerDouble"></ZHLB>
            </template>
<<<<<<< Updated upstream
            <!-- <ZHLB :func="handlerDouble"></ZHLB> -->
=======
<!--            <ZHLB :func="handlerDouble"></ZHLB>-->
>>>>>>> Stashed changes
          </div>
        </div>
      </div>
      <div class="right flex" :style="rightBGC">
        <div class="SJZ">
          <SJC></SJC>
        </div>
        <div class="nb">
          <div class="nav">
            <template v-for="(item,index) in keyList">
              <div
                class="item"
                :class="[item]"
                :style="flag === index ? activeBgc : bgc"
                :key="item+index"
                @click="SelectionItem(item,index)"
              >
                <span>{{item}}</span>
              </div>
            </template>
          </div>
          <div class="contents">
            <dispatch-power v-if="item === '力量派遣'" :list="PX" :carList="carList"></dispatch-power>
            <police-details v-if="item === '详情总览'"></police-details>
            <CJCS v-if="item === '处置措施'" :flag="token" :ajbh="ajbh"></CJCS>
            <ZZZH v-if="item === '组织指挥'"></ZZZH>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/**
 * 今日警情
 *        ----张磊 2020.04.14
 */
import dispatchPower from "./componts/dispatchPower";
import policeDetails from "./componts/policeDetails";
import ZHLB from "./componts/ZHLB";
import SJC from "./componts/SJC";
import CJCS from "./componts/CJCS";
import ZZZH from "./componts/ZZZH";
import "../../scss/iconfont";
import * as api from "../../api/api";
export default {
  name: "policeToday",
  components: {
    dispatchPower,
    ZHLB,
    SJC,
    policeDetails,
    CJCS,
    ZZZH
  },
  data() {
    return {
      list: [],
      form: {},
      xqList: [], //辖区的数据
      keyList: [
        "详情总览",
        "力量派遣",
        "处置措施",
        "组织指挥",
        "联战联勤",
        "信息报送"
        // "预知预警"
      ],
      flag: 1,
      active: 1,
      item: "力量派遣",
      activeBgc: {
        background: "url(" + require("../../assets/纵线tab选中背景.png") + ")"
      },
      leftBGC: {
        background: "url(" + require("../../assets/左框.png") + ")",
        backgroundSize: "100% 100%"
      },
      rightBGC: {
        background: "url(" + require("../../assets/右框.png") + ")",
        backgroundSize: "100% 100%"
      },
      bgc: {},
<<<<<<< Updated upstream
      token: "",
      PX: [], //派遣力量
      carList: []
=======
      token:'',
      ajbh:'',
      PX: null //派遣力量
>>>>>>> Stashed changes
    };
  },
  computed: {},
  created() {
    this.init();
  },
  mounted() {
    window.handlerDouble = this.handlerDouble;
  },
  methods: {
    //初始化
    init() {
      this.getList();
      this.getToken();
      console.log("policeToday.init...");
    },
    //获取列表数据
    getList() {
      return api
        .InitAlarmService({
          jgid: "10033a1bbb6045adb72f256d63b294b3",
          type: 1
        })
        .then(res => {
          this.list = res.data.data;
          console.log(this.list);
        });
    },
    //获取车辆
    getCar() {
      return api
        .findCarByJgid({
          jgid: "10033a1bbb6045adb72f256d63b294b3"
        })
        .then(res => {
          // this.carList = res.data.data;
          return Promise.resolve(res.data.data);
        });
    },
    //获取token
    getToken() {
      return api.InitLogin().then(res => {
        this.token = res.data.data;
      });
    },
    SelectionItem(item, index) {
      this.flag = index;
      this.item = item;
    },
    //双击事件
    handlerDouble(data) {
<<<<<<< Updated upstream
=======
      console.log(data);
      this.ajbh=data.ajbh;
>>>>>>> Stashed changes
      //派遣力量
      this.PX = data.dispatchDataList;
      // this.getCar();
      // let form = {
      //   to: "map",
      //   data: {
      //     x: 118.797499,
      //     y: 32.087104
      //   }
      // };
      // window.bound.SendToC(JSON.stringify(form));
      this.getCar().then(res => {
        let list = JSON.parse(JSON.stringify(this.PX));
        // list = list.concat(this.PX);
        this.carList = list.map(item => {
          item.dispatchCarList = res;
          return item;
        });
        // this.$set("this", "carList", list);
      });
      console.log(this.carList);
      console.log(this.PX, "10101");
    }
  }
};
</script>

<style lang="scss">
.policeToday {
  color: #ffffff;
  .icons {
    width: 52px;
    height: 52px;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
  .header {
    height: 54px;
    line-height: 54px;
    color: #6cb1ff;
    text-align: left;
    font-size: 30px;
    margin: 0;
    // padding: 28px 0 30px;
    border-bottom: 1px #4cbaff solid;
    box-sizing: border-box;
  }
  .main {
    width: 100%;
    height: calc(100% - 54px);
    display: flex;
    text-align: left;
    padding-top: 10px;
    box-sizing: border-box;
    .flex {
      display: flex;
      flex-flow: column nowrap;
    }
    .left {
      width: 470px;
      margin-right: 10px;
      padding: 5px;
      border: 1px #072e4b solid;
      box-sizing: border-box;
      ::-webkit-scrollbar {
        width: 10px;
        background-color: #2c6dcf;
      }
      ::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background-color: #2575ec;
      }
      ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
        background-color: #2c6dcf;
        border-radius: 10px;
      }
      .top {
        font-size: 25px;
        height: 50px;
        line-height: 50px;
        border-bottom: 2px #69dce0 solid;
        box-sizing: border-box;
      }
      mark {
        background-color: #00ffff;
        color: #00ffff;
        border-radius: 3px;
      }
      .el-form {
        margin-top: 10px;
        .el-form-item__label {
          font-size: 20px;
          color: #ffffff;
        }
        &:first-child .el-form-item__label {
          letter-spacing: 2px;
        }
        .line {
          text-align: center;
        }
      }
      .btop {
        height: 30px;
        line-height: 30px;
        border-bottom: 1px #2b8fff solid;
        padding: 0 0 0 10px;
      }
      .bottom {
        overflow: auto;
        border: 2px #2b8fff solid;
        flex-grow: 1;
        box-sizing: border-box;
        .jqlb {
          display: flex;
          .topIcon {
            margin-right: 10px;
          }
          .bh {
            border-bottom: 2px #69dce0 solid;
          }
        }
      }
      .el-button {
        background-color: #133a89;
        color: #ffffff;
      }
      .el-input {
        input {
          // border-color: #2b8fff;
          background-color: #072c52;
        }
        // input:focus {
        //   outline: none;
        //   border: 1px solid #58b195;
        // }
      }
    }
    .right {
      display: flex;
      flex: 1;
      // border: 2px #072e4b solid;
      padding: 5px;
      box-sizing: border-box;
      flex-wrap: wrap;
      ::-webkit-scrollbar {
        width: 10px;
        background-color: #0a3455;
      }
      ::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background-color: #2575ec;
      }
      ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
        background-color: #0a3455;
        border-radius: 10px;
      }
      .SJZ {
        width: 100%;
        height: 80px;
        background-color: #072e4b;
        padding: 0 50px;
        box-sizing: border-box;
      }
      .nb {
        display: flex;
        flex: 1;
        // flex-flow: column;
        overflow: hidden;
      }
      .nav {
        width: 46px;
        padding-bottom: 50px;
        height: 100%;
        // background-color: #ccc;
        box-sizing: border-box;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        cursor: pointer;
        .item {
          width: 100%;
          background: #1e83e1;
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
          counter-reset: #ffffff;
          font-size: 18px;
          padding: 2px 0;
          border-bottom: 1px #ffffff solid;
          line-height: 21px;
          span {
            display: inline-block;
            width: 24px;
          }
        }
        :nth-last-child(1) {
          border: none;
        }
        // .active {
        //   background-color: #41a7eb;
        // }
      }
      .contents {
        flex: 1;
        padding: 0 10px 10px;
      }
    }
  }
}
</style>
