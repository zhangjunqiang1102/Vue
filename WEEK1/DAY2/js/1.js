let arr = [1, 2, 3, 4, 5];
arr.forEach((item, index) => {
    //  console.log(item);
});
for (let i = 0; i < arr.length; i++) {
    //console.log(arr[i]);
}

//es5 forEach map filter some every reduce
//es6 find findIndex for...of...
//  for...of... 便利数组或者类数组  得到数组每一项
for (let val of arr) {
    //  console.log(val);
}

for (let key of arr.keys()) {
    //console.log(key);
}

//arr.entries () 数组的索引和值都获取到
for (let value of  arr.entries()) {
    //console.log(value);
}

//find  返回找到的这一项
// let ary=[11,22,33,44];
// ary.find((...rest)=>{//rest 参数
//     console.log(rest);
// });

let ary = [11, 22, 33, 44];
let rex = ary.find((item, index) => {//rest 参数
    return item > 35
});
//console.log(rex);

let rex1 = ary.findIndex((item, index) => {//rest 参数
    return item > 35
});
console.log(rex1);

let ary2 = [1, 2, 3, 4, 5];
//filter 筛选掉不符合条件的，返回匹配条件的  返回的是一个新数组
let res2 = ary2.filter((item, index) => {//删除功能时用的多
    return item < 4
});
console.log(res2);

//some 只要有一个条件成立，则返回true，条件都不成立才返回false

let res3 = ary2.some((item, index) => {
    return item > 1
});
console.log(res3);//true

//every  条件都成立才返回true，只要有一个不成立则返回false
let res4 = ary2.every((item, index) => {
    return item > 0
});
console.log('res4:' + res4);

//reduce : 计算数组每一项的累积值
//prev 累积项  next 当前项
//[1,2,3,4,5] 数组每一项累加起来
let res5 = ary2.reduce((prev, next) => {
    return prev + next;
});
console.log(res5);//15

let ary3 = [{price: 10, count: 2}, {price: 15, count: 3}];
//得出所购商品的总价
//若prev有默认值，则next从第一项开始
let res6 = ary3.reduce((prev, nest) => {
    return prev + nest.price * nest.count;
}, 0);
console.log('res6:' + res6);