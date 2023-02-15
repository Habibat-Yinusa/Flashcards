// document.title = "flashcards";
// console.log(document.all);

class Cards {
  constructor(firstQuestion, firstAnswer) {
    this.firstQuestion = firstQuestion;
    this.firstAnswer = firstAnswer;
    this.id = 0;
  }
}

const firstCard = new Cards(
  document.getElementById("question"),
  document.getElementById("answer")
);

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
<button class="save-button" onclick="saveData(firstCard.id)">Save</button>
`;

// TO DISPLAYTHE  FORM
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

//TO CLOSE THE FORM
function closeQuestionBox() {
  document.getElementById("question-box").remove();
}
//VARIABLE DECLARATIONS
var cardArray = [];

var editId;
var getOldId;

function saveData() {
  firstCard.firstQuestion = document.getElementById("question").value;
  firstCard.firstAnswer = document.getElementById("answer").value;

  var secondContent = `
    <p class="question-demo" id="question-demo ${firstCard.id}"></p>
    <button class="display-answer-button" onclick="displayAnswer('${firstCard.firstAnswer}', ${firstCard.id})">
      Show/Hide Answer
    </button>
    <p class="answer-demo" class="display-answer ${firstCard.id}" id="answer-demo ${firstCard.id}"></p>
    <div class="buttons">
      <button class="edit-button" onclick="editFunction('${firstCard.firstQuestion}',
      '${firstCard.firstAnswer}',${firstCard.id})">EDIT</button>
      <button class="delete-button" onclick="deleteFunction(${firstCard.id})">DELETE</button>
    </div>
  `;

  if (editId == undefined) {
    const appendCard = document.querySelector(".card-array");
    const demoCard = document.createElement("div");
    demoCard.setAttribute("class", "demo-card");
    demoCard.setAttribute("id", `demo-card${firstCard.id}`);

    demoCard.innerHTML = secondContent;
    appendCard.append(demoCard);

    document.getElementById(`question-demo ${firstCard.id}`).innerHTML =
      firstCard.firstQuestion;
    document.getElementById(`answer-demo ${firstCard.id}`).innerHTML =
      firstCard.firstAnswer;

    document.getElementById(`answer-demo ${firstCard.id}`).style.visibility =
      "hidden";

    document.getElementById("question").value = null;
    document.getElementById("answer").value = null;

    // console.log("id1:", firstCard.id);
    firstCard.id = firstCard.id + 1;
    getOldId = firstCard.id;

    console.log("id2:", firstCard.id);

    firstCard.firstQuestion = document.getElementById("question").value;
    firstCard.firstAnswer = document.getElementById("answer").value;
  } else {
    firstCard.id = editId;
    console.log(editId);

    

    console.log(firstCard.firstAnswer, "ans");
    document.getElementById(`question-demo ${editId}`).innerHTML =
      firstCard.firstQuestion;
    document.getElementById(`answer-demo ${editId}`).innerHTML =
    firstCard.firstAnswer;
    console.log(firstCard.firstAnswer, "ans2");

    document.getElementById(`answer-demo ${editId}`).style.visibility =
      "hidden";
    console.log("id:", editId);
    document.getElementById("question").value = null;
    document.getElementById("answer").value = null;

    console.log("id3:", editId);

    editId = undefined;

    firstCard.id = getOldId;

    firstCard.firstQuestion = document.getElementById("question").value;
    firstCard.firstAnswer = document.getElementById("answer").value;

    // firstCard.id + 1;

    console.log("id3:", firstCard.id);
  }
}

// TO EDIT A CARD
function editFunction(question, answer, id) {
  document.getElementById("question-box").style.display = "block";

  document.getElementById("question").value = question;
  document.getElementById("answer").value = answer;
  console.log("Id:", id);
  editId = id;

  // var editCard = document.getElementById(`demo-card${firstCard.id}`);
}

//TO TOGGLE ANSWER VISIBILITY
function displayAnswer(answer, id) {
  var display = document.getElementById(`answer-demo ${id}`);
  if (display.style.visibility == "hidden") {
    display.innerHTML = answer;
    display.style.visibility = "visible";
  } else {
    display.style.visibility = "hidden";
    // display.style.visibility = "collapse";
  }
}

// TO DELETE A CARD
function deleteFunction(id) {
  document.getElementById(`demo-card${id}`).remove();
}
