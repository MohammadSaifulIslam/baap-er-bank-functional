function getInputValueById(inputId){
    const inputValueById = document.getElementById(inputId);
    const inputValueString = inputValueById.value;
    const inputValue = parseFloat(inputValueString);

    inputValueById.value = '';
    return inputValue;
}

function getInnerTextById(elementId){
    const getElementTextById = document.getElementById(elementId);
    const elementInnerTextString = getElementTextById.innerText;
    const elementInnerText = parseFloat(elementInnerTextString);
    return elementInnerText;
}

function setInnerTextById(elementId, newValue){
    const getElementTextById = document.getElementById(elementId);
    getElementTextById.innerText = newValue;
}