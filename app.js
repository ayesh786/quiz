var quizData = [
  
  {
    question: "CSS me kisi element ka background color change karne ke liye konsi property use hoti hai?",
    option1: "bgcolor",
    option2: "background-color",
    option3: "color",
    correctAnswer: "option2"
  },
  {
    question: "CSS me text ko center karne ke liye kya use hota hai?",
    option1: "align: center",
    option2: "text-align: center",
    option3: "center-text: true",
    correctAnswer: "option2"
  },
  {
    question: "JavaScript me comment likhne ke liye kis symbol ka use hota hai?",
    option1: "//",
    option2: "##",
    option3: "**",
    correctAnswer: "option1"
  },
  {
    question: "JavaScript me alert box dikhane ke liye konsa function use hota hai?",
    option1: "prompt()",
    option2: "console.log()",
    option3: "alert()",
    correctAnswer: "option3"
  },
  {
    question: "JavaScript me user se input lene ke liye kya use hota hai?",
    option1: "input()",
    option2: "prompt()",
    option3: "get()",
    correctAnswer: "option2"
  },
  {
    question: "CSS ka full form kya hai?",
    option1: "creative style sheet",
    option2: "cascading style sheet",
    option3: "computer style sheet",
    correctAnswer: "option2"
  },
  {
    question: "CSS me font ka size set karne ke liye konsi property use hoti hai?",
    option1: "font-style",
    option2: "text-size",
    option3: "font-size",
    correctAnswer: "option3"
  },
  {
    question: "JavaScript me strict equality check karne ke liye konsa operator use hota hai?",
    option1: "==",
    option2: "===",
    option3: "=",
    correctAnswer: "option2"
  },
//   {
//     question: "HTML me paragraph likhne ke liye konsa tag use hota hai?",
//     option1: "<p>",
//     option2: "<para>",
//     option3: "<text>",
//     correctAnswer: "option1"
//   },
//   {
//     question: "HTML me table row banane ke liye konsa tag use hota hai?",
//     option1: "<td>",
//     option2: "<tr>",
//     option3: "<th>",
//     correctAnswer: "option2"
//   },
  {
    question: "CSS me element ke bahar wali space ko kya kehte hain?",
    option1: "Padding",
    option2: "Border",
    option3: "Margin",
    correctAnswer: "option3"
  },
  {
    question: "CSS me element ke andar wali space ko kya kehte hain?",
    option1: "Padding",
    option2: "Margin",
    option3: "Spacing",
    correctAnswer: "option1"
  },
  {
    question: "JavaScript me array ki length janne ke liye kya use hota hai?",
    option1: "size",
    option2: "length",
    option3: "count",
    correctAnswer: "option2"
  },
  {
    question: "JavaScript me function banane ke liye konsa keyword use hota hai?",
    option1: "method",
    option2: "function",
    option3: "func",
    correctAnswer: "option2"
  },
  {
    question: "HTML me checkbox banane ke liye input ka konsa type use hota hai?",
    option1: "radio",
    option2: "check",
    option3: "checkbox",
    correctAnswer: "option3"
  },
  {
    question: "CSS me border dene ke liye konsi property use hoti hai?",
    option1: "outline",
    option2: "border",
    option3: "line",
    correctAnswer: "option2"
  },
  {
    question: "JavaScript me page par text likhne ke liye kya use hota hai?",
    option1: "document.write()",
    option2: "console.log()",
    option3: "alert()",
    correctAnswer: "option1"
  },
//   {
//     question: "HTML me form banane ke liye konsa tag use hota hai?",
//     option1: "<input>",
//     option2: "<form>",
//     option3: "<label>",
//     correctAnswer: "option2"
//   }
];

var index = 0;
var score = 0;
var time = 30;
var timer;

var ques = document.getElementById("ques");

var opt1 = document.getElementById("option1");
var opt2 = document.getElementById("option2");
var opt3 = document.getElementById("option3");

var label1 = document.getElementById("label1");
var label2 = document.getElementById("label2");
var label3 = document.getElementById("label3");

var timeBox = document.getElementById("time");
var nextBtn = document.getElementById("nextBtn");

function showQuestion() {

  opt1.checked = false;
  opt2.checked = false;
  opt3.checked = false;

  ques.innerHTML = quizData[index].question;

  label1.innerHTML = quizData[index].option1;
  label2.innerHTML = quizData[index].option2;
  label3.innerHTML = quizData[index].option3;
}

function startTimer() {

  clearInterval(timer);

  time = 30;
  timeBox.innerHTML = time;

  timer = setInterval(function () {

    time--;
    timeBox.innerHTML = time;

    if (time == 0) {
      nextQuestion();
    }

  }, 1000);
}

function nextQuestion() {

  var answer = "";

  if (opt1.checked) answer = "option1";
  if (opt2.checked) answer = "option2";
  if (opt3.checked) answer = "option3";

  if (answer === quizData[index].correctAnswer) {
    score++;
  }

  index++;

  if (index < quizData.length) {
    showQuestion();
    startTimer();
  } else {
    clearInterval(timer);
    document.querySelector(".quiz-box").innerHTML =
      "Quiz Finished! 🎉 Your Score: " + score + "/" + quizData.length;
  }
}

nextBtn.onclick = nextQuestion;

showQuestion();
startTimer();