const sumDualNumbers = (array: number[]): number => {
  let sum = array.reduce((num1, num2) => {
    if (num2 % 2 === 0) return num1 + num2;
    return num1;
  }, 0);
  return sum;
};


const rectangleArea = (hight: number, width: number): number => {
  return hight * width;
};

const isPalindrome = (string: string): Boolean => {
  for (let i = 0, j = string.length - 1; i !== j; i++, j--) {
    if (string[i] !== string[j]) return false;
  }
  return true;
};

const firstLetterUpperCase = (array: string[]): string[] => {
  const newArray: string[] = [];
  array.forEach((word) => {
    newArray.push(`${word[0].toUpperCase()}${word.slice(1).toLowerCase()}`);
  });
  return newArray;
};

const uniqueNumbers = (array: number[]): number[] => {
  const unique = array.filter(
    (value, index, array) => array.indexOf(value) === index
  );
  return unique;
};


interface Name {
  firstName: string;
  lastName: string;
}
interface Acronym {
  firstInitial: string;
  lastInitial: string;
}
const acronym = (user: Name): Acronym => {
  let { firstName, lastName } = user;
  firstName = firstName[0];
  lastName = lastName[0];
  return { firstInitial: firstName, lastInitial: lastName };
};

type User = {
  name: string;
  age: number;
};

const avgAge = (arr: Array<User>): number => {
  const avgAge =
    arr.reduce((user1, user2) => {
      return user1 + user2.age;
    }, 0) / arr.length;
  return avgAge;
};
const arr1: Array<User> = [
  { name: "asd", age: 55 },
  { name: "ad", age: 45 },
];
const outPut = avgAge(arr1);
console.log(outPut);

const arr2: Array<number> = [4, 5, 7, 3, 6, 9];
type MaxMin = { max: number; min: number };
const maxMin = (arr: Array<number>): MaxMin => {
  const max = arr.reduce((num1, num2) => {
    if (num1 < num2) return num2;
    return num1;
  }, 0);
  const min = arr.reduce((num1, num2) => {
    if (num1 > num2) return num2;
    return num1;
  });
  return { max, min };
};
const result10 = maxMin(arr2);
console.log(result10);

const printRevers = (arr: any[]): void => {
  const arrayToPrint = arr.reverse();
  console.log(arrayToPrint);
};


