var readline=require("readline-sync");
var chalk=require("chalk")
var username=readline.question(chalk.redBright("what is your name"))
var score=0
console.log(chalk.cyanBright("welcome "+username))
function check(question,answer,options){
  console.log(question)
  for(var i=0;i<options.length;i++){
  console.log(i+1,options[i])
}
  var useranswer=readline.question(chalk.cyan("select your options:"))
  if (useranswer===currentquestion.answer){
    console.log("you are right")
    score++
  }
  else{
      console.log("you are wrong")
      score
  }
  console.log("currentscore"+score)
  console.log("_____________")
}
    var questionBank=[
    {question:"Glass is a...",
    options:["superhearted liquid","supercooled solid","supercooled liquid","supercooled acid"],
    answer:3

  },
  {
    question:"Which of the following speeds is faster?",
    options:["The speed of sound","The speed of light",

        " The speed of electricity","the speed of vehicle "],
    answer:2
  },
  {
    question:" Which branch of government is responsible for making laws?",
    options:["executive","legislative"," judicial","the lord flower"],
    answer:2

  },{
      question:"Most cocoa beans are grown and harvested in which continent?",
      options:["Asia",

        "Africa",

        " South Africa"],
      answer:2
  },
{
    question:"Which of the following terms refers to the fear of flying?",
    options:["Planophobia","Aviophobia","Fliophobia"],
    answer:2

}]

for (var i=0;i<questionBank.length;i++){
var currentquestion=questionBank[i]
  console.log(questionBank.answer)
check(currentquestion.question,currentquestion.answer,currentquestion.options)

} 
var scorebank=[
{name:"srilatha",score:3,
name:"shabeera",score:2

}]


console.log(chalk.yellow("boom!, if you get high score send me a screenshot i will update"))
for (var i=0;i<scorebank.length;i++){
  console.log(scorebank[i].name,scorebank[i].score)
}
