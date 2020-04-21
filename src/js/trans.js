/**
 * 枚举字典类, 使用时直接调用:trans('question_status', 2)即可;
 * 用于标准枚举类的显示, 以及后期error的code对应码;
 *              -- Author by Dio Zhu. on 2016.12.6
 */
const dic = {
    /**
     * 评论点赞错误码
     */
    ERROR: {
        DEFAULT: '操作失败, 请您稍后再试~'
        // 10001: '参数错误，请您稍后再试~',
        // 2001: '格式错误，请核对信息~'
    }
};
let trans = function(val, key = 'ERROR') {
    if (val.data) {
        if (val.status === 504) {
            return '网络连接超时,请检查网络~';
        }
        if (dic[key] && dic[key][val.data.status]) {
            return dic[key][val.data.status];
        } else if (val.data.msg) {
            // 如果不想直接返回服务器错误，就注释掉这个逻辑。。。Author by Dio Zhu. on 2019.3.23
            return val.data.msg;
        } else if (dic[key]['DEFAULT']) {
            return dic[key]['DEFAULT'];
        } else {
            return '请您稍后再试~';
        }
    } else if (!val.data && val.status !== 0) {
        return dic[key][val.status] ? dic[key][val.status] : dic[key]['DEFAULT'];
    } else {
        return dic[key]['DEFAULT'];
    }
};

export default trans;
