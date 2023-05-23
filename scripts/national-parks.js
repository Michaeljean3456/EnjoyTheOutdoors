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


function parkBtnClicked(){
    let selectedParkType = parkType.value;
    let parks = nationalParksArray.filter(
      (park) => park.LocationName.includes(selectedParkType)
    );
        
  }

  function stateBtnClicked (){
    let selectedState = stateList.value;
    let states = nationalParksArray.filter(

    )
  }
