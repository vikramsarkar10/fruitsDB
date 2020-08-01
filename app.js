const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/fruitsDB",{ useNewUrlParser: true });

const fruitSchema = new mongoose.Schema({
  name: String,
  // {
  //   type: String,
  //   //required: [true, "please check your data entry, no name specified!"]
  // },
  rating: {
    type: Number,
    min: 1,
    max: 10
  },
  review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

// relation of guava with amy
// const guava = new Fruit({
//   name: "Guava",
//   rating: 7,
//   review: "tangy !!"
// });

//guava.save();

const cherry = new Fruit({
  name: "Cherry",
  rating: 8,
  review: "reddishhh !!"
});

// cherry.save();
Person.updateOne({name:"John"},{favouriteFruit:cherry},function(err){
  if(err){
    console.log(err);
  }else{
    console.log("Successfully updated favouriteFruit for John!");
  }
});


const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favouriteFruit: fruitSchema
});

const Person = mongoose.model("Person",personSchema);

// const person = new Person({
//   name: "Amy",
//   age: 12,
//   favouriteFruit: guava
// });

//person.save();

// const mango = new Fruit({
//   name: "Mango",
//   rating: 9,
//   review: "so gooooood!"
// });
//
// const pineapple = new Fruit({
//   name: "Pineapple",
//   rating: 8,
//   review: "damn good!"
// });

// Fruit.insertMany([pineapple], function(err){
//   if(err){
//     console.log(err);
//   }else{
//     console.log("Its a success, we saved all the fruits");
//   }
// });

Fruit.find(function(err, fruits){
  if(err){
    console.log(err);
  }else{
    mongoose.connection.close();

    fruits.forEach(function(fruit){
      console.log(fruit.name);
    });
  }
});

//upadate

// Fruit.updateOne({_id:"5f257c5a38830a3ac4474903"}, {name:"Orange"}, function(err){
//   if(err){
//     console.log(err);
//   }else{
//     console.log("Successfully updated the document.");
//   }
// });

// delete

// Fruit.deleteOne({name:"Pineapple"},function(err){
//   if(err){
//     console.log(err);
//   }else{
//     console.log("Successfully deleted the document.");
//   }
// });
