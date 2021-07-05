
const Joi = require("@hapi/joi");

const ProductController = require('../controllers/categorie')

const products = new ProductController();

module.exports = [
  ({
    method: "POST",
    path: "/product",
    handler: products.save,

    options: {
      validate: {
        payload: Joi.object({
          name: Joi.string(),
          unitprice: Joi.number(),
          sku: Joi.string(),
          description: Joi.string(),
        }),
        failAction: (request, h, error) => {
          return error.isJoi
            ? h.response(error.details[0]).takeover()
            : h.response(error).takeover();
        },
      },
    },
  }),


  {
    method: "GET",
    path: "/product",
    handler: products.find,

  },

  {
    method: "GET",
    path: "/product/{id}",
    handler: products.findById,
  },

  {
    method: "PUT",
    path: "/product/{id}",
    handler: products.findByIdAndUpdate,
    options: {
      validate: {
        payload: Joi.object({
          name: Joi.string().optional(),
          unitprice: Joi.number().optional(),
          sku: Joi.string().required(),
          description: Joi.string().optional(),
        }),
        failAction: (request, h, error) => {
          return error.isJoi
            ? h.response(error.details[0]).takeover()
            : h.response(error).takeover();
        },
      },
    },
  },

  {
    method: "DELETE",
    path: "/product/{id}",
    handler: products.findByIdAndDelete,
  },
];
