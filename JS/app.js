var num = +prompt("write your percentage her");
var grade; 
if(num >=80 && num <= 100){
    grade ="A+"
}
else if (num >=70){
    grade="A"
}
else if (num >=60){
    grade="B"
}
else if (num >=50){
    grade="C"
}

console.log(grade);