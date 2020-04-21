<template>
  <div class="SLC">
    <div class="block">
      <div class="xian must"></div>
    </div>
    <div style="flex:1">
      <div class="fontTop">报警</div>
      <div class="block">
        <div class="dian"></div>
        <div class="xian"></div>
      </div>
      <div class="fontBottom">07:12</div>
    </div>
    <div style="flex:1">
      <div class="fontTop">出警</div>
      <div class="block">
        <div class="dian"></div>
        <div class="xian"></div>
      </div>
      <div class="fontBottom">07:14</div>
    </div>
    <div style="flex:1">
      <div class="fontTop">到达</div>
      <div class="block">
        <div class="dian"></div>
        <div class="xian"></div>
      </div>
      <div class="fontBottom">07:16</div>
    </div>
    <div style="flex:1">
      <div class="fontTop">展开</div>
      <div class="block">
        <div class="dian"></div>
        <div class="xian"></div>
      </div>
      <div class="fontBottom">07:18</div>
    </div>
    <div style="flex:1" class="active">
      <div class="fontTop">出水</div>
      <div class="block">
        <div class="dian"></div>
        <div class="xian"></div>
      </div>
      <div class="fontBottom">07:22</div>
    </div>
    <div style="flex:1">
      <div class="fontTop">控制</div>
      <div class="block">
        <div class="dian"></div>
        <div class="xian"></div>
      </div>
      <div class="fontBottom"></div>
    </div>
    <div style="flex:1">
      <div class="fontTop">熄灭</div>
      <div class="block">
        <div class="dian"></div>
        <div class="xian"></div>
      </div>
      <div class="fontBottom"></div>
    </div>
    <div style="flex:1">
      <div class="fontTop">结束</div>
      <div class="block">
        <div class="dian"></div>
        <div class="xian"></div>
      </div>
      <div class="fontBottom"></div>
    </div>
    <div style="flex:1">
      <div class="fontTop">返回</div>
      <div class="block">
        <div class="dian"></div>
        <div class="xian"></div>
      </div>
      <div class="fontBottom"></div>
    </div>
    <!-- <div class="block">
      <div class="xian must"></div>
    </div>-->
  </div>
</template>

<script>
/**
 * 今日警情-时间轴
 *          ----张磊 2020.04.15
 */
export default {
  name: "SLC",
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {};
  },
  created() {},
  methods: {}
};
</script>

<style lang="scss">
.SLC {
  width: 100%;
  display: flex;
  padding: 10px 0;
  font-size: 18px;
  line-height: 20px;
  .block {
    width: 100p;
    display: flex;
  }

  .active {
    color: #e1181a;
    .dian {
      background-color: #e1181a;
    }
  }
  .dian {
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #ffffff;
  }

  .xian {
    display: inline-block;
    flex: 1;
    height: 2px;
    background-color: #ffffff;
    position: relative;
    top: 4px;
  }
  .must {
    width: 100px;
    position: relative;
    top: 29px;
  }
  .fontTop {
    height: 23px;
    position: relative;
    left: -16px;
    letter-spacing: 5px;
  }
  .fontBottom {
    height: 25px;
    padding-top: 5px;
    position: relative;
    left: -17px;
  }
}
</style>
