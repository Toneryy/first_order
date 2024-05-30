const validateName = (name) => {
    let index = 0;
    while (index < name.length) {
        if (!isNaN(name[index])) {
            return false
        }
        index++
    }
    return true
}

console.log(validateName('12f'))