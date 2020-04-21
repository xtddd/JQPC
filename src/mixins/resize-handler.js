import store from '@/store';

const { body } = document;
const WIDTH = 1024;
const RATIO = 3;

export default {
    watch: {
        $route() {
            if (this.device === 'mobile' && this.sidebar.opened) {
                store.dispatch('closeSideBar', { withoutAnimation: false });
            }
        }
    },
    beforeMount() {
        window.addEventListener('resize', this.resizeHandler);
    },
    mounted() {
        const isMobile = this.isMobile();
        if (isMobile) {
            store.dispatch('toggleDevice', 'mobile');
            store.dispatch('closeSideBar', { withoutAnimation: true });
        } else {
            store.dispatch('toggleDevice', 'desktop');
            store.dispatch('openSideBar', { withoutAnimation: true });
        }
    },
    methods: {
        isMobile() {
            const rect = body.getBoundingClientRect();
            return rect.width - RATIO < WIDTH;
        },
        resizeHandler() {
            if (!document.hidden) {
                const isMobile = this.isMobile();
                store.dispatch('toggleDevice', isMobile ? 'mobile' : 'desktop');

                if (isMobile) {
                    // console.log('是手机端');
                    window.setTimeout(function() {
                        store.dispatch('closeSideBar', { withoutAnimation: true });
                    }, 0);
                } else {
                    // console.log('不是手机端');
                    window.setTimeout(function() {
                        store.dispatch('openSideBar', { withoutAnimation: false });
                    }, 0);
                }
            }
        }
    }
};
