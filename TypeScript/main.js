// tsc --module commonjs --target ES5 *.ts;node main.js
var isDone = false;
var decimal = 6;
var hex = 0xf00d;
var binary = 10;
var octal = 484;
var color = "blue";
var list = [1, 2, 3];
var x = ["hello", 10];
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 4] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
var notSure = 4;
function warnUser() {
    console.log("This is my warning message");
}
//let u: undefined = undefined;
//let n: null = null;
