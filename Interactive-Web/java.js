startGame = function()
{
  var num = 2;
  var num2 = 4;
  var i;
  var q;
  for (i=0; i <num; i++){
    document.write(answers[i].question)
    for (q=0; q <num2; q++){
      document.write(answers[i].options[q])
    }
  }

}

var answers = [
  {
    question: "What is the capital of Kentucky?",
    options: ["Frankfort", "Louisville", "Lexington", "Bowling Green"],
    correct: "Frankfort"
  },
  {
    question: "What is Dr. Bradshaw's middle name?",
    options: ["Pete", "Keith", "Thomas", "Bart"],
    correct: "Keith"
  }
]
