// const btn = document.getElementById("btn");

// btn.addEventListener("click", function onClick(event) {
//   const box = document.getElementsByClassName("box");

//   for (var i = 0; i < box.length; i++) {
//     const borderColour = box[i].style.borderColor;
//     const textColour = box[i].style.color;
//     const originalColour = "rgb(87, 108, 188)";
//     const changedColour = "orange";
//     if (borderColour === originalColour && textColour === originalColour) {
//       box[i].style.borderColor = changedColour;
//       box[i].style.color = changedColour;
//     } else {
//       box[i].style.borderColor = originalColour;
//       box[i].style.color = originalColour;
//     }
//   }
// });

function ButtonClick(boxName) {
  return function () {
    const box = document.getElementsByClassName(boxName);

    for (let j = 0; j < box.length; j++) {
      const borderColour = box[j].style.borderColor;
      const textColour = box[j].style.color;
      const originalColour = "rgb(87, 108, 188)";
      const changedColour = "orange";
      if (borderColour === originalColour && textColour === originalColour) {
        box[j].style.borderColor = changedColour;
        box[j].style.color = changedColour;
      } else {
        box[j].style.borderColor = originalColour;
        box[j].style.color = originalColour;
      }
    }
  };
}

var ButtonDictionary = [
  { buttonText: "H1 Tag", assignedBox: "box1" },
  { buttonText: "H2 - H6", assignedBox: "box2" },
];
const myDiv = document.getElementById("Buttons");

for (let i = 0; i < ButtonDictionary.length; i++) {
  const myButton = document.createElement("button");
  myButton.innerText = ButtonDictionary[i]["buttonText"];
  myButton.style.borderRadius = "15px";
  myButton.style.padding = "10px";
  myButton.style.marginLeft = "10px";
  myButton.style.backgroundColor = "rgb(11,36,71)";
  myButton.style.color = "rgb(87, 108, 188)";
  myButton.style.borderColor = "rgb(87, 108, 188)";

  myButton.addEventListener(
    "click",
    ButtonClick(ButtonDictionary[i]["assignedBox"])
  );

  myDiv.appendChild(myButton);
}
