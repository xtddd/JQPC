<template>
    <div class="czcs_main">
        <div class="czcs_top">
            <div class="search">
                <div class="search_input">
                    <input type="text" placeholder="请输入关键字" v-model="key_word">
                </div>
                <div class="search_btn" @click="search">搜索</div>
            </div>
            <div class="send_btn" @click="send">推送</div>
        </div>
        <div class="text">
            <div v-for="(item,index) in labelList" :key="index" class="single_label">
                <div class="label_message">
                    <div class="label_" v-for="(label,label_index) in item.bqxx.split(',')" :key="label_index">{{label}}</div>
                    <div class="label_text">{{item.dlnr}}</div>
                    <div>添加人: {{item.tjr}}</div>
                </div>
                <div class="choose_btn">选定</div>
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
        },
        data() {
            return {
                key_word:'',
                labelList:[],
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
        height: calc(100% - 100px);
        margin: 10px 40px 0 60px;
        border:1px solid red;
        overflow-y: auto;
    }
    .single_label{
        display: flex;
    }
    .label_message{
        width:calc(100% - 120px);
        background:rgba(36,107,222,1);
        font-size: 18px;
    }
    .choose_btn{
        width:120px;
        height:38px;
        background:rgba(36,107,222,1);
        font-size: 18px;
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
    .label_{
        float: left;
        display: flex;
        flex-wrap: wrap;
        margin-right: 10px;
        padding: 3px 19px;
        font-size: 16px;
        background:rgba(15,71,184,1);
        border:2px solid rgba(43, 143, 255, 0.8);
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
