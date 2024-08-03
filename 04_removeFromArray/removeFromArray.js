const removeFromArray = function(oldArray, ...args) {
    let newArray = [];

    for (let i = 0; i < oldArray.length; i++) {
        let flag = false;
        for (let j = 0; j < args.length; j++) {
            if (oldArray.at(i) === args.at(j)) {
                flag = true;
            }
        }
        if (flag == false) {
            newArray.push(oldArray.at(i));
        }
    }

    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
