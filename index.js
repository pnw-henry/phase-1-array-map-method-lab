const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

//Uses the global array 'tutorials' and returns a new array with
//each word in the string capitalized.
function titleCased(){
  const upperCaseTutorials = tutorials.map(function (title){  //Iterate through tutorials array.
    const words = title.split(' ');                           //Splits title string into a new array of words.
    
    const UpperCaseWords = words.map(function(word){          //Iterate through words array.                       
      return word.charAt(0).toUpperCase() + word.slice(1);    //Takes each word, upper cases first letter + slice remaining part.
    })
    
    return UpperCaseWords.join(' ');                          //Changes word array into a string and returns it.
  })

  return upperCaseTutorials;                                  //Returns the new tutorials array with each word in upper case.
}