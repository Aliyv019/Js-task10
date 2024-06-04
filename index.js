//JS-TASK6
// var text=['apple','banana','kiwi','cherry']
// //task1
// var i=0
// while (i<=10) {
//     console.log(i);
//     i++
// }
// console.log("");
// //task2
// i=0
// while (i<text.length) {
//     console.log(text[i]);
//     console.log(i);
//     i++
// }
// console.log("");

// //task3
// i=0
// while (i<text.length) {
//     console.log(i);
//     i++
// }
// console.log("");

// //task4
// i=0
// while(i<text.length){
//     console.log(text[i]);
//     i++
// }
// console.log("");

// //task5
// i=0
// while (i<text.length) {
//     console.log(text[i]);
//     i++
// }
// console.log("");

// //task6
// i=0
// while(i<text.length){
//     console.log(text[i].replaceAll("a","c"));
//     i++
// }
// console.log("");

// //task7
// i=0
// var arr=[1,9,2,8,3,7,65,7,32]
// while (i<arr.length) {
//     if(arr[i]%2==0){
//         console.log(arr[i]/2);
//     }
//     else{
//         console.log(arr[i]+2);
//     }
//     i++
// }
// console.log("\n\n");

//JS-TASK7
//// task1
// arr=[45,67,89,23,55,88,93]
// i=0
// var f=false
// var a=+prompt("enter a random number")
// while(f==false){
//     if(arr[i]==a){
//         f=true
//     }
//     i++
// }
// if(f){
//     console.log("we have your number in our array");
// }
// else{
//     console.log("we don't have your number in our array");
// }
// console.log("");

// //task2
// arr=[678,45,67,89,23,545,188,293]
// var sum=0
// var b=0
// var even=0
// var odd=0
// while(i<arr.length){
//     sum+=arr[i]
//     if(arr[i]>100 && arr[i]<200){
//         b++
//     }
//     if(arr[i]%2==0){
//         even++
//     }
//     else{
//         odd++
//     }
//     i++
// }
// console.log(`sum of numbers from our array:${sum}\naverage of numbers from our array:${sum/arr.length}\nthe number of numbers in our array:${arr.length}\nThe number of numbers greater than 100 and less than 200 in the array:${b}\nThe number of even numbers in the array:${even}\nThe number of odd numbers in the array:${odd}`)
// console.log("");

//JS-TASK8
////task1
// arr=[32,86,84,654,1,654,315,87,3213,8,16,87,359,51,98,35,56]
// even=[]
// odd=[]
// i=0
// while(i<arr.length){
//     if(arr[i]%2==0){
//         even.push(arr[i])
//     }
//     else{
//         odd.push(arr[i])
//     }
//     i++
// }
// console.log(even,odd);
// console.log("");

// //task2
// var arr=[21,653,54,657,2261,"jashd","sajfh",354,21,"asjdk","ksjaf"]
// i=0
// while(i<arr.length){
//     if(typeof arr[i]=="string"){
//         delete arr[i]
//     }
//     i++
// }
// console.log(arr);
// console.log("");

//JS-TASK9
var rmail=prompt("enter your mail for registration:").toLowerCase()
var rpass=prompt("enter your password for registration:")
var mail_pass=[]
mail_pass.push(rmail)
mail_pass.push(rpass)
var i=true
 while(i==true){
    let lmail=prompt("enter your login mail").toLowerCase()
    let lpass=prompt("enter your login password")
    if(lmail==mail_pass[0] && lpass==mail_pass[1]){
        alert("You have been logged in succesfully")
        i=false;
    }
    else{
        alert("Please enter correct mail and password")
    }
 }