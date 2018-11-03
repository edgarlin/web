let regex = /abc/gm;

//self invoking function
(function ($) {
    $('self invoking function');
})(function (param) {
    $('#msg').html(param);
});


//


//
var instance = new constructor('instance');
$('#msg').html($('#msg').html() + '<BR>' + instance.varInFunc2);
$('#msg').html($('#msg').html() + '<BR>' + instance.varInFunc);


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




