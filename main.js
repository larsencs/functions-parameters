
//takes a number input, quarters it, and then returns it
const quarterValue = (number) => {
    const quarter = number / 4
    return quarter
}

// Invoke the function and store the return value
const quartered = quarterValue(24)

// Log the return value
console.log(quartered)