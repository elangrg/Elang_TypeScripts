// Functions are first class citizens, support the lambda "fat arrow" syntax and
// use type inference
// The following are equivalent, the same signature will be inferred by the
// compiler, and same JavaScript will be emitted
var f1 = function (i) { return i * i; };
// Return type inferred
var f2 = function (i) { return i * i; };
// "Fat arrow" syntax
var f3 = function (i) { return i * i; };
// "Fat arrow" syntax with return type inferred
var f4 = function (i) { return i * i; };
// "Fat arrow" syntax with return type inferred, braceless means no return
// keyword needed
var f5 = function (i) { return i * i; };
var f6 = function (i) { return i * i; };
var f7 = function (i) { return i * i; };
//# sourceMappingURL=e4_Func.js.map