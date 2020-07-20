const setofWords = [
  "My name is Rubayed Ahmed Foysal. I am a web developer.",
  "Hope you are having fun this is a simple game you can make.",
  "If you want the source code then link is given in the comment so you can create your own version of this challenge.",
];

const textArea = document.getElementById("writeArea");
const btn = document.getElementById("btn");
const btn2 = document.getElementById("btn2");
const msg = document.getElementById("rendomSentence");
let startTime, endTime;

const playgame = () => {
  let randomNumber = Math.floor(Math.random() * setofWords.length);
  let randomSentence = setofWords[randomNumber];
  msg.innerHTML = randomSentence;

  let date = new Date();
  startTime = date.getTime();
};

const endgame = () => {
  let date = new Date();
  endTime = date.getTime();
  let totalTime = (endTime - startTime) / 1000;

  let totalType = textArea.value;
  let countType = wordCount(totalType);
  let typeSpeed = Math.round((countType / totalTime) * 60);
  let speed = `You typed total at ${typeSpeed} words per minutes.`;
  speed += compeareWord(msg.innerHTML, totalType);
  msg.innerHTML = speed;
};

const compeareWord = (element1,element2)=>{
  let word1 = element1.split(" ");
  let word2 = element2.split(" ");
  let count = 0;

  word1.forEach(function (item, index) {
    if (item == word2[index]) {
      count++;
    }
});

    let errorNumber = word1.length - count;
    return `${count} correct out of ${word1.length} words and the total number of error are ${errorNumber}.`;
};

const wordCount = (element) => {
  let response = element.split(" ").length;
  return response;
};

textArea.disabled = true;
btn.addEventListener("click", function () {
  if (this.innerText == "Start") {
    textArea.disabled = false;
    this.innerText = "Done";
    playgame();
  } else if (this.innerText == "Done") {
    textArea.disabled = true;
    this.innerHTML = "Start";
    endgame();
  }
});

btn2.addEventListener("click", function () {
  window.location.reload(true);
});

/*
const playgame=()=>{
    let randomNumber= Math.floor(Math.random()*setofWords.length);
    let randomSentence= setofWords[randomNumber];
    msg.innerHTML=randomSentence;
    let date= new Date;
    startTime = date.getTime();
}

const endgame=()=>{
    let date= new Date;
    endTime= date.getTime();
    let totalTime=((endTime-startTime)/1000);

    let totalType= textArea.value;
    let countType= wordCount(totalType);
    let totalSpeed= Math.round(((countType/totalTime)*60));
    let speed= `You typed total at ${totalSpeed} words per minutes.`;
    speed += compeareWord(msg.innerHTML,totalType);
    msg.innerHTML=speed;
}

const compeareWord=(element1,element2)=>{
    let word1= element1.split(" ");
    let word2= element2.split(" ");
    let count= 0;

    word1.forEach(function(item,index){
        if(item == word2[index]){
            count++;
        }
    });

    let errorNumber= (word1.length-count);
    return `${count} correct out of ${word1.length} words and the total number of error are ${errorNumber}.`;
}

const wordCount=(element)=>{
    let response= element.split(" ").length;
    return response;
}

textArea.disabled=true;

btn.addEventListener('click',function(){
    if(this.innerText=="Start"){
        textArea.disabled=false;
        btn.innerHTML= 'Done';
        playgame();
    }else if(this.innerText=="Done"){
        textArea.disabled=true;
        btn.innerHTML='Start';
        endgame();
    }
});

btn2.addEventListener('click',function () {window.location.reload(true)})
*/

/*

dynamic typing test

1:when user pressed start button then only active textarea else disable it and vice-versa
2:Every time a new set of lines on top. Whenever a start button is presses. Not the Done one.
3:get the time and change the button text to Done.
4:get the end time when user clicked on Done button. Find the total time taken.
5:Find the total words on the setofWords.
6:Find the speed of the user and show it on top when user clicked on Done.
7:Then call the compraeWord fun and find many of the words are matching and hoe many not. Display the result on top with speed.

*/
