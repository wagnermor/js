function verifyPalindromo(string) {
  if(!string) throw "String inválida";
  return console.log(string === string.split('').reverse().join(''));
}

function tryCatchExample(string) {
  try {
    verifyPalindromo(string);
  }
  catch(err) {
    throw err;
  }
}

tryCatchExample('oco');
tryCatchExample('Amor');
tryCatchExample('');

//A mesma função com finally
function verifyPalindromo(string) {
  if(!string) throw "String inválida";
  return string === string.split('').reverse().join('');
}

function tryCatchExample(string) {
  try {
    return console.log(verifyPalindromo(string));
  }
  catch(err) {
    throw err;
  }
  finally {
    console.log(`A string enviada foi: ${string}`);
  }
}

tryCatchExample('oco');
tryCatchExample('Amor');
tryCatchExample('');
