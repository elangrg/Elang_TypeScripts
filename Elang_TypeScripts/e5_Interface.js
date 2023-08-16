// Object that implements the "Person" interface
// Can be treated as a Person since it has the name and move properties
var p = { name: "Ganesh", move: function () { } };
// Objects that have the optional property:
var validPerson = { name: "Ganesh", age: 4, move: function () { } };
// Only the parameters' types are important, names are not important.
var mySearch;
mySearch = function (src, sub) {
    return src.search(sub) != -1;
};
//# sourceMappingURL=e5_Interface.js.map