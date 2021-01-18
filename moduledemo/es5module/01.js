//调用01.js里面的方法

const sum = function(a,b){
    return parseInt(a)+parseInt(b)
}

const substract = function(a,b){
    return parseInt(a) - parseInt(b)
}

//设置哪些方法可以被其他js调用
module.exports = {
    sum,
    substract
}