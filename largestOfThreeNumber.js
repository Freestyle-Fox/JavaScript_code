// A program to find largest of 3 numbers
let num1=prompt("Enter the fisrt number : ")
let num2=prompt("Enter the second number : ")
let num3=prompt("Enter the third number : ")
if(num1 > num2 && num1 >num3){
    console.log(`largest of three number is : ${num1} `)
}else if(num2 > num1 && num2 >num3){
    console.log(`largest of three number is : ${num2} `)
}else{ 
    console.log(`largest of three number is : ${num3} `)
}
