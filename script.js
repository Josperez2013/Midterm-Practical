var wrapper = document.body.querySelector(".wrapper");
var wrapper2 = document.body.querySelector(".wrapper2");
var signIn=false;
var isNumber=false;
logName="Successfully logged in as ";
logNumber="My favorite number is ";

while(signIn===false){
  var name = prompt("What is your name?");
  if(name==="Luke"){
    signIn=true;
  }
}

while(isNumber===false){
  var number = Number(prompt("What is your favorite number?"));
  if(!isNaN(number)){
    isNumber=true;
  }
}

wrapper.innerHTML= "Successfully logged in as " + name;
wrapper2.innerHTML= "My favorite number is " + number;