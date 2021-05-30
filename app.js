
// great first java script file to yhis web 
document.write("<p>Noortan</p>");
var userName = "welcom to my webpage "
alert(userName) ;
console.log( userName);
if( userName ==="welcom to my webpage " ){ console.log("hi")}

 else{console.log("welcome")}

var userName = prompt( "what is your name ?") ;
alert( "welcome to our webpage"+userName);

var gender1 = "BOY";
var gender2 = "Girl";
var gender = prompt("what is your gender?"); 

if(gender=== gender1){document.write("welcome to kids Accessories for boys  ")}
else if(gender=== gender2){document.write("welcome to kids Accessories girls ")}
else{ document.write( "please enter genger as BOY or Girl just ")}



var capital = prompt( "enter the capital of jordan please") ;
while(capital != "Amaan"){
capital = prompt(" enter the capital of jordan agian please.")
}

var count = prompt("how many imags of kids Accessories you want to see ? ") ;



var i;
for (i = 0; i <= count; i++) {
document.write("<img src='https://i.pinimg.com/originals/15/fe/84/15fe84052473ca1628f8197aab1f34e8.jpg' alt='Accessories'>" ) ;
  
}