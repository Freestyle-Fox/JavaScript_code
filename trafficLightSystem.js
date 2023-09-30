// WAP using Switch to read traffic light color and tells you to what to do on that color 
let color=prompt("Enter a trafic color :  ")
switch(color){
    case "red" || "Red":
        console.log("stop");
        break;
    case "yellow" || "Yellow":
        console.log("slow down");
        break;
    case "green" || "Green":
        console.log("Go");
        break;
    default:
        console.log("Enter a valid trafic color")
        alert("Enter a valid trafic color")
        console.error("Enter a valid trafic color")
        console.warn("Enter a valid trafic color")
}

// without Switch , using conditionals
let colorOfTraficLight=prompt("Enter trafic light color : ");
if (colorOfTraficLight=="red"){
    console.log("Stop")
    console.log("thank you ")
}else if (colorOfTraficLight=="yellow" || colorOfTraficLight=="Yellow"){
    console.log("slow down")
    console.log("thank you ")
}else if (colorOfTraficLight=="green" || colorOfTraficLight=="Green"){
    console.log("You can go now.")
    console.log("thank you ")
}else{
console.log("please a valid trafic color name ")
}
