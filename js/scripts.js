// Utility Logic

function noInputtedWord(word, text) {
  return ((text.trim().length ===0) || (word.trim().length === 0));
}

// UI Logic

$(document).ready(function(){
  $("form#word-counter").submit(function(event){
    event.preventDefault();
    const passage = $("#text-passage").val();
    const word = $("#word").val();
    const wordCount = wordCounter(passage);
    const occurrencesOfWord = numberOfOccurrencesInText(word, passage);
    $("#total-count").html(wordCount);
    $("#selected-count").html(occurrencesOfWord);
    $("#bolded-passage").html(boldPassage(word, passage));
  });
});

function boldPassage(word, text) {
  let htmlString = "<p>";
  let textArray = text.split(" ");
  textArray.forEach(function(element, index) {
    if (word === element) {
      htmlString = htmlString.concat("<b>" + element + "</b>");
    } else {
      htmlString = htmlString.concat(element);
    }
    if (index !== (textArray.length -1)) {
      htmlString = htmlString.concat(" ");
    }
  });
  return htmlString + "</p>";
}


//Business Logic
function wordCounter(text) {
  if (text.trim().length === 0) {
    return 0;
  }
  let wordCount = 0;
  const wordArray = text.split(" ");
  wordArray.forEach(function(element) {
    if (!Number(element)) {
      wordCount++;
    }
  });
  return wordCount;
}

function numberOfOccurrencesInText(word, text) {
  if (noInputtedWord(word, text)) {
    return 0;
  }
  const wordArray = text.split(" ");
  let wordCount = 0;
  wordArray.forEach(function(element){
    if (element.toLowerCase().includes(word.toLowerCase()) && (word === element)) {
      wordCount++
    }
  });
  return wordCount;
}

//get passage value
//convert passage to an array
//iterate through the array to find how many matching words there are
//determine the three most used words
function mostUsedWords(text) {
  const textArray = text.split(" ");
  let map = {};
  textArray.forEach(function(element) {
    wordCount = 0
    textArray.forEach(function(word) {
      if(word === element) {
        wordCount++
      }
    });
    map[element] = wordCount;
  });
  console.log(map);
}

