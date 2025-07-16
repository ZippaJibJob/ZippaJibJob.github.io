function purchase() {
    alert("Item added to cart");
}

function changeColor() {
    let div = document.getElementById('storeTable');
    let tColor = document.getElementById('textColor').value;
    let bColor = document.getElementById('backgroundColor').value;

    div.style.color = tColor;
    div.style.background = bColor;
}

function accountTable() {
    let usernameInput = "user";
    let emailInput = "em";
    let genderInput = "gender";
}

function inputCheck() {
    let email = document.getElementById('user').value;

    if (email == 7) {
        document.getElementById('nameError').innerHTML = "Email not valid";

    }
    else {
        document.getElementById('nameError').innerHTML = "Email is valid";
    }
}

function javaPractice() {

    text = ""

    for (i = 0; i < 10; i++) {

        text += "The number is " + i + "<br>";
        document.getElementById('javaPractice').innerHTML = text;
    }

}

