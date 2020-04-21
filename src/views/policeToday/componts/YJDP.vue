<template>
  <div class="YJDP flex">
    <div class="centent">
      <div class="img">
        <img :src='require("../../../assets/收回.png")' @click='func'>
      </div>
      <div class="leftcentent">
        <div class="LIlist">
          <v-centent title="一键调派"></v-centent>
        </div>
      </div>
      <div class="rightcentent" style="background:rgba(7,46,75,0.6)">
        <div class="LIlist">
          <DNCY title="小队成员" isJY></DNCY>
          <CLZB title="车辆装备"></CLZB>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/**
 * 今日警情-一键调派
 *          ----张磊 2020.04.20
 */
import vCentent from "./dispatchPowerCentent";
import DNCY from "./DNCY";
import CLZB from "./CLZB";
export default {
  name: "dispatchPower",
  components: {
    vCentent,
    DNCY,
    CLZB
  },
  props: {
    list: {
      type: Array,
      default: () => []
    },
    //收回的函数
    func:Function
  },
  data() {
    return {
      form: {},
      centerDialogVisible: false
    };
  },
  created() {},
  methods: {}
};
</script>

<style lang="scss" scope>
.YJDP {
  height: 100%;
  display: flex;
  .img {
    width:50px;
    display:flex;
    justify-content: center;
    align-items: center;
    img {
      cursor: pointer;
    }
  }
}
</style>
