const ml = require('ml-regression');
const SLR = ml.SLR;

// Data

let X = [1, 5, 11, 32],
    y = [1, 9, 21, 63];

// Train

let regressionModel = new SLR(X, y);
console.log(regressionModel.toString(3));

// Predict

let prediction = regressionModel.predict(9);
console.log(prediction);
