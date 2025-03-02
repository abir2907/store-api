const Product = require("../models/product");

const getAllProductsStatic = async (req, res) => {
  const products = await Product.find({ featured: true, price: 23 });
  res.status(200).json({ products, nbHits: products.length });
};

const getAllProducts = async (req, res) => {
  const { featured } = req.query;
  const queryObject = {};

  if (featured) {
    queryObject.featured = featured === "true" ? true : false;
  }
  const products = await Product.find(queryObject);
  res.status(200).json({ products, nbHits: products.length });
  // If featured is not present in query then
  // queryObject = {} and we will get all products
};

module.exports = { getAllProductsStatic, getAllProducts };
