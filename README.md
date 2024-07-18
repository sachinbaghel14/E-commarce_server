command to run the server-
node server.js

API details-
Register- http://localhost:5000/api/users/register (POST Method, you have to pass name, email, password in the body)
login- http://localhost:5000/api/users/login (POST Method, pass email and password)
user details - http://localhost:5000/api/users/profile (POST Method, pass token in header with key x-auth-token)

get all products - http://localhost:5000/api/products/ (GET method)
get specific product - http://localhost:5000/api/products/:id (GET method)
add product - http://localhost:5000/api/products/ (POST Method, pass token in header with key x-auth-token)
