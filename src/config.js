const mongoose = require('mongoose');
const connect = mongoose.connect("mongodb://127.0.0.1:27017/FoodVerse");

// Check database connected or not
connect.then(() => {
    console.log("Database Connected Successfully");
})
.catch(() => {
    console.log("Database cannot be Connected");
})

