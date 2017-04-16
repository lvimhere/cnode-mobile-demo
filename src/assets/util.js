var timeUtil = function(time){
    // console.log(time)
    var time = new Date(time).getTime();
    var now = new Date().getTime();
    var result = now - time;
    var d = Math.floor(result / (3600 * 24 * 1000)); //天数
    var l1 = result % (3600 * 1000 * 24);   //不足一天的毫秒数
    var h = Math.floor(l1 / (3600 * 1000)) ;
    var l2 = l1 % (3600 * 1000);  //不足一个小时的毫秒数
    var m = Math.floor(l2 / (60 * 1000));
    var l3 = l2 % (60 * 1000)   //不足一分钟的毫秒数
    var s = Math.floor(l3 / 1000);
    // console.log(`${d}天${h}小时${m}分钟${s}秒`)
    // console.log(`${d}天${h}小时${}天${d}天`)
    return printf(d,h,m,s);
}
var printf = function(d,h,m,s){
    if(d){
        if(d < 30 && d > 0){
            return `${d}天以前`
        }else if(d < 365 && d >= 30){
            return `${Math.floor(d / 30)}个月以前`
        }else if(d >= 365){
            return `${Math.floor(d / 365)}年以前`
        }
    }else if(h){
        return `${h}小时以前`;
    }else if(m){
        return `${m}分钟以前`;
    }else if(s){
        return `${s}秒以前`;
    }
}


export default {
    timeUtil : timeUtil
}