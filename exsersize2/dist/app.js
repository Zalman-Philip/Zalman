"use strict";
const sumDualNumbers = (array) => {
    let sum = array.reduce((num1, num2) => {
        if (num2 % 2 === 0)
            return num1 + num2;
        return num1;
    }, 0);
    return sum;
};
const rectangleArea = (hight, width) => {
    return hight * width;
};
const isPalindrome = (string) => {
    for (let i = 0, j = string.length - 1; i !== j; i++, j--) {
        if (string[i] !== string[j])
            return false;
    }
    return true;
};
const firstLetterUpperCase = (array) => {
    const newArray = [];
    array.forEach((word) => {
        newArray.push(`${word[0].toUpperCase()}${word.slice(1).toLowerCase()}`);
    });
    return newArray;
};
const uniqueNumbers = (array) => {
    const unique = array.filter((value, index, array) => array.indexOf(value) === index);
    return unique;
};
const acronym = (user) => {
    let { firstName, lastName } = user;
    firstName = firstName[0];
    lastName = lastName[0];
    return { firstInitial: firstName, lastInitial: lastName };
};
const avgAge = (arr) => {
    const avgAge = arr.reduce((user1, user2) => {
        return user1 + user2.age;
    }, 0) / arr.length;
    return avgAge;
};
const arr1 = [
    { name: "asd", age: 55 },
    { name: "ad", age: 45 },
];
const outPut = avgAge(arr1);
console.log(outPut);
const arr2 = [4, 5, 7, 3, 6, 9];
const maxMin = (arr) => {
    const max = arr.reduce((num1, num2) => {
        if (num1 < num2)
            return num2;
        return num1;
    }, 0);
    const min = arr.reduce((num1, num2) => {
        if (num1 > num2)
            return num2;
        return num1;
    });
    return { max, min };
};
const result10 = maxMin(arr2);
console.log(result10);
const printRevers = (arr) => {
    const arrayToPrint = arr.reverse();
    console.log(arrayToPrint);
};
