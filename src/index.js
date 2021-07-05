
require("./services/database");


//const Categorie = require("./models/categorie");

const Hapi = require("@hapi/hapi");
const Joi = require("@hapi/joi");


const init = async () => {
  const server = Hapi.server({
    port: 3000,
    host: "localhost",
  });

  const CategorieRoutes = require('./routes/categorie')
  const ProductRoutes = require('./routes/product')

  server.route(CategorieRoutes)
  server.route(ProductRoutes)

  await server.start();
  console.log(`Server running on ${server.info.uri}`);
};

process.on("unhandledRejection", (err) => {
  console.log(err);
  process.exit(1);
});

init();
