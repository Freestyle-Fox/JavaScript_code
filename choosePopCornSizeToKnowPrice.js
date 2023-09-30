// WAP to take input from user form menu : size of the popcord to know the price
menu=prompt("Available Size of Your popcorn is (XL,L,M,S) :  ")
if (menu=="XL" || menu=="xl"){
    console.log("Your bill is : 250 rupees")
}
else if (menu=="L" || menu=="l"){
    console.log("Your bill is : 200 rupees")
}
else if (menu=="M" || menu=="m"){
    console.log("Your bill is : 100 rupees")
}
else if (menu=="S" || menu=="s"){
    console.log("Your bill is : 50 rupees")
}
else{
    console.log(" Enter a valid size of popcorn from menu")
}
