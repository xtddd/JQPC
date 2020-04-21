<template>
  <div class="CLZB">
    <div class="btop">
      <mark>|</mark>
      {{title}}
    </div>
    <div class="CLXX">
      <template v-for="(item,index) in ZBList">
        <span :key="index+'_'">{{item}}</span>
      </template>
    </div>
  </div>
</template>

<script>
/**
 * 今日警情-派遣力量-车辆装备
 *          ----张磊 2020.04.15
 */
export default {
  name: "CLZB",
  props: {
    title: String,
    list: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      form: {},
      ZBList: [
        "水枪",
        "分水器",
        "滤水器",
        "包布",
        "挂钩",
        "扳手",
        "水带包布",
        "9米拉梯",
        "挠购",
        "救援三脚架",
        "水带包布",
        "隔热服",
        "急救箱",
        "过滤式自救面罩",
        "警戒带",
        "工具箱",
        "水带拖车",
        "80水带",
        "65水带"
      ]
    };
  },
  created() {},
  methods: {}
};
</script>

<style lang="scss">
.CLZB {
  width: 100%;
  .CLXX {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 15px;
    span {
      display: inline-block;
      min-width: 100px;
      text-align: center;
      padding: 10px;
    }
  }
}
</style>
