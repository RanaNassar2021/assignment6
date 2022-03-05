"use strict";
alert("Welcome to my site");
var name = prompt("what's your name?");
alert("welcome" +" "+name);
function math(){
    var maths = prompt("Enter math expression");
    var mathsresult =eval(maths);

    alert("you entered"+" "+maths+" "+"and the result is"+" "+mathsresult);
}

function Dateandtime(){
    var today = new Date();
    var date = today.getFullYear()+'/'+(today.getMonth()+1)+'/'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date+' '+time;
    alert(dateTime);
}

function grade(){
    var grades = [60,100,10,15,85];
    grades.sort(function(a,b){return b-a});
    alert (grades);
}

function names(){
    var Names = [] ;
    for(let i =0; i<5; i++){
    var nname = prompt("Enter student name:");
    Names.push(nname);  
}
Names.pop();
   alert(Names);
}

function random(){
    var randomtip = [' Don’t forget var keyword when assigning a variable’s value for the first time.',
'use === instead of ==',' undefined, null, 0, false, NaN, (empty string) are all falsy.','Use Semicolons for line termination',
' Be careful when using typeof, instanceof and constructor.',' Transform the arguments object into an array',
' Truncate an array using length',' Truncate an array using length','Don’t use delete to remove an item from array',
' Use the map() function method to loop through an array’s items'] ;
 var randomtips = randomtip[Math.floor(Math.random() * randomtip.length)];
 alert (randomtips);
}
