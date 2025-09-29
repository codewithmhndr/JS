let mark = prompt("Enter Your Marks") ;
if (mark>=80){
    console.log("Your Grade Is A");
} else if(mark<80 && mark>=70){
    console.log("Your Grade Is B");
}else if(mark<70 && mark>=60){
    console.log("Your Grade Is C");
}else if(mark<60 && mark>=50){
    console.log("Your Grade Is D");
}else{
    console.log("Your Grade Is F");
}