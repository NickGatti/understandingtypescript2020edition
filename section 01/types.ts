export {};

const person = {
  name: "Nick",
  age: 37
};

const person2: {
  name: string;
} = {
  name: "nick"
};

let arr1: string[];
arr1 = ["test1"];

let tuple1: [string, number];
tuple1 = ["one", 1];

enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR
}

const person3 = {
  name: "Nick",
  age: 37,
  hobbies: ["one", "two"],
  role: Role.ADMIN
};
