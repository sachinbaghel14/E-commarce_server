# E-commerce
A robust eCommerce backend that can handle user authentication and manages products, orders and user profile with Node.js Express server with Mongodb database 
## command to run the server-
node server.js

## API details-
### Register- 
http://localhost:5000/api/users/register (POST Method, you have to pass name, email, password in the body)

### Login- 
http://localhost:5000/api/users/login (POST Method, pass email and password)

### User Details - 
http://localhost:5000/api/users/profile (POST Method, pass token in header with key x-auth-token)


### Get All Products - 
http://localhost:5000/api/products/ (GET method)

### Get Specific Product - 
http://localhost:5000/api/products/:id (GET method)

### Add Product - 
http://localhost:5000/api/products/ (POST Method, pass PName, description, price, stock, categoryid with token in header with key x-auth-token)

### Update Product - 
http://localhost:5000/api/products/:id (PUT Method, pass ie in params and PName, description, price, stock, categoryid in body with token in header with key x-auth-token)

### Delete Product -  
http://localhost:5000/api/products/:id (DELETE Method, pass id with token in header with key x-auth-token)


### Place Order -  
http://localhost:5000/api/orders/ (POST Method, pass orderItems, totalPrice, shippingAddress in body with token in header with key x-auth-token)

### Get User Order - 
http://localhost:5000/api/orders/ (GET Method, token in header with key x-auth-token)

### Get All Orders - 
http://localhost:5000/api/orders/admin (GET Method, token in header with key x-auth-token)

### Update Order Status - 
http://localhost:5000/api/orders/:id (PUT Method, token in header with key x-auth-token) 
