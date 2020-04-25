<template>
    <div class="zzzh">
        <div class="zh_top">
            <div class="content">
                当前火警<span style="color: #5EB1FF">2</span>级, 出动3中队
            </div>
            <div class="button">灾情汇报</div>
        </div>
        <div class="left_tree">
            <div class="first_zh zh_btn" :class="{'clickColor':clickedIndex===0}" @click="choose('现场指挥部',0)">现场指挥部</div>
            <div class="line row"></div>
            <div class="line col"></div>
            <div class="line col third_col_1"></div>
            <div class="line col third_col_2" v-for='(i,index) in 4' :key="index"></div>
            <div class="second_zh zh_btn" :class="{'clickColor':clickedIndex===1}" @click="choose('作战指挥',1)">作战指挥</div>
            <div class="second_zh zh_btn" :class="{'clickColor':clickedIndex===2}" @click="choose('后勤保障',2)">后勤保障</div>
            <div class="second_zh zh_btn" :class="{'clickColor':clickedIndex===3}" @click="choose('政工保障',3)">政工保障</div>
            <div class="second_zh zh_btn" :class="{'clickColor':clickedIndex===4}" @click="choose('宣传报道',4)">宣传报道</div>
            <div class="second_zh zh_btn" :class="{'clickColor':clickedIndex===5}" @click="choose('信息研判',5)">信息研判</div>
            <div class="line col third_col_1"></div>
            <div class="third_btn zh_btn" :class="{'clickColor':clickedIndex===6}" @click="choose('指挥中心',6)">指挥中心</div>
            <div class="line four_col"></div>
            <div class="zh_btn four_btn" :class="{'clickColor':clickedIndex===7}" @click="choose('应急通信',7)">应急通信</div>
        </div>
        <div class="right_tree">
            <div class="title">
                <img src="../../../assets/zzzh_jx.png" height="22" width="4"/>
                <span>{{title}}</span>
            </div>
            <div class="ry_list">
                <div class="zhry_max">
                    指挥长 ：
                    <i class="iconfont icon-touxiang TX TX_ZH"></i>
                    <span>王德志</span>
                </div>
                <div class="zhry">
                    副指挥长 ：
                    <i class="iconfont icon-touxiang TX"></i>
                    <span>郑泽叶</span>
                </div>
                <div class="zhry ">
                    指挥助理 ：
                    <i class="iconfont icon-touxiang TX"></i>
                    <span>孟祥海</span>
                </div>
                <div class="zhry">
                    通信员 ：
                    <i class="iconfont icon-touxiang TX TX_ZH"></i>
                    <span>郭坤</span>
                </div>
            </div>
            <div class="bj">编辑</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ZZZH",
        data(){
            return{
                title:'现场指挥部',
                clickedIndex:-1,
            }
        },
        methods:{
            choose(title,index){
                this.title=title;
                this.clickedIndex=index;
            }
        }
    }
</script>

<style scoped>
    .zzzh{
        height: 100%;
        /*border:1px solid red;*/
    }
    .zh_top{
        height: 22px;
        display: flex;
        justify-content: space-between;
        padding: 16px 0 12px 15px;
        font-size: 22px;
        letter-spacing: 1px;
    }
    .button{
        margin-top: -10px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 18px;
        font-weight: normal;
        width:120px;
        height:38px;
        background:linear-gradient(0deg,rgba(34,80,186,1),rgba(37,117,236,1));
        box-shadow:0 2px 8px 0 #0b1f4c, 0 2px 4px 0 rgba(133,219,255,1)inset;
        border-radius:4px;
        cursor: pointer;
    }
    .left_tree{
        float: left;
        width:848px;
        height:calc(100% - 52px);
        background:rgba(7,46,75,.6);
        border:2px solid rgba(43, 143, 255, 1);
        overflow: auto;
        margin-right: 9px;
        box-sizing: border-box;
    }
    .zh_btn{
        display: flex;
        justify-content: center;
        align-items: center;
        width:160px;
        height:48px;
        background:#2250BA;
        color: white;
        font-size: 20px;
        font-weight: normal;
        cursor: pointer;
        z-index: 999;
    }
    .clickColor{
        background: #2575EC;
    }
    .line{
        height:2px;
        background:rgba(166,208,255,1);
        position: relative;
        margin: auto;
    }
    .row{
        width: 624.5px;
        top: 155px;
    }
    .col{
        top: 109px;
        width: 2px;
        height: 44px;
    }
    .third_col_1{
        float: left;
        margin-left: 110px;
    }
    .third_col_2{
        float: left;
        margin-left: 153.5px;
    }
    .first_zh{
        position: relative;
        top:111px;
        left: 344px;
    }
    .four_col{
        margin: 110px;
        width: 2px;
        height: 44px;
        position: relative;
        top: 43px;
    }
    .second_zh{
        float: left;
        width: 120px;
        position: relative;
        top:109px;
        left: 16px;
        margin-left: 36px;
    }
    .third_btn{
        width: 120px;
        position: relative;
        top:153px;
        left: -60px;
    }
    .four_btn{
        width: 120px;
        position: relative;
        top:-68px;
        left: 52px;
    }
    .right_tree{
        box-sizing: border-box;
        width:calc(100% - 857px);
        height:calc(100% - 52px);
        background:rgba(7,46,75,.6);
        border:2px solid rgba(43, 143, 255, 1);
        overflow: auto;
    }
    .ry_list{
        height: calc(100% - 95px);
    }
    .title{
        font-size: 20px;
        padding: 15px 0 0 20px;
    }
    .title>img{
        margin-right: 14px;
    }
    .title>span{
        position: relative;
        top: -3px;
    }
    .zhry_max{
        padding: 58px 0 0 61px;
        font-size: 18px;
    }
    .TX{
        font-size: 30px;
        color: #59A4F1;
        margin-right: 22px;
        margin-left: 70px;
        position: relative;
        top: 5px;
    }
    .TX_ZH{
       margin-left: 88px;
    }
    .zhry{
        padding: 30px 0 0 61px;
        font-size: 18px;
    }
    .bj{
        margin-left: 18px;
        width:calc(100% - 36px);
        height:32px;
        line-height: 32px;
        text-align: center;
        background:rgba(15,71,184,1);
        border:2px solid rgba(43, 143, 255, 0.8);
        border-radius:4px;
        font-size: 18px;
        cursor: pointer;
    }
</style>
