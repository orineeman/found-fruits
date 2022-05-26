const textInput = document.querySelector(".text-input");
const divButtons = document.querySelector(".div-buttons");
const notFoundDiv = document.querySelector(".not-found-div");
const arrAllfruits = ["gam0ba","apple", "banana", "orange"];

display(arrAllfruits);

function display(arr) {
  divButtons.textContent = "";
  if (arr.length === 0){
    notFoundDiv.textContent = "no results found!";
    notFoundDiv.classList.add("not-found-div2");
  } else {
    notFoundDiv.textContent = "";
    notFoundDiv.classList.remove("not-found-div2");
     for (let val of arr) {
        const newFruitDiv = document.createElement("div");
        divButtons.append(newFruitDiv);
        const newBtnFruit = document.createElement("button");
        newBtnFruit.classList.add("btn");
        newBtnFruit.textContent = val;
        newFruitDiv.append(newBtnFruit);
  }}
}

textInput.oninput = function () {
    const arrFound = arrAllfruits.filter(function (item) {
    return item.startsWith(textInput.value);
  });
  display(arrFound);
};
