const degreeCalculator = (number, degree) => {
    if (degree === 0) {
        return 1;
    }
    return degree > 0 
        ? number * degreeCalculator(number, degree - 1) 
        : degreeCalculator(number, degree + 1) / number;
}

console.log(degreeCalculator(10, -2));