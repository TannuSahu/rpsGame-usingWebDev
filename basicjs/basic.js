// //use "let" ---- i.e --- variable value can be Changed
// //use "const" ---- i.e --- variable value can't be Changed

// const skyi = {
//     fullname : "skyii",
//     age : 20,
//     cgpa : 8.38,//skyi['cgpa'] 
//     isPass : true,
// };

// //but if --const-- object has any key value , then it can be changed

// skyi["fullname"] =  "skyiiiiiiii";
// console.log("full name is : " , skyi.fullname); // typeof skyi.fullname
// console.log("skyi.age is : " , skyi.age); // or

// console.log("skyi[age] is : " , skyi["age"]);
// console.log( "typeof skyi is : " , typeof skyi);
// console.log("typeof skyi.fullname is : " , typeof skyi.fullname);


// //<<<<<------Arithmetic operator-------->>>>>>>>>

// let a = 5 , b = 4;
// console.log("a = " , a ,", b = " , b );
// console.log("a + b = " , a + b );
// console.log("a % b = " , a % b );
// console.log("a ** b = " , a ** b );
// console.log("a++ = " , a++ , a);
// console.log("b-- = " , b-- , b );


// //<<<<<<<-----assignment opr------>>>>>>.

// console.log("-----a = " , a ,", b = " , b );
// a += 1;
// console.log("a += -- " , a );
// a **= 2;
// console.log("a **= 2 -- " , a  );

// //<<<<<<-------comparison opr-------------->>>>>
// console.log("a > b " , a>b);

// //------------logical opr-----------------
// console.log( "a > b && a==3 " , a > b  &&  a==3);


// //<<<<<<,------if statement-------->>>>>>>>>

// if(a>b){
//     a == b;
//     console.log("condition is true and value of a is ",a);
// }

// //----------ternary opr--------------------
// let result = a > 67 ? "skyii is eligible" : "skyi is not eligible";
// console.log(result);


// //=============  ques 1  ============
// let num = prompt("Enter your skyii-no. : ");
// if(num % 5 === 0){
//     console.log("num is multiple of 5 ");
// }
// else{
//    console.log("num is not a multiple of 5 ");
// }
// //=================  ques 2  ===========
// let score =  prompt("Enter your total marks btw(0-100)");
// if(score >= 90 && score <=100){
//     console.log("skyii got Grade is A");
// }else if(score >= 70 && score <=89){
//     console.log("skyii got Grade is B");
// }else if(score >=60  && score <=69){
//     console.log("skyii got Grade is C");
// }else if(score >= 50 && score <=59){
//     console.log("skyii got Grade is D");
// }else if(score >= 0 && score <=49){
//     console.log("skyii got Grade is F");
// }



// //<<<<<<<<<<-----loops---->>>>>>>>>>>>

// for(let i=0;i<2;i++){
//     console.log("hyyyii skyiiii");
// }
// let i=0;
// while(i<3){
//     console.log("Hellow skyii");
//     i++;
// }

// do {
//     console.log("byy Skyiii");
//     i++;
// }while(i<5);


// //--------------for in loop------------------

// let sky = "Sapphire";
// for(let i of sky){
//     console.log("i = " , i);
// }
// let skyii = {
//     fullname : "skyii",
//     age : 20,
//     cgpa : 8.38,//skyi['cgpa'] 
//     isPass : true,
// };
// for(let key in skyii){
//     console.log("key = ", key , " ,  value = " , skyii[key]);
// }


// //================  ques 1  ==============
// for(let i =0 ; i<=50;i++){
//     if(i%2 == 0){
//         console.log(i);
//     }
// }
// //============ ques 2  ===============
// let gamenum = 311;
// let usernum = prompt("Guess th game number : ");
// while(usernum != gamenum){
//     usernum = prompt("You entered wrong number . Guess again : ");
// }
// console.log("congratulations,you entered the right number");



// //<<<<<<<<<-----STRING----->>>>>>>>>>

// let str = "Thin&Skyii";
// console.log("value of str[2] is : " , str[2]);

// //----template literals i.e symbol(``)-----
// let obj = {
//     item : "pen",
//     price : 10,
// };

//    //=======WITHOUT template literal----complicated text
//    console.log("The cost of ", obj.item , "is" , obj.price , "reupees");

