//   -Sanmao.js-   
//https://juejin.im/post/5a091afe6fb9a044ff30f402
/* 函数内部arguments转换为数组 */
var args = Array.prototype.slice.call(arguments, 0);
/*由于 JavaScript 中一切都是对象， 任何都不例外， 对所有值类型应用 Object.prototype.toString.call() 方法结果如下：*/
console.log(Object.prototype.toString.call(123)) //[object Number]
console.log(Object.prototype.toString.call('123')) //[object String]
console.log(Object.prototype.toString.call(undefined)) //[object Undefined]
console.log(Object.prototype.toString.call(true)) //[object Boolean]
console.log(Object.prototype.toString.call({})) //[object Object]
console.log(Object.prototype.toString.call([])) //[object Array]
console.log(Object.prototype.toString.call(function () {})) //[object Function]

/*判断是否为函数*/
function isFunction(it) {
	return Object.prototype.toString.call(it) === '[object Function]';
}

/*判断是否为数组：*/
function isArray(o) {
	return Object.prototype.toString.call(o) === '[object Array]';
}
/*
 * 判断两个数组是否相等
 * 
 */
function arrayEqual(arr1, arr2) {
	if (arr1 === arr2) return true;
	if (arr1.length != arr2.length) return false;
	for (var i = 0; i < arr1.length; ++i) {
		if (arr1[i] !== arr2[i]) return false;
	}
	return true;
}

/**
 * 
 * @desc   判断`obj`是否为空
 * @param  {Object} obj
 * @return {Boolean}
 */
function isEmptyObject(obj) {
	if (!obj || typeof obj !== 'object' || Array.isArray(obj))
		return false
	return !Object.keys(obj).length
}

//使用push和apply合并数组
var arr1 = [1, 2, 3, 4, 5],
	arr2 = [6, 7, 8, 9, 10];
arr1.push.apply(arr1, arr2);
console.log(arr1); //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//更短的数组去重写法
[...new Set([2, "12", 2, 12, 1, 2, 1, 6, 12, 13, 6])]
//[2, "12", 12, 1, 6, 13]
//es6的新特性

/**
 * @desc 数组对象按照id去重
 * @param {Array} list 
 * @return {Array}
 */
function objquchong(list){
	var result  = [];
	var obj = {};
	for (var i = 0; i < list.length; i ++) {
		if(!obj[list[i].id]){
			result.push(list[i]);
			obj[list[i].id] = true;
		}
	}
	return result
}
var list = [{id:1,name:'a'},{id:2,name:'b'},{id:1,name:'c'},{id:3,name:'d'}]
console.log(objquchong(list));// [{id:2,name:'b'},{id:3,name:'d'}]
// const dataReducer = (prev, cur, idx) => {
// 	let obj = {}
// 	const { name } = cur
// 	obj[name] = cur
// 	return {
// 		  ...prev,
// 		  ...obj
// 	}
// }
// const reducedData = data.reduce(dataReducer, {});
// let newData = Object.values(reducedData);

/**
 * @desc json按某个字段排序
 * @param {*} property 
 * @return {Object}
 */
function compare(property) {
	return function (a, b) {
		var value1 = a[property];
		var value2 = b[property];
		return value1 - value2;
	}
}
var objs = [{
		id: 2,
		name: 'sanmao'
	},
	{
		id: 4,
		name: 'jiangdan'
	},
	{
		id: 1,
		name: 'zhibu'
	},
	{
		id: 9,
		name: 'abc'
	}
]
console.log(objs.sort(compare('id'))); //按id字段排序

