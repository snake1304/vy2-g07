import express from "express";
import homeController from "../controllers/homeController";
import carController from "../controllers/carController";

let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/', homeController.getHomePage);
    router.get('/about', homeController.getAboutPage);

    router.get('/api/get-all-cars', carController.handleGetAllCars);
    router.get('/api/get-detail-car-by-id', carController.getDetailCarById);


    router.post('/api/create-new-car', carController.handleCreateNewCar);

    return app.use("/", router);
}

module.exports = initWebRoutes;