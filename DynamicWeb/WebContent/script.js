//self invoking function
(function ($) {
    $('self invoking function');
})(function (param) {
    console.log(param);
});


//DOM
var constructor = function (param) {
    this.varInFunc2 = param;
    var varInFunc = param;
    var funcFunc = function (p) {
        console.log(this);
    }
    //return this;
    return {
    };
}
var instance = new constructor('instance');
console.log(typeof constructor);
console.log(typeof instance);
var obj = new function (params) {
    var varFunc = 'v1';
    return {
        varObj: 'v2',
        func1: function (params) {
            console.log(varFunc);
            console.log(this.varObj);
            console.log(this);
        }
    }
}
$(obj.func1);

// vue
$(function () {
    let regex = /abc/gm;
    var vueOptions = {
        el: '#app',
        data: {
            key1: 'value1',
        },
        methods: {
            func: function (params) {
                console.log(params);
            },
        },
    };
    var viewModler = new Vue(vueOptions);
    console.log(viewModler.$data.key1);
    viewModler.func('using vue');
});




