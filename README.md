# Machine Learning for Developers

This is a guide for learning machine learning aimed at developers that don't have any prior machine-learning knowledge.

## Linear Regression Algorithm

A linear regression algorithm tries to work out the relationship between input and output numerical variables

### Example 1 (1-linear-regression.js)

To train our model, we provide a list of inputs and outputs that we know to be correct.
In this example our inputs are integers, and our outputs are the inputs but doubled. 
We train the model with these inputs and outputs, then test the model by supplying the number 5

> node 1-linear-regression.js

f(x) = 2.00 * x
10

The output is 10, correctly doubling the number 5.
We did not tell the program to double the number, the model has determined that itself based on the training data.
In the example we also log the internal function the model has used. f(x) indicates that x is our input to the function. 2.00 * x shows that the model has decided to multiply our input by 2.

### Example 2 (2-linear-regression.js)

To make the example more complex, we change the training data so that the outputs are double the input then subtracted by 1.

> node 2-linear-regression.js

f(x) = 2.00 * x - 1.00
17

The supplied input (9) is correctly doubled and decremented to give us the number 17.
You can see that the internal function has determined that x needs to be multiplied by 2, then subtracted by 1.
Linear Regression algorithms are normally defined as f(x) = a * x + b.
The values of a and b are adjusted during the training process to give us the best output.
