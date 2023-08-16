// There are 3 basic types in TypeScript
var var_b = false;
//var_b = "";
var var_n = 42;
var var_s = 'Ganesh';
var var_d;
var var_na = [1, 2, 3, 4];
// When it's impossible to know, there is the "Any" type
var notSure = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean
var var_i;
var_i = 'Demo';
var_i = 1234;
var_i = false;
// For collections, there are typed arrays and generic arrays
var list = [1, 2, 3];
// Alternatively, using the generic array type
var list1 = [1, 2, 3];
var var_wota = 'String value';
var rst = var_wota.substring(3, 2);
var var_wta;
var_wta = 'String value';
var rst2 = var_wta.substring(3, 2);
// or 
var rst3 = var_wta.substring(3, 2);
// Use const keyword for constants
var numLivesForCat = 9;
//numLivesForCat = 1; // Error
// For enumerations:
var Color;
(function (Color) {
    Color[Color["Red"] = 10] = "Red";
    Color[Color["Green"] = 11] = "Green";
    Color[Color["Blue"] = 12] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Green;
console.log(c);
// Lastly, "void" is used in the special case of a function returning nothing
function bigHorribleAlert() {
    console.log("have nothing to return !!");
    //alert("browser alert")
    return;
}
bigHorribleAlert();
//# sourceMappingURL=e3_Types.js.map