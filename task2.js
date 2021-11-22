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
  }
    console.log(" your currentscore "+score)
    console.log("______________________")
  }

  var questionBank=[
    {question:"where did you live?",
    options:["Bangalore","hyderabad","delhi","pune"],
    answer:1
    
  },
  {
    question:"what is your favourite color?",
    options:["pink","green","yellow","orange"],
    answer:3
  },
  {
    question:"what you are learning ?",
    options:["javascript","python","java","react"],
    answer:2

  }]
for (var i=0;i<questionBank.length;i++){
var currentquestion=questionBank[i]
check(currentquestion.question,currentquestion.answer,currentquestion.options)

}
var scorebank=[
  {name:"shabeera",score:2
},{
  name:"srilatha",score:3

}]
console.log(chalk.yellow("boom!,if your get  high score send me a screenshot"))
for (var i=0;i<scorebank.length;i++){
console.log(scorebank[i].name,scorebank[i].score)
}

