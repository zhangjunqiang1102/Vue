//使用场景
//多个接口请求数据，每个数据的操作依赖于上次请求回来的数据，操作成功返回一个回调数据
function bind(data,callBack) {

}
// $.ajax({
//
//    url:'',
//    success:function (data) {
//        $.ajax({
//            url:'',
//            data:{aa:data},
//            success:function (data) {
//                bind(data,fn)
//            }
//        })
//    }
// });

//promise 用法  初始化promise时等待状态（padding） 成功状态（fulfilled）  失败状态（rejected）
let promise=new Promise((resolve,reject)=>{
    setTimeout(function () {
        if(Math.random()>.5){
            resolve('成功')//成功执行then里面第一个参数
        }else {
            reject('失败')//失败执行then里面第二个参数
        }
    },1000)
});
//promise 调用then时每次会返回新的promise对象，使用链式写法
promise.then((data)=>{
    console.log(data);
    return data
},(error)=>{
    console.log(error);
}).then((data)=>{
    console.log(data);
},error=>{

});
