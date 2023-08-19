// task 1

let arr = ["HTML", "JavaScript", "CSS"];

const copySorted = (arr) => {
  return arr.slice().sort();
};

let sorted = copySorted(arr);

console.log(arr);
console.log(sorted);

// task 2

let ivan = { name: "Ivan", surname: "Ivanko", id: 1 };
let petro = { name: "Petro", surname: "Petrenko", id: 2 };
let mariya = { name: "Mariya", surname: "Mriyko", id: 3 };

let users = [ivan, petro, mariya];

let usersMapped = users.map(({ name, surname, id }) => ({
    fullName: `${name} ${surname}`,
    id,
}));

console.log(usersMapped);

// task 3

ivan = { name: "Ivan", age: 25 };
petro = { name: "Petro", age: 30 };
mariya = { name: "Mariya", age: 28 };

let array = [petro, ivan, mariya];

const sortByAge = (arr) => {
  arr.sort((a, b) => a.age - b.age);
};

sortByAge(array);

console.log(array);

// task 4

const personalPlanPeter = {
  name: "Peter",
  age: 40,
  skills: {
    langs: ["ru", "eng"],
    programmingLangs: {
      js: 20,
      php: 10,
    },
    exp: "1 mounth"
  },

};

const showExperience = ({ skills }) => {
  return skills.exp;
};

const showProgrammingLangs = ({skills}) => {
  const {programmingLangs} = skills;
  let result = "";
  for (let key in programmingLangs) {
    result += `Мова ${key} вивчена на ${programmingLangs[key]}% \n`;
  }
  return result;
};

const showAgeAndLangs = ({skills, age}) => {
  const { langs } = skills;
  let result = `Мені ${age} і я володію мовами: ${langs
    .join(" ")
    .toUpperCase()}`;
  return result;
};

console.log(showExperience(personalPlanPeter));
console.log(showProgrammingLangs(personalPlanPeter));
console.log(showAgeAndLangs(personalPlanPeter));

// task 5

const shoppingMallData = {
  shops: [
    {
      width: 10,
      length: 5,
    },
    {
      width: 15,
      length: 7,
    },
    {
      width: 20,
      length: 5,
    },
    {
      width: 8,
      length: 10,
    },
  ],
  height: 5,
  moneyPer1m3: 30,
  budget: 50000,
};

const isBudgetEnough = ({ shops, height, moneyPer1m3, budget }) => {
  let price = 0;
  shops.forEach((shop) => {
    price += shop.width * shop.length * height * moneyPer1m3;
  });

  if (price > budget) {
    return "Budget is not enough";
  } else {
    return "Budget is enough";
  }
};

console.log(isBudgetEnough(shoppingMallData));


// task 6

const someString = 'This is some strange string';

const reverse = (str) => typeof str === "string" ? str.split("").reverse().join("") : "Mistake!";

const reverse1 = (str) => {
  if (typeof str === "string") {
    let reversedStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
      reversedStr += str[i];
    }
    return reversedStr;
  } else {
    return "Mistake!";
  }
};

console.log(reverse(someString));
console.log(reverse());
console.log(reverse1(someString));
console.log(reverse1());
