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
  var useranswer=readline.questionInt(chalk.cyan("select your options:"))
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
    {question:"Glass is a...",
    options:["superhearted liquid","supercooled solid","supercooled liquid","supercooled acid"],
    answer:3

    
},
{question:"Which of the following speeds is faster?",
options:["The speed of sound","The speed of light",

    " The speed of electricity","the speed of vehicle "],
answer:2
  
  },
  {question:" Which branch of government is responsible for making laws?",
  options:["executive","legislative"," judicial","the lord flower"],
  answer:2

    

  },{ question:"Most cocoa beans are grown and harvested in which continent?",
  options:["Asia",

    "Africa",

    " South Africa"],
  answer:2

  },{question:"Which of the following terms refers to the fear of flying?",
  options:["Planophobia","Aviophobia","Fliophobia"],
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


