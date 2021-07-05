
const Joi = require("@hapi/joi");

const CategorieController = require('../controllers/categorie')

const categorias = new CategorieController();

module.exports = [
  {
    method: "POST",
    path: "/categorie",
    handler: categorias.save,
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
    }
  },
  {
    method: "GET",
    path: "/categorie",
    handler: categorias.find,

  },

  {
    method: "GET",
    path: "/categorie/{id}",
    handler: categorias.findById,
  },

  {
    method: "PUT",
    path: "/categorie/{id}",
    handler: categorias.findByIdAndUpdate,
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
  },

  {
    method: "DELETE",
    path: "/categorie/{id}",
    handler: categorias.findByIdAndDelete,
  },



]

