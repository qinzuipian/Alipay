// var BASEURL = "http://192.168.1.188:8092/";
// var BASEURL = "http://192.168.1.166:8092/";
var BASEURL = "http://192.168.1.15:8092/";
// var BASEURL = "http://132.232.11.63:8092/";
// var BASEURL = "http://106.54.92.42:8092/";
// var BASEURL = "https://mini.wkang.net/";
// 退款接口
// var payOrder = "http://106.54.92.42:8081/"
var payOrder = "https://minipay.wkang.net/"


Date.prototype.format = function(fmt) { 
    var o = { 
       "M+" : this.getMonth()+1,                 //月份 
       "d+" : this.getDate(),                    //日 
       "h+" : this.getHours(),                   //小时 
       "m+" : this.getMinutes(),                 //分 
       "s+" : this.getSeconds(),                 //秒 
       "q+" : Math.floor((this.getMonth()+3)/3), //季度 
       "S"  : this.getMilliseconds()             //毫秒 
   }; 
   if(/(y+)/.test(fmt)) {
           fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length)); 
   }
    for(var k in o) {
       if(new RegExp("("+ k +")").test(fmt)){
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
        }
    }
   return fmt; 
}
