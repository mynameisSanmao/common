//https://juejin.im/post/5a091afe6fb9a044ff30f402
/*函数内部arguments转换为数组*/
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
