/*
  The Club Doorman will give you a word. To enter the Club you need to provide the right number according to provided the word.

  Every given word has a doubled letter, like 'tt' in lettuce.

  To answer the right number you need to find the doubled letter's position of the given word in the alphabet and multiply this number per 3.

  It will be given only words with one doubled letter.
 */

  function passTheDoorMan (word){
  let doubles
  for(let i = 0; i < word.length - 1 ; i++) {
    if (word[i] === word[i + 1])
      doubles = word[i] 
  }
  return (doubles.charCodeAt() - 96) * 3
  }