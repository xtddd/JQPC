<template>
  <div class="ZHLB">
    <div
      style="display:flex;height:82px;padding:0 23px;backgroundColor:#2C6DCF"
      @dblclick="func(data)"
    >
      <div style="padding:15px 23px 15px 0">
        <svg class="icons" aria-hidden="true">
          <use xlink:href="#icon-Group32Copy2" />
        </svg>
      </div>
      <div style="flex:1">
        <div class="nr">
          <span>灾害对象名称</span>
          <i class="assIcon iconfont icon-location"></i>
        </div>
        <div class="ass">{{dataObj.afdz}}</div>
        <div class="nr" style="fontSize:16px">
          <div style="fontSize:14px">
            <span style="paddingRight:10px">高层建筑火灾</span>
            <span>{{dataObj.bjsj}}</span>
          </div>
          <i v-if="flag" class="showIcon iconfont icon-sanx-up" @click="handlerC"></i>
          <i v-if="!flag" class="showIcon iconfont icon-arrUp-fill" @click="handlerC"></i>
        </div>
      </div>
    </div>
    <div class="PZX" v-show="flag">
      <!-- <div class="Singular">
        <div class="title">重点单位</div>
        <div class="value">
          <el-select v-model="form.name" placeholder="请选择">
            <el-option
              v-for="item in ZDList"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </div>
      </div>-->
      <div class="Singular">
        <div class="title">灾害类型</div>
        <div class="value">
          <el-select v-model="form.zhf" placeholder="请选择" @change="ZHFChange">
            <el-option v-for="item in ZHFList" :key="item" :label="item" :value="item"></el-option>
          </el-select>
          <span class="HX">-</span>
          <el-select v-model="form.zhd" placeholder="请选择" @change="ZHDChange">
            <el-option v-for="item in ZHDList" :key="item" :label="item" :value="item"></el-option>
          </el-select>
          <span class="HX">-</span>
          <el-select v-model="form.zht" placeholder="请选择">
            <el-option v-for="item in ZHTList" :key="item" :label="item" :value="item"></el-option>
          </el-select>
        </div>
      </div>
      <div class="Singular">
        <div class="title">灾害对象</div>
        <div class="value">
          <el-input v-model="form.ZHDX" placeholder></el-input>
        </div>
      </div>
      <div class="Singular">
        <div class="title">灾害地址</div>
        <div class="value">
          <el-input v-model="form.ZHDZ" placeholder></el-input>
        </div>
      </div>
      <div class="duo">
        <div class="Singular">
          <div class="title">所属区县</div>
          <div class="value">
            <el-select v-model="form.QX" placeholder="请选择">
              <el-option
                v-for="item in QXList"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </div>
        </div>
        <div class="Singular">
          <div class="title">辖区消防站</div>
          <div class="value">
            <el-select v-model="form.XQ" placeholder="请选择">
              <el-option
                v-for="item in XQList"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </div>
        </div>
      </div>
      <div class="Singular">
        <div class="title">灾情描述</div>
        <div class="value">
          <el-input type="textarea" v-model="form.ajms" placeholder="请输入灾情描述"></el-input>
        </div>
      </div>
      <div class="duo">
        <div class="Singular">
          <div class="title">燃烧对象</div>
          <div class="value">
            <el-select v-model="form.RS" placeholder="请选择">
              <el-option
                v-for="item in RSList"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </div>
        </div>
        <div class="Singular">
          <div class="title">建筑结构</div>
          <div class="value">
            <el-select v-model="form.JZ" placeholder="请选择">
              <el-option
                v-for="item in JZList"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </div>
        </div>
      </div>
      <div class="duo">
        <div class="Singular">
          <div class="title">火灾场所</div>
          <div class="value">
            <el-select v-model="form.HZF" placeholder="请选择">
              <el-option
                v-for="item in HZFList"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
            <span class="HX">-</span>
            <el-select v-model="form.HZD" placeholder="请选择">
              <el-option
                v-for="item in HZDList"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </div>
        </div>
        <div class="Singular">
          <div class="title">烟雾状况</div>
          <div class="value">
            <el-select v-model="form.YM" placeholder="请选择">
              <el-option
                v-for="item in YWList"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </div>
        </div>
      </div>
      <div class="duo">
        <div class="Singular">
          <div class="title">楼层层数</div>
          <div class="value">
            <el-input v-model="form.lccs" placeholder></el-input>
          </div>
        </div>
        <div class="Singular">
          <div class="title">燃烧层数</div>
          <div class="value">
            <el-input v-model="form.rslc" placeholder></el-input>
          </div>
        </div>
        <div class="Singular">
          <div class="title">其他特征</div>
          <div class="value">
            <el-select v-model="form.qt" placeholder="请选择">
              <el-option
                v-for="item in QTList"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </div>
        </div>
      </div>
      <div class="duo">
        <div class="Singular">
          <div class="title">人员被困</div>
          <div class="value">
            <el-input v-model="form.name" placeholder></el-input>
          </div>
        </div>
        <div class="Singular">
          <div class="title">灾害等级</div>
          <div class="value">
            <div class="DJ" :class="{'one':one}" @click="active('one')">1</div>
            <div class="DJ" :class="{'two':two}" @click="active('two')">2</div>
            <div class="DJ" :class="{'three':three}" @click="active('three')">3</div>
            <div class="DJ" :class="{'four':four}" @click="active('four')">4</div>
            <div class="DJ" :class="{'five':five}" @click="active('five')">5</div>
          </div>
        </div>
      </div>
      <div class="Singular">
        <div class="title">灾害特征</div>
        <div class="value">
          <!-- <template  -->
          <div
            v-for="(item,index) in TZList"
            class="DJ ZH"
            :class="{ZHActive:arr.includes(index)}"
            :key="item+index"
            @click="checkedBox(item,index)"
          >{{item}}</div>
          <!-- <el-checkbox-group v-model="check" size="small">
            <el-checkbox-button v-for="city in TZList" :label="city" :key="city">{{city}}</el-checkbox-button>
          </el-checkbox-group>-->
          <!-- </<template> -->
          <!-- <div class="DJ">困</div>
            <div class="DJ">火</div>
            <div class="DJ">烟</div>
          <div class="DJ">危</div>-->
        </div>
      </div>
      <div class="duo" style="marginTop:6px">
        <div class="Singular">
          <div class="title">灾情状态</div>
          <div class="value">
            <el-select v-model="form.zqzt" placeholder="请选择" @change="ZHFChange">
              <el-option v-for="item in ZTList" :key="item" :label="item" :value="item"></el-option>
            </el-select>
          </div>
        </div>
        <div class="Singular">
          <div class="value">
            <el-button
              size="mini"
              style="background: linear-gradient(#2575ec, #2250ba);"
              @click="handlerDuanxin(dataObj.bjdh)"
            >补发报警短信</el-button>
          </div>
        </div>
      </div>
      <div class="Singular" style="marginTop:23px">
        <div class="value">
          <el-button>修改</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/**
 * 今日警情-派遣力量-灾害列表
 *          ----张磊 2020.04.15
 */
