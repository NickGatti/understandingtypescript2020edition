export {};

type Conbinable = number | string;

function combine(
  input1: Conbinable,
  input2: number | string,
  resultConversion: "as-text" | "as-number"
) {
  let result;
  if (typeof input1 === "number" && typeof input2 === "number") {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  if (resultConversion === "as-number") {
    return +result;
  } else {
    return result.toString();
  }
}

const combinedAges = combine(30, 26, "as-number");

const combinedStringAges = combine("30", "26", "as-number");

const combinedNames = combine("Max", "Anna", "as-text");
