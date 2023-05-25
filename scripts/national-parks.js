"use strict";
const stateList = document.getElementById("stateList");
const parkType = document.getElementById("parkType");
const stateBtn = document.getElementById("stateBtn");
const parkBtn = document.getElementById("parkBtn");


window.onload = function () {
    populatestateTypelist();
    populateParkTypelist();
    stateBtn.onclick = stateBtnClicked;
    parkBtn.onclick = parkBtnClicked;
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
        
    if (parks.length > 0) {
        for (let park of parks) {
          document.getElementById("locationIdPark").value = park.LocationName;
          document.getElementById("addressIdPark").value = park.Address;
          document.getElementById("cityIdPark").value = park.City;
          document.getElementById("stateIdPark").value = park.State;
          document.getElementById("zipIdPark").value = park.ZipCode;
          document.getElementById("phoneIdPark").value = park.Phone;
        }
        
      }
      else {
        locationIdPark.value = "";
       addressIdPark.value = "";
        cityIdPark.value = "";
        stateIdPark.value = "";
        zipIdPark.value = "";
        phoneIdPark.value = "";
      }
  }

  function stateBtnClicked (){
    let selectedState = stateList.value;
    let states = nationalParksArray.filter(
      (park) => park.State == selectedState
    );
    if(states.length > 0){
      for(let park of states){
        document.getElementById("locationIdState").value = park.LocationName;
        document.getElementById("addressIdState").value = park.Address;
        document.getElementById("cityIdState").value = park.City;
        document.getElementById("stateIdState").value = park.State;
        document.getElementById("zipIdState").value = park.ZipCode;
        document.getElementById("phoneIdState").value = park.Phone;
      }
    } 
    else{
      locationIdState.value = "";
      addressIdState.value = "";
      cityIdState.value = "";
      stateIdState.value = "";
      zipIdState.value = "";
      phoneIdState.value = "";
    }
  }
