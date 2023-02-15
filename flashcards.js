// To close the question box by clicking on the cancel button

function closeQuestionBox() {
  document.getElementById("question-box").remove();
}

// Constant content stores the form

const content = `<button id="X" onclick="closeQuestionBox()">X</button>
<form action="">
  <label for="question">Question</label><br />
  <textarea
    name="question"
    id="question"
    placeholder="Enter Your Question"
  >
  </textarea>
  <label for="answer">Answer</label><br />
  <textarea name="answer" id="answer" placeholder="Enter Your Answer">
  </textarea>
</form>
<button class="save-button" onclick="saveData()">Save</button>
`;

// Displays the question box

function displayQuestionBox() {
  const check = document.getElementById("question-box");
  if (check == undefined) {
    const main = document.querySelector(".header");
    const questionBox = document.createElement("div");

    questionBox.setAttribute("id", "question-box");
    questionBox.innerHTML = content;
    main.append(questionBox);
  }
}

const secondContent = `
  <p class="question-demo"></p>
  <button class="display-answer-button" onclick="displayAnswer()">
    Show/Hide Answer
  </button>
  <p class="answer-demo"></p>
  <div class="buttons">
    <button class="edit-button" onclick="editFunction()">EDIT</button>
    <button class="delete-button">DELETE</button>
  </div>
`;


// class newCard {
//   constructor(question, answer) {
//     this.question = question;
//     this.answer = answer;
//   }
// }
// let firstCard = new newCard(
//   document.getElementById("question"),
//   document.getElementById("answer")
// );

for (firstCard = 0; firstCard <= 20; firstCard++){
var cards = [];
let firstCard = {
  question: localStorage.getItem("question"),
  answer: localStorage.getItem("answer")
}
  
}
// function addID() {
  
//   let id;
//   for (id = 0; id <= 20; id++) {
    
//     cards.forEach(firstCard); {
//       document.querySelector(".demo-card").setAttribute("id", 'id' + id);
//     };
//   }
// }


function addCard() {
  const appendCard = document.querySelector(".card-array");
    const demoCard = document.createElement("div");

    demoCard.setAttribute("class", "demo-card");
    demoCard.innerHTML = secondContent;
    appendCard.append(demoCard);
  cards.push(firstCard);

  // addID();
}




// for (i = 0; i <= 0; i++) {
//   const appendCard = document.querySelector(".card-array");
//   const demoCard = document.createElement("div");

//   demoCard.setAttribute("class", "demo-card");
//   demoCard.innerHTML = secondContent;
//   appendCard.append(demoCard);
//   cards.push(firstCard);
//   document.querySelector(".card-array").style.display = "none";
//   // cards[cards.length] = i;
// }
// cards[0] = document.querySelector(".demo-card");
// cards.push(i++);
class cards {
  constructor(firstQuestion, firstAnswer) {
    this.firstQuestion = firstQuestion;
    this.firstAnswer = firstAnswer;
  }
}

const firstCard = new cards(
  document.getElementById("question"),
  document.getElementById("answer")
);

var examcards = [
  {question: '', answer: ''}
]

function saveData() {
  addCard();
  
  examcards.question = document.getElementById("question").value
  

  // localStorage.setItem("question", document.getElementById("question").value);

  // document.querySelector(".question-demo").innerHTML =
  //   localStorage.getItem("question");

  // localStorage.setItem("answer", document.getElementById("answer").value);

  // document.querySelector(".card-array").style.display = "block";
  // document.getElementById("question").value = null;
  // document.getElementById("answer").value = null;

}

function displayAnswer() {
  var display = document.querySelector(".answer-demo");

  if (display.style.display == "none") {
    display.innerHTML = localStorage.getItem("answer");
    display.style.display = "block";
  } else {
    display.style.display = "none";
  }
}

function editFunction() {
  document.getElementById("question-box");
  document.querySelector(".question-demo") = localStorage.getItem("question").value;
  document.querySelector(".answer-demo") = localStorage.getItem("answer").value;
}
