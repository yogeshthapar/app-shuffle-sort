/*
  Method:- sort
  Purpose:- Accepts array of numbers and sort in ascending order
  */
const sort = (cardsArr) => {
  cardsArr.sort((a, b) => a - b);
  createCards(cardsArr);
  return cardsArr;
};

/*
  Method:- shuffle
  Purpose:- Accepts array of numbers and shuffle
  */
const shuffle = (cardsArr) => {
  for (let i = cardsArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i);
    const temp = cardsArr[i];
    cardsArr[i] = cardsArr[j];
    cardsArr[j] = temp;
  }
  createCards(cardsArr);
  return cardsArr;
};

/*
  Method:- createCards
  Purpose:- Accepts array of numbers, create card for each number and append to dom
  */
const createCards = (cardsArr) => {
  let cards = document.getElementById("cards");
  cards.innerHTML = "";

  cardsArr.forEach((item) => {
    let div = document.createElement("DIV");
    div.className = "card";
    div.innerText = item;
    cards.appendChild(div);
  });
};

/*
  Method:- initiateApp
  Purpose:- initiates app, creates numbered cards from 1 to 9 and binds listeners to each card
  */
const initiateApp = () => {
  let cardsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  createCards(cardsArr);

  document.getElementById("button--sort").onclick = () => {
    cardsArr = sort(cardsArr);
  };
  document.getElementById("button--shuffle").onclick = () => {
    cardsArr = shuffle(cardsArr);
  };
};

initiateApp();
