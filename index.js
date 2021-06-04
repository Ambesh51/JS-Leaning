//Some return true and false

// let movies = ['m1','m2','m3','m4','m5'];

// let k1 = 'm1';
// let k2 = 'm3';
// let k3 = 'm5';
// const temp = movies.some((item, index)=>{
//     // console.log(index, item);
//     return item.indexOf(k1) > -1; 
// })
// console.log(temp);

// let k1 = movies.indexOf('m');
// console.log(k1);


//every 
//every item beloangs

// let movies = ['m1','m2','m3','m4','m5'];

// let k1 = 'm1';
// let k2 = 'm3';
// let k3 = 'm5';
// const temp = movies.every((item, index)=>{
//     // console.log(index, item);
//     return item.indexOf(k1) > -1; 
// })
// console.log(temp);

//reduce
//
// [0, 1, 2, 3, 4].reduce(
// (accumulator, currentValue, currentIndex, array) => 
// accumulator + currentValue
// )


// let movies = [1,2,3,4,5,6];

// let k1 = 'm1';
// let k2 = 'm3';
// let k3 = 'm5';
// const temp = movies.reduce((item, number)=>{
//     // console.log(index, item);
//     return  item + number;
// })
// console.log(temp);    

//*************************flat
// array inside array use flat() -> be use like its normal array
// const arr2 = [1 ,2 ,3 , 4 , [3,4]]
// console.log(arr2.flat());
// var temp = arr2.flat()
// console.log('temp ', temp)
// const arr1 = [1, 2, [3, 4]]
// console.log(arr1.flat())


// const array =[1,2,3,4,5,6,-1,-2,-3,9];

// function prime(num){
//     for(let i=2; i<num ; i++){
//         if(num%i==0){
//             return false
//         }
//     }
//     return num > 1
//     console.log(num)
// }
// console.log(array.filter(prime))

// const array = [1, 2, 3, 4, 5]
// array.forEach((item) => console.log(item))

// function isPrime(num) {
//     for (let i = 2; num > i; i++) {
//       if (num % i == 0) {
//         return false
//       }
//     }
//     return num > 1
//}

// *****************  //findIndex

//   var arr1=[
//       {
//           name:"ashu",
//           rollno:1,
//           weekend:["sun","mon","tues"]
//       },
//       {
//         name:"ashu2",
//         rollno:2,
//         weekend:["mon"]
//       }
//   ]
// var arr = [4, 2, 8, 9, 12];
// const temp = arr.findIndex((isPrime)=>{
//     return isPrime > 10;
// })
// console.log(arr[temp]);
// console.log(arr1[0]["weekend"][0]);

//  var t=  arr1.filter((item=>{
//     let temp = item["weekend"].indexOf("sun");
//     // console.log(temp);
//     if(temp > -1){

//         console.log(item["weekend"].indexOf("sun"))

//         return item

//     }


//   }))

//   console.log(t[0]["weekend"]);

//***********find 

//find the value direct by the key of value
// const inventory = [
//   {name: 'apples', quantity: 2,arr:[1,2,3,4]},
//   {name: 'bananas', quantity: 0},
//   {name: 'cherries', quantity: 5}
// ]

// const result = inventory.find( ({ name }) => name === 'cherries' )

// console.log(result["quantity"])



//*************8*sort

// const numbers = [4, 2, 5, 1, 3]
// numbers.sort((a, b) => a - b)
// console.log(numbers)


//*******************fill

// fill the same value in each position
// var arr = [1,2,3,4,5];
// const temp = arr.fill(4);
// console.log(arr);
// console.log(temp)
// console.log([1,2,3,4,5].indexOf(0))

//implicit binding

// function batch(){
//   console.log(this.name);
// }

// var name= 'ashu'


// var obj = {
//   name:"ambesh",
//   address:"main street",
//   batch:batch
// }

// batch();// return only global

// obj.batch();// return inside on obj only

//Exapmle 2:- 


// function batch(){
//     console.log(this.name);
//   }

