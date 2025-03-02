require("dotenv").config();
const connectDB = require("./db/connect");
const Product = require("./models/product");
const jsonProducts = require("./products.json");

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);

    // making sure no products already exist, having a clean start
    await Product.deleteMany();

    // add products from our json file to the database
    await Product.create(jsonProducts);

    console.log("Sucess!!!!");
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

start();
