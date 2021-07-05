// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;
const { model , Schema} = require('mongoose')
 

const CategorieSchema = new Schema(
  {
    categorie:{
      require: true,
      type: String,
    },
    sku: {
      require: true,
      type: String,
    },
    unitprice: {
      require: true,
      type: Number,
    },
    name: {
      required: true,
      type: String,
    },
    description: String,
  },
  {
    timestamps: true,
  }
);

module.exports = model('Categorie', CategorieSchema);