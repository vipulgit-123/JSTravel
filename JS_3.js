console.log(
    "Javascript tutorial 3: Var, let and const"
);
 var a = 45;
 let b =  "Harry"
 var c  = null;
 var d = undefined

 console.log(a);
 

 {
    let b = 'this'  //bloc scopped variables
    console.log(b);
 }
 console.log(b);
 
 {
    var a = 'you'
    console.log(a);  
 }

console.log(a);
