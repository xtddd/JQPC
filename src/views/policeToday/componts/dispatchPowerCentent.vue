<template>
  <div class="dispatchPowerCentent">
    <div class="btop">
      <mark>|</mark>
      {{title}}
    </div>
    <template v-for="(item,index) in list">
      <div class="nr" :key="item.dpid+index">
        <div class="top" style="display:flex;padding:15px 26px;background:#1A4E91">
          <div style="flex:1;text-align:center;font-size:18px">
            {{item.fsjgmc}}
            <i v-if="show" class="shoIcon iconfont icon-sanx-up" @click="handlerC"></i>
            <i v-if="!show" class="shoIcon iconfont icon-arrUp-fill" @click="handlerC"></i>
          </div>
          <el-checkbox
            v-if="isCheck"
            :indeterminate="isIndeterminate"
            v-model="checkAll"
            @change="handleCheckAllChange"
          ></el-checkbox>
          <!-- <div style="margin: 15px 0;"></div> -->
        </div>
        <div v-if="show">
          <template v-for="(items,index) in item.dispatchCarList">
            <div
              :key="items.id+index"
              :class="['PQitem',index === active ? 'active' : '']"
              @click="hadlerB(index,0)"
            >
              <span @click="hadlerB(index,1)">
                <i class="carIcon iconfont icon-Group24Copy2"></i>
                {{items.clmc}}
              </span>
              <span @click="hadlerB(index,2)">
                <i class="carIcon iconfont icon-dianhua"></i>125323
              </span>
              <span @click="hadlerB(index,3)">
                <i class="carIcon iconfont icon-shipin"></i>现场视频
              </span>
              <el-checkbox
                v-model="item.id"
                :true-label="items.id"
                @change="handleCheckChange"
                v-if="isCheck"
              ></el-checkbox>
            </div>
          </template>
        </div>
      </div>
    </template>
    <div v-if="list && !list.length" style="text-align:center">暂无数据</div>
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
    isCheck: {
      type: Boolean,
      default: () => false
    },
    title: String,
    list: {
      type: Array,
      default: () => [
        {
          fsjgmc: "鼓楼中队",
          dispatchCarList: [{ clmc: "泡沫车" }]
        }
      ]
    },
    //是否开启按钮
    btn: {
      type: Boolean,
      default: () => false
    }
  },
  data() {
    return {
      form: {},
      activeNames: ["鼓楼中队"],
      show: true,
      active: "",
      checkAll: true,
      isIndeterminate: false
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
    },
    //全选
    handleCheckAllChange(val) {
      console.log(val);
    },
    handleCheckChange(val) {
      console.log(val);
    }
  }
};
</script>

<style lang="scss">
.dispatchPowerCentent {
  width: 100%;
  .top {
    align-items: center;
  }
  .shoIcon {
    font-size: 20px;
  }
  .btop {
    height: 30px;
    line-height: 30px;
    font-size: 20px;
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
    font-size: 16px;
    margin-right: 5px;
  }
  .PQitem {
    background-color: #2250ba;
    padding: 13px;
    font-size: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .active {
    background-color: #2575ec;
  }
}
</style>