/**
* 对数组成员特性进行分组 Group 与 Group2 等价
*/
function Group(arr = [], key) {
  return key ? arr.reduce((t, v) => (!t[v[key]] && (t[v[key]] = []), t[v[key]].push(v), t), {}) : {};
}
function Group2(arr = [], key) {
	return key ? arr.reduce((t,v)=>{
		!t[v[key]] && (t[v[key]] = []);
		t[v[key]].push(v)
		return t
	},{}): {}
}
const arr = [
  { area: "GZ", name: "YZW", age: 27 },
  { area: "GZ", name: "TYJ", age: 25 },
  { area: "SZ", name: "AAA", age: 23 },
  { area: "FS", name: "BBB", age: 21 },
  { area: "SZ", name: "CCC", age: 19 }
]; // 以地区area作为分组依据
Group(arr, "area"); // { GZ: Array(2), SZ: Array(2), FS: Array(1) }
/**
 * defaultData与selectData对比，若defaultData与selectData中的key相同，则把selectData对应的key和value赋值给defaultData；
 * 若defaultData中的key，selectData不存在，则保留defaultData中的key和value
 */
const defaultData = {
	isSelect: false,
	type: "basic-user",
	userInfo: "",
	eg: 1
};
const selectData = {
	isSelect: false,
	type: "basic-user",
	userInfo: "program",
	name: 'sanmao'
}
Object.keys(defaultData).forEach(key => {
	if (selectData.hasOwnProperty(key)) {
		defaultData[key] = selectData[key];
	}
});
console.log(defaultData) // { isSelect: false, type: "basic-user", userInfo: "program" ,eg:1};
//把秒转化为 *天*小时*分钟*秒
function formatSecToStr(seconds){
    let daySec = 24 *  60 * 60;
	let hourSec=  60 * 60;
	let minuteSec=60;
    let dd = Math.floor(seconds / daySec);
    let hh = Math.floor((seconds % daySec) / hourSec);
    let mm = Math.floor((seconds % hourSec) / minuteSec);
	let ss=seconds%minuteSec;
    if(dd > 0){
      return dd + "天" + hh + "小时" + mm + "分钟"+ss+"秒";
    }else if(hh > 0){
      return hh + "小时" + mm + "分钟"+ss+"秒";
    } else if (mm > 0){
      return mm + "分钟"+ss+"秒";
    }else{
      return ss+"秒";
    }
}



// 正则
let reg1 = /^[a-zA-Z]+\s*?[a-zA-Z]+$/; // 首尾字母，字母中间允许有多个空格
let reg1 = /^[A-Za-z][A-Za-z\s]*[A-Za-z]$/
let reg2 = /^([A-Za-z]+\s?)*[A-Za-z]$/; // 首尾字母，字母中间只允许有一个空格
let reg3 = /^[A-Za-z ]*$/; // 只能输入字母和空格
let reg4 = /^[0-9]+([.][0-9]{1}){0,1}$/; // 只能输入一位小数
let reg4 = /^[1-9][0-9]*0$/; // 10的倍数
let reg5 = /(^[1-9]\d*$)/;// 正整数
let reg6 = /^(1|([1-9]\d{0,1})|100)$/; // 1-100整数

// 正则过滤违规词
var ma = "大xx".split('');
var regstr = ma.join('([^\u4e00-\u9fa5]*?)');
var str = "这是一篇文章,需要过滤掉大xx这三个词,大xx中间出汉字以外的字符 大_/_傻a1v逼和 大傻a1v逼";
var reg = new RegExp(regstr , 'g');
str.replace(reg,"<替换的词>");
// var data = [{ name: 1, price: 3 }, { name: 2, price: 4 }, { name: 10, price: 3 }, { name: 1, price: 5 }, { name: 10, price: 8 }];
//   var nameArr = [];
//   for (let i = 0, len = data.length; i < len; i++) {
//    if (nameArr.length) {
//     var flag = false;
//     for (let j = 0, lens = nameArr.length; j < lens; j++) {
//      if (data[i].name == nameArr[j].name) {
//       flag = true;
//       nameArr[j].arrobj.push(data[i]);
//       break;
//      }
//     }

//     if (flag) {
//      continue;
//     }
//     nameArr.push(data[i]);
//     nameArr.forEach(val => {
//      if (!val.arrobj) {
//       val.arrobj = [{ name: val.name, price: val.price }];
//      }
//     });
//    } else {
//     nameArr.push(data[i]);
//    }
//   }
//   console.log(nameArr)


