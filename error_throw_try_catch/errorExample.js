/*
  new Error(message, fileName, lineNumber)
  Todos os parâmetros são opcionais
*/

const myError = new Error("Mensagem inválida");

// O erro pode receber um nome
myError.name = 'Exercício de mensagem de erro';

throw myError;