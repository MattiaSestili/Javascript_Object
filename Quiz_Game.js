var questionList = [];

function Question (text, answer1, answer2, answer3, answer4, correctAnswer)
{
    this.text = text;
    this.answer1 = answer1;
    this.answer2 = answer2;
    this.answer3 = answer3;
    this.answer4 = answer4;
    this.correctAnswer = correctAnswer;
}

var question1 = new Question("Who is really Iron Man?", "Tony Stark", "James Cameron", "Peter Pan", "James Dean",1);
var question2 = new Question("Who created Apple.inc?", "Bill Gates","Jamie Lannister","Steve Jobs","Sundar Pichai",3);
var question3 = new Question("Who is Barry Allen?","Batman","The Flash","Superman","Spiderman",2);
var question4 = new Question("What the acronym S.H.I.E.L.D stands for?", "State Homeland interpreter bla bla ", "I don't know", "What?", "Strategic Homeland Intervention, Enforcement and Logistics Division",4);
var question5 = new Question("Who is the new Thor?", "Odino","Jane Foster","Thor","Tom Hiddleston",2);

questionList.push(question1);
questionList.push(question2);
questionList.push(question3);
questionList.push(question4);
questionList.push(question5);

var tagListQuestion = ["q1", "q2", "q3", "q4", "q5"];
var tagListAnswer = ["qAnswer1", "qAnswer2", "qAnswer3", "qAnswer4", "qAnswer5"];
var tagUserAnswer = ["input1", "input2", "input3", "input4", "input5"];

for (var i = 0; i < questionList.length; i++)
    {
        document.getElementById(tagListQuestion[i]).innerHTML = questionList[i].text;
        document.getElementById(tagListAnswer[i]).innerHTML =
            "<li>" + questionList[i].answer1 + "</li>" +
            "<li>" + questionList[i].answer2 + "</li>" +
            "<li>" + questionList[i].answer3 + "</li>" +
            "<li>" + questionList[i].answer4 + "</li>" 
    }

var event1 = document.getElementById("button1");
event1.addEventListener('click', checkAnswer,false);

function checkAnswer()
{
    var currentAnswer = 0;
    var score = 0;
    
    for (var i = 0; i < questionList.length; i++)
        {    
            currentAnswer = parseInt(document.getElementById(tagUserAnswer[i]).value)
            
            if(currentAnswer == questionList[i].correctAnswer)
                {
                    score++;
                    
                }
            document.getElementById("result").innerHTML = "Well Done!!! The correct answers are: " + score + "on 5";
        }
    document.getElementById("result").innerHTML = "Try Again!! The correct answers are: " + score + " on 5";
}
