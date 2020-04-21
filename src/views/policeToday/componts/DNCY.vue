<template>
  <div class="DNCY">
    <div class="btop">
      <mark>|</mark>
      {{title}}
    </div>
    <div v-if='!isJY' class="cent">
      <div style="fontSize:18px 
       ;">
        队长：
        <i class="iconfont icon-touxiang TX"></i>
        <span class="name" style="fontSize:18px;">郭坤</span>
      </div>
      <div style="fontSize:18px;">
        副队长：
        <i class="iconfont icon-touxiang TX"></i>
        <span class="name" style="fontSize:18px;">彭星龙</span>
      </div>
      <div style="fontSize:18px;">
        通讯员：
        <i class="iconfont icon-touxiang TX"></i>
        <span class="name" style="fontSize:18px;">杨康</span>
      </div>
    </div>
    <div v-if='!isJY' class="DY">
      <div style="min-width:75px;fontSize:18px;">队员：</div>
      <div class="DYItem">
        <span class="DYO">
          <i class="iconfont icon-touxiang TX"></i>
        <span class="name" style="fontSize:18px;">深龙兵</span>
        </span>
        <span>
          <i class="iconfont icon-touxiang TX"></i>
        <span class="name" style="fontSize:18px;">张嵩</span>
        </span>
        <span>
          <i class="iconfont icon-touxiang TX"></i>
        <span class="name" style="fontSize:18px;">李宗成</span>
        </span>
        <span>
          <i class="iconfont icon-touxiang TX"></i>
        <span class="name" style="fontSize:18px;">周连</span>
        </span>
      </div>
    </div>
    <div v-if='isJY' class="cent">
      <div style="fontSize:18px;flex:1">
        <span class="zw">分队长：</span>
        <i class="iconfont icon-touxiang TX"></i>
        <span class="name" style="fontSize:18px;">腾浩</span>
      </div>
      <div style="fontSize:18px;flex:1">
        <span class="zw">副队长：</span>
        <i class="iconfont icon-touxiang TX"></i>
        <span class="name" style="fontSize:18px;">张奔</span>
      </div>
    </div>
    <div v-if='isJY' class="cent">
      <div style="fontSize:18px;flex:1">
        <span class="zw">现在文书：</span>
        <i class="iconfont icon-touxiang TX"></i>
        <span class="name" style="fontSize:18px;">吴鹏鹏</span>
      </div>
    </div>
    <div v-if='isJY' class="cent">
      <div style="fontSize:18px;flex:1">
        <span class="zw">装备技师：</span>
        <i class="iconfont icon-touxiang TX"></i>
        <span class="name" style="fontSize:18px;">葛洪文</span>
      </div>
      <div style="fontSize:18px;;flex:1">
        <span class="zw">装备技师：</span>
        <i class="iconfont icon-touxiang TX"></i>
        <span class="name" style="fontSize:18px;">杨嘉毅</span>
      </div>
    </div>
    
  </div>
</template>

<script>
/**
 * 今日警情-派遣力量-对内成员
 *          ----张磊 2020.04.15
 */
export default {
  name: "DNCY",
  props: {
    title: String,
    list: {
      type: Array,
      default: () => []
    },
    //是否为右滑的数据
    isJY: {
      type:Boolean,
      default:() => false
    }
  },
  data() {
    return {
      form: {}
    };
  },
  created() {},
  methods: {}
};
</script>

<style lang="scss">
.DNCY {
  width: 100%;
  .cent {
    font-size: 24px;
    padding: 5px 50px;
    display: flex;
    justify-content: space-between;
    .zw {
      display:inline-block;
      min-width:100px;
    }
  }
  .TX {
    font-size: 38px;
    // background-color: #59a4f1;
    margin-right: 10px;
    position: relative;
    top: 5px;
  }
  div {
    line-height: 60px;
  }
  .name {
    font-size: 18px;
  }
  .DY {
    font-size: 24px;
    display: flex;
    padding: 0 60px;
    flex: 1;
    .DYItem {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      flex: 1;
    }
    .DYO {
      min-width: 120px;
    }
  }
}
</style>
