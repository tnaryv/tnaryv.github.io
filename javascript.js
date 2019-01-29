var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () { //onreadystatechange = i will do this function when a certain condition is met
    if (this.readyState == 4 && this.status == 200) { //"this" refers to the function we are calling; 4 = ready; 200 = ok
        var mydata = JSON.parse(this.responseText); //the json file that we get

        var one = mydata.banhDanGian[0].price; //this is how you call things; Bánh bèo
        var two = mydata.banhDanGian[1].price;//Bánh bột lọc
        var three = mydata.banhDanGian[2].price;//Bánh xèo
        var four = mydata.banhDanGian[3].price;//Báng cuốn
        var five = mydata.banhDanGian[4].price;//Báng khọt
        var six = mydata.banhDanGian[5].price;//Bột chiên
        var seven = mydata.banhTrang[0].price;//Bánh tráng trộn
        var eight = mydata.banhTrang[1].price;//Bánh tráng nướng
        var nine = mydata.banhTrang[2].price;//Bánh tráng cuốn
        var ten = mydata.dessert[0].price;//Chè 3 màu
        var eleven = mydata.dessert[1].price;//Chè thái
        var twelve = mydata.dessert[2].price;//Chè đậu xanh
        var thirteen = mydata.desert[3].price;//Bánh flan
        var fourteen = mydata.giaiKhat[0].price;//Trà sữa
        var fifteen = mydata.giaiKhat[1].price;//Cà phê đen
        var sixteen = mydata.giaiKhat[2].price;//Cà phê sữa đá
        var seventeen = mydata.giaiKhat[3].price;//Sữa đậu nành
        var eighteen = mydata.giaiKhat[4].price;//Bí đao
        var nineteen = mydata.giaiKhat[5].price;//Soda sữa hột gà
    }

    document.getElementById("firstPrice").innerHTML = "$"+ one;
    document.getElementById("secondPrice").innerHTML = "$"+ two;
    document.getElementById("thirdPrice").innerHTML = "$"+ three;
    document.getElementById("fourthPrice").innerHTML = "$"+ four;
    document.getElementById("fifthPrice").innerHTML = "$"+ five;
    document.getElementById("sixthPrice").innerHTML = "$"+ six;
    document.getElementById("seventhPrice").innerHTML = "$"+ seven;
    document.getElementById("eigthPrice").innerHTML = "$"+ eight;
    document.getElementById("ninthPrice").innerHTML = "$"+ nine;
    document.getElementById("tenthPrice").innerHTML = "$"+ ten;
    document.getElementById("eleventhPrice").innerHTML = "$"+ eleven;
    document.getElementById("twelvePrice").innerHTML = "$"+ twelve;
    document.getElementById("thirteenthPrice").innerHTML = "$"+ thirteen;
    document.getElementById("fourteenthPrice").innerHTML = "$"+ fourteen;
    document.getElementById("fifteenthPrice").innerHTML = "$"+ fifteen;
    document.getElementById("sixteenthPrice").innerHTML = "$"+ sixteen;
    document.getElementById("seventeenthPrice").innerHTML = "$"+ seventeen;
    document.getElementById("eigthteenthPrice").innerHTML = "$"+ eighteen;
    document.getElementById("nineteenthPrice").innerHTML = "$"+ nineteen;

    Number(localStorage.setItem("priceOne", one));
    Number(localStorage.setItem("priceTwo", two));
    Number(localStorage.setItem("priceThree", three));
    Number(localStorage.setItem("priceFour", four));
    Number(localStorage.setItem("priceFive", five));
    Number(localStorage.setItem("priceSix", six));
    Number(localStorage.setItem("priceSeven", seven));
    Number(localStorage.setItem("priceEight", eight));
    Number(localStorage.setItem("priceNine", nine));
    Number(localStorage.setItem("priceTen", ten));
    Number(localStorage.setItem("priceEleven", eleven));
    Number(localStorage.setItem("priceTwelve", twelve));
    Number(localStorage.setItem("priceThirteen", thirteen));
    Number(localStorage.setItem("priceFourteen", fourteen));
    Number(localStorage.setItem("priceFifteen", fifteen));
    Number(localStorage.setItem("priceSixteen", sixteen));
    Number(localStorage.setItem("priceSeventeen", seventeen));
    Number(localStorage.setItem("priceEighteen", eighteen));
    Number(localStorage.setItem("priceNineteen", nineteen));
};
xmlhttp.open("GET", "restaurant.json", true);
xmlhttp.send(); //send this file to the server

localStorage.clear();
localStorage.setItem("subtotal", 0);
localStorage.setItem("tax", 0);
localStorage.setItem("total", 0);

function firstItem() {
    var input = document.getElementById("inputOne");
    input.addEventListener("keypress", function(event) {
        if (event.keyCode == 13) {
        document.getElementById("firstButton").click();
        }
    });
    var valueOne = document.getElementById("inputOne").value;
    localStorage.setItem("first", valueOne);//local storage input value

    var firstTotal = (localStorage.getItem("priceOne")) * valueOne;
    localStorage.setItem("totalOne", firstTotal);//calculate quantity x price
}

function secondItem() {
    var input = document.getElementById("inputTwo");
    input.addEventListener("keypress", function(event) {
    if (event.keyCode == 13) {
        document.getElementById("secondButton").click();
    }
    });
    var valueTwo = document.getElementById("inputTwo").value;
    localStorage.setItem("second", valueTwo);//local storage input value

    var secondTotal = (localStorage.getItem("priceTwo")) * valueTwo;
    localStorage.setItem("totalTwo", secondTotal);//calculate quantity x price
}

function finalTotal() {
    var uno = localStorage.getItem("totalOne");//price of first item
    var dos = localStorage.getItem("totalTwo");//price of second item
    
    var subTotal = uno + dos;//price altogether
    document.getElementById("sub").innerHTML = subTotal; //display in main page
    localStorage.setItem("subTotal", subTotal); //save local storage

    var tax = (subTotal * 0.04712).toFixed(2);//calculate true tax
    document.getElementById("tax").innerHTML = tax;//display in main page
    localStorage.setItem("tax", tax); //save local storage

    var finalTotal = subTotal + tax; //calculate final total; add true tax and subtotal
    document.getElementById("officialTotal").innerHTML = finalTotal;//display in main page
    localStorage.setItem("officialTotal", finalTotal);//save local storage
}

function checkout() {
    location.href = "checkout.html";
}