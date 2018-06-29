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
console.log(Object.prototype.toString.call(function() {})) //[object Function]

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
	if(arr1 === arr2) return true;
	if(arr1.length != arr2.length) return false;
	for(var i = 0; i < arr1.length; ++i) {
		if(arr1[i] !== arr2[i]) return false;
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
	if(!obj || typeof obj !== 'object' || Array.isArray(obj))
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

//json按某个字段排序
var objs = [
	{id:2,name:'sanmao'},
	{id:4,name:'jiangdan'},
	{id:1,name:'zhibu'},
	{id:9,name:'abc'}
]
    	
function compare(property){
    return function(a,b){
        var value1 = a[property];
        var value2 = b[property];
        return value1 - value2;
    }
}
console.log(objs.sort(compare('id'))); //按id字段排序

