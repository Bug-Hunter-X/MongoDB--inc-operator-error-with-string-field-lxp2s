```javascript
// Correct usage of $inc operator, ensuring the field is a number
db.collection.updateOne({name: "John"}, {$inc: {age: 1}});
//or, if age is a string and needs conversion:
db.collection.updateOne({name: "John"}, {$inc: {age: { $toInt: "$age" }}});
```