var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () { //onreadystatechange = i will do this function when a certain condition is met
    if (this.readyState == 4 && this.status == 200) { //"this" refers to the function we are calling; 4 = ready; 200 = ok
        var mydata = JSON.parse(this.responseText); //the json file that we get

        var one = mydata.menuItems[0].mot[0].price; //this is how you call things; Bánh bèo
        var two = mydata.menuItems[0].hai[0].price; //Bánh bột lọc
        var three = mydata.menuItems[0].ba[0].price; //Bánh xèo
        var four = mydata.menuItems[0].bon[0].price; //Báng cuốn
        var five = mydata.menuItems[0].nam[0].price; //Báng khọt
        var six = mydata.menuItems[0].sau[0].price; //Bột chiên
        var seven = mydata.menuItems[0].bay[0].price; //Bánh tráng trộn
        var eight = mydata.menuItems[0].tam[0].price; //Bánh tráng nướng
        var nine = mydata.menuItems[0].chin[0].price; //Bánh tráng cuốn
        var ten = mydata.menuItems[0].muoi[0].price; //Chè 3 màu
        var eleven = mydata.menuItems[0].muoiMot[0].price; //Chè thái
        var twelve = mydata.menuItems[0].muoiHai[0].price; //Chè đậu xanh
        var thirteen = mydata.menuItems[0].muoiBa[0].price; //Bánh flan
        var fourteen = mydata.menuItems[0].muoiBon[0].price; //Trà sữa
        var fifteen = mydata.menuItems[0].muoiNam[0].price; //Cà phê đen
        var sixteen = mydata.menuItems[0].muoiSau[0].price; //Cà phê sữa đá
        var seventeen = mydata.menuItems[0].muoiBay[0].price; //Sữa đậu nành
        var eighteen = mydata.menuItems[0].muoiTam[0].price; //Bí đao
        var nineteen = mydata.menuItems[0].muoiChin[0].price; //Soda sữa hột gà

        /*document.getElementById("nameOne").innerHTML = mydata.menuItems[0].mot[0].type;
        document.getElementById("nameTwo").innerHTML = mydata.menuItems[0].hai[0].type;
        document.getElementById("nameThree").innerHTML = mydata.menuItems[0].ba[0].type;
        document.getElementById("nameFour").innerHTML = mydata.menuItems[0].bon[0].type;
        document.getElementById("nameFive").innerHTML = mydata.menuItems[0].nam[0].type;
        document.getElementById("nameSix").innerHTML = mydata.menuItems[0].sau[0].type;
        document.getElementById("nameSeven").innerHTML = mydata.menuItems[0].bay[0].type;
        document.getElementById("nameEight").innerHTML = mydata.menuItems[0].tam[0].type;
        document.getElementById("nameNine").innerHTML = mydata.menuItems[0].chin[0].type;
        document.getElementById("nameTen").innerHTML = mydata.menuItems[0].muoi[0].type;
        document.getElementById("nameEleven").innerHTML = mydata.menuItems[0].muoiMot[0].type;
        document.getElementById("nameTwelve").innerHTML = mydata.menuItems[0].muoiHai[0].type;
        document.getElementById("nameThirteen").innerHTML = mydata.menuItems[0].muoiBa[0].type;
        document.getElementById("nameFourteen").innerHTML = mydata.menuItems[0].muoiBon[0].type;
        document.getElementById("nameFifteen").innerHTML = mydata.menuItems[0].muoiNam[0].type;
        document.getElementById("nameSixteen").innerHTML = mydata.menuItems[0].muoiSau[0].type;
        document.getElementById("nameSeventeen").innerHTML = mydata.menuItems[0].muoiBay[0].type;
        document.getElementById("nameEighteen").innerHTML = mydata.menuItems[0].muoiTam[0].type;
        document.getElementById("nameNineteen").innerHTML = mydata.menuItems[0].muoiChin[0].type;*/
    }

    document.getElementById("firstPrice").innerHTML = "$" + one;
    document.getElementById("secondPrice").innerHTML = "$" + two;
    document.getElementById("thirdPrice").innerHTML = "$" + three;
    document.getElementById("fourthPrice").innerHTML = "$" + four;
    document.getElementById("fifthPrice").innerHTML = "$" + five;
    document.getElementById("sixthPrice").innerHTML = "$" + six;
    document.getElementById("seventhPrice").innerHTML = "$" + seven;
    document.getElementById("eigthPrice").innerHTML = "$" + eight;
    document.getElementById("ninthPrice").innerHTML = "$" + nine;
    document.getElementById("tenthPrice").innerHTML = "$" + ten;
    document.getElementById("eleventhPrice").innerHTML = "$" + eleven;
    document.getElementById("twelvePrice").innerHTML = "$" + twelve;
    document.getElementById("thirteenthPrice").innerHTML = "$" + thirteen;
    document.getElementById("fourteenthPrice").innerHTML = "$" + fourteen;
    document.getElementById("fifteenthPrice").innerHTML = "$" + fifteen;
    document.getElementById("sixteenthPrice").innerHTML = "$" + sixteen;
    document.getElementById("seventeenthPrice").innerHTML = "$" + seventeen;
    document.getElementById("eighteenthPrice").innerHTML = "$" + eighteen;
    document.getElementById("nineteenthPrice").innerHTML = "$" + nineteen;

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

var subtotal = 0;


function firstItem() {
    var input = document.getElementById("inputOne");
    input.addEventListener("keypress", function (event) {
        if (event.keyCode == 13) {
            document.getElementById("firstButton").click();
        }
    });
    var valueOne = document.getElementById("inputOne").value;
    localStorage.setItem("first", valueOne); //local storage input value

    var totalOne = (localStorage.getItem("priceOne")) * valueOne;
    var firstTotal = subtotal + totalOne;
    localStorage.setItem("firstSub", firstTotal); //calculate quantity x price
}

function secondItem() {
    var input = document.getElementById("inputTwo");
    input.addEventListener("keypress", function (event) {
        if (event.keyCode == 13) {
            document.getElementById("secondButton").click();
        }
    });
    var valueTwo = document.getElementById("inputTwo").value;
    localStorage.setItem("second", valueTwo); //local storage input value

    var totalTwo = (localStorage.getItem("priceTwo")) * valueTwo;
    var secondTotal = subtotal + totalTwo;
    localStorage.setItem("secondSub", secondTotal); //calculate quantity x price
}

function finalTotal() {
    var uno = localStorage.getItem("first"); //price of first item
    var dos = localStorage.getItem("totalTwo"); //price of second item

    var subTotal = uno + dos; //price altogether
    document.getElementById("sub").innerHTML = subTotal; //display in main page
    localStorage.setItem("subTotal", subTotal); //save local storage

    var tax = (subTotal * 0.04712).toFixed(2); //calculate true tax
    document.getElementById("tax").innerHTML = tax; //display in main page
    localStorage.setItem("tax", tax); //save local storage

    var finalTotal = subTotal + tax; //calculate final total; add true tax and subtotal
    document.getElementById("officialTotal").innerHTML = finalTotal; //display in main page
    localStorage.setItem("officialTotal", finalTotal); //save local storage
}

function checkout() {
    location.href = "checkout.html";
}