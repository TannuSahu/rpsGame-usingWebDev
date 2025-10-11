// console.log("To print msg");
// name = "Sky singh";
// console.log(name);
// age = 20;
// price = 100;
// console.log(age);


// const student = {name : "skyy" ,
//                                age : 20 , branch : "cse" ,
//                                                          rollno : 3 } ;

// console.log(student.name); //pattern 1 to print that is dot(.)
// console.log(student["age"]);  //pattern 2 to print that is "[ ]"


// //for any updation
// student["name"] = "aaak";
// student.age = student.age + 1;

// console.log(student.name); 
// console.log(student["age"]);

//ABOUT PROMPT AND WHILE LOOP
//let gamenum = 25;
// let usernum = prompt("guess the gamenumber : ");

// while(usernum != gamenum){
//     usernum = prompt("guess the gamenumber again !!");
// }
// console.log("congratulation.. you guess the correct gamenumber");


//USE OF TEMPLATE LITERALS using the sign (`code to print`)
// let obj = {
//     item : "pen" ,
//     price : 100,
// }
// //NORMALLY
// console.log("The price of" ,obj.item,"is" , obj.price , "rupees");
// //but USING LITERALS
// console.log(`The price of ${obj.item} is ${obj.price} rupees`);


// QUES--print a string "@username-stringlength"
// let usernam = prompt("username");
// console.log(`@${usernam}${usernam.length}`);//OR we can write
// console.log("@" + usernam + usernam.length);

//  QUES--create an array and do following opr
let cmpanies = ["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
cmpanies.shift();
cmpanies.splice(1 , 1 , "Ola");
cmpanies.push("Amazon");