function areaOfCircle(r){
    console.log(Math.PI * r * r);
}
areaOfCircle(4);
function circumfrence(r){
    console.log(2*Math.PI*r);
}
circumfrence(2);
function density(mass,volume){
    console.log(mass/volume , "kg/m3");
}
density(2,3);
function speed(distance, time){
    console.log(distance/time);
}
speed(3,4);
function celsiusToFahrenheit(oC){
    console.log(oC*(9/5)+32);
}
celsiusToFahrenheit(100);
function findingTheMaximumValue(a,b,c){
    return Math.max(a,b,c);
}
console.log(findingTheMaximumValue(1,2,3));