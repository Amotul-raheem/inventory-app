import express from 'express';
import Product from "../models/product.js";


const inventoryRouter = express.Router();

inventoryRouter.post("/create-inventory", async (req, res) => {
    try{
    const quantity_of_stock = req.body.quantity_of_stock

    const product = new Product({
        product_name: req.body.product_name,
        product_code: req.body.product_code,
        description: req.body.description,
        inventory_on_hand: quantity_of_stock,
        price_per_unit: req.body.price_per_unit
    })
    await product.save();
    console.log("product inventory saved")
    res.status(200).send("Product inventory saved successfully.")
    } catch(error){
        console.log("error saving inventory")
        res.status(500).send(error)
    }
})

export {inventoryRouter}