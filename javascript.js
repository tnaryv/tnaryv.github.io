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

        document.getElementById("nameOne").innerHTML = mydata.menuItems[0].mot[0].type + " - " + "$" + one;
        document.getElementById("nameTwo").innerHTML = mydata.menuItems[0].hai[0].type + " - " + "$" + two;
        document.getElementById("nameThree").innerHTML = mydata.menuItems[0].ba[0].type + " - " + "$" + three;
        document.getElementById("nameFour").innerHTML = mydata.menuItems[0].bon[0].type + " - " + "$" + four;
        document.getElementById("nameFive").innerHTML = mydata.menuItems[0].nam[0].type + " - " + "$" + five;
        document.getElementById("nameSix").innerHTML = mydata.menuItems[0].sau[0].type + " - " + "$" + six;
        document.getElementById("nameSeven").innerHTML = mydata.menuItems[0].bay[0].type + " - " + "$" + seven;
        document.getElementById("nameEight").innerHTML = mydata.menuItems[0].tam[0].type + " - " + "$" + eight;
        document.getElementById("nameNine").innerHTML = mydata.menuItems[0].chin[0].type + " - " + "$" + nine;
        document.getElementById("nameTen").innerHTML = mydata.menuItems[0].muoi[0].type + " - " + "$" + ten;
        document.getElementById("nameEleven").innerHTML = mydata.menuItems[0].muoiMot[0].type + " - " + "$" + eleven;
        document.getElementById("nameTwelve").innerHTML = mydata.menuItems[0].muoiHai[0].type + " - " + "$" + twelve;
        document.getElementById("nameThirteen").innerHTML = mydata.menuItems[0].muoiBa[0].type + " - " + "$" + thirteen;
        document.getElementById("nameFourteen").innerHTML = mydata.menuItems[0].muoiBon[0].type + " - " + "$" + fourteen;
        document.getElementById("nameFifteen").innerHTML = mydata.menuItems[0].muoiNam[0].type + " - " + "$" + fifteen;
        document.getElementById("nameSixteen").innerHTML = mydata.menuItems[0].muoiSau[0].type + " - " + "$" + sixteen;
        document.getElementById("nameSeventeen").innerHTML = mydata.menuItems[0].muoiBay[0].type + " - " + "$" + seventeen;
        document.getElementById("nameEighteen").innerHTML = mydata.menuItems[0].muoiTam[0].type + " - " + "$" + eighteen;
        document.getElementById("nameNineteen").innerHTML = mydata.menuItems[0].muoiChin[0].type + " - " + "$" + nineteen;

        document.getElementById("desOne").innerHTML = mydata.menuItems[0].mot[0].description;
        document.getElementById("desTwo").innerHTML = mydata.menuItems[0].hai[0].description;
        document.getElementById("desThree").innerHTML = mydata.menuItems[0].ba[0].description;
        document.getElementById("desFour").innerHTML = mydata.menuItems[0].bon[0].description;
        document.getElementById("desFive").innerHTML = mydata.menuItems[0].nam[0].description;
        document.getElementById("desSix").innerHTML = mydata.menuItems[0].sau[0].description;
        document.getElementById("desSeven").innerHTML = mydata.menuItems[0].bay[0].description;
        document.getElementById("desEight").innerHTML = mydata.menuItems[0].tam[0].description;
        document.getElementById("desNine").innerHTML = mydata.menuItems[0].chin[0].description;
        document.getElementById("desTen").innerHTML = mydata.menuItems[0].muoi[0].description;
        document.getElementById("desEleven").innerHTML = mydata.menuItems[0].muoiMot[0].description;
        document.getElementById("desTwelve").innerHTML = mydata.menuItems[0].muoiHai[0].description;
        document.getElementById("desThirteen").innerHTML = mydata.menuItems[0].muoiBa[0].description;
        document.getElementById("desFourteen").innerHTML = mydata.menuItems[0].muoiBon[0].description;
        document.getElementById("desFifteen").innerHTML = mydata.menuItems[0].muoiNam[0].description;
        document.getElementById("desSixteen").innerHTML = mydata.menuItems[0].muoiSau[0].description;
        document.getElementById("desSeventeen").innerHTML = mydata.menuItems[0].muoiBay[0].description;
        document.getElementById("desEighteen").innerHTML = mydata.menuItems[0].muoiTam[0].description;
        document.getElementById("desNineteen").innerHTML = mydata.menuItems[0].muoiChin[0].description;
    }

    function firstItem() {
        var valueOne = document.getElementById("inputOne").value; //get user input (quantity)

        var sub1 = one * valueOne; //calculate quantity x price
        var tax1 = sub1 * .04712; //get amt of tax
        var total1 = sub1 * 1.04712; //get total of item WITH tax

        localStorage.setItem("firstSub", sub1); //set subtotal
        localStorage.setItem("firstTax", tax1); //set tax
        localStorage.setItem("firstTotal", total1); //set total  

        var sub2 = Number(localStorage.getItem("secondSub"));
        var sub3 = Number(localStorage.getItem("thirdSub"));
        var sub4 = Number(localStorage.getItem("fourthSub"));
        var sub5 = Number(localStorage.getItem("fifthSub"));
        var sub6 = Number(localStorage.getItem("sixthSub"));
        var sub7 = Number(localStorage.getItem("seventhSub"));
        var sub8 = Number(localStorage.getItem("eighthSub"));
        var sub9 = Number(localStorage.getItem("ninthSub"));
        var sub10 = Number(localStorage.getItem("tenthSub"));
        var sub11 = Number(localStorage.getItem("eleventhSub"));
        var sub12 = Number(localStorage.getItem("twelfthSub"));
        var sub13 = Number(localStorage.getItem("thirteenthSub"));
        var sub14 = Number(localStorage.getItem("fourteenthSub"));
        var sub15 = Number(localStorage.getItem("fifteenthSub"));
        var sub16 = Number(localStorage.getItem("sixteenthSub"));
        var sub17 = Number(localStorage.getItem("seventeenthSub"));
        var sub18 = Number(localStorage.getItem("eighteenthSub"));
        var sub19 = Number(localStorage.getItem("nineteenthSub"));

        var tax2 = Number(localStorage.getItem("secondTax"));
        var tax3 = Number(localStorage.getItem("thirdTax"));
        var tax4 = Number(localStorage.getItem("fourthTax"));
        var tax5 = Number(localStorage.getItem("fifthTax"));
        var tax6 = Number(localStorage.getItem("sixthTax"));
        var tax7 = Number(localStorage.getItem("seventhTax"));
        var tax8 = Number(localStorage.getItem("eighthTax"));
        var tax9 = Number(localStorage.getItem("ninthTax"));
        var tax10 = Number(localStorage.getItem("tenthTax"));
        var tax11 = Number(localStorage.getItem("eleventhTax"));
        var tax12 = Number(localStorage.getItem("twelfthTax"));
        var tax13 = Number(localStorage.getItem("thirteenthTax"));
        var tax14 = Number(localStorage.getItem("fourteenthTax"));
        var tax15 = Number(localStorage.getItem("fifteenthTax"));
        var tax16 = Number(localStorage.getItem("sixteenthTax"));
        var tax17 = Number(localStorage.getItem("seventeenthTax"));
        var tax18 = Number(localStorage.getItem("eighteenthTax"));
        var tax19 = Number(localStorage.getItem("nineteenthTax"));

        var total2 = Number(localStorage.getItem("secondTotal"));
        var total3 = Number(localStorage.getItem("thirdTotal"));
        var total4 = Number(localStorage.getItem("fourthTotal"));
        var total5 = Number(localStorage.getItem("fifthTotal"));
        var total6 = Number(localStorage.getItem("sixthTotal"));
        var total7 = Number(localStorage.getItem("seventhTotal"));
        var total8 = Number(localStorage.getItem("eighthTotal"));
        var total9 = Number(localStorage.getItem("ninthTotal"));
        var total10 = Number(localStorage.getItem("tenthTotal"));
        var total11 = Number(localStorage.getItem("eleventhTotal"));
        var total12 = Number(localStorage.getItem("twelfthTotal"));
        var total13 = Number(localStorage.getItem("thirteenthTotal"));
        var total14 = Number(localStorage.getItem("fourteenthTotal"));
        var total15 = Number(localStorage.getItem("fifteenthTotal"));
        var total16 = Number(localStorage.getItem("sixteenthTotal"));
        var total17 = Number(localStorage.getItem("seventeenthTotal"));
        var total18 = Number(localStorage.getItem("eighteenthTotal"));
        var total19 = Number(localStorage.getItem("nineteenthTotal"));

        var sub = sub1 + sub2 + sub3 + sub4 + sub5 + sub6 + sub7 + sub8 + sub9 + sub10 + sub11 + sub12 + 
                sub13 + sub14 + sub15 + sub16 + sub17 + sub18 + sub19;
        var tax = tax1 + tax2 + tax3 + tax4 + tax5 + tax6 +  tax7 + tax8 + tax9 + tax10 + tax11 +  tax12 + 
                tax13 + tax14 + tax17 + tax16 + tax18 + tax19;
        var total = total1 + total2 + total3 + total4 + total5 + total6 + total7 + total8 + total9 + total10 + total11 + total12 + 
                total13 + total14 + total15 + total16 + total17 + total18 + total19;

        var display = mydata.menuItems[0].mot[0].type + " x " + valueOne + " = $" + sub1;
        localStorage.setItem("disOne", display);

        document.getElementById("sub").innerHTML = "$" + sub.toFixed(2); //display subtotal
        document.getElementById("tax").innerHTML = "$" + tax.toFixed(2); //display tax
        document.getElementById("total").innerHTML = "$" + total.toFixed(2); //display total
    }
    inputOne.onkeypress = function() {
        if (event.keyCode == 13) {
            firstItem();
        }
    }

    function secondItem() {
        var valueTwo = document.getElementById("inputTwo").value;

        var sub2 = two * valueTwo;
        var tax2 = sub2 * .04712;
        var total2 = sub2 * 1.04712;

        localStorage.setItem("secondSub", sub2);
        localStorage.setItem("secondTax", tax2);
        localStorage.setItem("secondTotal", total2);

        var sub1 = Number(localStorage.getItem("firstSub"));
        var sub3 = Number(localStorage.getItem("thirdSub"));
        var sub4 = Number(localStorage.getItem("fourthSub"));
        var sub5 = Number(localStorage.getItem("fifthSub"));
        var sub6 = Number(localStorage.getItem("sixthSub"));
        var sub7 = Number(localStorage.getItem("seventhSub"));
        var sub8 = Number(localStorage.getItem("eighthSub"));
        var sub9 = Number(localStorage.getItem("ninthSub"));
        var sub10 = Number(localStorage.getItem("tenthSub"));
        var sub11 = Number(localStorage.getItem("eleventhSub"));
        var sub12 = Number(localStorage.getItem("twelfthSub"));
        var sub13 = Number(localStorage.getItem("thirteenthSub"));
        var sub14 = Number(localStorage.getItem("fourteenthSub"));
        var sub15 = Number(localStorage.getItem("fifteenthSub"));
        var sub16 = Number(localStorage.getItem("sixteenthSub"));
        var sub17 = Number(localStorage.getItem("seventeenthSub"));
        var sub18 = Number(localStorage.getItem("eighteenthSub"));
        var sub19 = Number(localStorage.getItem("nineteenthSub"));

        var tax1 = Number(localStorage.getItem("firstTax"));
        var tax3 = Number(localStorage.getItem("thirdTax"));
        var tax4 = Number(localStorage.getItem("fourthTax"));
        var tax5 = Number(localStorage.getItem("fifthTax"));
        var tax6 = Number(localStorage.getItem("sixthTax"));
        var tax7 = Number(localStorage.getItem("seventhTax"));
        var tax8 = Number(localStorage.getItem("eighthTax"));
        var tax9 = Number(localStorage.getItem("ninthTax"));
        var tax10 = Number(localStorage.getItem("tenthTax"));
        var tax11 = Number(localStorage.getItem("eleventhTax"));
        var tax12 = Number(localStorage.getItem("twelfthTax"));
        var tax13 = Number(localStorage.getItem("thirteenthTax"));
        var tax14 = Number(localStorage.getItem("fourteenthTax"));
        var tax15 = Number(localStorage.getItem("fifteenthTax"));
        var tax16 = Number(localStorage.getItem("sixteenthTax"));
        var tax17 = Number(localStorage.getItem("seventeenthTax"));
        var tax18 = Number(localStorage.getItem("eighteenthTax"));
        var tax19 = Number(localStorage.getItem("nineteenthTax"));

        var total1 = Number(localStorage.getItem("firstTotal"));
        var total3 = Number(localStorage.getItem("thirdTotal"));
        var total4 = Number(localStorage.getItem("fourthTotal"));
        var total5 = Number(localStorage.getItem("fifthTotal"));
        var total6 = Number(localStorage.getItem("sixthTotal"));
        var total7 = Number(localStorage.getItem("seventhTotal"));
        var total8 = Number(localStorage.getItem("eighthTotal"));
        var total9 = Number(localStorage.getItem("ninthTotal"));
        var total10 = Number(localStorage.getItem("tenthTotal"));
        var total11 = Number(localStorage.getItem("eleventhTotal"));
        var total12 = Number(localStorage.getItem("twelfthTotal"));
        var total13 = Number(localStorage.getItem("thirteenthTotal"));
        var total14 = Number(localStorage.getItem("fourteenthTotal"));
        var total15 = Number(localStorage.getItem("fifteenthTotal"));
        var total16 = Number(localStorage.getItem("sixteenthTotal"));
        var total17 = Number(localStorage.getItem("seventeenthTotal"));
        var total18 = Number(localStorage.getItem("eighteenthTotal"));
        var total19 = Number(localStorage.getItem("nineteenthTotal"));

        var sub = sub1 + sub2 + sub3 + sub4 + sub5 + sub6 + sub7 + sub8 + sub9 + sub10 + sub11 + sub12 + 
                sub13 + sub14 + sub15 + sub16 + sub17 + sub18 + sub19;
        var tax = tax1 + tax2 + tax3 + tax4 + tax5 + tax6 +  tax7 + tax8 + tax9 + tax10 + tax11 +  tax12 + 
                tax13 + tax14 + tax17 + tax16 + tax18 + tax19;
        var total = total1 + total2 + total3 + total4 + total5 + total6 + total7 + total8 + total9 + total10 + total11 + total12 + 
                total13 + total14 + total15 + total16 + total17 + total18 + total19;

        var display = mydata.menuItems[0].hai[0].type + " x " + valueTwo + " = $" + sub2;
        localStorage.setItem("disTwo", display);

        document.getElementById("sub").innerHTML = "$" + sub.toFixed(2);
        document.getElementById("tax").innerHTML = "$" + tax.toFixed(2);
        document.getElementById("total").innerHTML = "$" + total.toFixed(2);
    }
    inputTwo.onkeypress = function () {
        if (event.keyCode == 13) {
            secondItem();
        }
    }

    function thirdItem() {
        var valueThree = document.getElementById("inputThree").value;

        var sub3 = three * valueThree;
        var tax3 = sub3 * .04712;
        var total3 = sub3 * 1.04712;

        localStorage.setItem("thirdSub", sub3);
        localStorage.setItem("thirdTax", tax3);
        localStorage.setItem("thirdTotal", total3);
        
        var sub1 = Number(localStorage.getItem("firstSub"));
        var sub2 = Number(localStorage.getItem("secondSub"));
        var sub4 = Number(localStorage.getItem("fourthSub"));
        var sub5 = Number(localStorage.getItem("fifthSub"));
        var sub6 = Number(localStorage.getItem("sixthSub"));
        var sub7 = Number(localStorage.getItem("seventhSub"));
        var sub8 = Number(localStorage.getItem("eighthSub"));
        var sub9 = Number(localStorage.getItem("ninthSub"));
        var sub10 = Number(localStorage.getItem("tenthSub"));
        var sub11 = Number(localStorage.getItem("eleventhSub"));
        var sub12 = Number(localStorage.getItem("twelfthSub"));
        var sub13 = Number(localStorage.getItem("thirteenthSub"));
        var sub14 = Number(localStorage.getItem("fourteenthSub"));
        var sub15 = Number(localStorage.getItem("fifteenthSub"));
        var sub16 = Number(localStorage.getItem("sixteenthSub"));
        var sub17 = Number(localStorage.getItem("seventeenthSub"));
        var sub18 = Number(localStorage.getItem("eighteenthSub"));
        var sub19 = Number(localStorage.getItem("nineteenthSub"));

        var tax1 = Number(localStorage.getItem("firstTax"));
        var tax2 = Number(localStorage.getItem("secondTax"));
        var tax4 = Number(localStorage.getItem("fourthTax"));
        var tax5 = Number(localStorage.getItem("fifthTax"));
        var tax6 = Number(localStorage.getItem("sixthTax"));
        var tax7 = Number(localStorage.getItem("seventhTax"));
        var tax8 = Number(localStorage.getItem("eighthTax"));
        var tax9 = Number(localStorage.getItem("ninthTax"));
        var tax10 = Number(localStorage.getItem("tenthTax"));
        var tax11 = Number(localStorage.getItem("eleventhTax"));
        var tax12 = Number(localStorage.getItem("twelfthTax"));
        var tax13 = Number(localStorage.getItem("thirteenthTax"));
        var tax14 = Number(localStorage.getItem("fourteenthTax"));
        var tax15 = Number(localStorage.getItem("fifteenthTax"));
        var tax16 = Number(localStorage.getItem("sixteenthTax"));
        var tax17 = Number(localStorage.getItem("seventeenthTax"));
        var tax18 = Number(localStorage.getItem("eighteenthTax"));
        var tax19 = Number(localStorage.getItem("nineteenthTax"));

        var total1 = Number(localStorage.getItem("firstTotal"));
        var total2 = Number(localStorage.getItem("secondTotal"));
        var total4 = Number(localStorage.getItem("fourthTotal"));
        var total5 = Number(localStorage.getItem("fifthTotal"));
        var total6 = Number(localStorage.getItem("sixthTotal"));
        var total7 = Number(localStorage.getItem("seventhTotal"));
        var total8 = Number(localStorage.getItem("eighthTotal"));
        var total9 = Number(localStorage.getItem("ninthTotal"));
        var total10 = Number(localStorage.getItem("tenthTotal"));
        var total11 = Number(localStorage.getItem("eleventhTotal"));
        var total12 = Number(localStorage.getItem("twelfthTotal"));
        var total13 = Number(localStorage.getItem("thirteenthTotal"));
        var total14 = Number(localStorage.getItem("fourteenthTotal"));
        var total15 = Number(localStorage.getItem("fifteenthTotal"));
        var total16 = Number(localStorage.getItem("sixteenthTotal"));
        var total17 = Number(localStorage.getItem("seventeenthTotal"));
        var total18 = Number(localStorage.getItem("eighteenthTotal"));
        var total19 = Number(localStorage.getItem("nineteenthTotal"));

        var sub = sub1 + sub2 + sub3 + sub4 + sub5 + sub6 + sub7 + sub8 + sub9 + sub10 + sub11 + sub12 + 
                sub13 + sub14 + sub15 + sub16 + sub17 + sub18 + sub19;
        var tax = tax1 + tax2 + tax3 + tax4 + tax5 + tax6 +  tax7 + tax8 + tax9 + tax10 + tax11 +  tax12 + 
                tax13 + tax14 + tax17 + tax16 + tax18 + tax19;
        var total = total1 + total2 + total3 + total4 + total5 + total6 + total7 + total8 + total9 + total10 + total11 + total12 + 
                total13 + total14 + total15 + total16 + total17 + total18 + total19;
        
        var display = mydata.menuItems[0].ba[0].type + " x " + valueThree + " = $" + sub3;
        localStorage.setItem("disThree", display);

        document.getElementById("sub").innerHTML = "$" + sub.toFixed(2);
        document.getElementById("tax").innerHTML = "$" + tax.toFixed(2);
        document.getElementById("total").innerHTML = "$" + total.toFixed(2);
    }

    inputThree.onkeypress = function () {
        if (event.keyCode == 13) {
            thirdItem();
        }
    }

    function fourthItem() {
        var valueFour = document.getElementById("inputFour").value;

        var sub4 = four * valueFour;
        var tax4 = sub4 * .04712;
        var total4 = sub4 * 1.04712;

        localStorage.setItem("fourthSub", sub4);
        localStorage.setItem("fourthTax", tax4);
        localStorage.setItem("fourthTotal", total4);

        var sub1 = Number(localStorage.getItem("firstSub"));
        var sub2 = Number(localStorage.getItem("secondSub"));
        var sub3 = Number(localStorage.getItem("thirdSub"));
        var sub5 = Number(localStorage.getItem("fifthSub"));
        var sub6 = Number(localStorage.getItem("sixthSub"));
        var sub7 = Number(localStorage.getItem("seventhSub"));
        var sub8 = Number(localStorage.getItem("eighthSub"));
        var sub9 = Number(localStorage.getItem("ninthSub"));
        var sub10 = Number(localStorage.getItem("tenthSub"));
        var sub11 = Number(localStorage.getItem("eleventhSub"));
        var sub12 = Number(localStorage.getItem("twelfthSub"));
        var sub13 = Number(localStorage.getItem("thirteenthSub"));
        var sub14 = Number(localStorage.getItem("fourteenthSub"));
        var sub15 = Number(localStorage.getItem("fifteenthSub"));
        var sub16 = Number(localStorage.getItem("sixteenthSub"));
        var sub17 = Number(localStorage.getItem("seventeenthSub"));
        var sub18 = Number(localStorage.getItem("eighteenthSub"));
        var sub19 = Number(localStorage.getItem("nineteenthSub"));

        var tax1 = Number(localStorage.getItem("firstTax"));
        var tax2 = Number(localStorage.getItem("secondTax"));
        var tax3 = Number(localStorage.getItem("thirdTax"));
        var tax5 = Number(localStorage.getItem("fifthTax"));
        var tax6 = Number(localStorage.getItem("sixthTax"));
        var tax7 = Number(localStorage.getItem("seventhTax"));
        var tax8 = Number(localStorage.getItem("eighthTax"));
        var tax9 = Number(localStorage.getItem("ninthTax"));
        var tax10 = Number(localStorage.getItem("tenthTax"));
        var tax11 = Number(localStorage.getItem("eleventhTax"));
        var tax12 = Number(localStorage.getItem("twelfthTax"));
        var tax13 = Number(localStorage.getItem("thirteenthTax"));
        var tax14 = Number(localStorage.getItem("fourteenthTax"));
        var tax15 = Number(localStorage.getItem("fifteenthTax"));
        var tax16 = Number(localStorage.getItem("sixteenthTax"));
        var tax17 = Number(localStorage.getItem("seventeenthTax"));
        var tax18 = Number(localStorage.getItem("eighteenthTax"));
        var tax19 = Number(localStorage.getItem("nineteenthTax"));

        var total1 = Number(localStorage.getItem("firstTotal"));
        var total2 = Number(localStorage.getItem("secondTotal"));
        var total3 = Number(localStorage.getItem("thirdTotal"));
        var total5 = Number(localStorage.getItem("fifthTotal"));
        var total6 = Number(localStorage.getItem("sixthTotal"));
        var total7 = Number(localStorage.getItem("seventhTotal"));
        var total8 = Number(localStorage.getItem("eighthTotal"));
        var total9 = Number(localStorage.getItem("ninthTotal"));
        var total10 = Number(localStorage.getItem("tenthTotal"));
        var total11 = Number(localStorage.getItem("eleventhTotal"));
        var total12 = Number(localStorage.getItem("twelfthTotal"));
        var total13 = Number(localStorage.getItem("thirteenthTotal"));
        var total14 = Number(localStorage.getItem("fourteenthTotal"));
        var total15 = Number(localStorage.getItem("fifteenthTotal"));
        var total16 = Number(localStorage.getItem("sixteenthTotal"));
        var total17 = Number(localStorage.getItem("seventeenthTotal"));
        var total18 = Number(localStorage.getItem("eighteenthTotal"));
        var total19 = Number(localStorage.getItem("nineteenthTotal"));

        var sub = sub1 + sub2 + sub3 + sub4 + sub5 + sub6 + sub7 + sub8 + sub9 + sub10 + sub11 + sub12 + 
                sub13 + sub14 + sub15 + sub16 + sub17 + sub18 + sub19;
        var tax = tax1 + tax2 + tax3 + tax4 + tax5 + tax6 +  tax7 + tax8 + tax9 + tax10 + tax11 +  tax12 + 
                tax13 + tax14 + tax17 + tax16 + tax18 + tax19;
        var total = total1 + total2 + total3 + total4 + total5 + total6 + total7 + total8 + total9 + total10 + total11 + total12 + 
                total13 + total14 + total15 + total16 + total17 + total18 + total19;
                
        var display = mydata.menuItems[0].bon[0].type + " x " + valueFour + " = $" + sub4;
        localStorage.setItem("disFour", display);

        document.getElementById("sub").innerHTML = "$" + sub.toFixed(2);
        document.getElementById("tax").innerHTML = "$" + tax.toFixed(2);
        document.getElementById("total").innerHTML = "$" + total.toFixed(2);
    }
    inputFour.onkeypress = function () {
        if (event.keyCode == 13) {
            fourthItem();
        }
    }

    function fifthItem() {
        var valueFive = document.getElementById("inputFive").value;

        var sub5 = five * valueFive;
        var tax5 = sub5 * .04712;
        var total5 = sub5 * 1.04712;

        localStorage.setItem("fifthSub", sub5);
        localStorage.setItem("fifthTax", tax5);
        localStorage.setItem("fifthTotal", total5);

        var sub1 = Number(localStorage.getItem("firstSub"));
        var sub2 = Number(localStorage.getItem("secondSub"));
        var sub3 = Number(localStorage.getItem("thirdSub"));
        var sub4 = Number(localStorage.getItem("fourthSub"));
        var sub6 = Number(localStorage.getItem("sixthSub"));
        var sub7 = Number(localStorage.getItem("seventhSub"));
        var sub8 = Number(localStorage.getItem("eighthSub"));
        var sub9 = Number(localStorage.getItem("ninthSub"));
        var sub10 = Number(localStorage.getItem("tenthSub"));
        var sub11 = Number(localStorage.getItem("eleventhSub"));
        var sub12 = Number(localStorage.getItem("twelfthSub"));
        var sub13 = Number(localStorage.getItem("thirteenthSub"));
        var sub14 = Number(localStorage.getItem("fourteenthSub"));
        var sub15 = Number(localStorage.getItem("fifteenthSub"));
        var sub16 = Number(localStorage.getItem("sixteenthSub"));
        var sub17 = Number(localStorage.getItem("seventeenthSub"));
        var sub18 = Number(localStorage.getItem("eighteenthSub"));
        var sub19 = Number(localStorage.getItem("nineteenthSub"));

        var tax1 = Number(localStorage.getItem("firstTax"));
        var tax2 = Number(localStorage.getItem("secondTax"));
        var tax3 = Number(localStorage.getItem("thirdTax"));
        var tax4 = Number(localStorage.getItem("fourthTax"));
        var tax6 = Number(localStorage.getItem("sixthTax"));
        var tax7 = Number(localStorage.getItem("seventhTax"));
        var tax8 = Number(localStorage.getItem("eighthTax"));
        var tax9 = Number(localStorage.getItem("ninthTax"));
        var tax10 = Number(localStorage.getItem("tenthTax"));
        var tax11 = Number(localStorage.getItem("eleventhTax"));
        var tax12 = Number(localStorage.getItem("twelfthTax"));
        var tax13 = Number(localStorage.getItem("thirteenthTax"));
        var tax14 = Number(localStorage.getItem("fourteenthTax"));
        var tax15 = Number(localStorage.getItem("fifteenthTax"));
        var tax16 = Number(localStorage.getItem("sixteenthTax"));
        var tax17 = Number(localStorage.getItem("seventeenthTax"));
        var tax18 = Number(localStorage.getItem("eighteenthTax"));
        var tax19 = Number(localStorage.getItem("nineteenthTax"));

        var total1 = Number(localStorage.getItem("firstTotal"));
        var total2 = Number(localStorage.getItem("secondTotal"));
        var total3 = Number(localStorage.getItem("thirdTotal"));
        var total4 = Number(localStorage.getItem("fourthTotal"));
        var total6 = Number(localStorage.getItem("sixthTotal"));
        var total7 = Number(localStorage.getItem("seventhTotal"));
        var total8 = Number(localStorage.getItem("eighthTotal"));
        var total9 = Number(localStorage.getItem("ninthTotal"));
        var total10 = Number(localStorage.getItem("tenthTotal"));
        var total11 = Number(localStorage.getItem("eleventhTotal"));
        var total12 = Number(localStorage.getItem("twelfthTotal"));
        var total13 = Number(localStorage.getItem("thirteenthTotal"));
        var total14 = Number(localStorage.getItem("fourteenthTotal"));
        var total15 = Number(localStorage.getItem("fifteenthTotal"));
        var total16 = Number(localStorage.getItem("sixteenthTotal"));
        var total17 = Number(localStorage.getItem("seventeenthTotal"));
        var total18 = Number(localStorage.getItem("eighteenthTotal"));
        var total19 = Number(localStorage.getItem("nineteenthTotal"));

        var sub = sub1 + sub2 + sub3 + sub4 + sub5 + sub6 + sub7 + sub8 + sub9 + sub10 + sub11 + sub12 + 
                sub13 + sub14 + sub15 + sub16 + sub17 + sub18 + sub19;
        var tax = tax1 + tax2 + tax3 + tax4 + tax5 + tax6 +  tax7 + tax8 + tax9 + tax10 + tax11 +  tax12 + 
                tax13 + tax14 + tax17 + tax16 + tax18 + tax19;
        var total = total1 + total2 + total3 + total4 + total5 + total6 + total7 + total8 + total9 + total10 + total11 + total12 + 
                total13 + total14 + total15 + total16 + total17 + total18 + total19;

        var display = mydata.menuItems[0].nam[0].type + " x " + valueFive + " = $" + sub5;
        localStorage.setItem("disFive", display);

        document.getElementById("sub").innerHTML = "$" + sub.toFixed(2);
        document.getElementById("tax").innerHTML = "$" + tax.toFixed(2);
        document.getElementById("total").innerHTML = "$" + total.toFixed(2);
    }
    inputFive.onkeypress = function () {
        if (event.keyCode == 13) {
            fifthItem();
        }
    }

    function sixthItem() {
        var valueSix = document.getElementById("inputSix").value;

        var sub6 = six * valueSix;
        var tax6 = sub6 * .04712;
        var total6 = sub6 * 1.04712;

        localStorage.setItem("sixthSub", sub6);
        localStorage.setItem("sixthTax", tax6);
        localStorage.setItem("sixthTotal", total6);

        var sub1 = Number(localStorage.getItem("firstSub"));
        var sub2 = Number(localStorage.getItem("secondSub"));
        var sub3 = Number(localStorage.getItem("thirdSub"));
        var sub4 = Number(localStorage.getItem("fourthSub"));
        var sub5 = Number(localStorage.getItem("fifthSub"));
        var sub7 = Number(localStorage.getItem("seventhSub"));
        var sub8 = Number(localStorage.getItem("eighthSub"));
        var sub9 = Number(localStorage.getItem("ninthSub"));
        var sub10 = Number(localStorage.getItem("tenthSub"));
        var sub11 = Number(localStorage.getItem("eleventhSub"));
        var sub12 = Number(localStorage.getItem("twelfthSub"));
        var sub13 = Number(localStorage.getItem("thirteenthSub"));
        var sub14 = Number(localStorage.getItem("fourteenthSub"));
        var sub15 = Number(localStorage.getItem("fifteenthSub"));
        var sub16 = Number(localStorage.getItem("sixteenthSub"));
        var sub17 = Number(localStorage.getItem("seventeenthSub"));
        var sub18 = Number(localStorage.getItem("eighteenthSub"));
        var sub19 = Number(localStorage.getItem("nineteenthSub"));

        var tax1 = Number(localStorage.getItem("firstTax"));
        var tax2 = Number(localStorage.getItem("secondTax"));
        var tax3 = Number(localStorage.getItem("thirdTax"));
        var tax4 = Number(localStorage.getItem("fourthTax"));
        var tax5 = Number(localStorage.getItem("fifthTax"));
        var tax7 = Number(localStorage.getItem("seventhTax"));
        var tax8 = Number(localStorage.getItem("eighthTax"));
        var tax9 = Number(localStorage.getItem("ninthTax"));
        var tax10 = Number(localStorage.getItem("tenthTax"));
        var tax11 = Number(localStorage.getItem("eleventhTax"));
        var tax12 = Number(localStorage.getItem("twelfthTax"));
        var tax13 = Number(localStorage.getItem("thirteenthTax"));
        var tax14 = Number(localStorage.getItem("fourteenthTax"));
        var tax15 = Number(localStorage.getItem("fifteenthTax"));
        var tax16 = Number(localStorage.getItem("sixteenthTax"));
        var tax17 = Number(localStorage.getItem("seventeenthTax"));
        var tax18 = Number(localStorage.getItem("eighteenthTax"));
        var tax19 = Number(localStorage.getItem("nineteenthTax"));

        var total1 = Number(localStorage.getItem("firstTotal"));
        var total2 = Number(localStorage.getItem("secondTotal"));
        var total3 = Number(localStorage.getItem("thirdTotal"));
        var total4 = Number(localStorage.getItem("fourthTotal"));
        var total5 = Number(localStorage.getItem("fifthTotal"));
        var total7 = Number(localStorage.getItem("seventhTotal"));
        var total8 = Number(localStorage.getItem("eighthTotal"));
        var total9 = Number(localStorage.getItem("ninthTotal"));
        var total10 = Number(localStorage.getItem("tenthTotal"));
        var total11 = Number(localStorage.getItem("eleventhTotal"));
        var total12 = Number(localStorage.getItem("twelfthTotal"));
        var total13 = Number(localStorage.getItem("thirteenthTotal"));
        var total14 = Number(localStorage.getItem("fourteenthTotal"));
        var total15 = Number(localStorage.getItem("fifteenthTotal"));
        var total16 = Number(localStorage.getItem("sixteenthTotal"));
        var total17 = Number(localStorage.getItem("seventeenthTotal"));
        var total18 = Number(localStorage.getItem("eighteenthTotal"));
        var total19 = Number(localStorage.getItem("nineteenthTotal"));

        var sub = sub1 + sub2 + sub3 + sub4 + sub5 + sub6 + sub7 + sub8 + sub9 + sub10 + sub11 + sub12 + 
                sub13 + sub14 + sub15 + sub16 + sub17 + sub18 + sub19;
        var tax = tax1 + tax2 + tax3 + tax4 + tax5 + tax6 +  tax7 + tax8 + tax9 + tax10 + tax11 +  tax12 + 
                tax13 + tax14 + tax17 + tax16 + tax18 + tax19;
        var total = total1 + total2 + total3 + total4 + total5 + total6 + total7 + total8 + total9 + total10 + total11 + total12 + 
                total13 + total14 + total15 + total16 + total17 + total18 + total19;

        var display = mydata.menuItems[0].sau[0].type + " x " + valueSix + " = $" + sub6;
        localStorage.setItem("disSix", display);

        document.getElementById("sub").innerHTML = "$" + sub.toFixed(2);
        document.getElementById("tax").innerHTML = "$" + tax.toFixed(2);
        document.getElementById("total").innerHTML = "$" + total.toFixed(2);
    }
    inputSix.onkeypress = function () {
        if (event.keyCode == 13) {
            sixthItem();
        }
    }

    function seventhItem() {
        var valueSeven = document.getElementById("inputSeven").value;

        var sub7 = seven * valueSeven;
        var tax7 = sub7 * .04712;
        var total7 = sub7 * 1.04712;

        localStorage.setItem("seventhSub", sub7);
        localStorage.setItem("seventhTax", tax7);
        localStorage.setItem("seventhTotal", total7);

        var sub1 = Number(localStorage.getItem("firstSub"));
        var sub2 = Number(localStorage.getItem("secondSub"));
        var sub3 = Number(localStorage.getItem("thirdSub"));
        var sub4 = Number(localStorage.getItem("fourthSub"));
        var sub5 = Number(localStorage.getItem("fifthSub"));
        var sub6 = Number(localStorage.getItem("sixthSub"));
        var sub8 = Number(localStorage.getItem("eighthSub"));
        var sub9 = Number(localStorage.getItem("ninthSub"));
        var sub10 = Number(localStorage.getItem("tenthSub"));
        var sub11 = Number(localStorage.getItem("eleventhSub"));
        var sub12 = Number(localStorage.getItem("twelfthSub"));
        var sub13 = Number(localStorage.getItem("thirteenthSub"));
        var sub14 = Number(localStorage.getItem("fourteenthSub"));
        var sub15 = Number(localStorage.getItem("fifteenthSub"));
        var sub16 = Number(localStorage.getItem("sixteenthSub"));
        var sub17 = Number(localStorage.getItem("seventeenthSub"));
        var sub18 = Number(localStorage.getItem("eighteenthSub"));
        var sub19 = Number(localStorage.getItem("nineteenthSub"));

        var tax1 = Number(localStorage.getItem("firstTax"));
        var tax2 = Number(localStorage.getItem("secondTax"));
        var tax3 = Number(localStorage.getItem("thirdTax"));
        var tax4 = Number(localStorage.getItem("fourthTax"));
        var tax5 = Number(localStorage.getItem("fifthTax"));
        var tax6 = Number(localStorage.getItem("sixthTax"));
        var tax8 = Number(localStorage.getItem("eighthTax"));
        var tax9 = Number(localStorage.getItem("ninthTax"));
        var tax10 = Number(localStorage.getItem("tenthTax"));
        var tax11 = Number(localStorage.getItem("eleventhTax"));
        var tax12 = Number(localStorage.getItem("twelfthTax"));
        var tax13 = Number(localStorage.getItem("thirteenthTax"));
        var tax14 = Number(localStorage.getItem("fourteenthTax"));
        var tax15 = Number(localStorage.getItem("fifteenthTax"));
        var tax16 = Number(localStorage.getItem("sixteenthTax"));
        var tax17 = Number(localStorage.getItem("seventeenthTax"));
        var tax18 = Number(localStorage.getItem("eighteenthTax"));
        var tax19 = Number(localStorage.getItem("nineteenthTax"));

        var total1 = Number(localStorage.getItem("firstTotal"));
        var total2 = Number(localStorage.getItem("secondTotal"));
        var total3 = Number(localStorage.getItem("thirdTotal"));
        var total4 = Number(localStorage.getItem("fourthTotal"));
        var total5 = Number(localStorage.getItem("fifthTotal"));
        var total6 = Number(localStorage.getItem("sixthTotal"));
        var total8 = Number(localStorage.getItem("eighthTotal"));
        var total9 = Number(localStorage.getItem("ninthTotal"));
        var total10 = Number(localStorage.getItem("tenthTotal"));
        var total11 = Number(localStorage.getItem("eleventhTotal"));
        var total12 = Number(localStorage.getItem("twelfthTotal"));
        var total13 = Number(localStorage.getItem("thirteenthTotal"));
        var total14 = Number(localStorage.getItem("fourteenthTotal"));
        var total15 = Number(localStorage.getItem("fifteenthTotal"));
        var total16 = Number(localStorage.getItem("sixteenthTotal"));
        var total17 = Number(localStorage.getItem("seventeenthTotal"));
        var total18 = Number(localStorage.getItem("eighteenthTotal"));
        var total19 = Number(localStorage.getItem("nineteenthTotal"));

        var sub = sub1 + sub2 + sub3 + sub4 + sub5 + sub6 + sub7 + sub8 + sub9 + sub10 + sub11 + sub12 + 
                sub13 + sub14 + sub15 + sub16 + sub17 + sub18 + sub19;
        var tax = tax1 + tax2 + tax3 + tax4 + tax5 + tax6 +  tax7 + tax8 + tax9 + tax10 + tax11 +  tax12 + 
                tax13 + tax14 + tax17 + tax16 + tax18 + tax19;
        var total = total1 + total2 + total3 + total4 + total5 + total6 + total7 + total8 + total9 + total10 + total11 + total12 + 
                total13 + total14 + total15 + total16 + total17 + total18 + total19;

        var display = mydata.menuItems[0].bay[0].type + " x " + valueSeven + " = $" + sub7;
        localStorage.setItem("disSeven", display);

        document.getElementById("sub").innerHTML = "$" + sub.toFixed(2);
        document.getElementById("tax").innerHTML = "$" + tax.toFixed(2);
        document.getElementById("total").innerHTML = "$" + total.toFixed(2);
    }
    inputSeven.onkeypress = function () {
        if (event.keyCode == 13) {
            seventhItem();
        }
    }

    function eighthItem() {
        var valueEight = document.getElementById("inputEight").value;

        var sub8 = eight * valueEight;
        var tax8 = sub8 * .04712;
        var total8 = sub8 * 1.04712;

        localStorage.setItem("eighthSub", sub8);
        localStorage.setItem("eighthTax", tax8);
        localStorage.setItem("eighthTotal", total8);

        var sub1 = Number(localStorage.getItem("firstSub"));
        var sub2 = Number(localStorage.getItem("secondSub"));
        var sub3 = Number(localStorage.getItem("thirdSub"));
        var sub4 = Number(localStorage.getItem("fourthSub"));
        var sub5 = Number(localStorage.getItem("fifthSub"));
        var sub6 = Number(localStorage.getItem("sixthSub"));
        var sub7 = Number(localStorage.getItem("seventhSub"));
        var sub9 = Number(localStorage.getItem("ninthSub"));
        var sub10 = Number(localStorage.getItem("tenthSub"));
        var sub11 = Number(localStorage.getItem("eleventhSub"));
        var sub12 = Number(localStorage.getItem("twelfthSub"));
        var sub13 = Number(localStorage.getItem("thirteenthSub"));
        var sub14 = Number(localStorage.getItem("fourteenthSub"));
        var sub15 = Number(localStorage.getItem("fifteenthSub"));
        var sub16 = Number(localStorage.getItem("sixteenthSub"));
        var sub17 = Number(localStorage.getItem("seventeenthSub"));
        var sub18 = Number(localStorage.getItem("eighteenthSub"));
        var sub19 = Number(localStorage.getItem("nineteenthSub"));

        var tax1 = Number(localStorage.getItem("firstTax"));
        var tax2 = Number(localStorage.getItem("secondTax"));
        var tax3 = Number(localStorage.getItem("thirdTax"));
        var tax4 = Number(localStorage.getItem("fourthTax"));
        var tax5 = Number(localStorage.getItem("fifthTax"));
        var tax6 = Number(localStorage.getItem("sixthTax"));
        var tax7 = Number(localStorage.getItem("seventhTax"));
        var tax9 = Number(localStorage.getItem("ninthTax"));
        var tax10 = Number(localStorage.getItem("tenthTax"));
        var tax11 = Number(localStorage.getItem("eleventhTax"));
        var tax12 = Number(localStorage.getItem("twelfthTax"));
        var tax13 = Number(localStorage.getItem("thirteenthTax"));
        var tax14 = Number(localStorage.getItem("fourteenthTax"));
        var tax15 = Number(localStorage.getItem("fifteenthTax"));
        var tax16 = Number(localStorage.getItem("sixteenthTax"));
        var tax17 = Number(localStorage.getItem("seventeenthTax"));
        var tax18 = Number(localStorage.getItem("eighteenthTax"));
        var tax19 = Number(localStorage.getItem("nineteenthTax"));

        var total1 = Number(localStorage.getItem("firstTotal"));
        var total2 = Number(localStorage.getItem("secondTotal"));
        var total3 = Number(localStorage.getItem("thirdTotal"));
        var total4 = Number(localStorage.getItem("fourthTotal"));
        var total5 = Number(localStorage.getItem("fifthTotal"));
        var total6 = Number(localStorage.getItem("sixthTotal"));
        var total7 = Number(localStorage.getItem("seventhTotal"));
        var total9 = Number(localStorage.getItem("ninthTotal"));
        var total10 = Number(localStorage.getItem("tenthTotal"));
        var total11 = Number(localStorage.getItem("eleventhTotal"));
        var total12 = Number(localStorage.getItem("twelfthTotal"));
        var total13 = Number(localStorage.getItem("thirteenthTotal"));
        var total14 = Number(localStorage.getItem("fourteenthTotal"));
        var total15 = Number(localStorage.getItem("fifteenthTotal"));
        var total16 = Number(localStorage.getItem("sixteenthTotal"));
        var total17 = Number(localStorage.getItem("seventeenthTotal"));
        var total18 = Number(localStorage.getItem("eighteenthTotal"));
        var total19 = Number(localStorage.getItem("nineteenthTotal"));

        var sub = sub1 + sub2 + sub3 + sub4 + sub5 + sub6 + sub7 + sub8 + sub9 + sub10 + sub11 + sub12 + 
                sub13 + sub14 + sub15 + sub16 + sub17 + sub18 + sub19;
        var tax = tax1 + tax2 + tax3 + tax4 + tax5 + tax6 +  tax7 + tax8 + tax9 + tax10 + tax11 +  tax12 + 
                tax13 + tax14 + tax17 + tax16 + tax18 + tax19;
        var total = total1 + total2 + total3 + total4 + total5 + total6 + total7 + total8 + total9 + total10 + total11 + total12 + 
                total13 + total14 + total15 + total16 + total17 + total18 + total19;

        var display = mydata.menuItems[0].tam[0].type + " x " + valueEight + " = $" + sub8;
        localStorage.setItem("disEight", display);

        document.getElementById("sub").innerHTML = "$" + sub.toFixed(2);
        document.getElementById("tax").innerHTML = "$" + tax.toFixed(2);
        document.getElementById("total").innerHTML = "$" + total.toFixed(2);
    }
    inputEight.onkeypress = function () {
        if (event.keyCode == 13) {
            eighthItem();
        }
    }

    function nineItem() {
        var valueNine = document.getElementById("inputNine").value;

        var sub9 = nine * valueNine;
        var tax9 = sub9 * .04712;
        var total9 = sub9 * 1.04712;

        localStorage.setItem("ninthSub", sub9);
        localStorage.setItem("ninthTax", tax9);
        localStorage.setItem("ninthTotal", total9);

        var sub1 = Number(localStorage.getItem("firstSub"));
        var sub2 = Number(localStorage.getItem("secondSub"));
        var sub3 = Number(localStorage.getItem("thirdSub"));
        var sub4 = Number(localStorage.getItem("fourthSub"));
        var sub5 = Number(localStorage.getItem("fifthSub"));
        var sub6 = Number(localStorage.getItem("sixthSub"));
        var sub7 = Number(localStorage.getItem("seventhSub"));
        var sub8 = Number(localStorage.getItem("eighthSub"));
        var sub10 = Number(localStorage.getItem("tenthSub"));
        var sub11 = Number(localStorage.getItem("eleventhSub"));
        var sub12 = Number(localStorage.getItem("twelfthSub"));
        var sub13 = Number(localStorage.getItem("thirteenthSub"));
        var sub14 = Number(localStorage.getItem("fourteenthSub"));
        var sub15 = Number(localStorage.getItem("fifteenthSub"));
        var sub16 = Number(localStorage.getItem("sixteenthSub"));
        var sub17 = Number(localStorage.getItem("seventeenthSub"));
        var sub18 = Number(localStorage.getItem("eighteenthSub"));
        var sub19 = Number(localStorage.getItem("nineteenthSub"));

        var tax1 = Number(localStorage.getItem("firstTax"));
        var tax2 = Number(localStorage.getItem("secondTax"));
        var tax3 = Number(localStorage.getItem("thirdTax"));
        var tax4 = Number(localStorage.getItem("fourthTax"));
        var tax5 = Number(localStorage.getItem("fifthTax"));
        var tax6 = Number(localStorage.getItem("sixthTax"));
        var tax7 = Number(localStorage.getItem("seventhTax"));
        var tax8 = Number(localStorage.getItem("eighthTax"));
        var tax10 = Number(localStorage.getItem("tenthTax"));
        var tax11 = Number(localStorage.getItem("eleventhTax"));
        var tax12 = Number(localStorage.getItem("twelfthTax"));
        var tax13 = Number(localStorage.getItem("thirteenthTax"));
        var tax14 = Number(localStorage.getItem("fourteenthTax"));
        var tax15 = Number(localStorage.getItem("fifteenthTax"));
        var tax16 = Number(localStorage.getItem("sixteenthTax"));
        var tax17 = Number(localStorage.getItem("seventeenthTax"));
        var tax18 = Number(localStorage.getItem("eighteenthTax"));
        var tax19 = Number(localStorage.getItem("nineteenthTax"));

        var total1 = Number(localStorage.getItem("firstTotal"));
        var total2 = Number(localStorage.getItem("secondTotal"));
        var total3 = Number(localStorage.getItem("thirdTotal"));
        var total4 = Number(localStorage.getItem("fourthTotal"));
        var total5 = Number(localStorage.getItem("fifthTotal"));
        var total6 = Number(localStorage.getItem("sixthTotal"));
        var total7 = Number(localStorage.getItem("seventhTotal"));
        var total8 = Number(localStorage.getItem("eighthTotal"));
        var total10 = Number(localStorage.getItem("tenthTotal"));
        var total11 = Number(localStorage.getItem("eleventhTotal"));
        var total12 = Number(localStorage.getItem("twelfthTotal"));
        var total13 = Number(localStorage.getItem("thirteenthTotal"));
        var total14 = Number(localStorage.getItem("fourteenthTotal"));
        var total15 = Number(localStorage.getItem("fifteenthTotal"));
        var total16 = Number(localStorage.getItem("sixteenthTotal"));
        var total17 = Number(localStorage.getItem("seventeenthTotal"));
        var total18 = Number(localStorage.getItem("eighteenthTotal"));
        var total19 = Number(localStorage.getItem("nineteenthTotal"));

        var sub = sub1 + sub2 + sub3 + sub4 + sub5 + sub6 + sub7 + sub8 + sub9 + sub10 + sub11 + sub12 + 
                sub13 + sub14 + sub15 + sub16 + sub17 + sub18 + sub19;
        var tax = tax1 + tax2 + tax3 + tax4 + tax5 + tax6 +  tax7 + tax8 + tax9 + tax10 + tax11 +  tax12 + 
                tax13 + tax14 + tax17 + tax16 + tax18 + tax19;
        var total = total1 + total2 + total3 + total4 + total5 + total6 + total7 + total8 + total9 + total10 + total11 + total12 + 
                total13 + total14 + total15 + total16 + total17 + total18 + total19;

        var display = mydata.menuItems[0].chin[0].type + " x " + valueNine + " = $" + sub9;
        localStorage.setItem("disNine", display);

        document.getElementById("sub").innerHTML = "$" + sub.toFixed(2);
        document.getElementById("tax").innerHTML = "$" + tax.toFixed(2);
        document.getElementById("total").innerHTML = "$" + total.toFixed(2);
    }
    inputNine.onkeypress = function () {
        if (event.keyCode == 13) {
            nineItem();
        }
    }

    function tenthItem() {
        var valueTen = document.getElementById("inputTen").value;

        var sub10 = ten * valueTen;
        var tax10 = sub10 * .04712;
        var total10 = sub10 * 1.04712;

        localStorage.setItem("tenthSub", sub10);
        localStorage.setItem("tenthTax", tax10);
        localStorage.setItem("tenthTotal", total10);

        var sub1 = Number(localStorage.getItem("firstSub"));
        var sub2 = Number(localStorage.getItem("secondSub"));
        var sub3 = Number(localStorage.getItem("thirdSub"));
        var sub4 = Number(localStorage.getItem("fourthSub"));
        var sub5 = Number(localStorage.getItem("fifthSub"));
        var sub6 = Number(localStorage.getItem("sixthSub"));
        var sub7 = Number(localStorage.getItem("seventhSub"));
        var sub8 = Number(localStorage.getItem("eighthSub"));
        var sub9 = Number(localStorage.getItem("ninthSub"));
        var sub11 = Number(localStorage.getItem("eleventhSub"));
        var sub12 = Number(localStorage.getItem("twelfthSub"));
        var sub13 = Number(localStorage.getItem("thirteenthSub"));
        var sub14 = Number(localStorage.getItem("fourteenthSub"));
        var sub15 = Number(localStorage.getItem("fifteenthSub"));
        var sub16 = Number(localStorage.getItem("sixteenthSub"));
        var sub17 = Number(localStorage.getItem("seventeenthSub"));
        var sub18 = Number(localStorage.getItem("eighteenthSub"));
        var sub19 = Number(localStorage.getItem("nineteenthSub"));

        var tax1 = Number(localStorage.getItem("firstTax"));
        var tax2 = Number(localStorage.getItem("secondTax"));
        var tax3 = Number(localStorage.getItem("thirdTax"));
        var tax4 = Number(localStorage.getItem("fourthTax"));
        var tax5 = Number(localStorage.getItem("fifthTax"));
        var tax6 = Number(localStorage.getItem("sixthTax"));
        var tax7 = Number(localStorage.getItem("seventhTax"));
        var tax8 = Number(localStorage.getItem("eighthTax"));
        var tax9 = Number(localStorage.getItem("ninthTax"));
        var tax11 = Number(localStorage.getItem("eleventhTax"));
        var tax12 = Number(localStorage.getItem("twelfthTax"));
        var tax13 = Number(localStorage.getItem("thirteenthTax"));
        var tax14 = Number(localStorage.getItem("fourteenthTax"));
        var tax15 = Number(localStorage.getItem("fifteenthTax"));
        var tax16 = Number(localStorage.getItem("sixteenthTax"));
        var tax17 = Number(localStorage.getItem("seventeenthTax"));
        var tax18 = Number(localStorage.getItem("eighteenthTax"));
        var tax19 = Number(localStorage.getItem("nineteenthTax"));

        var total1 = Number(localStorage.getItem("firstTotal"));
        var total2 = Number(localStorage.getItem("secondTotal"));
        var total3 = Number(localStorage.getItem("thirdTotal"));
        var total4 = Number(localStorage.getItem("fourthTotal"));
        var total5 = Number(localStorage.getItem("fifthTotal"));
        var total6 = Number(localStorage.getItem("sixthTotal"));
        var total7 = Number(localStorage.getItem("seventhTotal"));
        var total8 = Number(localStorage.getItem("eighthTotal"));
        var total9 = Number(localStorage.getItem("ninthTotal"));
        var total11 = Number(localStorage.getItem("eleventhTotal"));
        var total12 = Number(localStorage.getItem("twelfthTotal"));
        var total13 = Number(localStorage.getItem("thirteenthTotal"));
        var total14 = Number(localStorage.getItem("fourteenthTotal"));
        var total15 = Number(localStorage.getItem("fifteenthTotal"));
        var total16 = Number(localStorage.getItem("sixteenthTotal"));
        var total17 = Number(localStorage.getItem("seventeenthTotal"));
        var total18 = Number(localStorage.getItem("eighteenthTotal"));
        var total19 = Number(localStorage.getItem("nineteenthTotal"));

        var sub = sub1 + sub2 + sub3 + sub4 + sub5 + sub6 + sub7 + sub8 + sub9 + sub10 + sub11 + sub12 + 
                sub13 + sub14 + sub15 + sub16 + sub17 + sub18 + sub19;
        var tax = tax1 + tax2 + tax3 + tax4 + tax5 + tax6 +  tax7 + tax8 + tax9 + tax10 + tax11 +  tax12 + 
                tax13 + tax14 + tax17 + tax16 + tax18 + tax19;
        var total = total1 + total2 + total3 + total4 + total5 + total6 + total7 + total8 + total9 + total10 + total11 + total12 + 
                total13 + total14 + total15 + total16 + total17 + total18 + total19;

        var display = mydata.menuItems[0].muoi[0].type + " x " + valueTen + " = $" + sub10;
        localStorage.setItem("disTen", display);

        document.getElementById("sub").innerHTML = "$" + sub.toFixed(2);
        document.getElementById("tax").innerHTML = "$" + tax.toFixed(2);
        document.getElementById("total").innerHTML = "$" + total.toFixed(2);
    }
    inputTen.onkeypress = function () {
        if (event.keyCode == 13) {
            tenthItem();
        }
    }

    function eleventhItem() {
        var valueEleven = document.getElementById("inputEleven").value;

        var sub11 = eleven * valueEleven;
        var tax11 = sub11 * .04712;
        var total11 = sub11 * 1.04712;

        localStorage.setItem("eleventhSub", sub11);
        localStorage.setItem("eleventhTax", tax11);
        localStorage.setItem("eleventhTotal", total11);

        var sub1 = Number(localStorage.getItem("firstSub"));
        var sub2 = Number(localStorage.getItem("secondSub"));
        var sub3 = Number(localStorage.getItem("thirdSub"));
        var sub4 = Number(localStorage.getItem("fourthSub"));
        var sub5 = Number(localStorage.getItem("fifthSub"));
        var sub6 = Number(localStorage.getItem("sixthSub"));
        var sub7 = Number(localStorage.getItem("seventhSub"));
        var sub8 = Number(localStorage.getItem("eighthSub"));
        var sub9 = Number(localStorage.getItem("ninthSub"));
        var sub10 = Number(localStorage.getItem("tenthSub"));
        var sub12 = Number(localStorage.getItem("twelfthSub"));
        var sub13 = Number(localStorage.getItem("thirteenthSub"));
        var sub14 = Number(localStorage.getItem("fourteenthSub"));
        var sub15 = Number(localStorage.getItem("fifteenthSub"));
        var sub16 = Number(localStorage.getItem("sixteenthSub"));
        var sub17 = Number(localStorage.getItem("seventeenthSub"));
        var sub18 = Number(localStorage.getItem("eighteenthSub"));
        var sub19 = Number(localStorage.getItem("nineteenthSub"));

        var tax1 = Number(localStorage.getItem("firstTax"));
        var tax2 = Number(localStorage.getItem("secondTax"));
        var tax3 = Number(localStorage.getItem("thirdTax"));
        var tax4 = Number(localStorage.getItem("fourthTax"));
        var tax5 = Number(localStorage.getItem("fifthTax"));
        var tax6 = Number(localStorage.getItem("sixthTax"));
        var tax7 = Number(localStorage.getItem("seventhTax"));
        var tax8 = Number(localStorage.getItem("eighthTax"));
        var tax9 = Number(localStorage.getItem("ninthTax"));
        var tax10 = Number(localStorage.getItem("tenthTax"));
        var tax12 = Number(localStorage.getItem("twelfthTax"));
        var tax13 = Number(localStorage.getItem("thirteenthTax"));
        var tax14 = Number(localStorage.getItem("fourteenthTax"));
        var tax15 = Number(localStorage.getItem("fifteenthTax"));
        var tax16 = Number(localStorage.getItem("sixteenthTax"));
        var tax17 = Number(localStorage.getItem("seventeenthTax"));
        var tax18 = Number(localStorage.getItem("eighteenthTax"));
        var tax19 = Number(localStorage.getItem("nineteenthTax"));

        var total1 = Number(localStorage.getItem("firstTotal"));
        var total2 = Number(localStorage.getItem("secondTotal"));
        var total3 = Number(localStorage.getItem("thirdTotal"));
        var total4 = Number(localStorage.getItem("fourthTotal"));
        var total5 = Number(localStorage.getItem("fifthTotal"));
        var total6 = Number(localStorage.getItem("sixthTotal"));
        var total7 = Number(localStorage.getItem("seventhTotal"));
        var total8 = Number(localStorage.getItem("eighthTotal"));
        var total9 = Number(localStorage.getItem("ninthTotal"));
        var total10 = Number(localStorage.getItem("tenthTotal"));
        var total12 = Number(localStorage.getItem("twelfthTotal"));
        var total13 = Number(localStorage.getItem("thirteenthTotal"));
        var total14 = Number(localStorage.getItem("fourteenthTotal"));
        var total15 = Number(localStorage.getItem("fifteenthTotal"));
        var total16 = Number(localStorage.getItem("sixteenthTotal"));
        var total17 = Number(localStorage.getItem("seventeenthTotal"));
        var total18 = Number(localStorage.getItem("eighteenthTotal"));
        var total19 = Number(localStorage.getItem("nineteenthTotal"));

        var sub = sub1 + sub2 + sub3 + sub4 + sub5 + sub6 + sub7 + sub8 + sub9 + sub10 + sub11 + sub12 + 
                sub13 + sub14 + sub15 + sub16 + sub17 + sub18 + sub19;
        var tax = tax1 + tax2 + tax3 + tax4 + tax5 + tax6 +  tax7 + tax8 + tax9 + tax10 + tax11 +  tax12 + 
                tax13 + tax14 + tax17 + tax16 + tax18 + tax19;
        var total = total1 + total2 + total3 + total4 + total5 + total6 + total7 + total8 + total9 + total10 + total11 + total12 + 
                total13 + total14 + total15 + total16 + total17 + total18 + total19;

        var display = mydata.menuItems[0].muoiMot[0].type + " x " + valueEleven + " = $" + sub11;
        localStorage.setItem("disEleven", display);    
        
        document.getElementById("sub").innerHTML = "$" + sub.toFixed(2);
        document.getElementById("tax").innerHTML = "$" + tax.toFixed(2);
        document.getElementById("total").innerHTML = "$" + total.toFixed(2);
    }
    inputEleven.onkeypress = function () {
        if (event.keyCode == 13) {
            eleventhItem();
        }
    }

    function twelfthItem() {
        var valueTwelve = document.getElementById("inputTwelve").value;

        var sub12 = twelve * valueTwelve;
        var tax12 = sub12 * .04712;
        var total12 = sub12 * 1.04712;

        localStorage.setItem("twelfthSub", sub12);
        localStorage.setItem("twelfthTax", tax12);
        localStorage.setItem("twelfthTotal", total12);

        var sub1 = Number(localStorage.getItem("firstSub"));
        var sub2 = Number(localStorage.getItem("secondSub"));
        var sub3 = Number(localStorage.getItem("thirdSub"));
        var sub4 = Number(localStorage.getItem("fourthSub"));
        var sub5 = Number(localStorage.getItem("fifthSub"));
        var sub6 = Number(localStorage.getItem("sixthSub"));
        var sub7 = Number(localStorage.getItem("seventhSub"));
        var sub8 = Number(localStorage.getItem("eighthSub"));
        var sub9 = Number(localStorage.getItem("ninthSub"));
        var sub10 = Number(localStorage.getItem("tenthSub"));
        var sub11 = Number(localStorage.getItem("eleventhSub"));
        var sub13 = Number(localStorage.getItem("thirteenthSub"));
        var sub14 = Number(localStorage.getItem("fourteenthSub"));
        var sub15 = Number(localStorage.getItem("fifteenthSub"));
        var sub16 = Number(localStorage.getItem("sixteenthSub"));
        var sub17 = Number(localStorage.getItem("seventeenthSub"));
        var sub18 = Number(localStorage.getItem("eighteenthSub"));
        var sub19 = Number(localStorage.getItem("nineteenthSub"));

        var tax1 = Number(localStorage.getItem("firstTax"));
        var tax2 = Number(localStorage.getItem("secondTax"));
        var tax3 = Number(localStorage.getItem("thirdTax"));
        var tax4 = Number(localStorage.getItem("fourthTax"));
        var tax5 = Number(localStorage.getItem("fifthTax"));
        var tax6 = Number(localStorage.getItem("sixthTax"));
        var tax7 = Number(localStorage.getItem("seventhTax"));
        var tax8 = Number(localStorage.getItem("eighthTax"));
        var tax9 = Number(localStorage.getItem("ninthTax"));
        var tax10 = Number(localStorage.getItem("tenthTax"));
        var tax11 = Number(localStorage.getItem("eleventhTax"));
        var tax13 = Number(localStorage.getItem("thirteenthTax"));
        var tax14 = Number(localStorage.getItem("fourteenthTax"));
        var tax15 = Number(localStorage.getItem("fifteenthTax"));
        var tax16 = Number(localStorage.getItem("sixteenthTax"));
        var tax17 = Number(localStorage.getItem("seventeenthTax"));
        var tax18 = Number(localStorage.getItem("eighteenthTax"));
        var tax19 = Number(localStorage.getItem("nineteenthTax"));

        var total1 = Number(localStorage.getItem("firstTotal"));
        var total2 = Number(localStorage.getItem("secondTotal"));
        var total3 = Number(localStorage.getItem("thirdTotal"));
        var total4 = Number(localStorage.getItem("fourthTotal"));
        var total5 = Number(localStorage.getItem("fifthTotal"));
        var total6 = Number(localStorage.getItem("sixthTotal"));
        var total7 = Number(localStorage.getItem("seventhTotal"));
        var total8 = Number(localStorage.getItem("eighthTotal"));
        var total9 = Number(localStorage.getItem("ninthTotal"));
        var total10 = Number(localStorage.getItem("tenthTotal"));
        var total11 = Number(localStorage.getItem("eleventhTotal"));
        var total13 = Number(localStorage.getItem("thirteenthTotal"));
        var total14 = Number(localStorage.getItem("fourteenthTotal"));
        var total15 = Number(localStorage.getItem("fifteenthTotal"));
        var total16 = Number(localStorage.getItem("sixteenthTotal"));
        var total17 = Number(localStorage.getItem("seventeenthTotal"));
        var total18 = Number(localStorage.getItem("eighteenthTotal"));
        var total19 = Number(localStorage.getItem("nineteenthTotal"));

        var sub = sub1 + sub2 + sub3 + sub4 + sub5 + sub6 + sub7 + sub8 + sub9 + sub10 + sub11 + sub12 + 
                sub13 + sub14 + sub15 + sub16 + sub17 + sub18 + sub19;
        var tax = tax1 + tax2 + tax3 + tax4 + tax5 + tax6 +  tax7 + tax8 + tax9 + tax10 + tax11 +  tax12 + 
                tax13 + tax14 + tax17 + tax16 + tax18 + tax19;
        var total = total1 + total2 + total3 + total4 + total5 + total6 + total7 + total8 + total9 + total10 + total11 + total12 + 
                total13 + total14 + total15 + total16 + total17 + total18 + total19;

        var display = mydata.menuItems[0].muoiHai[0].type + " x " + valueTwelve + " = $" + sub12;
        localStorage.setItem("disTwelve", display);

        document.getElementById("sub").innerHTML = "$" + sub.toFixed(2);
        document.getElementById("tax").innerHTML = "$" + tax.toFixed(2);
        document.getElementById("total").innerHTML = "$" + total.toFixed(2);
    }
    inputTwelve.onkeypress = function () {
        if (event.keyCode == 13) {
            twelfthItem();
        }
    }

    function thirteenthItem() {
        var valueThirteen = document.getElementById("inputThirteen").value;

        var sub13 = thirteen * valueThirteen;
        var tax13 = sub13 * .04712;
        var total13 = sub13 * 1.04712;

        localStorage.setItem("thirteenthSub", sub13);
        localStorage.setItem("thirteenthTax", tax13);
        localStorage.setItem("thirteenthTotal", total13);

        var sub1 = Number(localStorage.getItem("firstSub"));
        var sub2 = Number(localStorage.getItem("secondSub"));
        var sub3 = Number(localStorage.getItem("thirdSub"));
        var sub4 = Number(localStorage.getItem("fourthSub"));
        var sub5 = Number(localStorage.getItem("fifthSub"));
        var sub6 = Number(localStorage.getItem("sixthSub"));
        var sub7 = Number(localStorage.getItem("seventhSub"));
        var sub8 = Number(localStorage.getItem("eighthSub"));
        var sub9 = Number(localStorage.getItem("ninthSub"));
        var sub10 = Number(localStorage.getItem("tenthSub"));
        var sub11 = Number(localStorage.getItem("eleventhSub"));
        var sub12 = Number(localStorage.getItem("twelfthSub"));
        var sub14 = Number(localStorage.getItem("fourteenthSub"));
        var sub15 = Number(localStorage.getItem("fifteenthSub"));
        var sub16 = Number(localStorage.getItem("sixteenthSub"));
        var sub17 = Number(localStorage.getItem("seventeenthSub"));
        var sub18 = Number(localStorage.getItem("eighteenthSub"));
        var sub19 = Number(localStorage.getItem("nineteenthSub"));

        var tax1 = Number(localStorage.getItem("firstTax"));
        var tax2 = Number(localStorage.getItem("secondTax"));
        var tax3 = Number(localStorage.getItem("thirdTax"));
        var tax4 = Number(localStorage.getItem("fourthTax"));
        var tax5 = Number(localStorage.getItem("fifthTax"));
        var tax6 = Number(localStorage.getItem("sixthTax"));
        var tax7 = Number(localStorage.getItem("seventhTax"));
        var tax8 = Number(localStorage.getItem("eighthTax"));
        var tax9 = Number(localStorage.getItem("ninthTax"));
        var tax10 = Number(localStorage.getItem("tenthTax"));
        var tax11 = Number(localStorage.getItem("eleventhTax"));
        var tax12 = Number(localStorage.getItem("twelfthTax"));
        var tax14 = Number(localStorage.getItem("fourteenthTax"));
        var tax15 = Number(localStorage.getItem("fifteenthTax"));
        var tax16 = Number(localStorage.getItem("sixteenthTax"));
        var tax17 = Number(localStorage.getItem("seventeenthTax"));
        var tax18 = Number(localStorage.getItem("eighteenthTax"));
        var tax19 = Number(localStorage.getItem("nineteenthTax"));

        var total1 = Number(localStorage.getItem("firstTotal"));
        var total2 = Number(localStorage.getItem("secondTotal"));
        var total3 = Number(localStorage.getItem("thirdTotal"));
        var total4 = Number(localStorage.getItem("fourthTotal"));
        var total5 = Number(localStorage.getItem("fifthTotal"));
        var total6 = Number(localStorage.getItem("sixthTotal"));
        var total7 = Number(localStorage.getItem("seventhTotal"));
        var total8 = Number(localStorage.getItem("eighthTotal"));
        var total9 = Number(localStorage.getItem("ninthTotal"));
        var total10 = Number(localStorage.getItem("tenthTotal"));
        var total11 = Number(localStorage.getItem("eleventhTotal"));
        var total12 = Number(localStorage.getItem("twelfthTotal"));
        var total14 = Number(localStorage.getItem("fourteenthTotal"));
        var total15 = Number(localStorage.getItem("fifteenthTotal"));
        var total16 = Number(localStorage.getItem("sixteenthTotal"));
        var total17 = Number(localStorage.getItem("seventeenthTotal"));
        var total18 = Number(localStorage.getItem("eighteenthTotal"));
        var total19 = Number(localStorage.getItem("nineteenthTotal"));

        var sub = sub1 + sub2 + sub3 + sub4 + sub5 + sub6 + sub7 + sub8 + sub9 + sub10 + sub11 + sub12 + 
                sub13 + sub14 + sub15 + sub16 + sub17 + sub18 + sub19;
        var tax = tax1 + tax2 + tax3 + tax4 + tax5 + tax6 +  tax7 + tax8 + tax9 + tax10 + tax11 +  tax12 + 
                tax13 + tax14 + tax17 + tax16 + tax18 + tax19;
        var total = total1 + total2 + total3 + total4 + total5 + total6 + total7 + total8 + total9 + total10 + total11 + total12 + 
                total13 + total14 + total15 + total16 + total17 + total18 + total19;

        var display = mydata.menuItems[0].muoiBa[0].type + " x " + valueThirteen + " = $" + sub13;
        localStorage.setItem("disThirteen", display);

        document.getElementById("sub").innerHTML = "$" + sub.toFixed(2);
        document.getElementById("tax").innerHTML = "$" + tax.toFixed(2);
        document.getElementById("total").innerHTML = "$" + total.toFixed(2);
    }
    inputThirteen.onkeypress = function () {
        if (event.keyCode == 13) {
            thirteenthItem();
        }
    }

    function fourteenthItem() {
        var valueFourteen = document.getElementById("inputFourteen").value;

        var sub14 = fourteen * valueFourteen;
        var tax14 = sub14 * .04712;
        var total14 = sub14 * 1.04712;

        localStorage.setItem("fourteenthSub", sub14);
        localStorage.setItem("fourteenthTax", tax14);
        localStorage.setItem("fourteenthTotal", total14);

        var sub1 = Number(localStorage.getItem("firstSub"));
        var sub2 = Number(localStorage.getItem("secondSub"));
        var sub3 = Number(localStorage.getItem("thirdSub"));
        var sub4 = Number(localStorage.getItem("fourthSub"));
        var sub5 = Number(localStorage.getItem("fifthSub"));
        var sub6 = Number(localStorage.getItem("sixthSub"));
        var sub7 = Number(localStorage.getItem("seventhSub"));
        var sub8 = Number(localStorage.getItem("eighthSub"));
        var sub9 = Number(localStorage.getItem("ninthSub"));
        var sub10 = Number(localStorage.getItem("tenthSub"));
        var sub11 = Number(localStorage.getItem("eleventhSub"));
        var sub12 = Number(localStorage.getItem("twelfthSub"));
        var sub13 = Number(localStorage.getItem("thirteenthSub"));
        var sub15 = Number(localStorage.getItem("fifteenthSub"));
        var sub16 = Number(localStorage.getItem("sixteenthSub"));
        var sub17 = Number(localStorage.getItem("seventeenthSub"));
        var sub18 = Number(localStorage.getItem("eighteenthSub"));
        var sub19 = Number(localStorage.getItem("nineteenthSub"));

        var tax1 = Number(localStorage.getItem("firstTax"));
        var tax2 = Number(localStorage.getItem("secondTax"));
        var tax3 = Number(localStorage.getItem("thirdTax"));
        var tax4 = Number(localStorage.getItem("fourthTax"));
        var tax5 = Number(localStorage.getItem("fifthTax"));
        var tax6 = Number(localStorage.getItem("sixthTax"));
        var tax7 = Number(localStorage.getItem("seventhTax"));
        var tax8 = Number(localStorage.getItem("eighthTax"));
        var tax9 = Number(localStorage.getItem("ninthTax"));
        var tax10 = Number(localStorage.getItem("tenthTax"));
        var tax11 = Number(localStorage.getItem("eleventhTax"));
        var tax12 = Number(localStorage.getItem("twelfthTax"));
        var tax13 = Number(localStorage.getItem("thirteenthTax"));
        var tax15 = Number(localStorage.getItem("fifteenthTax"));
        var tax16 = Number(localStorage.getItem("sixteenthTax"));
        var tax17 = Number(localStorage.getItem("seventeenthTax"));
        var tax18 = Number(localStorage.getItem("eighteenthTax"));
        var tax19 = Number(localStorage.getItem("nineteenthTax"));

        var total1 = Number(localStorage.getItem("firstTotal"));
        var total2 = Number(localStorage.getItem("secondTotal"));
        var total3 = Number(localStorage.getItem("thirdTotal"));
        var total4 = Number(localStorage.getItem("fourthTotal"));
        var total5 = Number(localStorage.getItem("fifthTotal"));
        var total6 = Number(localStorage.getItem("sixthTotal"));
        var total7 = Number(localStorage.getItem("seventhTotal"));
        var total8 = Number(localStorage.getItem("eighthTotal"));
        var total9 = Number(localStorage.getItem("ninthTotal"));
        var total10 = Number(localStorage.getItem("tenthTotal"));
        var total11 = Number(localStorage.getItem("eleventhTotal"));
        var total12 = Number(localStorage.getItem("twelfthTotal"));
        var total13 = Number(localStorage.getItem("thirteenthTotal"));
        var total15 = Number(localStorage.getItem("fifteenthTotal"));
        var total16 = Number(localStorage.getItem("sixteenthTotal"));
        var total17 = Number(localStorage.getItem("seventeenthTotal"));
        var total18 = Number(localStorage.getItem("eighteenthTotal"));
        var total19 = Number(localStorage.getItem("nineteenthTotal"));

        var sub = sub1 + sub2 + sub3 + sub4 + sub5 + sub6 + sub7 + sub8 + sub9 + sub10 + sub11 + sub12 + 
                sub13 + sub14 + sub15 + sub16 + sub17 + sub18 + sub19;
        var tax = tax1 + tax2 + tax3 + tax4 + tax5 + tax6 +  tax7 + tax8 + tax9 + tax10 + tax11 +  tax12 + 
                tax13 + tax14 + tax17 + tax16 + tax18 + tax19;
        var total = total1 + total2 + total3 + total4 + total5 + total6 + total7 + total8 + total9 + total10 + total11 + total12 + 
                total13 + total14 + total15 + total16 + total17 + total18 + total19;

        var display = mydata.menuItems[0].muoiBon[0].type + " x " + valueFourteen + " = $" + sub14;
        localStorage.setItem("disFourteen", display);

        document.getElementById("sub").innerHTML = "$" + sub.toFixed(2);
        document.getElementById("tax").innerHTML = "$" + tax.toFixed(2);
        document.getElementById("total").innerHTML = "$" + total.toFixed(2);
    }
    inputFourteen.onkeypress = function () {
        if (event.keyCode == 13) {
            fourteenthItem();
        }
    }

    function fifteenthItem() {
        var valueFifteen = document.getElementById("inputFifteen").value;

        var sub15 = fifteen * valueFifteen;
        var tax15 = sub15 * .04712;
        var total15 = sub15 * 1.04712;

        localStorage.setItem("fifteenthSub", sub15);
        localStorage.setItem("fifteenthTax", tax15);
        localStorage.setItem("fifteenthTotal", total15);

        var sub1 = Number(localStorage.getItem("firstSub"));
        var sub2 = Number(localStorage.getItem("secondSub"));
        var sub3 = Number(localStorage.getItem("thirdSub"));
        var sub4 = Number(localStorage.getItem("fourthSub"));
        var sub5 = Number(localStorage.getItem("fifthSub"));
        var sub6 = Number(localStorage.getItem("sixthSub"));
        var sub7 = Number(localStorage.getItem("seventhSub"));
        var sub8 = Number(localStorage.getItem("eighthSub"));
        var sub9 = Number(localStorage.getItem("ninthSub"));
        var sub10 = Number(localStorage.getItem("tenthSub"));
        var sub11 = Number(localStorage.getItem("eleventhSub"));
        var sub12 = Number(localStorage.getItem("twelfthSub"));
        var sub13 = Number(localStorage.getItem("thirteenthSub"));
        var sub14 = Number(localStorage.getItem("fourteenthSub"));
        var sub16 = Number(localStorage.getItem("sixteenthSub"));
        var sub17 = Number(localStorage.getItem("seventeenthSub"));
        var sub18 = Number(localStorage.getItem("eighteenthSub"));
        var sub19 = Number(localStorage.getItem("nineteenthSub"));

        var tax1 = Number(localStorage.getItem("firstTax"));
        var tax2 = Number(localStorage.getItem("secondTax"));
        var tax3 = Number(localStorage.getItem("thirdTax"));
        var tax4 = Number(localStorage.getItem("fourthTax"));
        var tax5 = Number(localStorage.getItem("fifthTax"));
        var tax6 = Number(localStorage.getItem("sixthTax"));
        var tax7 = Number(localStorage.getItem("seventhTax"));
        var tax8 = Number(localStorage.getItem("eighthTax"));
        var tax9 = Number(localStorage.getItem("ninthTax"));
        var tax10 = Number(localStorage.getItem("tenthTax"));
        var tax11 = Number(localStorage.getItem("eleventhTax"));
        var tax12 = Number(localStorage.getItem("twelfthTax"));
        var tax13 = Number(localStorage.getItem("thirteenthTax"));
        var tax14 = Number(localStorage.getItem("fourteenthTax"));
        var tax16 = Number(localStorage.getItem("sixteenthTax"));
        var tax17 = Number(localStorage.getItem("seventeenthTax"));
        var tax18 = Number(localStorage.getItem("eighteenthTax"));
        var tax19 = Number(localStorage.getItem("nineteenthTax"));

        var total1 = Number(localStorage.getItem("firstTotal"));
        var total2 = Number(localStorage.getItem("secondTotal"));
        var total3 = Number(localStorage.getItem("thirdTotal"));
        var total4 = Number(localStorage.getItem("fourthTotal"));
        var total5 = Number(localStorage.getItem("fifthTotal"));
        var total6 = Number(localStorage.getItem("sixthTotal"));
        var total7 = Number(localStorage.getItem("seventhTotal"));
        var total8 = Number(localStorage.getItem("eighthTotal"));
        var total9 = Number(localStorage.getItem("ninthTotal"));
        var total10 = Number(localStorage.getItem("tenthTotal"));
        var total11 = Number(localStorage.getItem("eleventhTotal"));
        var total12 = Number(localStorage.getItem("twelfthTotal"));
        var total13 = Number(localStorage.getItem("thirteenthTotal"));
        var total14 = Number(localStorage.getItem("fourteenthTotal"));
        var total16 = Number(localStorage.getItem("sixteenthTotal"));
        var total17 = Number(localStorage.getItem("seventeenthTotal"));
        var total18 = Number(localStorage.getItem("eighteenthTotal"));
        var total19 = Number(localStorage.getItem("nineteenthTotal"));

        var sub = sub1 + sub2 + sub3 + sub4 + sub5 + sub6 + sub7 + sub8 + sub9 + sub10 + sub11 + sub12 + 
                sub13 + sub14 + sub15 + sub16 + sub17 + sub18 + sub19;
        var tax = tax1 + tax2 + tax3 + tax4 + tax5 + tax6 +  tax7 + tax8 + tax9 + tax10 + tax11 +  tax12 + 
                tax13 + tax14 + tax15 + tax16 + tax17 + tax18 + tax19;
        var total = total1 + total2 + total3 + total4 + total5 + total6 + total7 + total8 + total9 + total10 + total11 + total12 + 
                total13 + total14 + total15 + total16 + total17 + total18 + total19;

        var display = mydata.menuItems[0].muoiNam[0].type + " x " + valueFifteen + " = $" + sub15;
        localStorage.setItem("disFifteen", display);

        document.getElementById("sub").innerHTML = "$" + sub.toFixed(2);
        document.getElementById("tax").innerHTML = "$" + tax.toFixed(2);
        document.getElementById("total").innerHTML = "$" + total.toFixed(2);
    }
    inputFifteen.onkeypress = function() {
        if (event.keyCode == 13) {
            fifteenthItem();
        }
    }

    function sixteenthItem() {
        var valueSixteen = document.getElementById("inputSixteen").value;

        var sub16 = sixteen * valueSixteen;
        var tax16 = sub16 * .04712;
        var total16 = sub16 * 1.04712;

        localStorage.setItem("sixteenthSub", sub16);
        localStorage.setItem("sixteenthTax", tax16);
        localStorage.setItem("sixteenthTotal", total16);

        var sub1 = Number(localStorage.getItem("firstSub"));
        var sub2 = Number(localStorage.getItem("secondSub"));
        var sub3 = Number(localStorage.getItem("thirdSub"));
        var sub4 = Number(localStorage.getItem("fourthSub"));
        var sub5 = Number(localStorage.getItem("fifthSub"));
        var sub6 = Number(localStorage.getItem("sixthSub"));
        var sub7 = Number(localStorage.getItem("seventhSub"));
        var sub8 = Number(localStorage.getItem("eighthSub"));
        var sub9 = Number(localStorage.getItem("ninthSub"));
        var sub10 = Number(localStorage.getItem("tenthSub"));
        var sub11 = Number(localStorage.getItem("eleventhSub"));
        var sub12 = Number(localStorage.getItem("twelfthSub"));
        var sub13 = Number(localStorage.getItem("thirteenthSub"));
        var sub14 = Number(localStorage.getItem("fourteenthSub"));
        var sub15 = Number(localStorage.getItem("fifteenthSub"));
        var sub17 = Number(localStorage.getItem("seventeenthSub"));
        var sub18 = Number(localStorage.getItem("eighteenthSub"));
        var sub19 = Number(localStorage.getItem("nineteenthSub"));

        var tax1 = Number(localStorage.getItem("firstTax"));
        var tax2 = Number(localStorage.getItem("secondTax"));
        var tax3 = Number(localStorage.getItem("thirdTax"));
        var tax4 = Number(localStorage.getItem("fourthTax"));
        var tax5 = Number(localStorage.getItem("fifthTax"));
        var tax6 = Number(localStorage.getItem("sixthTax"));
        var tax7 = Number(localStorage.getItem("seventhTax"));
        var tax8 = Number(localStorage.getItem("eighthTax"));
        var tax9 = Number(localStorage.getItem("ninthTax"));
        var tax10 = Number(localStorage.getItem("tenthTax"));
        var tax11 = Number(localStorage.getItem("eleventhTax"));
        var tax12 = Number(localStorage.getItem("twelfthTax"));
        var tax13 = Number(localStorage.getItem("thirteenthTax"));
        var tax14 = Number(localStorage.getItem("fourteenthTax"));
        var tax15 = Number(localStorage.getItem("fifteenthTax"));
        var tax17 = Number(localStorage.getItem("seventeenthTax"));
        var tax18 = Number(localStorage.getItem("eighteenthTax"));
        var tax19 = Number(localStorage.getItem("nineteenthTax"));

        var total1 = Number(localStorage.getItem("firstTotal"));
        var total2 = Number(localStorage.getItem("secondTotal"));
        var total3 = Number(localStorage.getItem("thirdTotal"));
        var total4 = Number(localStorage.getItem("fourthTotal"));
        var total5 = Number(localStorage.getItem("fifthTotal"));
        var total6 = Number(localStorage.getItem("sixthTotal"));
        var total7 = Number(localStorage.getItem("seventhTotal"));
        var total8 = Number(localStorage.getItem("eighthTotal"));
        var total9 = Number(localStorage.getItem("ninthTotal"));
        var total10 = Number(localStorage.getItem("tenthTotal"));
        var total11 = Number(localStorage.getItem("eleventhTotal"));
        var total12 = Number(localStorage.getItem("twelfthTotal"));
        var total13 = Number(localStorage.getItem("thirteenthTotal"));
        var total14 = Number(localStorage.getItem("fourteenthTotal"));
        var total15 = Number(localStorage.getItem("fifteenthTotal"));
        var total17 = Number(localStorage.getItem("seventeenthTotal"));
        var total18 = Number(localStorage.getItem("eighteenthTotal"));
        var total19 = Number(localStorage.getItem("nineteenthTotal"));

        var sub = sub1 + sub2 + sub3 + sub4 + sub5 + sub6 + sub7 + sub8 + sub9 + sub10 + sub11 + sub12 + 
                sub13 + sub14 + sub15 + sub16 + sub17 + sub18 + sub19;
        var tax = tax1 + tax2 + tax3 + tax4 + tax5 + tax6 +  tax7 + tax8 + tax9 + tax10 + tax11 +  tax12 + 
                tax13 + tax14 + tax17 + tax16 + tax18 + tax19;
        var total = total1 + total2 + total3 + total4 + total5 + total6 + total7 + total8 + total9 + total10 + total11 + total12 + 
                total13 + total14 + total15 + total16 + total17 + total18 + total19;

        var display = mydata.menuItems[0].muoiSau[0].type + " x " + valueSixteen + " = $" + sub16;
        localStorage.setItem("disSixteen", display);

        document.getElementById("sub").innerHTML = "$" + sub.toFixed(2);
        document.getElementById("tax").innerHTML = "$" + tax.toFixed(2);
        document.getElementById("total").innerHTML = "$" + total.toFixed(2);
    }
    inputSixteen.onkeypress = function () {
        if (event.keyCode == 13) {
            sixteenthItem();
        }
    }

    function seventeenthItem() {
        var valueSeventeen = document.getElementById("inputSeventeen").value;

        var sub17 = seventeen * valueSeventeen;
        var tax17 = sub17 * .04712;
        var total17 = sub17 * 1.04712;

        localStorage.setItem("seventeenthSub", sub17);
        localStorage.setItem("seventeenthTax", tax17);
        localStorage.setItem("seventeenthTotal", total17);

        var sub1 = Number(localStorage.getItem("firstSub"));
        var sub2 = Number(localStorage.getItem("secondSub"));
        var sub3 = Number(localStorage.getItem("thirdSub"));
        var sub4 = Number(localStorage.getItem("fourthSub"));
        var sub5 = Number(localStorage.getItem("fifthSub"));
        var sub6 = Number(localStorage.getItem("sixthSub"));
        var sub7 = Number(localStorage.getItem("seventhSub"));
        var sub8 = Number(localStorage.getItem("eighthSub"));
        var sub9 = Number(localStorage.getItem("ninthSub"));
        var sub10 = Number(localStorage.getItem("tenthSub"));
        var sub11 = Number(localStorage.getItem("eleventhSub"));
        var sub12 = Number(localStorage.getItem("twelfthSub"));
        var sub13 = Number(localStorage.getItem("thirteenthSub"));
        var sub14 = Number(localStorage.getItem("fourteenthSub"));
        var sub15 = Number(localStorage.getItem("fifteenthSub"));
        var sub16 = Number(localStorage.getItem("sixteenthSub"));
        var sub18 = Number(localStorage.getItem("eighteenthSub"));
        var sub19 = Number(localStorage.getItem("nineteenthSub"));

        var tax1 = Number(localStorage.getItem("firstTax"));
        var tax2 = Number(localStorage.getItem("secondTax"));
        var tax3 = Number(localStorage.getItem("thirdTax"));
        var tax4 = Number(localStorage.getItem("fourthTax"));
        var tax5 = Number(localStorage.getItem("fifthTax"));
        var tax6 = Number(localStorage.getItem("sixthTax"));
        var tax7 = Number(localStorage.getItem("seventhTax"));
        var tax8 = Number(localStorage.getItem("eighthTax"));
        var tax9 = Number(localStorage.getItem("ninthTax"));
        var tax10 = Number(localStorage.getItem("tenthTax"));
        var tax11 = Number(localStorage.getItem("eleventhTax"));
        var tax12 = Number(localStorage.getItem("twelfthTax"));
        var tax13 = Number(localStorage.getItem("thirteenthTax"));
        var tax14 = Number(localStorage.getItem("fourteenthTax"));
        var tax15 = Number(localStorage.getItem("fifteenthTax"));
        var tax16 = Number(localStorage.getItem("sixteenthTax"));
        var tax18 = Number(localStorage.getItem("eighteenthTax"));
        var tax19 = Number(localStorage.getItem("nineteenthTax"));

        var total1 = Number(localStorage.getItem("firstTotal"));
        var total2 = Number(localStorage.getItem("secondTotal"));
        var total3 = Number(localStorage.getItem("thirdTotal"));
        var total4 = Number(localStorage.getItem("fourthTotal"));
        var total5 = Number(localStorage.getItem("fifthTotal"));
        var total6 = Number(localStorage.getItem("sixthTotal"));
        var total7 = Number(localStorage.getItem("seventhTotal"));
        var total8 = Number(localStorage.getItem("eighthTotal"));
        var total9 = Number(localStorage.getItem("ninthTotal"));
        var total10 = Number(localStorage.getItem("tenthTotal"));
        var total11 = Number(localStorage.getItem("eleventhTotal"));
        var total12 = Number(localStorage.getItem("twelfthTotal"));
        var total13 = Number(localStorage.getItem("thirteenthTotal"));
        var total14 = Number(localStorage.getItem("fourteenthTotal"));
        var total15 = Number(localStorage.getItem("fifteenthTotal"));
        var total16 = Number(localStorage.getItem("sixteenthTotal"));
        var total18 = Number(localStorage.getItem("eighteenthTotal"));
        var total19 = Number(localStorage.getItem("nineteenthTotal"));

        var sub = sub1 + sub2 + sub3 + sub4 + sub5 + sub6 + sub7 + sub8 + sub9 + sub10 + sub11 + sub12 + 
                sub13 + sub14 + sub15 + sub16 + sub17 + sub18 + sub19;
        var tax = tax1 + tax2 + tax3 + tax4 + tax5 + tax6 +  tax7 + tax8 + tax9 + tax10 + tax11 +  tax12 + 
                tax13 + tax14 + tax17 + tax16 + tax18 + tax19;
        var total = total1 + total2 + total3 + total4 + total5 + total6 + total7 + total8 + total9 + total10 + total11 + total12 + 
                total13 + total14 + total15 + total16 + total17 + total18 + total19;

        var display = mydata.menuItems[0].muoiBay[0].type + " x " + valueSeventeen + " = $" + sub17;
        localStorage.setItem("disSeventeen", display);

        document.getElementById("sub").innerHTML = "$" + sub.toFixed(2);
        document.getElementById("tax").innerHTML = "$" + tax.toFixed(2);
        document.getElementById("total").innerHTML = "$" + total.toFixed(2);
    }
    inputSeventeen.onkeypress = function () {
        if (event.keyCode == 13) {
            seventeenthItem();
        }
    }

    function eighteenthItem() {
        var valueEighteen = document.getElementById("inputEighteen").value;

        var sub18 = eighteen * valueEighteen;
        var tax18 = sub18 * .04712;
        var total18 = sub18 * 1.04712;

        localStorage.setItem("eighteenthSub", sub18);
        localStorage.setItem("eighteenthTax", tax18);
        localStorage.setItem("eighteenthTotal", total18);

        var sub1 = Number(localStorage.getItem("firstSub"));
        var sub2 = Number(localStorage.getItem("secondSub"));
        var sub3 = Number(localStorage.getItem("thirdSub"));
        var sub4 = Number(localStorage.getItem("fourthSub"));
        var sub5 = Number(localStorage.getItem("fifthSub"));
        var sub6 = Number(localStorage.getItem("sixthSub"));
        var sub7 = Number(localStorage.getItem("seventhSub"));
        var sub8 = Number(localStorage.getItem("eighthSub"));
        var sub9 = Number(localStorage.getItem("ninthSub"));
        var sub10 = Number(localStorage.getItem("tenthSub"));
        var sub11 = Number(localStorage.getItem("eleventhSub"));
        var sub12 = Number(localStorage.getItem("twelfthSub"));
        var sub13 = Number(localStorage.getItem("thirteenthSub"));
        var sub14 = Number(localStorage.getItem("fourteenthSub"));
        var sub15 = Number(localStorage.getItem("fifteenthSub"));
        var sub16 = Number(localStorage.getItem("sixteenthSub"));
        var sub17 = Number(localStorage.getItem("seventeenthSub"));
        var sub19 = Number(localStorage.getItem("nineteenthSub"));

        var tax1 = Number(localStorage.getItem("firstTax"));
        var tax2 = Number(localStorage.getItem("secondTax"));
        var tax3 = Number(localStorage.getItem("thirdTax"));
        var tax4 = Number(localStorage.getItem("fourthTax"));
        var tax5 = Number(localStorage.getItem("fifthTax"));
        var tax6 = Number(localStorage.getItem("sixthTax"));
        var tax7 = Number(localStorage.getItem("seventhTax"));
        var tax8 = Number(localStorage.getItem("eighthTax"));
        var tax9 = Number(localStorage.getItem("ninthTax"));
        var tax10 = Number(localStorage.getItem("tenthTax"));
        var tax11 = Number(localStorage.getItem("eleventhTax"));
        var tax12 = Number(localStorage.getItem("twelfthTax"));
        var tax13 = Number(localStorage.getItem("thirteenthTax"));
        var tax14 = Number(localStorage.getItem("fourteenthTax"));
        var tax15 = Number(localStorage.getItem("fifteenthTax"));
        var tax16 = Number(localStorage.getItem("sixteenthTax"));
        var tax17 = Number(localStorage.getItem("seventeenthTax"));
        var tax19 = Number(localStorage.getItem("nineteenthTax"));

        var total1 = Number(localStorage.getItem("firstTotal"));
        var total2 = Number(localStorage.getItem("secondTotal"));
        var total3 = Number(localStorage.getItem("thirdTotal"));
        var total4 = Number(localStorage.getItem("fourthTotal"));
        var total5 = Number(localStorage.getItem("fifthTotal"));
        var total6 = Number(localStorage.getItem("sixthTotal"));
        var total7 = Number(localStorage.getItem("seventhTotal"));
        var total8 = Number(localStorage.getItem("eighthTotal"));
        var total9 = Number(localStorage.getItem("ninthTotal"));
        var total10 = Number(localStorage.getItem("tenthTotal"));
        var total11 = Number(localStorage.getItem("eleventhTotal"));
        var total12 = Number(localStorage.getItem("twelfthTotal"));
        var total13 = Number(localStorage.getItem("thirteenthTotal"));
        var total14 = Number(localStorage.getItem("fourteenthTotal"));
        var total15 = Number(localStorage.getItem("fifteenthTotal"));
        var total16 = Number(localStorage.getItem("sixteenthTotal"));
        var total17 = Number(localStorage.getItem("seventeenthTotal"));
        var total19 = Number(localStorage.getItem("nineteenthTotal"));

        var sub = sub1 + sub2 + sub3 + sub4 + sub5 + sub6 + sub7 + sub8 + sub9 + sub10 + sub11 + sub12 + 
                sub13 + sub14 + sub15 + sub16 + sub17 + sub18 + sub19;
        var tax = tax1 + tax2 + tax3 + tax4 + tax5 + tax6 +  tax7 + tax8 + tax9 + tax10 + tax11 +  tax12 + 
                tax13 + tax14 + tax17 + tax16 + tax18 + tax19;
        var total = total1 + total2 + total3 + total4 + total5 + total6 + total7 + total8 + total9 + total10 + total11 + total12 + 
                total13 + total14 + total15 + total16 + total17 + total18 + total19;

        var display = mydata.menuItems[0].muoiTam[0].type + " x " + valueEighteen + " = $" + sub18;
        localStorage.setItem("disEighteen", display);

        document.getElementById("sub").innerHTML = "$" + sub.toFixed(2);
        document.getElementById("tax").innerHTML = "$" + tax.toFixed(2);
        document.getElementById("total").innerHTML = "$" + total.toFixed(2);
    }
    inputEighteen.onkeypress = function () {
        if (event.keyCode == 13) {
            eighteenthItem();
        }
    }

    function nineteenthItem() {
        var valueNineteen = document.getElementById("inputNineteen").value;

        var sub19 = nineteen * valueNineteen;
        var tax19 = sub19 * .04712;
        var total19 = sub19 * 1.04712;

        localStorage.setItem("nineteenthSub", sub19);
        localStorage.setItem("nineteenthTax", tax19);
        localStorage.setItem("nineteenthTotal", total19);

        var sub1 = Number(localStorage.getItem("firstSub"));
        var sub2 = Number(localStorage.getItem("secondSub"));
        var sub3 = Number(localStorage.getItem("thirdSub"));
        var sub4 = Number(localStorage.getItem("fourthSub"));
        var sub5 = Number(localStorage.getItem("fifthSub"));
        var sub6 = Number(localStorage.getItem("sixthSub"));
        var sub7 = Number(localStorage.getItem("seventhSub"));
        var sub8 = Number(localStorage.getItem("eighthSub"));
        var sub9 = Number(localStorage.getItem("ninthSub"));
        var sub10 = Number(localStorage.getItem("tenthSub"));
        var sub11 = Number(localStorage.getItem("eleventhSub"));
        var sub12 = Number(localStorage.getItem("twelfthSub"));
        var sub13 = Number(localStorage.getItem("thirteenthSub"));
        var sub14 = Number(localStorage.getItem("fourteenthSub"));
        var sub15 = Number(localStorage.getItem("fifteenthSub"));
        var sub16 = Number(localStorage.getItem("sixteenthSub"));
        var sub17 = Number(localStorage.getItem("seventeenthSub"));
        var sub18 = Number(localStorage.getItem("eighteenthSub"));

        var tax1 = Number(localStorage.getItem("firstTax"));
        var tax2 = Number(localStorage.getItem("secondTax"));
        var tax3 = Number(localStorage.getItem("thirdTax"));
        var tax4 = Number(localStorage.getItem("fourthTax"));
        var tax5 = Number(localStorage.getItem("fifthTax"));
        var tax6 = Number(localStorage.getItem("sixthTax"));
        var tax7 = Number(localStorage.getItem("seventhTax"));
        var tax8 = Number(localStorage.getItem("eighthTax"));
        var tax9 = Number(localStorage.getItem("ninthTax"));
        var tax10 = Number(localStorage.getItem("tenthTax"));
        var tax11 = Number(localStorage.getItem("eleventhTax"));
        var tax12 = Number(localStorage.getItem("twelfthTax"));
        var tax13 = Number(localStorage.getItem("thirteenthTax"));
        var tax14 = Number(localStorage.getItem("fourteenthTax"));
        var tax15 = Number(localStorage.getItem("fifteenthTax"));
        var tax16 = Number(localStorage.getItem("sixteenthTax"));
        var tax17 = Number(localStorage.getItem("seventeenthTax"));
        var tax18 = Number(localStorage.getItem("eighteenthTax"));

        var total1 = Number(localStorage.getItem("firstTotal"));
        var total2 = Number(localStorage.getItem("secondTotal"));
        var total3 = Number(localStorage.getItem("thirdTotal"));
        var total4 = Number(localStorage.getItem("fourthTotal"));
        var total5 = Number(localStorage.getItem("fifthTotal"));
        var total6 = Number(localStorage.getItem("sixthTotal"));
        var total7 = Number(localStorage.getItem("seventhTotal"));
        var total8 = Number(localStorage.getItem("eighthTotal"));
        var total9 = Number(localStorage.getItem("ninthTotal"));
        var total10 = Number(localStorage.getItem("tenthTotal"));
        var total11 = Number(localStorage.getItem("eleventhTotal"));
        var total12 = Number(localStorage.getItem("twelfthTotal"));
        var total13 = Number(localStorage.getItem("thirteenthTotal"));
        var total14 = Number(localStorage.getItem("fourteenthTotal"));
        var total15 = Number(localStorage.getItem("fifteenthTotal"));
        var total16 = Number(localStorage.getItem("sixteenthTotal"));
        var total17 = Number(localStorage.getItem("seventeenthTotal"));
        var total18 = Number(localStorage.getItem("eighteenthTotal"));

        var sub = sub1 + sub2 + sub3 + sub4 + sub5 + sub6 + sub7 + sub8 + sub9 + sub10 + sub11 + sub12 + 
                sub13 + sub14 + sub15 + sub16 + sub17 + sub18 + sub19;
        var tax = tax1 + tax2 + tax3 + tax4 + tax5 + tax6 +  tax7 + tax8 + tax9 + tax10 + tax11 +  tax12 + 
                tax13 + tax14 + tax17 + tax16 + tax18 + tax19;
        var total = total1 + total2 + total3 + total4 + total5 + total6 + total7 + total8 + total9 + total10 + total11 + total12 + 
                total13 + total14 + total15 + total16 + total17 + total18 + total19;

        var display = mydata.menuItems[0].muoiChin[0].type + " x " + valueNineteen + " = $" + sub19;
        localStorage.setItem("disNineteen", display);

        document.getElementById("sub").innerHTML = "$" + sub.toFixed(2);
        document.getElementById("tax").innerHTML = "$" + tax.toFixed(2);
        document.getElementById("total").innerHTML = "$" + total.toFixed(2);
    }
    inputNineteen.onkeypress = function () {
        if (event.keyCode == 13) {
            nineteenthItem();
        }
    }
};
xmlhttp.open("GET", "restaurant.json", true);
xmlhttp.send(); //send this file to the server

localStorage.clear();


function checkout() {
    location.href = "checkout.html";
}

