"use strict";
var a = true;
var b = ['ahmed', 26];
var g;
(function (g) {
    g[g["t1"] = 0] = "t1";
    g[g["t2"] = 1] = "t2";
})(g || (g = {}));
function hello() {
    alert("hello ahmed");
}
function hello2() {
    throw Error('error');
}
var ch = "welcome";
var strLength1 = ch.length;