//    //=============WITH use of template literals------simple text
//    let output = `The cost of ${obj.item} is ${obj.price} rupees`;
//    console.log(output);//firstly compiler calculate the value inside "${}" and then print it


// //------------string methods----------------

//     str = str.toLowerCase();
// console.log("toLowercase : " , str);

//     str = str.toUpperCase();
// console.log("toUppercase : " , str);

// let strr = "thin  &        skyii ii ";
// console.log("trim--- " , strr.trim());//read white spaces

// console.log("slice--- " ,str.slice(0,2));

// console.log("concat--- " ,str.concat(strr));

// const orignlstr = "skyii & Thin";
// const newstr = orignlstr.replace("skyii" ,"skyiiiiii");
// console.log("replace--- " ,newstr);

// console.log("charAt--- " ,newstr.charAt(3));


// //========== ques ===============
// let username = prompt("Enter your full name");
// console.log(`@${username}${username.length}`);



// //<<<<<<<<----- ARRAY ----->>>>>>>>>>>>

// let arr = [3,11,8,4,19,20];
// console.log("arr[5] : ",arr[5]);

// //========== ques 1  ================
// let arr1 = [85,97,44,37,76,60];
// let sum =0;
// for(let i=0;i<arr1.length;i++){
//     sum = sum + arr1[i];
// }
// let avg = sum/arr1.length;
// console.log("The avg is : ",avg);

// //============== ques 2 ================
// let items = [250,645,300,900,50];
// for(let i=0 ; i<items.length ; i++){
//     console.log("value before offer" , items[i]);
//     let offer = items[i]/10;
//     items[i] -= offer;
//     console.log("value after offer-----" , items[i]);
// }



// //<<<<<<----OPERATIONS in arrays---->>>>>>>

// arr1.push(67);
// console.log("push(67)--" , arr1);

// arr1.pop();
// console.log("pop()--",arr1);

// console.log("toString()--",arr1.toString());

// let str1 = ["Thin" ,"minute" ,"body"];
// let str2 = ["sky" , "skyi" , "skyii"];
// str1 = str1.concat(str2);
// console.log("after concatenation : " ,str1);

// let str3 = ["Thin" ,"minute" ,"body"];
// str3.unshift("skyiii");
// console.log(str3);

// console.log(str3.shift());
// console.log(str3);

// let str4 =[1,2,3,4,5,6,7];
// str4.splice(2,2,211,3);
// console.log(str4);

// //-----add element
// str4.splice(2,0,101);
// console.log(str4);
// //--------delete element
// str4.splice(3,1);
// console.log(str4);
// //---------replace element
// str4.splice(3,1,101);
// console.log(str4);


//=========== QUES  =============

// let compny = ["Blommberg" , "Microsoft" , "Uber" , "Google" , "IBM" , "Netflix"];
// console.log(compny);
// compny.shift();
// console.log(compny);
// compny.splice(1,1,"Ola");
// console.log(compny);
// compny.push("Amazon");
// console.log(compny);



//<<<<<<<<<----function----------->>>>>>>>>>

// let func = (a,b) => {
//     console.log(a*b);
// }
// function mul(a,b){
//     return a*b;
// }

// //--------- QUES ---------

// function ques1 (str5){
//     let count =0;
//     for(let i in str5){
//        if(str5[i] == 'a' || str5[i] == 'e' || str5[i] == 'i' || str5[i] == 'o' || str5[i] == 'u'){
//         count++;
//        }
//        i++;
//     }
//     return count;     
// }
// const ques2  = (str5) => {
//     let count =0;
//     for(let i in str5){
//        if(str5[i] == 'a' || str5[i] == 'e' || str5[i] == 'i' || str5[i] == 'o' || str5[i] == 'u'){
//         count++;
//        }
//        i++;
//     }
//     return count;     
// }

// //-----for each loop-------------
// //is used when  for each element , we have to follow the condition in array
// let arr = ["Punjab" , "Aurangabad" , "Bihar"];
// arr.forEach((val) => {
//     console.log(val);
// });

// let num1 = [2,3,4,5];
// // num1.forEach((val1) => {
// //      console.log(val1**2);
// // }); // ORRR
// let calsq = (num1) => {
//     console.log(num1*num1);
// }
// num1.forEach(calsq);