// var obj = {
//   name:"ambesh",
//   address:"main",
//   batch:batch
// }

// var obj1 = {
//   name:"ashu",
//   address:"street",
//   batch:obj.batch
// }

// var batch1 = obj.batch
// var name= "kk";

// // obj1.batch()
// batch1();


//explicit binding

// function batch(){
//   console.log(this.length);
//   let k = this;
//   console.log(k[0]);

//   for(var i=0; i< k.length; i++){
//     console.log(k[i].name)
//   }

// }

// var name="ninja";

// var obj = {
//     name:"ashu1",
//     address:"street1",
//     batch:batch
//   }

//    var obj2 = {
//       name:"ashu",
//       address:"street",
//       batch:obj.batch
//     }

// // console.log( obj["name"])

//   //  batch.call(obj2); // it is pass a object
//   //  batch.apply([obj,obj2])
//   batch(obj2, obj)



//bind function

//   function binding(){
//     console.log(this)
//   }

//   var temp = {
//     name:"ashu",
//     address:"meer klhalil"
//   }

//   var binded = binding.bind(temp);

// binded()


// bind , call, apply  done


//clouser
//we add some value with some existing value

// function add(x) {
//   return function(y) {
//     return x + y;
//   };
// }

// var addFive = add(5);
// console.log(addFive(10));  // 15
// var addTen = add(10);


// console.log(addTen(10)); // 20

// var arr = [1,2,3,4,5,5];
// var fk  = arr.keys()

// for (var i of fk){
//   console.log(i)
// }

//factory functions
// const userName = 'echo';
// const avatar = 'echo.png';const user = {
//   userName,
//   avatar,  
// setUserName (userName) {
//     this.userName = userName;
//     retu  rn this;
//   }
// };console.log(user.setUserName('Foo').userName); // "Foo"

// var obj = {"first_name" : "Sammy", "last_name" : "Shark", "location" : "Ocean"}

// var s = JSON.stringify(obj)
// console.log(s);


// js variable --                done
// scope ---                     done
// hosting & temporal dead zone  done
// bind, call , apply            done
// anonumous, iife, arrow        done
// find, some, every, findIndex  done
// flat                          done
// data type --                  done
// json object --                done
// objects date function-        done
// lexical scoping & block scope done
// js reg expression- 
// js strict mode-    
// js class and object
// clouser --                     done
// ajax  

// callback
// Promise
// async/await
// ES6 underscorejs


//parse 
// var obj = '{  "name":"ambesh"}';
// const json = '{"result":true, "count":42}';

// console.log(JSON.parse(obj))

//stringify
// var obj = '{"name":"ambesh"}';
// var k = JSON.parse(obj);
// console.log(k)




//***********************  */ js reg expression

// let reg = /ambesh/i
// // // console.log(reg)

// let s = "this is Ambesh great code with ambesh";

// //function to match expressions

// // 1.exec() - this function will return an array for match
// // or null for no match

// let result = reg.exec(s);
// // console.log(result);// o/p ["ambesh"]

// result = reg.exec(s);
// console.log(result)
// console.log(result.input);//show the content of string
// console.log(result.index);// show the index of compared element


//2 test()  return true and false

// let result = reg.test(s);
// console.log(result)// o/p true when only reg in there in the string


//3 match()- it will return an array of results or null

//ex-1
// let reg = /ambesh/;
// let temp ="hello my name is ambesh k Ambesh aaambesh"

// let result = temp.match(reg);
// console.log(result);

// console.log(result);
// console.log(result.index);

// // ex-2
// let reg = /ambesh/ig;
// let temp ="hello my name is ambesh k Ambesh aaambesh"

// let result = temp.match(reg);
// console.log(result);



//4.search --> return index of first match else -1
//reg.search(string)----> this is wrong

// let reg=/kashish1/ig;

// var s="rhis is Kashish kASHISH";

// let result = s.search(reg);
// console.log(result)//1st element it returns else -1



//5. replace --- return new replaced string with all the replacement
//  if no flag is given, first match will be replaced
// let reg=/kashish/i;
// // let reg=/kashish/ig;

