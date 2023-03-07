# Shopping App Schema Design

### User Story

1. A user or shopper, should be able to browse a catalog of products and add items to their shopping cart. 
2. They should be able to view the contents of the cart and adjust the quantity of items in the cart. 
3. Finally, to be able to place an order and receive confirmation of the order.

### Entities:

-   Product: It consist of products, each with a name, category, description and price.
-   Users: A user has a unique identifier, username, email, and password.
-   Orders: An order has a unique identifier, the user who placed it, cart containing the products, total price and delivery address.
-   Carts: Each cart has a unique identifier, the user who placed it, the product unique identifier and quantity.

### Relationships:

-   A user can view the products and place an order.
-   An order can contain multiple items.

## NoSQL Schema Design

Based on the requirements analysis, the following schema can be designed:

### Product Collection:

```
{
   _id: ObjectId,
   product_name: string,
   description: string,
   price: number,
   category: string
}

```

### Users Collection:

```
{
   _id: ObjectId,
   username: string,
   email: string,
   password: string
}

```

### Orders Collection:

```
{
   _id: ObjectId,
   userId: ObjectId,
   cartId: ObjectId,
   total_price: number,
   created_At: date,
   delivery_address: string
}

```
### Carts Collection:

```
{
   _id: ObjectId,
   userId: ObjectId,
   productId: ObjectId,
   quantity: number,
}

```
## API Endpoints

```
-   GET /products - Get a list of all products.
-   GET /products/:{productId} - Get details of a particular product.
-   POST/carts/add-to-cart - Add items to shopping carts.
-   GET/carts/get-carts - Get all contents of the cart.
-   PUT/carts/edit-cart - Adjust quantity of products in the cart.
-   POST /order/:{itemId} - Place an order for the items selected by the customer.
-   GET /orders/:{orderId} - Get the details of a specific order.

## Database
Mongodb