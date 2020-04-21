<template>
    <footer class="v-footer">
        <nav
            v-for="(item, index) in footerList"
            :key="index"
            @click="handleNavSwitch(index, item.pathName)"
            :class="{ act: active == index }"
        >
            <!-- <i class="icon" :class="item.icon"></i><span>{{ item.name }}</span> -->
            {{ item.name }}
        </nav>
    </footer>
</template>
<script type="text/ecmascript-6">
export default {
    name: 'v-footer',
    // props:['actIndex'],
    props: {
        actIndex: {
            type: String,
            default: 'home'
        },
        footerName: {
            type: String
        }
    },
    computed: {
        active: function() {
            if (this.actIndex === 'home') return 0;
            if (this.actIndex === 'order-list') return 1;
            if (this.actIndex === 'capacity-content') return 2;
            if (this.actIndex === 'user-content') return 3;
            else return 0;
        }
    },
    created() {
        this.init();
    },
    data() {
        return {
            index:this.actIndex,
            footerList: [
                { name: '今日警情', icon: 'icon-index', pathName: 'policeToday' },
                { name: '历史警情', icon: 'icon-my-order', pathName: 'order-list' },
                { name: '救援支援', icon: 'icon-capacity-manage', pathName: 'capacity-content' },
                { name: '应急体系', icon: 'icon-capacity-manage', pathName: 'capacity-content' },
                { name: '战备值守', icon: 'icon-capacity-manage', pathName: 'capacity-content' },
                { name: '勤务管理', icon: 'icon-capacity-manage', pathName: 'capacity-content' },
                { name: '实力装备', icon: 'icon-capacity-manage', pathName: 'capacity-content' },
                { name: '研判分析', icon: 'icon-capacity-manage', pathName: 'capacity-content' },
                { name: '基础数据', icon: 'icon-capacity-manage', pathName: 'capacity-content' },
                { name: '六熟悉', icon: 'icon-capacity-manage', pathName: 'capacity-content' },
                { name: '系统管理', icon: 'icon-user', pathName: 'user-content' }
            ]
        };
    },
    methods: {
        init() {
            console.log('v-footer.init...');
        },

        // 底部taber 切换
        handleNavSwitch(index, pathName) {
            this.$router.replace({ name: pathName });
            this.index = index;
        }
    }


};
</script>
<style rel="stylesheet/scss" lang="scss">
// @import '../scss/variables';

.v-footer {
    width: 100%;
    display: flex;
    height: 50px;
    text-align: center;
    background: #073e79;

    nav {
        flex: 1;
        font-size: 14px;
        color: #9d9d9d;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        .icon {
            font-size: 24px;
        }

        span {
            height: 10px;
            margin-top: 2px;
        }

        &.act {
            color: #336eff;
        }
        &::frist-child i{
            font-size: 10px;

        }
    }
}
</style>
