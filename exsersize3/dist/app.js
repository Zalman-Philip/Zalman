"use strict";
var ItemType;
(function (ItemType) {
    ItemType["Book"] = "book";
    ItemType["DVD"] = "dvd";
})(ItemType || (ItemType = {}));
const libraryItems = [
    {
        type: ItemType.Book,
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
    },
    { type: ItemType.DVD, title: "Inception", duration: 148 },
    { type: ItemType.Book, title: "To Kill a Mockingbird", author: "Harper Lee" },
    { type: ItemType.DVD, title: "Avatar", duration: 162 },
    { type: ItemType.Book, title: "Go Set a Watchman", author: "Harper Lee" },
];
const printItemsData = (items) => {
    items.forEach((item) => {
        console.log(Object.values(item).join(" "));
    });
};
printItemsData(libraryItems);
const cb1 = (item) => {
    return item.type === "dvd" && item.duration >= 120;
};
const filterItems = (arr, cb) => {
    const filtered = arr.filter((item) => cb(item));
    return filtered;
};
const result = filterItems(libraryItems, cb1);
console.log(result);
const cb2 = (item) => {
    return item.type === "book" && item.author === "Harper Lee";
};
const result2 = filterItems(libraryItems, cb2);
console.log(result2);
