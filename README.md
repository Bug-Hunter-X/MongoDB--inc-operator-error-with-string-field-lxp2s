# MongoDB $inc Operator Error with String Field

This repository demonstrates an uncommon error in MongoDB when using the `$inc` operator with a string field.  The `$inc` operator is designed to increment numerical fields; using it with strings leads to unexpected behavior and errors.

## Bug

The `bug.js` file contains code that attempts to increment a string field using `$inc`. This will result in a MongoDB error.

## Solution

The `bugSolution.js` file provides the correct approach, ensuring the field is a number before applying the `$inc` operator.