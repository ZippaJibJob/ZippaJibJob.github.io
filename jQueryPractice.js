function dropDown() {
    let navList = document.getElementsByClassName('dropDownNav');

    navList.style.display = 'block';
}


//Start of Calculator

function equivalentCheck() {

    if (parseInt(document.getElementById('equivalent').value)) {
        
        document.getElementById('equivalent').value = 0;
        document.getElementById('result').value - 0;
    
    }
}

function input(x) {

    equivalentCheck();

    let y = parseFloat(document.getElementById('result').value);

    if (document.getElementById('decimalVar').value == 0) {

        x += y * 10;

        document.getElementById('result').valy = x;

    }
    
    if (document.getElementById('result').value == 0) {
        
        document.getElementById('result').value = x;
    }
    else {
        document.getElementById('result').value += x;
    }

}

function operandCheck() {

    if (document.getElementById('operand').value == "") {

        document.getElementById('operand').value = document.getElementById('result').value;
        document.getElementById('result').value = 0;
        document.getElementById('equivalent').value = 1;

    }
    else {

        operatorCheck();

    }
}

function operatorCheck() {

    let a = parseFloat(document.getElementById('operand').value);
    let b = parseFloat(document.getElementById('result').value);

    switch (parseInt(document.getElementById('operation').value)) {

        case 1: //addition
            a += b;
            break;
        case 2: //subtraction
            a -= b;
            break;
        case 3: //multiply
            a *= b;
            break;
        case 4: //divide
            a /= b;
            break;
    }

    document.getElementById('operand').value = a;
    document.getElementById('result').value = a;
    document.getElementById('equivalent').value = 1;
}

function operators(x) {

    switch (x) {
        case 1:
            document.getElementById('operation').value = 1; //addition
            break;
        case 2:
            document.getElementById('operation').value = 2; //subtraction
            break;
        case 3:
            document.getElementById('operation').value = 3; //multiplication
            break;
        case 4:
            document.getElementById('operation').value = 4; //divition
            break;
        default:
    }

    operandCheck();
}

function equals() {

    operators(parseInt(document.getElementById('operation').value));
    document.getElementById('result').value = document.getElementById('operand').value;
    document.getElementById('operand').value = "";
    document.getElementById('equivalent').value = 1;

}

function allClear() {

    document.getElementById('result').value = 0;
    document.getElementById('operand').value = "";
    document.getElementById('operation').value = 0;
    document.getElementById('equivalent').value = 0;

}

function square() {

    let x = document.getElementById('result').value;

    x *= x;

    document.getElementById('result').value = x;

}

function cube() {

    let x = document.getElementById('result').value;

    x *= x*x;

    document.getElementById('result').value = x;

}




//End of Calculator



function jQueryPractice () {

    $("selector").action();

}


$("#btn1").click(function () {
    alert("Text: " + $("#btn1").text());
})

$("#btn2").click(function () {
    alert("HTML: " + $("#btn2").html());
})


/*
make a function that after 8 seconds will change the src of the image, as well as fade the image out and back in again to cover the transition
*/

    let imageDisplayed = document.getElementById('welcomeImages');

    let imageArray = ["media/images/WelcomingImage2.png" , "media/images/WelcomingImage3.png" , "media/images/WelcomingImage4.png" , "media/images/WelcomingImage.png"];

    let imageIndex = 0;

function welcomeImagesTransition() {

    //$("#welcomeImages").fadeOut();
    imageDisplayed.setAttribute("src", imageArray[imageIndex]);
    imageIndex++;
    //$("#welcomeImages").fadeIn();

    if (imageIndex >= imageArray.length) {
        imageIndex = 0;
    }

}

setInterval(welcomeImagesTransition, 5000);



//Store Practice

