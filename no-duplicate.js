const names = ['Zayed', 'Sakib', 'Zayed', 'Abdul', 'Sakib', 'Rakib'];
const numbers = [2, 10, 15, 2, 10, 20, 66, 15];

function duplicateArray(array) {
    let noDuplicate = [];
    for (const item of array) {
        if (noDuplicate.includes(item) === false) {
            noDuplicate.push(item);
        }
    }
    return noDuplicate;
}

const duplicate = duplicateArray(names);
console.log(duplicate);