
// great first java script file to yhis web 
document.write("<p>Noortan</p>");
var userName = "welcom to my webpage "
alert(userName) ;
console.log( userName);
if( userName ==="welcom to my webpage " ){ console.log("hi")}

 else{console.log("welcome")}

var userName = prompt( "what is your name ?") ;
alert( "welcome to our webpage"+userName);

var gender1 = "Male";
var gender2 = "Femail";
var gender = prompt("what is your gender?"); 

if(gender=== gender1){document.write("welcome to kids Accessories for boys  ")}
else if(gender=== gender2){document.write("welcome to kids Accessories girls ")}
else{ document.write( "please enter genger as Male or Femail  just ")}



var capital = prompt( "enter the capital of jordan please") ;
while(capital != "Amaan"){
capital = prompt(" enter the capital of jordan agian please.")
}

var count = prompt("how many imags of kids Accessories you want to see ? ") ;



var i;
for (i = 0; i < count; i++) {
document.write("<img src='https://i.pinimg.com/originals/15/fe/84/15fe84052473ca1628f8197aab1f34e8.jpg' alt='Accessories'>" ) ;
  
}

//var count = prompt("how many imags of kids Accessories you want to see ? ") ;

//function images ( m1 ) { 

//for ( let i = 0; i < count; i++) {
//document.write("<img src='https://thumbs.dreamstime.com/z/kids-clothes-accessories-set-11656648.jpg' alt='Accessories'>" ) ;
  

//};
 //\|images(count) ;





let name1 = prompt( "enter your  kid's first name :");
let name2 = prompt(" enter your kid's last name :" );

function fullName(n1,n2){
document.write("welcome to our page "+n1+n2);
}

fullName(name1,name2);