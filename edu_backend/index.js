const express = require('express');
const app = express();
const mongoose = require('mongoose')
const cors = require("cors");
const { ObjectId } = require('mongodb');
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.use(cors());
app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization");

    next();  // Add this line
})
const uri = "mongodb+srv://Vinayak:NQR1uP4TfDYAiHWm@cluster0.t5qiget.mongodb.net/Restaurants?retryWrites=true&w=majority"
mongoose.set('strictQuery', false);
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('Successfully connected to MongoDB Atlas');
})
.catch((error) => {
  console.error('Failed to connect to MongoDB Atlas', error);
});

const restaurantSchema = new mongoose.Schema({
  _id:{type:ObjectId},
  restaurantName: {type:String},
  cuisine: {type:[String]},
  costfortwo: {type:String} ,
  location: {type:String},
  mealtype: {type:[String]},
});
const userSchema = new mongoose.Schema({
  firstName: {type:String},
  lastName: {type:String},
  email: {type:String} ,
  mobile: {type:String},
  pass: {type:String}
});
const menuSchema = new mongoose.Schema({

  restaurantName: {type:String},
   count: {
    type: Number,
    default: 0
  },
  dishName: {type:String},
  dishcategory: {type:String} ,
  dishinfo:{type:String},
  price: {type:String},
});
const Restaurant = mongoose.model('RestaurantDetails', restaurantSchema);
const menu = mongoose.model('MenuDetails', menuSchema);