// //----map mathod-----
// //is used when we have to create a new array using the previous array and previous array remins the same
// let newarr = num1.map((val) => {
//     return val*2;
// });
// console.log(newarr);

// //------filter method------
// //is used when we have to filter the values that means in the given array only filtered(condition satisfield)  values is the part of new array
// let newarr1 = num1.filter((val) => {
//     return val % 2 == 0;
// });
// console.log(newarr1);

// //----reduce method ---
// //is used when we have to reduce an array to a single element by applying some oprtions
// const res1 = num1.reduce((prev,curr) => {
//     return prev + curr;
// });
// console.log(res1);

//-----------QUES1 -------------
// let quesn = [88,212,222,97,86,98];
// let newarr2 = quesn.filter((val) => {
//     return val >= 90;
// });
// console.log(newarr2);

// //--------QUES2 -------------
// let inpat = prompt("Enter your array size");
// let arr =[];
// for(let  i=1;i<=inpat;i++){
//     arr[i-1] = i;
// }
// console.log(arr);
// const sum = arr.reduce((prev,curr) => {
//     return prev + curr ;
// });
// console.log(sum);
// const prod = arr.reduce((prev,curr) => {
//     return prev * curr ;
// });
// console.log(prod);
// alert("hello");
// console.log(document.body);//print elememnt as object
// console.dir(document.body);//print the properties and mehtods of obj



//<<<<<<<<<<<<-------DOM Manipulation--------->>>>>

// let myid = document.getElementById("youtube");
// console.log(myid);
// let myclass = document.getElementsByClassName("apps");
// console.log(myclass);
// let mytag = document.getElementsByTagName("div");
// console.log(mytag);


// //------QUERY SELECTOR---------
// let firstele = document.querySelector("div");//to print starting element
// console.log(firstele);
// let allele = document.querySelectorAll("div");//to print all(nodeList)
// console.log(allele);


// console.log(document.body.firstChild);//this prints text node
// //dom has three txs such as ---(text node),(comment node),(element node)
// let uli = document.querySelector("ul");
// console.log(uli);//uli.innerText = "heyy this is me" --ye line likh ke pora content ko change kar sakte he

// //ques
// let que1 = document.querySelector("h2");
// que1.innerText = que1.innerText + " from apnaCollege students";
// console.log(que1);
// //ques
// let que2 = document.querySelectorAll(".box");
// console.log(que2[1]);

// // for(val of que2){
// //     console.log(val);
// // }

// let idx = 1;
// for(val of que2){
//     val.innerText = `APP  ${idx}`;
//     idx++;
// }

// let apps = document.querySelector("h2");
// let id = apps.getAttribute("id");
// console.log(id);

// //~~~~IF we have to add any style to any class id or tag then we can apply like this
// apps.style.backgroundColor = "green";

// let newbtn = document.createElement("button");
// newbtn.innerText = "click me";
// // apps.prepend(newbtn);
// // apps.append(newbtn);
// // apps.before(newbtn);
// apps.after(newbtn);

//--------QUES 1 -------------

// let btn = document.createElement("button");
// btn.innerText = "click me";
// btn.style.backgroundColor = "red";
// btn.style.color = "white";
// document.querySelector("body").prepend(btn);
// console.log(btn);

//--------ques2---------------
// let para = document.querySelector("p");
//console.log(para);


// <<<<<<<----------EVENTS IN js------>>>>>>>>>>>

// let btn1 = document.querySelector("#btn1");
// btn1.onclick = () => { //btn click karne pe ye print hoga console me
//     console.log("HANDLER");
//     let a =25;
//     a++;
//     console.log(a);
// };
// btn1.onclick = (evt) => {
//     console.log(evt);
//     console.log(evt.type);
//      console.log(evt.target);
// };


// let btn2 = document.querySelector(".btn2");
// btn2.onmouseover = () =>{
//     console.log("you are inside div");
// };


