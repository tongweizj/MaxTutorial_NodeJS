function say(word) {
    console.log(word);
  }
  
function baba(someFunction, value) {
    someFunction(value);
}

function mama(someFunction, value) {
    someFunction(value);
}

baba(say, "Hello， jerry，I am baba");

mama(say, "Hello， jerry，I am mama");

