
function validateError(fields) {
    
    //Error Message Display ids
    var nameE = document.getElementById("nameE")
    var ageE = document.getElementById("ageE")
    var usnE = document.getElementById("usnE")
    var bookE = document.getElementById("bookE")

    var flag = 0; // no error
    if (fields.name == "") {
        flag = 1;
        nameE.innerHTML = "Please Enter your Name"
    } else nameE.innerHTML = "";

    if (fields.age == "") {
        flag = 1;
        ageE.innerHTML = "Please Enter your Age"
    }
    else if (fields.age < 18) {
        flag = 1;
        ageE.innerHTML = "Your age should be over 18"
    } else ageE.innerHTML = "";


    if (fields.usn.length < 12) {
        flag = 1;
        usnE.innerHTML = "USN should be 12 characters"
    }
    else if (fields.usn == "") {
        flag = 1;
        usnE.innerHTML = "Please Enter Your USN"
    } else usnE.innerHTML = "";


    if (fields.book == "") {
        flag = 1;
        bookE.innerHTML = "Please Select A Book"
    } else bookE.innerHTML = "";

    return flag
}

function display(Bill) {

    //Display Values ids
    var nameD = document.getElementById("nameD")
    var ageD = document.getElementById("ageD")
    var usnD = document.getElementById("usnD")
    var bookD = document.getElementById("bookD")
    var priceD = document.getElementById("priceD")

    nameD.innerHTML = Bill.name;
    ageD.innerHTML = Bill.age;
    usnD.innerHTML = Bill.usn;
    bookD.innerHTML = Bill.book;
    priceD.innerHTML = Bill.price;

}
var form = document.getElementById("form")

var formDetails = "";
form.addEventListener('submit', function (event) {

    event.preventDefault();
    var price;
    //Form Values
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var usn = document.getElementById("usn").value;
    var book = document.getElementById("book").value;


    fields = { name, age, usn, book };
    // errors = { nameE, ageE, usnE, bookE };
    var errFlag = validateError(fields);
    if (errFlag == 1) {
        return false
    }
    if (book == "computer network" || book == "system software") {
        price = 1000;
    }
    else {
        price = 1500;
    }
    bill = { name, age, usn, book, price };
    display(bill)
    // formDetails += name + "<br>" + age + "<br>" + usn + "<br>" + book;
    // console.log(formDetails);
})
