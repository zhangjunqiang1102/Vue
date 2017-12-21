## 指令
v-model 只要是表单元素就用 v-model
- v-text 代替{{}} 渲染成文本
- v-html 渲染成标签
- v-once 只会绑定一次 避免视图一直刷新内容
- v-for 便利数组，对象，字符串，数字

## methods
- 方法名不要和data里的变量名重名
- methods里的方法不要用箭头函数

## event
- v-on:click =>@clock
- @click='fn' fn后面的()若不写，则会把事件类型自动传给fn，若写了（）并需要事件类型，则手动传$event
- @keydown.ctrl.enter

## 表单元素
- checkbox
- radio
- select

## 获取数据
- promise

function ajax({url='',type='get',dataType='json'}) {
  return new Promise((resolve,reject)=>{
     let xhr=new XMLHttpRequest();
     xhr.open(type,url,true);
     xhr.onload=function () {//响应成功时 相当于xhr.readystate===4
         if(/^2\d{2}$/.test(xhr.status)){
             let data=xhr.response;
             resolve(data)
         }else {
             reject('失败了')
         }

     };
      xhr.onerror=function () {
          reject('失败了')
      };
      xhr.send(null)
  });
}