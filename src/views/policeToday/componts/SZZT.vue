<template>
  <div class="SZZT">
    <div class="btop">
      <mark>|</mark>
      {{title}}
    </div>
    <div style="display:flex">
      <div class="SL" style="padding: 10px 30px 10px 50px;">
        <div id="SLChart" :style="{width: '126px', height: '146px'}">
          <el-progress type="circle" :percentage="70" color="#21BEFF"></el-progress>
          <div class="JDTNR">
            <div class="NR">
              <span>可用载水量</span>
              <span>5000KG</span>
              <span>2000KG</span>
            </div>
          </div>
        </div>
        <div class="xx">
          <span>
            消防泵实施压力：
            <br />0.8mpa
          </span>
          <span>
            消防泵实施压力：
            <br />0.8mpa
          </span>
          <span>
            消防泵实施压力：
            <br />0.8mpa
          </span>
        </div>
      </div>
      <div class="SL" style="padding: 10px 50px 10px 30px;">
        <div id="PMChart" :style="{width: '126px', height: '146px'}">
          <el-progress type="circle" :percentage="70"></el-progress>
          <div class="JDTNR">
            <div class="NR">
              <span>可用载水量</span>
              <span>5000KG</span>
              <span>2000KG</span>
            </div>
          </div>
        </div>
        <div class="xx">
          <span>
            消防泵实施压力：
            <br />0.8mpa
          </span>
          <span>
            消防泵实施压力：
            <br />0.8mpa
          </span>
          <span>
            消防泵实施压力：
            <br />0.8mpa
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/**
 * 今日警情-派遣力量-上装状态
 *          ----张磊 2020.04.16
 */
export default {
  name: "SZZT",
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
      option: {}
    };
  },
  created() {},
  mounted() {
    this.$nextTick(() => {
      // this.drawLine("SLChart");
      // this.drawLine("PMChart");
    });
  },
  methods: {
    drawLine(id) {
      let SLChart = this.$echarts.init(document.getElementById(id));
      let option = {
        backgroundColor: "#03141c",
        title: {
          text: "可用载水量\n",
          subtext: "2000KG\n5000KG",
          x: "center",
          y: "center",
          textStyle: {
            color: "#fff",
            fontSize: 20,
            fontWeight: "normal"
          },
          subtextStyle: {
            color: "rgba(255,255,255,.45)",
            fontSize: 24,
            fontWeight: "normal"
          }
        },
        legend: {
          x: "center",
          y: "bottom",
          data: ["rose3", "rose5", "rose6", "rose7", "rose8"]
        },
        calculable: true,
        series: [
          {
            name: "面积模式",
            type: "pie",
            radius: [100, 130],
            center: ["50%", "50%"],
            hoverAnimation: false,
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: false
              },
              emphasis: {
                show: true
              }
            },
            lableLine: {
              normal: {
                show: false
              },
              emphasis: {
                show: true
              }
            },
            data: [
              {
                value: 300,
                itemStyle: {
                  color: new this.$echarts.graphic.LinearGradient(0, 1, 0, 0, [
                    {
                      offset: 0,
                      color: "#f6e3a1"
                    },
                    {
                      offset: 1,
                      color: "#ff4236"
                    }
                  ])
                }
              },
              {
                value: 52,
                name: "rose2",
                itemStyle: {
                  color: "transparent"
                }
              }
            ]
          },
          {
            name: "面积模式",
            type: "pie",
            radius: [110, 120],
            center: ["50%", "50%"],
            label: {
              normal: {
                show: false
              },
              emphasis: {
                show: true
              }
            },
            lableLine: {
              normal: {
                show: false
              },
              emphasis: {
                show: true
              }
            },
            data: [
              {
                value: 300,
                itemStyle: {
                  color: "transparent"
                }
              },
              {
                value: 52,
                name: "rose2",
                itemStyle: {
                  color: new this.$echarts.graphic.LinearGradient(0, 1, 0, 0, [
                    {
                      offset: 0,
                      color: "#348fe6"
                    },
                    {
                      offset: 1,
                      color: "#625bef"
                    }
                  ])
                }
              }
            ]
          }
        ]
      };
      SLChart.setOption(option);
    }
  }
};
</script>

<style lang="scss">
.SZZT {
  width: 100%;
  .JDTNR {
    width: 100%;
    height: 100%;
    position: relative;
    top: -100%;
    display: flex;
    // flex-wrap: wrap;
    align-items: center;
    span {
      display: inline-block;
      width: 100%;
      text-align: center;
    }
  }
  .SL {
    display: flex;
    // justify-content: space-between;
    flex: 1;
    .el-progress__text {
      color: transparent;
    }
    .xx {
      // display: flex;
      // justify-content: space-between;
      flex-wrap: wrap;
      padding: 0 15px;
      span {
        width: 100%;
        display: block;
        padding-bottom: 10px;
        line-height: 24px;
      }
    }
  }
}
</style>
