"use strict";
const stateList = document.getElementById("stateList");
const parkType = document.getElementById("parkType");
const stateBtn = document.getElementById("stateBtn");
const parkBtn = document.getElementById("parkBtn");


window.onload = function () {
    populatestateTypelist();
    populateParkTypelist();
    parkBtn.onclick = parkBtnClicked;
    stateBtn.onclick = stateBtnClicked;


}

function getlocationInDropdown(){
 
}

function populatestateTypelist() {
    for (let location of locationsArray) {
        let option = document.createElement("option");
        option.text = location;
        option.value = location;
        stateList.appendChild(option);
    }
}
function populateParkTypelist() {
    for (let parks of parkTypesArray) {
        let option = document.createElement("option");
        option.text = parks;
        option.value = parks;
        parkType.appendChild(option);
    }
}



function submitBtnClicked(){
    
}