app.get('/updateMenuDetails', async (req, res) => {
  try {
    // Update all documents in the menudetails collection
    await menu.updateMany({}, { $set: { count: 0 } });
    res.send('Menu details updated successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal server error');
  }
});
app.get('/updaterestDetails', async (req, res) => {
  try {
    // Update all documents in the menudetails collection
    await Restaurant.updateMany({}, { $set: { count: 0 } });
    res.send('Menu details updated successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal server error');
  }
});
app.post("/userdetails/:firstName/:lastName/:email/:mobile/:pass", (req, res) => {
  // Create a new instance of the RestaurantDetails model
  const user = new User({
    firstName: req.params.firstName,
    lastName: req.params.lastName,
    email: req.params.email,
    mobile: req.params.mobile,
    pass: req.params.mobile,
  });

  // Save the restaurant details to the database
  user.save((err) => {
    if (err) {
      return res.status(500).send(err);
    }
    return res.status(200).send("Restaurant details saved successfully!");
  });
});
// app.get('/userdetails/:email', async (req, res) => {
//   const restaurantName = req.params.restaurantName;
//   console.log(restaurantName)
//   const query = menu.find({ restaurantName : new RegExp(city, 'i') });
//   const restaurants = await query.exec();
//   console.log(restaurants)
//   res.send(restaurants);
// });
app.post("/menudetails/:restaurantName/:dishName/:dishcategory/:price/:dishinfo", (req, res) => {
  // Create a new instance of the RestaurantDetails model
  const restaurantDetails = new menu({
    restaurantName: req.params.restaurantName,
    dishName: req.params.dishName,
    dishcategory: req.params.dishcategory,
    price: req.params.price,dishinfo: req.params.dishinfo
  });

  // Save the restaurant details to the database
  restaurantDetails.save((err) => {
    if (err) {
      return res.status(500).send(err);
    }
    return res.status(200).send("Restaurant details saved successfully!");
  });
});
app.get('/menudetails/:restaurantName', async (req, res) => {
  const restaurantName = req.params.restaurantName;
  console.log(restaurantName)
  const query = menu.find({ restaurantName : new RegExp(restaurantName, 'i') });
  const restaurants = await query.exec();
  console.log(restaurants)
  res.send(restaurants);
});
app.get('/restaurants', async (req, res) => {
    const rest = await Restaurant.find({})
    console.log(rest)
    res.send(rest);
});
app.post("/restaurantdetails/:restaurantName/:cuisine/:costfortwo/:location", (req, res) => {
  // Create a new instance of the RestaurantDetails model
  const restaurantDetails = new Restaurant({
    restaurantName: req.params.restaurantName,
    cuisine: req.params.cuisine,
    costfortwo: req.params.costfortwo,
    location: req.params.location
  });

  // Save the restaurant details to the database
  restaurantDetails.save((err) => {
    if (err) {
      return res.status(500).send(err);
    }
    return res.status(200).send("Restaurant details saved successfully!");
  });
});
app.get('/restaurants/details/:_id', async (req, res) => {
  const objectId = mongoose.Types.ObjectId(req.params._id);
  console.log(objectId)
  const query = Restaurant.find({ _id : objectId });
  const restaurants = await query.exec();
  console.log(restaurants)
  res.send(restaurants);
});
app.get('/restaurants/location/:location', async (req, res) => {
  const city = req.params.location;
  console.log(city)
  const query = Restaurant.find({ location : new RegExp(city, 'i') });
  const restaurants = await query.exec();
  console.log(restaurants)
  res.send(restaurants);
});
app.get('/restaurants/mealtype/:mealtype', async (req, res) => {
  const city = req.params.mealtype;
  console.log(city)
  const query = Restaurant.find({ mealtype : new RegExp(city, 'i') });
  const restaurants = await query.exec();
  console.log(restaurants)
  res.send(restaurants);
});
app.get('/restaurants/rest/:restaurantName', async (req, res) => {
  const rest = req.params.restaurantName;
  console.log(rest)
  const query = Restaurant.find({ restaurantName : new RegExp(rest, 'i') });
  const restaurants = await query.exec();
  console.log(restaurants)
  res.send(restaurants);
});
app.get('/restaurants', async (req, res) => {
    const rest = await Restaurant.find({})
    console.log(rest)
    res.send(rest);
});
app.get('/restaurants/cost/:costfortwo', async (req, res) => {
    const cs = req.params.costfortwo
    const rest = await Restaurant.find({ costfortwo : cs})
     Restaurant.find({ cs }, (err, restaurants) => {
    if (err) {
      console.log(err);
      return res.status(500).send("Error finding restaurants");
    }
    console.log("0")
    console.log(rest)
    return res.send(rest);
})});
app.get('/restaurants/cuisine/:cuisine', async (req, res) => {
    const cs = req.params.cuisine.split(',');
    console.log(cs)
    const rest = await Restaurant.find({cuisine :  {  $in: cs}})
      Restaurant.find({ cs }, (err, restaurants) => {
    if (err) {
      console.log(err);
      return res.status(500).send("Error finding restaurants");
    }
    console.log("0")
    console.log(rest)
   res.send(rest);
})});

// MongoClient.connect(uri, { useNewUrlParser: true }, (err, client) => {
//   if (err) {
//     console.error(err);
//   } else {
//     const db = client.db('Restaurants');
//     console.log('Connected to MongoDB');

    // Search for restaurants by location
//     app.get('/api/restaurants?location=${location}', (req, res) => {
//       const location = req.query.location;
//       db.collection('RestaurantDetails').find({ location: location }).toArray((err, restaurants) => {
//         if (err) {
//           console.error(err);
//           res.status(500).send(err);
//         } else {
//           res.send(restaurants);
//         }
//       });
//     });
//   }
// });


// app.get('/', (req, res) => {
//   MongoClient.connect(uri, { useNewUrlParser: true }, (err, client) => {
//     if (err) {
//       console.error(err);
//       res.status(500).send(err);
//     } else {
//       const db = client.db('Restaurants');
//       db.collection('RestaurantDetails').find({}).toArray((err, result) => {
//         if (err) {
//           console.error(err);
//           res.status(500).send(err);
//         } else {
//           res.send(result);
//         }
//         client.close();
//       });
//     }
//   });
// });

app.listen(3001, () => {
  console.log('Listening on port 3001');
});