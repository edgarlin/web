var constructor1 = function () {
    this.var1 = 'A';
    this.var2 = 'B';
    this.fun1 = function () { alert('C'); }
    //return this;
};

var constructor2 = function () {
    var varA = 'A';
    var funC = function () {
        alert('C')
    };
    return {
        var1: varA,
        var2: 'B',
        fun1: funC
    }
};

var constructor3 = function (param) {
    this.varInFunc2 = param;
    var varInFunc = param;
    var funcFunc = function (p) {
        alert(this);
    }
    //return this;
    return {
        varInFunc2: "A",
        varInFunc: "B"
    };
}
