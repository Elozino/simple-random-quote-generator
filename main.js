const arrOfQuotes = [
   {
      word: "Be willing to look foolish for a short term to win long term",
      writer: "Axe Capital"
   },
   {
      word: "Everyone has access to information: the only difference is how to analyze it better",
      writer: "Axe Himself"
   },
   {
      word: " Become who you are by learning who you are",
      writer: "Axe Boss"
   },
   {
      word: " Do more, Be more",
      writer: "Favor Ori"
   },
   {
      word: " Do not stop rising",
      writer: "Dexter"
   },
   {
      word:'Be yourself, everyone else is already taken.',
      writer:'~ Oscar Wilde'
   },
   {
      word:'Two things are infinite: the universe and human stupidity; and I am not sure about the universe.',
      writer:"~ Albert Einstein"
   },
   {
      word:'So many books, so little time.',
      writer:'~ Frank Zappa'
   },
   {
     word:"Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
     writer:'~ Bernard M. Baruch'
   },
   {
     word:'A room without books is like a body without a soul.',
     writer:"~ Marcus Tullius Cicero"
   },
   {
     word:"You have gotta dance like there's nobody watching,<br>Love like you'll never be hurt,<br>Sing like there's nobody listening,<br>And live like it's heaven on earth.",
     writer:'~ William W. Purkey'
   }
]

const button = document.querySelector("#btn");
const authorJS = document.querySelector("#author");
const quoteJS = document.querySelector("#quote");

button.addEventListener("click", randomGenerator);

function randomGenerator(){
   let random = Math.floor(Math.random() * arrOfQuotes.length);

   quoteJS.innerHTML = arrOfQuotes[random].word;
   authorJS.innerHTML = arrOfQuotes[random].writer;
   console.log(random)
}