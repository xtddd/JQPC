<template>
  <div class="ZHDX">
    <div class="btop">
      <mark>|</mark>
      {{title}}
    </div>
    <div class="PZX">
      <div class="Singular">
        <div class="title">对象名称：</div>
        <div class="value">金鹰购物中心A座</div>
      </div>
      <div class="Singular">
        <div class="title">灾害类型：</div>
        <div class="value">火灾-建筑物-高层建筑</div>
      </div>
      <div class="Singular">
        <div class="title">建筑结构：</div>
        <div class="value">钢架结构</div>
      </div>
      <div class="Singular">
        <div class="title">层数：</div>
        <div class="value">地上16层，地下2层</div>
      </div>
      <div class="Singular">
        <div class="title">灾害地址：</div>
        <div class="value">秦淮区汉中路89号</div>
      </div>
      <div class="Singular">
        <div class="title">所属县区：</div>
        <div class="value">鼓楼区</div>
      </div>
      <div class="Singular">
        <div class="title">辖区队站：</div>
        <div class="value">北京西路消防站</div>
      </div>
      <div class="Singular">
        <div class="title">内部图纸：</div>
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
 * 今日警情-详情-灾害对象
 *          ----张磊 2020.04.21
 */
export default {
  name: "ZHDX",
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
.ZHDX {
  width: 100%;
  color: #ffffff;
  padding-bottom: 20px;
  // .PZX {
  // background-color: #2c6dcf;
  // border-top: 1px #1a4e91 solid;
  // }
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
}
</style>
