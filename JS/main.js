function calcAmount(){
    let priceIFRSMesterkurzus=50000;
    let priceIFRSMesterkurzus2=55000;
    let priceIFRSMesterkurzus3=66000;
    let quantityIFRSMesterkurzus = document.querySelector("input[id='quantityquantityIFRSMesterKurzus']");
    let quantityIFRSMesterkurzusInNumber = parseInt(quantityIFRSMesterkurzus.value);

    let quantityIFRSMesterkurzus2 = document.querySelector("input[id='quantityquantityIFRSMesterKurzus2']");
    let quantityIFRSMesterkurzusInNumber2 = parseInt(quantityIFRSMesterkurzus2.value);

    let quantityIFRSMesterkurzus3 = document.querySelector("input[id='quantityquantityIFRSMesterKurzus3']");
    let quantityIFRSMesterkurzusInNumber3 = parseInt(quantityIFRSMesterkurzus3 .value);

    checkBoxIFRSMesterkurzus = document.querySelector("input[id='IFRSMesterKurzus']");    
    if(!checkBoxIFRSMesterkurzus.checked){quantityIFRSMesterkurzusInNumber=0}
    checkBoxIFRSMesterkurzus2 = document.querySelector("input[id='IFRSMesterKurzus2']");    
    if(!checkBoxIFRSMesterkurzus2.checked){quantityIFRSMesterkurzusInNumber2=0}
    checkBoxIFRSMesterkurzus3 = document.querySelector("input[id='IFRSMesterKurzus3']");    
    if(!checkBoxIFRSMesterkurzus3.checked){quantityIFRSMesterkurzusInNumber3=0}

    let totalprice=priceIFRSMesterkurzus*quantityIFRSMesterkurzusInNumber+priceIFRSMesterkurzus2*quantityIFRSMesterkurzusInNumber2+priceIFRSMesterkurzus3*quantityIFRSMesterkurzusInNumber3;
    if (totalprice>200000){
        totalprice=totalprice*0.9
    }
    showAmount(totalprice)    
}

function showAmount(price){
    let showAmountField = document.querySelector("span[id='totalPriceSpan']");
    showAmountField.innerHTML = price;
}

let rendelésForm = document.querySelector("#KépzésRendelésForm");
rendelésForm.addEventListener("submit", function (ev) {
    ev.preventDefault();
    calcAmount();})