// var s= "rhis is Kashish kASHISH";
// let result = s.replace(reg,"ambesh");
// console.log(result);


//*************** */ Metacharacters reg expression 
// ex-1
// let reg =/ambesh/;
// reg = /^amb/;// ^ -> menas expression will match if star with
// reg = /esh$/; // $ ->at end of the string means "string ends with" 
// reg = /a.besh/; // . -> matches anyone chaaracter 
// reg = /a*besh/ig; // * -> matches zero or more chaaracter 
// reg= /am?besk?/ // ? -> before ? character is optional it may be or not be present 
// reg = /a\*besh/     * -> means exact * he chahiye optional wali chiz nahi hogi yaha ,only star chahiye 
// let s = "ambesh is ambesh aedefefefbesh";

// let result = s.match(reg);

// console.log("the result from exec is ",result);

// if(reg.test(s)){
//   console.log(`the string ${s} match the expression ${reg.source}`)
// }
// else{
//   console.log(`the string ${s} does not match the expression ${reg.source}`);
// }


//*********************/character Sets reg expressions ---> 
// we make character set use of square bracket[]

// let reg = /a[a-z]besh/ //one character btwn a to z
// //  reg = /a[arum]besh/    // either can be a,r,or m
// // reg =/a[^aty]besh/         // not a, t or y
// reg = /a[^zxc]be[aSD]h/ig
// reg = /a[a-zA-Z]bes[ha0-9]/
// const str = "ambes0 techstack ambeSh";

// let result = str.match(reg);
// let result = reg.exec(str);
// console.log(result);


//********************quantifiers reg expressions  we use {}   ********* */

// quantity kisi ki bhi character ki specifiy karna chahte ho then use qunatifier

// let reg =/ka{2}shu/; //--> Exactly 2 times (a 2 baar aega) 
// // reg = /ka{0,2}shu/  //  --> 0 times or 2 times (a 2 baar se 0 baar)
// let s ="kaaaashu is a good boy";

//  let result = reg.exec(s);
// console.log("result",result)
// // console.log(reg)
//  console.log("input",result.input);//show the content of string
//  console.log("index",result.index);// show the index of compared element
//  console.log("the result from exec is ",result);

// if(reg.test(s)){
//   console.log(`the string ${s} match the expression ${reg.source}`)
// }
// else{
//   console.log(`the string ${s} does not match the expression ${reg.source}`);
// }



//***************** groupings --- we use  ()  *****/

// let reg = /(ashu){2}([0-9]a){2}/; //(ashu)- 2 , baar [0-9] a bhi 2 baar
// // const str = "ashu ashu  k1 k2  k4"
// let s = "ashuashu1a0a11a bhai"

// const result = reg.exec(s)



//  console.log("the result from exec is ",result);

// if(reg.test(s)){
//   console.log(`the string ${s} match the expression ${reg.source}`)
// }
// else{
//   console.log(`the string ${s} does not match the expression ${reg.source}`);
// }



//********************  shorthand Character classes

// 1)

// let reg = /\w+shu/; // word charatcter - _ or alphabet or number
// reg= /\w+u1d/     //   \w+ means more than word character
// // % and * are not a word character
// reg= /\Wbhai/; //non word charater (space,%,*,etc)
// reg = /\W+bhai/  // W+ means more than 1 Non  word character 

// str = "s111sa1shu1d111 &&%bhai";

// 2)

// let reg = /\d999/;  // ek digit uske baad 3 times 9
// // reg =/number \d+/ ; // number space "+" koi bhi digit kitni bhi baar

// let result = reg.exec(str);
// console.log(result,result.input,result.index, reg.source)


//  3)

// let reg = /\D999/;  //  \D means non digit 
// reg = /\D+99/;  //  \D means non digit 

// let str = "number8aaaaa99989999"

// let result = reg.exec(str);
// console.log(result,result.input,result.index, reg.source)

//4 )