import * as api from "../../../api/api";
export default {
  name: "ZHLB",
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
    //双击事件
    func: Function
  },
  data() {
    return {
      form: {},
      flag: true,
      btnList: [
        {
          name: "警情位置",
          icon: "icon-location"
        },
        {
          name: "增援调派",
          icon: "icon-tiaopai"
        },
        {
          name: "启动预案",
          icon: "icon-qidongyuan"
        },
        {
          name: "二次定位",
          icon: "icon-datouzhen"
        }
      ],
      dataObj: this.data,
      ZDList: [], //重点单位
      ZHFList: ["火灾", "灾害事故", "公共突发事件", "遇险紧急求助"], //灾害类型第一列
      ZHDList: [""], //灾害类型第二列
      ZHTList: [], //灾害类型第三列
      QXList: [], //所属区县
      XQList: [], //辖区消防站
      RSList: [], //燃烧对象
      JZList: [], //建筑结构
      HZFList: [], //火灾场所第一列
      HZDList: [], //火灾场所第二列
      YWList: [], //烟雾状况
      QTList: [], //其他特征
      ZTList: [
        "报警",
        "出警",
        "到达",
        "展开",
        "出水",
        "控制",
        "熄灭",
        "结束",
        "返回"
      ], //灾情状态
      TZList: ["爆", "困", "火", "烟", "危"],
      checkList: [],
      arr: [],
      one: false,
      two: false,
      three: false,
      four: false,
      five: false
    };
  },
  created() {
    console.log(this.data);
  },
  methods: {
    //控制显示于隐藏
    handlerC() {
      this.flag = !this.flag;
    },
    ss() {
      console.log(this.func);
      // this.func();
    },
    //1-5的选中效果
    active(key) {
      let boo = this[key];
      this.one = false;
      this.two = false;
      this.three = false;
      this.four = false;
      this.five = false;
      this[key] = !boo;
    },
    //灾害类型
    ZHFChange(val) {
      console.log(val);
      let arr = [];
      if (val === "火灾") {
        arr = [
          "高层建筑",
          "砖木结构建筑",
          "地下建筑火灾",
          "石油化工火灾",
          "人员密集场所火灾",
          "交通工具火灾",
          "仓库火灾",
          "工厂火灾",
          "特殊情况下火灾",
          "其他火灾"
        ];
      }
      this.ZHDChange = arr;
    },
    ZHDChange(val) {
      console.log(val);
      let arr = [];
      if (val === "高层建筑") {
        arr = [
          "高层建筑",
          "砖木结构建筑",
          "地下建筑火灾",
          "石油化工火灾",
          "人员密集场所火灾",
          "交通工具火灾",
          "仓库火灾",
          "工厂火灾",
          "特殊情况下火灾",
          "其他火灾"
        ];
      }
      this.ZHTChange = arr;
    },
    //灾情特征
    checkedBox(item, index) {
      if (this.arr.includes(index)) {
        //includes()方法判断是否包含某一元素,返回true或false表示是否包含元素，对NaN一样有效
        //filter()方法用于把Array的某些元素过滤掉，filter()把传入的函数依次作用于每个元素，然后根据返回值是true还是false决定保留还是丢弃该元素：生成新的数组
        this.arr = this.arr.filter(function(ele) {
          return ele != index;
        });
        this.checkList = this.checkList.filter(function(ele) {
          return ele != item;
        });
      } else {
        this.arr.push(index);
        this.checkList.push(item);
      }
    },
    //补发报警短信
    handlerDuanxin(sjh) {
      api
        .callAlarmSms({
          sjh: sjh
        })
        .then(res => {
          console.log(res)
          if (res.data.code === 200)
            this.$message({
              message: "发送成功",
              type: "success"
            });
        });
    }
  }
};
</script>

