<template>
  <div class="dispatchPowerCentent">
    <div class="btop">
      <mark>|</mark>
      {{title}}
    </div>
    <template v-for="(item,index) in list">
      <div class="nr" :key="item.dpid+index">
        <!-- <div <el-collapse v-model="activeNames">
            <el-collapse-item title="鼓楼中队" name="鼓楼中队"> 
            </el-collapse-item>
        </el-collapse>-->
        <div class="top" style="display:flex;padding:15px 26px;background:#1A4E91">
          <div style="flex:1;text-align:center;font-size:22px">{{item.fsjgmc}}</div>
          <i v-if="show" class="shoIcon icon icon-sanx-up" @click="handlerC"></i>
          <i v-if="!show" class="shoIcon icon icon-arrUp-fill" @click="handlerC"></i>
        </div>
        <div v-if="show">
          <template v-for="(items,index) in item.dispatchCarList">
            <div
              :key="items.id+index"
              :class="['PQitem',index === active ? 'active' : '']"
              @click="hadlerB(index,0)"
            >
              <span @click="hadlerB(index,1)">
                <i class="carIcon icon icon-Group24Copy2"></i>{{items.clmc}}
              </span>
              <span @click="hadlerB(index,2)">
                <i class="carIcon icon icon-Group24Copy2"></i>125323
              </span>
              <span @click="hadlerB(index,3)">
                <i class="carIcon icon icon-Group24Copy2"></i>现场视频
              </span>
            </div>
          </template>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
/**
 * 今日警情-派遣力量-消防站
 *          ----张磊 2020.04.15
 */
export default {
  name: "dispatchPowerCentent",
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
      activeNames: ["鼓楼中队"],
      show: true,
      active: ""
    };
  },
  created() {},
  methods: {
    handlerC() {
      this.show = !this.show;
    },
    hadlerB(index, type) {
      this.active = index;
      console.log(type);
    }
  }
};
</script>

<style lang="scss">
.dispatchPower {
  width: 100%;
  .shoIcon {
    font-size: 20px;
  }
  .btop {
    height: 30px;
    line-height: 30px;
    font-size: 24px;
    border-bottom: 1px #2b8fff solid;
    padding: 0 0 0 10px;
    padding: 18px 32px;
    mark {
      background-color: #00ffff;
      color: #00ffff;
      border-radius: 3px;
    }
  }
  .carIcon {
    font-size: 30px;
  }
  .PQitem {
    background-color: #2250ba;
    padding: 10px;
  }
  .active {
    background-color: #2575ec;
  }
}
</style>