/*
Create a page where store Cells are sorted 
on the page in a grid layout that adapts to 
the screen size

Each store cell will have:
Image
Name (Click on name to open up item specific page with description etc.)
Price
Buy button (this will add item and price directly to cart)

Make it possible to add store Cells onto page


Item specific pages will have:
image
name
price
buy
delivery info
description
reviews
*/

    let item0 = {itemName:"Riflemen", itemImg:"media/images/PlaceholderIMG.jpg", itemPrice:10, itemDescription:"This is a Riflemen"}
    let item1 = {itemName:"Droids", itemImg:"media/images/PlaceholderIMG.jpg", itemPrice:10, itemDescription:"This is a Droid"}
    let item2 = {itemName:"Terrain", itemImg:"media/images/PlaceholderIMG.jpg", itemPrice:15, itemDescription:"This is Terrain"}
    let item3 = {itemName:"Ruth Larseny", itemImg:"media/images/PlaceholderIMG.jpg", itemPrice:12, itemDescription:"This is Ruth Larseny"}
    let item4 = {itemName:"Mech", itemImg:"media/images/PlaceholderIMG.jpg", itemPrice:20, itemDescription:"The biggest and baddest unit on the board"}
    let item5 = {itemName:"Hit Point Wheel", itemImg:"media/images/PlaceholderIMG.jpg", itemPrice:5, itemDescription:"Hit Point wheels. Helps to keep track of your units health on the battlefield"}
    let item6 = {itemName:"Starter Box - Rookie", itemImg:"media/images/PlaceholderIMG.jpg", itemPrice:30, itemDescription:"This is the smallest start pack, Includes the bare bones of Mechs and Marines"}
    let item7 = {itemName:"Starter Box - Lieutenant", itemImg:"media/images/PlaceholderIMG.jpg", itemPrice:50, itemDescription:"The mid tier of starter packs. Has the neccessary components to rage war"}
    let item8 = {itemName:"Starter Box - Major General", itemImg:"media/images/PlaceholderIMG.jpg", itemPrice:100, itemDescription:"The full starter pack. Sets you up with everything you need to take on the world of Mechs and Marines"}
    let item9 = {itemName:"Providers Army", itemImg:"media/images/PlaceholderIMG.jpg", itemPrice:120, itemDescription:"Full Providers Army"}

    let storeCellName = [item0.itemName, item1.itemName, item2.itemName, item3.itemName, item4.itemName, item5.itemName, item6.itemName, item7.itemName, item8.itemName, item9.itemName];
    let storeCellImg = [item0.itemImg, item1.itemImg, item2.itemImg, item3.itemImg, item4.itemImg, item5.itemImg, item6.itemImg, item7.itemImg, item8.itemImg, item9.itemImg]
    let storeCellPrice = [item0.itemPrice, item1.itemPrice, item2.itemPrice, item3.itemPrice, item4.itemPrice, item5.itemPrice, item6.itemPrice, item7.itemPrice, item8.itemPrice, item9.itemPrice]
    let storeCellDescription = [item0.itemDescription, item1.itemDescription, item2.itemDescription, item3.itemDescription, item4.itemDescription, item5.itemDescription, item6.itemDescription, item7.itemDescription, item8.itemDescription, item9.itemDescription]


$(document).ready(function() {
    $("#item0").children("h2.name").text(storeCellName[0]);
    $("#item1").children("h2.name").text(storeCellName[1]);
    $("#item2").children("h2.name").text(storeCellName[2]);
    $("#item3").children("h2.name").text(storeCellName[3]);
    $("#item4").children("h2.name").text(storeCellName[4]);
    $("#item5").children("h2.name").text(storeCellName[5]);
    $("#item6").children("h2.name").text(storeCellName[6]);
    $("#item7").children("h2.name").text(storeCellName[7]);
    $("#item8").children("h2.name").text(storeCellName[8]);
    $("#item9").children("h2.name").text(storeCellName[9]);

    $("#item0").children("p.price").text("£" + storeCellPrice[0]);
    $("#item1").children("p.price").text("£" + storeCellPrice[1]);
    $("#item2").children("p.price").text("£" + storeCellPrice[2]);
    $("#item3").children("p.price").text("£" + storeCellPrice[3]);
    $("#item4").children("p.price").text("£" + storeCellPrice[4]);
    $("#item5").children("p.price").text("£" + storeCellPrice[5]);
    $("#item6").children("p.price").text("£" + storeCellPrice[6]);
    $("#item7").children("p.price").text("£" + storeCellPrice[7]);
    $("#item8").children("p.price").text("£" + storeCellPrice[8]);
    $("#item9").children("p.price").text("£" + storeCellPrice[9]);

    $("#item0").children("img").attr("src", storeCellImg[0]);
    $("#item1").children("img").attr("src", storeCellImg[1]);
    $("#item2").children("img").attr("src", storeCellImg[2]);
    $("#item3").children("img").attr("src", storeCellImg[3]);
    $("#item4").children("img").attr("src", storeCellImg[4]);
    $("#item5").children("img").attr("src", storeCellImg[5]);
    $("#item6").children("img").attr("src", storeCellImg[6]);
    $("#item7").children("img").attr("src", storeCellImg[7]);
    $("#item8").children("img").attr("src", storeCellImg[8]);
    $("#item9").children("img").attr("src", storeCellImg[9]);

    $("#purchase0").val(storeCellPrice[0]);
});



/* Basket total */

let totalBasket = 0;
let itemState = false;

document.getElementById('totalBasket').innerHTML = "Basket Total: £" + totalBasket