<style lang="scss" scope>
.ZHLB {
  width: 100%;
  color: #ffffff;
  // padding: 0 23px;
  // display: flex;
  .topIcon {
    margin-right: 10px;
  }
  .FireType {
    width: 52px;
    height: 52px;
    font-size: 52px;
  }
  .bh {
    border-bottom: 2px #69dce0 solid;
  }
  .nr {
    display: flex;
    font-size: 18px;
    justify-content: space-between;
    .assIcon {
      font-size: 18px;
      line-height: 29px;
      // color: #ffffff;
    }
    .showIcon {
      font-size: 18px;
      // color: #ffffff;
    }
  }
  .ass {
    font-size: 14px;
  }
  .btn {
    height: 46px;
    display: flex;
    text-align: center;
    background-color: #0350d0;
    padding: 0 23px;
    .btnItem {
      flex: 1;
    }
    .btnIcon {
      font-size: 24px;
    }
  }
  .PZX {
    background-color: #2c6dcf;
    border-top: 1px #1a4e91 solid;
  }
  .duo {
    display: flex;
  }
  .Singular {
    display: flex;
    font-size: 16px;
    margin-top: 8px;
    line-height: 30px;
    // height: 30px;
    flex: 1;
    color: #ffffff;
    padding-right: 5px;
    .el-input__inner {
      height: 30px;
      line-height: 30px;
      border: 2px #a6d0ff solid;
      box-shadow: #0066ff 0px 0px 8px 0px inset;
    }
    .el-input__icon {
      line-height: 30px;
    }
    .title {
      text-align: center;
      width: 80px;
    }
    .value {
      display: flex;
      flex: 1;
      // .el-checkbox-button {
      //   // background-color: #2c6dcf;
      //   // border: 2px #a6d0ff solid;
      //   // color: #ffffff;
      //   margin-right: 10px;
      //   .el-checkbox-button__inner {
      //     background-color: #2c6dcf;
      //     color: #ffffff;
      //   }
      // }
      .el-textarea {
        .el-textarea__inner {
          // border-color: #2b8fff;
          background-color: #2c6dcf;
          border: 2px #a6d0ff solid;
          box-shadow: #0066ff 0px 0px 8px 0px inset;
        }
      }
      .el-select {
        flex: 1;
        select {
          background-color: #2c6dcf;
        }
      }
      .el-input {
        .el-input__inner {
          background-color: #2c6dcf;
          color: #fff;
        }
      }
      .el-button {
        flex: 1;
        margin-left: 5px;
      }
      .HX {
        text-align: center;
        display: inline-block;
        width: 15px;
      }
    }
    .DJ {
      width: 30px;
      height: 26px;
      line-height: 26px;
      text-align: center;
      position: relative;
      top: 8px;
      margin-left: 2px;
      border: 2px #a6d0ff solid;
      box-sizing: border-box;
      cursor: pointer;
    }
    .ZH {
      flex: 1;
    }
    .ZHActive {
      background-color: #a6d0ff;
    }
    .one {
      background-color: #2edb43;
      box-shadow: 0px 0px 10px #a6d0ff inset;
    }
    .two {
      background-color: #5eb1ff;
      box-shadow: 0px 0px 10px #a6d0ff inset;
    }
    .three {
      background-color: #ffe42e;
      box-shadow: 0px 0px 10px #a6d0ff inset;
    }
    .four {
      background-color: #ff8518;
      box-shadow: 0px 0px 10px #a6d0ff inset;
    }
    .five {
      background-color: #ff1818;
      box-shadow: 0px 0px 10px #a6d0ff inset;
    }
  }
}
.el-select-dropdown .el-scrollbar,
.el-select-dropdown__item {
  color: #ffffff;
  background-color: #2c6dcf;
}
.el-select-dropdown {
  color: #ffffff;
  background-color: #2c6dcf;
}
.el-select-dropdown__list,
.el-select-dropdown__empty {
  color: #ffffff;
  border: 1px #4cbaff solid;
}
.el-select-dropdown__item:hover {
  // color: #409eff;
  font-weight: 700;
}
.el-select-dropdown__item.hover,
.el-select-dropdown__item:hover {
  background-color: #6ca7ff;
}
</style>
