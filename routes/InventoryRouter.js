import express from 'express';
import Product from "../models/product.js";


const inventoryRouter = express.Router();

inventoryRouter.post("/create-inventory", async (req, res) => {
    try {
        const quantity_of_stock = req.body.quantity_of_stock

        const product = new Product({
            product_name: req.body.product_name,
            product_code: req.body.product_code,
            description: req.body.description,
            inventory_on_hand: quantity_of_stock,
            price_per_unit: req.body.price_per_unit
        })
        await product.save();
        res.status(200).send("Product inventory saved successfully.")
    } catch (error) {
        res.status(500).send(error)
    }
})

inventoryRouter.post("/edit-inventory", async (req, res) => {
    try {

        const product = await Product.findOne({product_code: req.body.product_code});
        let inventoryOnHand = product.inventory_on_hand
        const type_of_edit = req.body.edit_type

        if (type_of_edit === "add") {
            inventoryOnHand += parseInt(req.body.quantity_of_product)
        } else if (type_of_edit === "subtract"){
            inventoryOnHand -= req.body.quantity_of_product
        }else {
            res.status(401).send("invalid argument")
        }

        if (inventoryOnHand < 0) {
            res.status(400).send("unable to edit inventory");
        }

        product.inventory_on_hand = inventoryOnHand
        product.save()

        res.status(200).send("Inventory edited successfully")
    } catch (error) {
        res.status(500).send(error)
    }
})
inventoryRouter.get("/get-all-inventory", async (req, res) => {
    try {
        const productsInventory = await Product.find({deleted: {$ne: true}})

        res.status(200).send(productsInventory)
    } catch (error) {
        res.status(500).send(error)
    }
})
inventoryRouter.post("/delete-inventory", async (req, res) => {
    try {
        const productCode = req.body.product_code
        if (!productCode) {
            res.status(400).send("Invalid product");
        }

        const product = await Product.findOne({product_code: productCode});

        product.deleted = true
        product.deletion_message = req.body.deletion_message
        await product.save()

        res.status(200).send("Inventory deleted successfully")
    } catch (error) {
        res.status(500).send(error)
    }
})
inventoryRouter.post("/undelete-inventory", async (req, res) => {
    try {
        const productCode = req.body.product_code
        if (!productCode) {
            res.status(400).send("Invalid product");
        }
        const product = await Product.findOne({product_code: req.body.product_code});

        product.deleted = false
        product.deletion_message = null
        await product.save()

        res.status(200).send("Inventory undeleted successfully")
    } catch (error) {
        res.status(500).send(error)
    }
})

export {inventoryRouter}