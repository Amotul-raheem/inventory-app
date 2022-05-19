# Inventory-app
A web application that tracks the inventory of various users of a logistics company.
It allows a user to create inventory of a product, edit and delete inventory. The total list
of inventories of all products for a particular user can also be viewed.

This app was built using node.js framework and mongodb as database.

# How to use:
1. The create-inventory endpoint is a post request that receives the product name, product code,
description of the product, price per unit, and quantity of products added.
e.g.
`{
"product_name": "wine-scarves",
"product_code": "165",
"description": "Nice quality silk scarf",
"quantity_of_stock": "30",
"price_per_unit": "2500"
}`

2. The edit-inventory endpoint is a post request that receives the product_code, the type of edit, and the quantity of product.
e.g.` {
   "product_code": "31",
   "edit_type": "subtract",
   "quantity_of_product": "50"
   }`
3. The delete-inventory endpoint receives the product code and deletion message.
4. The undelete endpoint reverses a deleted inventory.
5. The get all inventory endpoint is a get request that returns all inventories saved by a user except deleted inventories.