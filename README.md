# Inventory-app
A web application that tracks the inventory of various users of a logistics company.
It allows a user to create inventory of a product, edit and delete inventory. The total list
of inventories of all products for a particular user can also be viewed.

This app was built using node.js framework and mongodb as database.

# Api contract
1. `/api/create-inventory`(POST)

The create-inventory endpoint is a post request that receives the product name, product code,
description of the product, price per unit, and quantity of products added.

REQUEST PAYLOAD:
`{
"product_name": "wine-scarves",
"product_code": "165",
"description": "Nice quality silk scarf",
"quantity_of_stock": "30",
"price_per_unit": "2500"
}`

RESPONSE:` Product inventory saved successfully`.


2. `/api/edit-inventory`(POST)

The edit-inventory endpoint is a post request that receives the product_code, the type of edit, and the quantity of product.

REQUEST PAYLOAD:` {
   "product_code": "31",
   "edit_type": "subtract",
   "quantity_of_product": "50"
   }`

RESPONSE: `Inventory edited successfully`

3. `/api/delete-inventory`(POST)
   
The delete-inventory endpoint receives the product code and deletion message.

REQUEST PAYLOAD:
` {
"product_code":"165",
"deletion_message": "stock has finished"
}`

RESPONSE: `Inventory deleted successfully`

4. `/api/undelete-inventory`(POST)

The undelete endpoint reverses a deleted inventory.

REQUEST PAYLOAD:
{
`"product_code":"165"
}`

RESPONSE: `Inventory undeleted successfully`

5. `/api/get-all-inventory` (GET)

The get all inventory endpoint is a get request that returns all inventories saved by a user except deleted inventories.

REQUEST PAYLOAD: 
RESPONSE:
`[
{
"_id": "6286627c4fc0467f82ebc7bb",
"product_name": "wine-scaves",
"product_code": 31,
"description": "Nice quality sil scarf",
"inventory_on_hand": 0,
"price_per_unit": 2500,
"deleted": false,
"__v": 0
},
{
"_id": "628662854fc0467f82ebc7bd",
"product_name": "wine-scaves",
"product_code": 51,
"description": "Nice quality sil scarf",
"inventory_on_hand": 3020,
"price_per_unit": 2500,
"deleted": false,
"__v": 0
},
{
"_id": "6286628c4fc0467f82ebc7bf",
"product_name": "wine-scaves",
"product_code": 61,
"description": "Nice quality sil scarf",
"inventory_on_hand": 30,
"price_per_unit": 2500,
"deleted": false,
"__v": 0
}]`