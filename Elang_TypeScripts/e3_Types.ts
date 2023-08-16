

// There are 3 basic types in TypeScript
let var_b: boolean = false;
//var_b = "";
let var_n: number = 42;
let var_s: string = 'Ganesh';


let var_d: any;
let var_na:number[]= [1,2,3,4];


// When it's impossible to know, there is the "Any" type
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean



let var_i;

var_i = 'Demo';
var_i = 1234;
var_i = false;



// For collections, there are typed arrays and generic arrays
let list: number[] = [1, 2, 3];

// Alternatively, using the generic array type
let list1: Array<number> = [1, 2, 3];



let var_wota='String value'; 
 let rst=  var_wota.substring(3,2)

 let var_wta;

var_wta = 'String value';



let rst2=  (<string>  var_wta).substring(3,2)
// or 
let rst3=  (var_wta as string).substring(3,2)


// Use const keyword for constants
const numLivesForCat = 9;





//numLivesForCat = 1; // Error

// For enumerations:
enum Color { Red=10, Green, Blue };
let c: Color = Color.Green;
console.log(c);


// Lastly, "void" is used in the special case of a function returning nothing
function bigHorribleAlert(): void {
    console.log("have nothing to return !!");
    //alert("browser alert")
    return ;

}

bigHorribleAlert();