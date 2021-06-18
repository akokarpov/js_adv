
const sum = (a, b) => {

    if (typeof a === "number" && typeof b === "number") {
        return (a + b);
    } else {
        return "Error: both args must be numbers!"
    };
};

const extract = (a, b) => {

    if (typeof a === "number" && typeof b === "number") {
        return (a - b);
    } else {
        return "Error: both args must be numbers!"
    };
};

const multiply = (a, b) => {

    if (typeof a === "number" && typeof b === "number") {
        return (a * b);
    } else {
        return "Error: both args must be numbers!"
    };
};

const divide = (a, b) => {

    if (typeof a === "number" && typeof b === "number") {
        return (a / b);
    } else {
        return "Error: both args must be numbers!"
    };
};

module.exports = {
    sum: sum,
    extract: extract,
    multiply: multiply,
    divide: divide,
}