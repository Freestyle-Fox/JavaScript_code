// A good string is a string that starts with a letter A or a having a lenght >3.
// WAP to find it
let str=prompt("Enter a string : ")
if ((str[0]=="a" || str[0]=="A") && str.length>3){
    console.log("Good string")
}else{
    console.log("not a good string")
}
