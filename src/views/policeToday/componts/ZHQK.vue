<template>
  <div class="ZHQK">
    <div class="btop">
      <mark>|</mark>
      {{title}}
    </div>
    <div class="PZX">
      <div class="Singular QK">
        <div class="title">火灾场所：</div>
        <div class="value">厨房</div>
      </div>
      <div class="Singular QK">
        <div class="title">人员被困：</div>
        <div class="value">2人</div>
      </div>
      <div class="Singular QK">
        <div class="title">燃烧层数：</div>
        <div class="value">9层</div>
      </div>
      <div class="Singular QK">
        <div class="title">人员伤亡：</div>
        <div class="value">0人</div>
      </div>
      <div class="Singular QK">
        <div class="title">燃烧对象</div>
        <div class="value">油污</div>
      </div>
      <div class="Singular QK">
        <div class="title">灾害级别：</div>
        <div class="value">5级</div>
      </div>
      <div class="Singular QK">
        <div class="title">烟雾情况</div>
        <div class="value">明火</div>
      </div>
      <div class="Singular QK">
        <div class="title">过火面积</div>
        <div class="value">多层</div>
      </div>
      <div class="Singular">
        <div class="title">图片视频</div>
        <div class="value">
          <template v-for="(item,index) in imgList">
            <div
              class="bgm"
              :style="{
            backgroundImage:'url(' + item + ')'
          }"
              :key="index"
              @click="func(item)"
            ></div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/**
 * 今日警情-详情-灾害情况
 *          ----张磊 2020.04.21
 */
export default {
  name: "ZHQK",
  props: {
    title: String,
    data: {
      type: Object,
      default: () => {
        return {
          afdz: "鼓楼区北京西路119号",
          bjsj: "14:32:32"
        };
      }
    },
    func: Function
  },
  data() {
    return {
      form: {},
      imgList: [
        require("../../../assets/JQXQ/1.jpg"),
        require("../../../assets/JQXQ/2.jpg"),
        require("../../../assets/JQXQ/3.jpg")
      ]
    };
  },
  created() {},
  methods: {}
};
</script>

<style lang="scss" scope>
.ZHQK {
  width: 100%;
  color: #ffffff;
  padding-bottom: 20px;
  .PZX {
    display: flex;
    flex-wrap: wrap;
  }
  .Singular {
    display: flex;
    font-size: 18px;
    margin-top: 8px;
    line-height: 30px;
    padding-left: 46px;
    // height: 30px;
    flex: 1;
    color: #ffffff;
    padding-right: 5px;
    .title {
      // text-align: center;
      width: 100px;
    }
    .value {
      display: flex;
      flex: 1;
      .bgm {
        width: 80px;
        height: 46px;
        margin-right: 10px;
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
      }
      .bgm:nth-child(3n) {
        margin-right: none;
      }
    }
  }
  .QK {
    width: 50%;
  }
}
</style>
