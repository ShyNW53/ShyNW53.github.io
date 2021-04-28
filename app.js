var jokes = [
  {
    joke:"Whats a hard tea to swallow?",
    answer:"reality.",
    keyWords:"reality"
  },
  {
    joke:"Why did the nurse need a red pen at work?",
    answer:"in case she needed to draw blood.",
    keyWords:"draw blood"
  },
  {
    joke:"When does a joke become a dad joke?",
   answer:"when it becomes apparent.",
    keyWords:"apparent"
  },
  {
    joke:"What kind of tree fits in your hand?",
   answer:"a palm tree.",
     keyWords:"palm"
  },
  {
    joke:"Why did the bike fall over?",
   answer:"it was two tierd.",
   keyWords:"two tierd"
  },
  {
    joke:"Why did the gym close down?",
   answer:"it just didn't workout.",
   keyWords:"workout"
  },
  {
    joke:"What do you call a cow in a earthquake?",
   answer:"a milkshake.",
   keyWords:"milkshake"
  }
    ];

var skill = 0;
respect = ["Alright you got it... nice."]
// var defeat;
var correct;
var randomJoke = 0;
var prevJoke = 0;

function go(){
  if(confirm("Hello, would you like to hear a joke?")){
    while(randomJoke === prevJoke){
    randomJoke = Math.round(Math.random() * (jokes.length - 1));
    }

    var answer = jokes[randomJoke].answer;
    var keywords = jokes[randomJoke].keyWords;
    var response = prompt(jokes[randomJoke].joke);

    if(response.includes(keywords)){
       // defeat = respect[Math.round(Math.random() * respect.length)];
      correct = ["WOW you got it right. CONGRATS!",];
      alert(correct[skill]);
      if(skill < correct.length -1){
        skill += 1;
      };
    } else {
      skill -=1;
      alert("NOPE!")
      alert(answer);
    }
    prevJoke = randomJoke;
  }
};
