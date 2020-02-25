export {};

let userInput: unknown;
let userName: string;

userInput = "Nick";
if (typeof userInput === "string") {
  userName = userInput;
}
// userName = userInput;

function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}

generateError("An error occurred!", 500);
