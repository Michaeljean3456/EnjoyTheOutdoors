"use strict";
const mountainList = document.getElementById("mountainList");
const submitBtn = document.getElementById("submitBtn");
const elevation = document.getElementById("elevationId");
const description = document.getElementById("descriptionId");
const mountainId = document.getElementById("mountainId");

window.onload = function (){
  populateMountainList()
  submitBtn.onclick = submitBtnClicked;

}

function populateMountainList(){
  for(let mountain of mountainsArray){
    let option = document.createElement("option");
    option.text = mountain.name;
    option.value = mountain.name;
    mountainList.appendChild(option);
  }
}

function submitBtnClicked(){
  let selectedmountain = mountainList.value;
  let mountains = mountainsArray.filter(
    (mountain) => mountain.name == selectedmountain
  );
  if (mountains.length > 0){
    for(let mountain of mountains){
      mountainId.value = mountain.name;
      description.value = mountain.desc;
      elevation.value = mountain.elevation;
    }
  }
  else{
    mountainId.value = "";
    description.value = "";
    elevation.value = "";
  }
}