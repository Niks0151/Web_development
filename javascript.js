// let str="aapu";
// let len=(str.length);
// if(str[0]=='a'&& len>=3){
//     console.log(`you have good string i.e-${str}`);
// }else{
//     console.log("you have bad string");
// }

// let num =4;
// switch(num){
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tueday");
//         break;
//     case 3:
//         console.log("Wedday");
//         break;
//     case 4:
//         console.log("Thursday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("Satday");
//         break;
//     case 7:
//         console.log("Sunday");
//         break;
//     default:
//         console.log("not valid day");

// }

// let fn=prompt("enter first name");
// let ln=prompt("enter last name");
// console.log(fn+" "+ln);

// let num=prompt("enter num to check divisibility");
// if(num%10===0){
//     console.log(`${num} is divisible by 10`);
// }else{
//     console.log(`${num} is not divisible by 10`);
// }

// let name=prompt("enter name");
// let age=prompt("enter age");
// alert(`${name} is ${age} years old`);

// let a= 12;
// let b=35;
// let c=20;
// if(a>b && a>c){
//     console.log(`${a} is greater than ${b} and ${c}`);
// }else if(b>a && b>c){
//     console.log(`${b} is greater than ${a} and ${c}`);
// }else{
//     console.log(`${c} is greater than ${a} and ${b}`);
// }

// let msg="help!";
// let newmsg =msg.trim().toUpperCase();
// console.log(newmsg);

// let name="ApnaCollege";
// let str1=name.slice(0,4);
// let str2=name.slice(4);
// let str3=str2.replace('l','t');
// console.log(str1+" "+str3);

// ARRAYS

// start.shift();
// start.shift();
// start.unshift('june');
// start.unshift('july');
// console.log(start);
// start.splice(2,0,"octo","Nov");
// console.log(start);

// let months=['jan','july','march','august'];
// months.splice(0,1);
// months.splice(1,0,"june");
// console.log(months);

// let newArr=['c','c++','html','js','python','java','c#','sql'];
// newArr.reverse();
//  newArr.indexOf('javascript');

// let game=[['X'," ","o"],[" ","X"," "],[" o"," ","X "]];
// // console.log(game);
// game[0][1]="O";
// console.log(game);

// let array=[7,9,0,-2];
// // console.log(array);
// // array.splice(3);
// console.log(array);

// let str1="hello";
// let index=3;
// if(str1[index]==str1[index].toLowerCase()){
//     console.log("character is lowercase");
// }else{
//     console.log("character is uppercase");
// }

// let arr=[1,2,3,4,5];
// let element=3;
// if(arr.indexOf(element)!= -1){
//     console.log("element is present");
// }else{
//     console.log("element is not present");
// }

// let arr=[7,9,0,-2];
// let n=3;
// let ans=arr.slice(arr.length-n);
// console.log(ans);

// LOOPS

// for(i=2;i<=10;i++){
//     if(i%2!==0){
//         console.log(i);
//     }
// }

// for(i=1;i<=10;i++){
//     console.log(i*5);
// }

// let favMovie="bahubali";
// let guess=prompt("Guess my fav movie");
// while((guess!==favMovie )&& (guess=="quit")){
//     console.log("U guessed it wrong");
// }
// console.log("You guessed it correct");

// let todo=[];
// let task;
// while(task!=="done"){
//     task=prompt("Enter your task");
//     todo.push(task);
// }
// for(tasks of todo){
//     console.log(tasks);
// }

// let arr=[1,2,3,4,5,6,2,3];
// let num=2;
// for(i=0;i<arr.length;i++){
//     if(arr[i]===num){
//         arr.splice(i,1);
//     }
// }
// console.log(arr);

// ----------------------------

// let num=287152;
// let sum=0;
// while (num>0){
//     digit=num%10;
//     sum=sum+digit;
//     num=Math.floor(num/10);
// }
// console.log(sum);

// let number=prompt("enter the number for calculating factorial");
// let num=1;
// for(i=1;i<=number;i++){
//     num=num*i;
// }
// console.log(num);

let arr=[23,45,12,799];
let largest=arr[0];
for(i=0;i<=arr.length;i++){
    if(arr[i]>=largest){
        largest=arr[i];
    }
}console.log(`Largest of the array is ${largest}`);