// let reg = /\sone number/;  //  \Match whiteSpaces charater 
// reg = /\s+one number/;  //  // Match morethan one whitespace charactrer
// let str = "hello          one number8aaaaa99989999"

// let result = reg.exec(str);
// console.log(result,result.input,result.index, reg.source)




//**************************** UnderScore JS */

//Iterator collections

// ****************1) ._each this use as a for each loop 

// each same array ko manipulate krta aa
// map naya array create krta aa

// var numbers = [1, 2, 3, 4, 6, 7, 7, 7, 7, 7];
// var listOfNumbers = '';

//  _.each(numbers, function (x) {
//   console.log(x)
//   return x+1;
//   // listOfNumbers = x * listOfNumbers
// });


// document.getElementById("list").innerHTML = listOfNumbers;
// // console.log(temp);
// console.log(numbers)

// var arr = [1, 2, 3];

// _.each(arr, function(num,index,list){ 
// console.log(list)
// break

// });
// // array.forEach(element => {

// // });

// _.forEach(arr,function(element,index,list) {
//   console.log("hey")
//   if(true){
//     // break
//   }

// });

// console.log(k)

// for(let k =0; k<5; k++){
//   console.log("k",k);
//   if(k==1){

//   }


// }


// ************** 2) ._reduce & reduceRight 

// reduce

// var list = [[0], [1], [2], [3]]
// //Example using reduce. prepare a single list of elements
// var result = _.reduce(list, function(memo, element) { 

//   console.log(memo,element)
//   return memo.concat(element) });
// console.log(result)

// reduce right

// give you  last element first it work reverse

//  var list = [[0], [1], [2], [3]]
//  //Example using reduce. prepare a single list of elements
//  var result = _.reduceRight(list, function(memo, element) { 

//    console.log(memo,element)
//    return memo.concat(element) });
//    console.log(result)


//*************** */  3) ._find 


// var list = [[0], [1], [2], [3]]
//      //Example using reduce. prepare a single list of elements
// var result = _.find(list, function(memo, element) { 

//  console.log(memo,element)
//  return memo.concat(element) }, []);

//   console.log(result)


// **************** 4) ._where  & findWhere 

// syntax  ._where(list,properties)
//return all the possible result

// var list = [{ "title": "Learn Java", "Author": "Sam", "Cost": 100 },
// { "title": "Learn java", "Author": "Sam", "Cost": 200 },
// { "title": "Learn C", "Author": "Sam", "Cost": 200 }]

// //Example 1. find books whose title  is Learn C
// var result = _.where(list, { "Author": "Sam" });

// console.log(result);



//return 1st match pair
//._findWhere

// var list = [{ "title": "Learn Java", "Author": "Sam", "Cost": 100 },
// { "title": "Learn Scala", "Author": "Joe", "Cost": 200 },
// { "title": "Learn C", "Author": "Sam", "Cost": 200 }]

// //Example 1. find a book whose author is Sam
// var result = _.findWhere(list, { "Author": "Sam" });
// console.log(result);


//*****************5) Every 
//    return true or false 
// every element of array full fill the condition then return true
 
// var list = [2, 4, 6]
// //Example 1. check if all numbers are even
// var result = _.every(list, function(num) { return (num % 2 == 0) });
// console.log(result);


//****************6) ._Some */
// return true or false 
// some element follow the condition then its return true
// var list = [1, 1, 2, 5]
// //Example 1. check if any number is even
// var result = _.some(list, function(num) { return (num % 2 == 0) });
// console.log(result);


//Processing Collections

//******************* */ 1)  contains (list, value, index)

// var list = [1,1,2,4];

// // var result  = _.contains(list,2);
// // console.log(result)


// //Example 2. check if any number is present from given index
// var result = _.contains(list, 4, 3);
// console.log(result);

//************************2) ._invoke (list,methoodName, *argument)*/

// var list = [[1, 3, 2, 5],[4, 6, 1, 2]]
// //Example 1. invoke join method on each element of list
// var result = _.invoke(list, 'join');
// console.log(result);