//by using --eventlistner--, hum same event pe multiple kaam kara sakte he
// btn2.addEventListener("click" , () =>{
//     console.log("button was clicked -- handler 1");
// });
// btn2.addEventListener("click" , () =>{
//     console.log("button was clicked -- handler 2");
// });

 let modbtn = document.querySelector("#mode");
 let body = document.querySelector("body");
 let currmode = "light";
 
 modbtn.addEventListener("click" , () => {
    if(currmode === "light"){
        currmode = "dark";
        body.classList.add("dark");
        body.classList.remove("light");
        //document.querySelector("body").style.backgroundColor = "black";
    }else{
        currmode = "light";
        body.classList.add("light");
        body.classList.remove("dark");

    }
    console.log(currmode);
 });

//  body.onmouseover = () => {//oral homework
//     console.log("yes!!, you are with skyy.")
//  }



// //``````````````CLASS and OBJECT``````````````````

// let DATA = "secret information";
// class user {
//     constructor(name,email){
//         this.name =name;
//         this.email =email;
//     }
//     viewData(){
//         console.log("data = " , DATA);
//     }
// }
// let student1 = new user("std1" , "std1@gmail.com");//student1.viewData();
// let student2 = new user("std2" , "std2@gamil.com");

// class admin extends user{  //inherit the 'user' property
//     constructor(name,email){
//       //console.log("data = ",DATA);
//       super(name,email);//call the parent constructor
//     }
//     editData(){
//      DATA =  "updation of the old value";
//     }
// }

// let admin1 = new admin("admin" , "admin@mail.com");
// //remember try and catch,this find out if your code have any error they print it
// try{
//     console.log("5*a = " , 5*a );
// }catch(err){
//     console.log(err);//prints the error
// }
// //synch and async in js
// console.log("one");
// console.log("two");

// //as this funtion execute after 2sec ,but not the entire code waiting for 2 sec and it execute itself
// setTimeout (() => {
//     console.log("hillow");
// } , 2000);//  [ 2sec = 2000 milisec]

// console.log("three");


//<<<<<<<<<````````````CALLBACK function````````>>>>>>.

// function getData(dataId,getNextData) {
//    setTimeout(() => {
//     console.log("data = ",dataId );
//     if(getNextData){ //this meant if the next data iis present only then execute getnextdata()
//          getNextData();
//     }
//    } , 2000);
// }
//getData(1,getData(2));//if ese kiya to error dega bcz ise define nhi kar sakte


// <<<<<< 'callback hell' ---- (again and again use callback)
// getData(1, () => {
//     getData(2 , () => {
//         getData(3);
//     });//can use this syntax
// });


//<<<<````````````PROMISE```````````>>>>
// let promise1 = new Promise((resolve , reject) => {
//     console.log("I am a promise - pending");
// });
// let promise2 = new Promise((resolve , reject) => {
//     //console.log("I am a promise");
//     resolve("get success");
// });
// let promise3 = new Promise((resolve , reject) => {
//     //console.log("I am a promise");
//     reject("some error occured");
// });


// const getPromise = () => {
//     return new Promise((resolve,reject) => {
//         console.log("I am a promise");
//         //resolve ("success");
//         reject("error");
//     });
// };

// let promise = getPromise();
// promise.then((res) => { //---if 'promise()' is done ,only then  'then' works
//     console.log("promise fullfilled",res);
// });
// promise.catch((err) => {//if rejected -then this will happen
//      console.log("rejected" , err);
// });

//<<<<<<<<------------PROMISE CHAINING - in general--------->>>>>>
// function asyncFunc1() {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             console.log("Data1");
//             resolve("success");
//         } , 4000);
//     });
// }
// function asyncFunc2() {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             console.log("Data2");
//             reject("error");
//         } , 4000);
//     });
// }
// console.log("fetching data1....");
// let p1 = asyncFunc1();
//     p1.then((res) =>{
//          console.log(res);
//          console.log("fetching data1....");
//          let p2 = asyncFunc2();
//          p2.then((res) => {
//             console.log(res);
//          })
//     });

//<<<<<<<<------------PROMISE CHAINING - actual format--------->>>>>>

function getdata(dataId){
    return new Promise((resolve , reject) => {
        setTimeout(() => {
            console.log("data" ,dataId);
            resolve("success");
        } , 4000);
    });
}
//promise chain
getdata(1).then((res) => {
    return getdata(2);
}).then((res) => {
    return getdata(3);
}).then((res) => {
    console.log(res);
});

   