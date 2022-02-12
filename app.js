function updateProductNumber(product, price, isIncreasing) {
    const productInput = document.getElementById(product + '-number');
    let productNumber = productInput.value;
    if (isIncreasing) {
        productNumber = parseInt(productNumber) + 1;
    }
    else if (productInput.value > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productNumber * price;

    calculateTotal(1219, 59);
}

function getInputValue(product) {
    const productInput = document.getElementById(product + '-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}
function calculateTotal(value1, value2) {

    const phoneTotal = getInputValue('phone') * value1;
    const caseTotal = getInputValue('case') * value2;
    console.log(phoneTotal, caseTotal);
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10;
    const totalPrice = subTotal + tax;
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = totalPrice;

}

document.getElementById("case-plus").addEventListener('click', function () {
    updateProductNumber('case', 59, true);
});

document.getElementById("case-minus").addEventListener('click', function () {
    updateProductNumber('case', 59, false);
});


document.getElementById("phone-plus").addEventListener('click', function () {
    updateProductNumber('phone', 1219, true);
});

document.getElementById("phone-minus").addEventListener('click', function () {
    updateProductNumber('phone', 1219, false);
});


document.getElementById("remove1").addEventListener('click', function () {
    document.getElementById('box1').style.display = "none";
    if (getInputValue('case') != 0) {
        calculateTotal(0, 59);
    } else {
        calculateTotal(0, 0);
    }
    document.getElementById('phone-number').value = 0;
})
document.getElementById("remove2").addEventListener('click', function () {
    document.getElementById('box2').style.display = "none";
    console.log(getInputValue('phone'), "fdsfd");
    if (getInputValue('phone') != 0) {
        calculateTotal(1219, 0);
    } else {
        calculateTotal(0, 0);
    }
    document.getElementById('case-number').value = 0;
})