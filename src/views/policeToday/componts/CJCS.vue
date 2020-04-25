<template>
    <div class="czcs_main">
        <div class="czcs_top">
            <div class="search">
                <div class="search_input">
                    <input type="text" placeholder="请输入关键字" v-model="key_word" @keyup.enter="search">
                </div>
                <div class="search_btn" @click="search">搜索</div>
            </div>
            <div class="send_btn" @click="changePanelShow" v-show="isSendFlag">推送</div>
        </div>
        <div class="text">
            <div v-for="(item,index) in labelList" :key="index" class="single_label" :class="{'checkedColor':item.checked}">
                <div class="label_message">
                    <div class="label_list">
                        <div class="label_" v-for="(label,label_index) in item.bqxx.split(',')" :key="label_index">{{label}}</div>
                    </div>
                    <div class="label_text">{{item.dlnr}}</div>
                    <div>添加人: {{item.tjr}}</div>
                </div>
                <div class="choose_btn" @click="choose(index)" v-show="!item.checked">选定</div>
                <div class="choose_btn checked_ben" @click="choose(index)" v-show="item.checked">取消</div>
            </div>
        </div>
        <div class="panel" v-show="isShowPanel">
            <div class="cs_title">建议处置措施</div>
            <textarea class="cs_text" v-model="sendList"></textarea>
            <div class="btn">
                <div class="common_btn send" @click="send">推送</div>
                <div class="common_btn cancel" @click="isShowPanel=false">取消</div>
            </div>
        </div>
    </div>
</template>

<script>
    import * as api from "../../../api/api";
    export default {
        name: "CJCS",
        props:{
            flag:{
                type: String,
                default: () => ''
            },
            ajbh:{
                type: String,
                default: () => ''
            },
        },
        data() {
            return {
                key_word:'',
                labelList:[],
                isSendFlag:false,
                isShowPanel:false,
                sendList:'',
            }
        },
        methods: {
            search(){
                this.labelList=[];
                return api.CzcsSearch(this.key_word,this.flag).then((res)=>{
                    console.log(res.data);
                    if(res.data.errno===0){
                        for(let i=0;i<res.data.data.length;i++){
                            this.$set(res.data.data[i],'checked',false);
                            this.labelList.push(res.data.data[i]);
                        }
                    }
                })
            },
            choose(index){
                this.isSendFlag=true;
                for(let i=0;i<this.labelList.length;i++){
                    if(index===i){
                        this.labelList[i].checked=!this.labelList[i].checked;
                    }
                }
            },
            changePanelShow(){
                this.sendList='';
                this.isShowPanel=true;
                for(let i=0;i<this.labelList.length;i++){
                    if(this.labelList[i].checked){
                       this.sendList=this.sendList+this.labelList[i].dlnr+'\r\n';
                    }
                }
            },
            send(){

            }
        }
    }
</script>

<style scoped>
    .czcs_main {
        height: calc(100% - 5px);
        background: rgba(7, 46, 75, .6);
        border: 2px solid rgba(43, 143, 255, 1);
        letter-spacing: 2px;
    }

    .czcs_top{
        display: flex;
        justify-content: space-between;
        margin: 36px 40px 0 60px;
    }
    .search {
        width: 51.1%;
        height: 40px;
        border: 2px solid rgba(166, 208, 255, 1);
    }
    .text{
        height: calc(100% - 120px);
        margin: 30px 40px 0 60px;
        /*border:1px solid red;*/
        overflow-y: auto;
    }
    .search_input {
        float: left;
        width: calc(100% - 124px);
        height: 100%;
        border: 3px solid #2469DB;
        box-sizing: border-box;
        padding-left: 10px;
    }

    .search_input > input {
        width: 100%;
        height: calc(100% - 2px);
        border: none;
        outline: none;
        background: #052E4C;
        color: #B2B2B2;
        font-size: 20px;
    }

    .search_btn {
        float: left;
        width: 124px;
        height: 100%;
        background: rgba(36, 105, 219, 1);
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-size: 20px;
        cursor: pointer;
    }
    .single_label{
        display: flex;
        align-items: center;
        margin:5px 5px 0 0;
    }
    .checkedColor{
        background: #3566B7;
    }
    .label_message{
        width:calc(100% - 130px);
        font-size: 18px;
        margin-right: 10px;
        margin-bottom: 5px;
    }
    .label_list{
        display: flex;
        flex-wrap: wrap;
    }
    .choose_btn{
        margin-right: 10px;
        width:120px;
        height:38px;
        background:rgba(36,107,222,1);
        font-size: 18px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }
    .checked_ben{
        background:rgba(87,169,252,1);
        border:2px solid rgba(43, 143, 255, 0.8);
    }
    .label_{
        float: left;
        padding: 3px 19px;
        margin: 5px 10px 0 0;
        font-size: 16px;
        background:rgba(15,71,184,1);
        border:2px solid rgba(43, 143, 255, 0.8);
    }
    .label_text{
        font-size: 16px;
        margin: 5px;
    }
    .send_btn{
        width:120px;
        height:38px;
        background:linear-gradient(0deg,rgba(34,80,186,1),rgba(37,117,236,1));
        box-shadow:0 2px 8px 0 rgba(11,31,76,0.55), 0 2px 4px 0 rgba(133,219,255,1) inset;
        border-radius:4px;
        color: #ffffff;
        font-size: 18px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }
    .panel{
        position: relative;
        top: -75%;
        left:calc(50% - 260px);
        width: 519px;
        height: 55%;
        background: rgb(0, 32, 96);
    }
    .cs_title{
        font-size: 24px;
        display: flex;
        justify-content: center;
        padding: 15px;
    }
    .cs_text{
        width: calc(100% - 30px);
        height: calc(100% - 130px);
        background: rgb(70, 114, 196);
        margin:0 10px;
        border: 1px solid rgb(70, 114, 196);
        font-size: 14px;
        color: white;
        padding: 5px 0 0 5px;
    }
    .btn {
        height: 60px;
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
    }
    .common_btn{
        width: 85px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 18px;
        cursor: pointer;
        margin:7px 10px;
    }
    .send{
        background: rgb(0, 112, 192);
    }
    .cancel{
        background: rgb(117, 159, 204);
    }
    .search_input > input::-webkit-input-placeholder {
        color: #B2B2B2;
        font-size: 18px;
    }

    .search_input > input::-moz-placeholder {
        color: #B2B2B2;
        font-size: 18px;
    }

    .search_input > input:-ms-input-placeholder {
        color: #B2B2B2;
        font-size: 18px;
    }
</style>
