const elements = ["water", "fire", "earth", "wind"];

const filteredArr = elements.filter((element, index, array) => {
    return element.length > 4;
});

console.log(filteredArr);