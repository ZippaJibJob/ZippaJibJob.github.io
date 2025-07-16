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

