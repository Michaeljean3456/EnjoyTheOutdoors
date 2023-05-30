"use strict";

const stateList = document.getElementById("stateList");
const parkType = document.getElementById("parkType");
const submitBtn = document.getElementById("submitBtn");
const Answer = document.getElementById("Answer");

window.onload = function () {
  populateStateTypeList();
  populateParkTypeList();
  submitBtn.onclick = submitBtnClicked;
};

function populateStateTypeList() {
  for (let location of locationsArray) {
    let option = document.createElement("option");
    option.text = location;
    option.value = location;
    stateList.appendChild(option);
  }
}

function populateParkTypeList() {
  for (let park of parkTypesArray) {
    let option = document.createElement("option");
    option.text = park;
    option.value = park;
    parkType.appendChild(option);
  }
}

function buildParkInfo(park) {
  return (
    "Location: " +
    park.LocationName +
    "<br>" +
    "Address: " +
    park.Address +
    "<br>" +
    "City: " +
    park.City +
    "<br>" +
    "State: " +
    park.State +
    "<br>" +
    "Zip Code: " +
    park.ZipCode +
    "<br>" +
    "Phone Number: " +
    park.Phone +
    "<br>" +
    "Fax Number: " +
    park.Fax +
    "<br>" +
    "Visit: " +
    park.Visit +
    "<br>" +
    "--------------------------------<br>"
  );
}

function displaySelectedState() {
  let selectedState = stateList.value;
  let result = "";
  let states = nationalParksArray.filter(
    (park) => park.State == selectedState);

  if (states.length > 0) {
    for (let state of states) {
      result += buildParkInfo(state);
    }
  } else {
    result = " ";
  }
  return result;
}

function displaySelectedParkType() {
  let selectedParkType = parkType.value;
  let result = "";
  let parks = nationalParksArray.filter((park) =>
    park.LocationName.includes(selectedParkType)
  );

  if (parks.length > 0) {
    for (let park of parks) {
      result += buildParkInfo(park);
    }
  } else {
    result = " ";
  }

  return result;
}

function submitBtnClicked() {
  Answer.innerHTML = "";

  let stateResult = displaySelectedState();
  let parkResult = displaySelectedParkType();
  let result = stateResult + parkResult;

  Answer.innerHTML = result;

  stateList.value = "";
  parkType.value = "";
}