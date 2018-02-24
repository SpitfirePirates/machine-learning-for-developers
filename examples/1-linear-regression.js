const ml = require('ml-regression');
const SLR = ml.SLR;

// Data

let X = [1,2,3], // Input
    y = [2,4,6]; // Output

// Train

let regressionModel = new SLR(X, y);
console.log(regressionModel.toString(3));

// Predict

let prediction = regressionModel.predict(5);
console.log(prediction);
