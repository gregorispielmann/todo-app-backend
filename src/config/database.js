const mongoose = require("mongoose");

// remove warning from mongoose promise (deprecated)
mongoose.Promise = global.Promise;

// module.exports = mongoose.connect("mongodb://localhost:3100/todos", { useUnifiedTopology: true });
module.exports = mongoose.connect(
  "mongodb+srv://tester:tester123@gregorispielmann-kkcp0.mongodb.net/todo_app?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);
