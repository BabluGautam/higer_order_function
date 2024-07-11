//  function abs(num){
//     if(num<0){
//       return -num
//     }
//     else{
//       return num
//     }
//   }
  
//   function difference(a,b){
//     let diff= a-b
//     return abs(diff)
//   }
  
//   ans= difference(20,10)
//   console.log(ans) 


// how to add two numbers//
// function addtwo(a,b){
//   let sum=a+b
//   return sum
// }
//  let final=addtwo(10,10)
//  console.log(final)


// num =[10, 24, 56, 72, -10, -88, 100, 564];
// // find odd index and sum//
// let count=0;
// let ans=num.filter((ele,index)=>{
//   if(index %2 ===1){
//     count+=1
//     return true;
//   }
//   return false;
// }).reduce((acc,ele)=>{
//   return acc+ele
// },0)
// console.log(ans/count)


// let arr = [2, 3, 4, 6, 7];
// let odd =arr.map((ele)=>{
//   return ele**4
// })

// console.log(odd)

// arr = [3,4,5,6,7]
// result=[]

// arr.forEach((element) => {
//   if (element % 2 == 0) {
//     result.push(element);
//   }
// });
// let output = result.join('-');

// console.log(output)

// let obj={
//   length : 10,
//   width :20,
//   area : function(){
//     ans= console.log(this.length* this.width);
//     perimeter = console.log(2* (this.length+this.width));    
//   }
// }

// obj.area()

// let sum=0 
// let data ={
//   name : ["rice","dal","salt"],
//   quantity :[2,3,1],
//   price : [60,50,20],
//   total : ()=>{
//     for (let i = 0; i <name.length; i++) {
//         sum +=this.quantity[i]*this.price[i]
//     }console.log(sum)
//   }
// }

// data.total()

// var sales = [
//   { item: 'PS4 Pro', stock: 3, original: 399.99 },
//   { item: 'Xbox One X', stock: 1, original: 499.99, discount: 0.1 },
//   { item: 'Nintendo Switch', stock: 4, original: 299.99 },
//   { item: 'PS2 Console', stock: 1, original: 299.99, discount: 0.8 },
//   { item: 'Nintendo 64', stock: 2, original: 199.99, discount: 0.65 }
// ];
// function vari(sales){
//     for(let i = 0; i<sales.length; i++){
//         if (sales[i].discount != undefined){

//             let discount = sales[i].discount;
//             let sale = sales[i].original - discount
//             let total = sales[i].stock * sale 
//             sales[i].sale=sale
//             sales[i].total = total
//         }
//         else {
//             let sale = sales[i].original
//             let total = sales[i].stock * sale
//             sales[i].sale=sale
//             sales[i].total = total
//         }

//     }
//   return sales
// }

// console.log(vari(sales))

// function isOdd(num){
//   if (num%2===1){
//       return true
//   }
//   else{
//     return false
//   }
// }




// let ans = 20;
// for (let i= 0; i<=ans; i++){
//   if (isOdd(i)=== true){
//       console.log(i)
//   }
// }

// obj = [
// 	{name: "Nrupul", age: 32},
// 	{name: "Prateek" , age: 30},
// 	{name: "Aman" , age: 26},
// 	{name: "Albert" , age: 28},
// 	{name: "Yogesh" , age: 44},
// ]
// for(i=0;i<obj.length;i++){
//   if(obj[i].age>=30){
//     console.log(obj[i].name);
//   }
// }

// let arr = [
// 	{
// 		grade: "V",
// 		students: [
// 			{name: "Nrupul", marks: [10, 20, 30]},
// 			{name: "Prateek", marks: [20, 30, 40]}
// 		]
// 	},
// 	{
// 		grade: "VI",
// 		students: [
// 			{name: "Aman", marks: [10, 20, 30]},
// 			{name: "Albert", marks: [20, 30, 40]}
// 		]
// 	},
// 	{
// 		grade: "VII",
// 		students: [
// 			{name: "Yogesh", marks: [10, 200, 30]},
// 			{name: "Sandhya", marks: [20, 30, 40]}
// 		]
// 	}
// ]
// for (let i=0;i<arr.length;i++){
//   let student1 = arr[i].students[0]["marks"]
//   let student2 = arr[i].students[1]["marks"]


//   let sum1=0
//   let sum2=0

//   for (let j=0;j<student1.length;j++){
//     sum1+=student1[j]
//     sum2+=student2[j]
//   }
//   if (sum2>sum1){
//     console.log(arr[i]["grade"],"-",arr[i]["students"][1].name,"-",sum2);
//   }
//   else{
//     console.log(arr[i]["grade"],"-",arr[i]["students"][1].name,"-",sum1);
//   }
// }
// let arr = [10, 24, 56, 72, -10, -88, 100, 564];
// let count=0;
// let ans=arr.filter((ele,index)=>{
//   if(index %2===1){
//     count+=1;
//     return true;
//   }
//   return false

// }).reduce((acc,curr)=>{
//   return acc+curr;
// },0)

// console.log(ans/count)
// arr= [2, 3, 4, 6, 7]
// let odd=arr.map((ele)=>{
//   return ele**5
// })
// console.log(odd)
  


arr = [3,4,5,6,7]
let result=[];

arr.forEach(element => {
  if(element%2===1){
    result.push(element)
  }
});
let out=result.join("-")
console.log(out)


