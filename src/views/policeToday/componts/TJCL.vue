<template>
  <div class="TJCL">
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
            :indeterminate="isIndeterminate"
            v-model="checkAll"
            @change="handleCheckAllChange"
          ></el-checkbox>
        </div>
        <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
          <template v-for="(items,index) in item.dispatchCarList">
            <el-checkbox
              :label="items"
              :true-label="item.cjh"
              :key="items.id+index"
              @change="handleCheckChange"
            >
              <div class="PQitem" @click="hadlerB(index,0)">
                <span @click="hadlerB(index,1)">
                  <i class="carIcon iconfont icon-Group24Copy2"></i>
                  {{items.clmc}}
                </span>
                <span @click="hadlerB(index,2)">
                  <i class="carIcon iconfont icon-dianhua"></i>125323
                </span>
              </div>
            </el-checkbox>
          </template>
        </el-checkbox-group>
      </div>
    </template>
    <div v-if="list && !list.length" style="text-align:center">暂无数据</div>
  </div>
</template>

<script>
/**
 * 今日警情-派遣力量-推荐车辆
 *          ----张磊 2020.04.25
 */
export default {
  name: "TJCL",
  props: {
    value: Boolean,
    isCheck: {
      type: Boolean,
      default: () => false
    },
    title: String,
    list: {
      type: Array,
      default: () => []
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
      isIndeterminate: false,
      currentValue: this.value,
      checkedCities: []
    };
  },
  watch: {
    value(val) {
      this.currentValue = val;
    },
    currentValue(val) {
      this.$emit("input", val);
    }
  },
  created() {},
  methods: {
    handlerC() {
      this.show = !this.show;
    },
    hadlerB(index, type) {
      this.active = index;
      if (type === 0) {
        this.currentValue = true;
      }
      console.log(type);
    },
    //全选
    handleCheckChange(val) {
      // this.currentValue = true;
      console.log(val);
    },
    handleCheckAllChange(val) {
      console.log(val);
      // this.checkedCities = val ? cityOptions : [];
      this.isIndeterminate = false;
    },
    handleCheckedCitiesChange(value) {
      // let checkedCount = value.length;
      // this.checkAll = checkedCount === this.cities.length;
      // this.isIndeterminate =
      //   checkedCount > 0 && checkedCount < this.cities.length;
      console.log(value);
    }
  }
};
</script>

<style lang="scss">
.TJCL {
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
  .el-checkbox-group {
    .el-checkbox {
      width: 100%;
      background-color: #2250ba;
      display: flex;
      flex-direction: row-reverse;
      align-items: center;
      justify-content: space-between;
      color: #fff;
      padding: 0 10px;
      box-sizing: border-box;
    }
    .is-checked {
      background-color: #2575ec;
    }
    .el-checkbox__label {
      flex: 1;
    }
    .el-checkbox__input.is-checked + .el-checkbox__label {
      color: #ffffff;
    }
  }
  .PQitem {
    // background-color: #2250ba;
    padding: 13px;
    font-size: 16px;
    display: flex;
    // justify-content: space-between;
    align-items: center;
  }
  .active {
    background-color: #2575ec;
  }
}
</style>
