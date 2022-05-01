let a = 4;
let b = 5;
let c = 3;
function solveLinEquation(x,y){
    console.log(a*x + b*y + c);
}
solveLinEquation(2,3);
function solveQuadEquation(a,b,c){
    var r1 = (-b + Math.sqrt(b*b - 4*a*c))/2*a ;
    var r2 = (-b - Math.sqrt(b*b - 4*a*c))/2*a ;
    console.log(r1 , " " , r2);
}
solveQuadEquation(1,4,4);
function printArray(x){
    console.log(x)
}
var arr = [4,5,6,7,4,5,6]
printArray(arr)
function showDateTime(){
    var today = new Date();
    var date = today.getDay() + "/" + today.month() + "/" + today.year() 
    console.log(date)
}
function swapValues(x,y){
    console.log(y , x);
}
swapValues(3,4);
// function capitalizeArray(...x){
//     y = [];
//     var i =0 ;
//     for( ; i < x.size() ; i++ ){
//         y.push(x[i].toUpperCase());
//     }
//     for( ; i < x.size() ; i++ ){
//         console.log(y[i]);
//     }

// }
// x = ["ayush","tripathi"];
// capitalizeArray(x);
function reverseArray(){
    for(i = 4 ; i >= 0 ; i--){
        console.log(x[i]);
    }
}
x = [1,2,3,4,5];
reverseArray.apply(null, x)