function addToBasket(x) {

    switch (x) {
        case 0:
            totalBasket += item0.itemPrice;
            $("#basket").append("<div class='itemAdded' id='itemInBasket0'>   <div class='basketPara'><p>" + item0.itemName + " added to basket: £" + item0.itemPrice + "</p></div>  <div class='removeBin'><img onclick='removeFromBasket(0)' src='media/images/RemoveBin.png'></div>   </div>");
            break;
        case 1:
            totalBasket += item1.itemPrice;
            $("#basket").append("<div class='itemAdded' id='itemInBasket1'>   <div class='basketPara'><p>" + item1.itemName + " added to basket: £" + item1.itemPrice + "</p></div>  <div class='removeBin'><img onclick='removeFromBasket(1)'  src='media/images/RemoveBin.png'></div>   </div>");
            break;
        case 2:
            totalBasket += item2.itemPrice;
            $("#basket").append("<div class='itemAdded' id='itemInBasket2'>   <div class='basketPara'><p>" + item2.itemName + " added to basket: £" + item2.itemPrice + "</p></div>  <div class='removeBin'><img onclick='removeFromBasket(2)' src='media/images/RemoveBin.png'></div>   </div>");
            break;
        case 3:
            totalBasket += item3.itemPrice;
            $("#basket").append("<div class='itemAdded' id='itemInBasket3'>   <div class='basketPara'><p>" + item3.itemName + " added to basket: £" + item3.itemPrice + "</p></div>  <div class='removeBin'><img onclick='removeFromBasket(3)' src='media/images/RemoveBin.png'></div>   </div>");
            break;
        case 4:
            totalBasket += item4.itemPrice;
            $("#basket").append("<div class='itemAdded' id='itemInBasket4'>   <div class='basketPara'><p>" + item4.itemName + " added to basket: £" + item4.itemPrice + "</p></div>  <div class='removeBin'><img onclick='removeFromBasket(4)' src='media/images/RemoveBin.png'></div>   </div>");
            break;
        case 5:
            totalBasket += item5.itemPrice;
            $("#basket").append("<div class='itemAdded' id='itemInBasket5'>   <div class='basketPara'><p>" + item5.itemName + " added to basket: £" + item5.itemPrice + "</p></div>  <div class='removeBin'><img onclick='removeFromBasket(5)' src='media/images/RemoveBin.png'></div>   </div>");
            break;
        case 6:
            totalBasket += item6.itemPrice;
            $("#basket").append("<div class='itemAdded' id='itemInBasket6'>   <div class='basketPara'><p>" + item6.itemName + " added to basket: £" + item6.itemPrice + "</p></div>  <div class='removeBin'><img onclick='removeFromBasket(6)' src='media/images/RemoveBin.png'></div>   </div>");
            break;
        case 7:
            totalBasket += item7.itemPrice;
            $("#basket").append("<div class='itemAdded' id='itemInBasket7'>   <div class='basketPara'><p>" + item7.itemName + " added to basket: £" + item7.itemPrice + "</p></div>  <div class='removeBin'><img onclick='removeFromBasket(7)' src='media/images/RemoveBin.png'></div>   </div>");
            break;
        case 8:
            totalBasket += item8.itemPrice;
            $("#basket").append("<div class='itemAdded' id='itemInBasket8'>   <div class='basketPara'><p>" + item8.itemName + " added to basket: £" + item8.itemPrice + "</p></div>  <div class='removeBin'><img onclick='removeFromBasket(8)' src='media/images/RemoveBin.png'></div>   </div>");
            break;
        case 9:
            totalBasket += item9.itemPrice;
            $("#basket").append("<div class='itemAdded' id='itemInBasket9'>   <div class='basketPara'><p>" + item9.itemName + " added to basket: £" + item9.itemPrice + "</p></div>  <div class='removeBin'><img onclick='removeFromBasket(9)' src='media/images/RemoveBin.png'></div>   </div>");
            break;
    default:
    }

document.getElementById('totalBasket').innerHTML = "Basket Total: £" + totalBasket;
}

function removeFromBasket(x) {

    switch (x) {
        case 0:
            totalBasket -= item0.itemPrice;
            $("#itemInBasket0").remove();
            break;
        case 1:
            totalBasket -= item1.itemPrice;
            $("#itemInBasket1").remove();
            break;
        case 2:
            totalBasket -= item2.itemPrice;
            $("#itemInBasket2").remove();
            break;
        case 3:
            totalBasket -= item3.itemPrice;
            $("#itemInBasket3").remove();
            break;
        case 4:
            totalBasket -= item4.itemPrice;
            $("#itemInBasket4").remove();
            break;
        case 5:
            totalBasket -= item5.itemPrice;
            $("#itemInBasket5").remove();
            break;
        case 6:
            totalBasket -= item6.itemPrice;
            $("#itemInBasket6").remove();
            break;
        case 7:
            totalBasket -= item7.itemPrice;
            $("#itemInBasket7").remove();
            break;
        case 8:
            totalBasket -= item8.itemPrice;
            $("#itemInBasket8").remove();
            break;
        case 9:
            totalBasket -= item9.itemPrice;
            $("#itemInBasket9").remove();
            break;
    default:
    }

document.getElementById('totalBasket').innerHTML = "Basket Total: £" + totalBasket;
}


/*
    Make each store cell in the page purely just location,
    associate it with an index number
    then filters can changes the index number order to reorder the page

    
*/