# ecommerce_server

## URL
``` JS
http://localhost:3000/
```
#
## ROUTE
### POST /login
- Request Body
```JS
email =  `user email`
password = `user password`
```
##### SUCCESS
- Response *`(200)`*
``` JS
{
    "id": 1,
    "email": "admin@mail.com",
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhZG1pbkBtYWlsLmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTYwODAwNTI2Nn0.f649UR2QPbWEP7w0u6sjs8byQRvKjdLzKz0SLTAK4Dw"
}
```
#
##### ERROR *`'Internal Server Error'`*
- Response *`(500)`*
```JS
{
  "message" : "internal server error"
}
```
#
### POST /products
- Request Body
```JS
{
  name :  `product's name`,
  image_url :  `product's image url`,
  price : [integer],
  stock : [integer],
  stock : `product's category`
}
```
- Request Headers
```JS
access_token = `admin access token`
```
##### SUCCESS
- Response *`(201)`*
```JS
{
  "id": 4,
  "name": "Les Paul 4",
  "image_url": "https://www.jing.fm/clipimg/full/403-4034811_guitar-electric-guitar-clipart-les-paul-guitar-png.png",
  "price": 87000000,
  "stock": 2,
  "createdAt": "2020-12-13 12:19:27.598+07",
  "updatedAt": "2020-12-13 12:19:27.598+07"
}
```
#
##### ERROR *`'Validation Error'`*
- Response *`(400)`*
```JS
{
  "messages": [
    {
      "message": "name empty"
    },
    {
      "message": "image_url empty"
    },
    {
      "message": "price empty"
    },
    {
      "message": "Price cannot be less than 0"
    },
    {
      "message": "stock empty"
    },
    {
      "message": "Stock cannot be less than 0"
    },
    {
      "message": "category empty"
    }
  ]
}
```
#
##### ERROR *`'Unauthorized'`*
- Response *`(401)`*
```JS
{
  "message": "invalid account"
}
```
#
##### ERROR *`'Internal Server Error'`*
- Response *`(500)`*
```JS
{
  "message" : "internal server error"
}
```
#
### GET /products
##### SUCCESS
- Response *`(200)`*
```JS
{
  "result": [
    {
      "id": 4,
      "name": "Les Paul 4",
      "image_url": "https://www.jing.fm/clipimg/full/403-4034811_guitar-electric-guitar-clipart-les-paul-guitar-png.png",
      "price": 87000000,
      "stock": 2,
      "createdAt": "2020-12-13 12:19:27.598+07",
      "updatedAt": "2020-12-13 12:19:27.598+07"
    }
  ]
}
```
#
##### ERROR *`'Internal Server Error'`*
- Response *`(500)`*
```JS
{
  "message" : "Internal Server Error"
}
```
#
### GET /products/:id
- Request Body
```JS
{
  name :  `product's name`,
  image_url :  `product's image url`,
  price : [integer],
  stock : [integer],
  stock : `product's category`
}
```
- Request Params
```JS
id = [integer]
```
- Request Headers
```JS
access_token = `admin access token`
```
##### SUCCESS
- Response *`(200)`*
```JS
{
   "id": 4,
    "name": "Les Paul 4",
    "image_url": "https://www.jing.fm/clipimg/full/403-4034811_guitar-electric-guitar-clipart-les-paul-guitar-png.png",
    "price": 87000000,
    "stock": 2,
    "createdAt": "2020-12-13 12:19:27.598+07",
    "updatedAt": "2020-12-13 12:19:27.598+07"
}
```
#
##### ERROR *`'Unauthorized'`*
- Response *`(401)`*
```JS
{
  "message": "You aren't admin !"
}
```
#
##### ERROR *`'Internal Server Error'`*
- Response *`(500)`*
```JS
{
  "message" : "Internal Server Error"
}
```
#
### PUT /products/:id
- Request Body
```JS
{
  name :  `product's name`,
  image_url :  `product's image url`,
  price : [integer],
  stock : [integer],
  category : `product's category`
}
```
- Request Params
```JS
id = [integer]
```
- Request Headers
```JS
access_token = `admin access token`
```
##### SUCCESS
- Response *`(200)`*
```JS
{
  "id": 4,
  "name": "Les Paul 4",
  "image_url": "https://www.jing.fm/clipimg/full/403-4034811_guitar-electric-guitar-clipart-les-paul-guitar-png.png",
  "price": 87000000,
  "stock": 2,
  "createdAt": "2020-12-13 12:19:27.598+07",
  "updatedAt": "2020-12-13 12:19:27.598+07"
}
```
#
##### ERROR *`'Validation Error'`*
- Response *`(400)`*
```JS
{
  "messages": [
    {
      "message": "name empty"
    },
    {
      "message": "image_url empty"
    },
    {
      "message": "price empty"
    },
    {
      "message": "Price cannot be less than 0"
    },
    {
      "message": "stock empty"
    },
    {
      "message": "Stock cannot be less than 0"
    },
    {
      "message": "category empty"
    }
  ]
}
```
#
##### ERROR *`'Unauthorized'`*
- Response *`(401)`*
```JS
{
  "message": "invalid account"
}
```
#
##### ERROR *`'Internal Server Error'`*
- Response *`(500)`*
```JS
{
  "message" : "internal server error"
}
```
#
### DELETE /products/:id
- Request params
``` JS
id = [integer]
```
- Request Headers
```JS
access_token = `admin access token`
```
##### SUCCESS
- Response *`(200)`*
``` JS
{
  "message": "Product success to delete"
}
```
#
##### ERROR *`'Internal Server Error'`*
- Response *`(500)`*
```JS
{
  "message" : "internal server error"
}
```
#
### POST /carts/:productId
- Request params
```JS
productId = [integer]
```
- Request headers
```JS
access_token = 'customer access token'
```
- Request body
```JS
{
  quantity: [integer]
}
```
##### SUCCESS
- Response *`(201)`*
```JS
{
  "id": 1,
  "UserId": 1,
  "ProductId": 1,
  "updatedAt": "2020-12-16T14:19:28.686Z",
  "createdAt": "2020-12-16T14:19:28.686Z",
  "status": false,
  "quantity": 1
}
```
- Response *`(200)`*
```JS
{
  "id": 1,
  "UserId": 1,
  "ProductId": 1,
  "status": false,
  "quantity": 2,
  "createdAt": "2020-12-16T14:19:28.686Z",
  "updatedAt": "2020-12-16T14:19:57.629Z"
}
```
#
##### ERROR *`'product not enough'`*
- Response *`(400)`*
```JS
{
  "message": "Stock not enough"
}
```
#
##### ERROR *`'Unauthorized'`*
- Response *`(401)`*
```JS
{
  "message": "Please Login"
}
```
#
##### ERROR *`'Internal Server Error'`*
- Response *`(500)`*
```JS
{
  "message" : "Internal Server Error"
}
```
#
### GET /carts
- Request headers
```JS
access_token = 'customer access token'
```
##### SUCCESS
- Response *`(200)`*
```JS
{
  "totalPrice": 200000,
  "data": [
    {
      "id": 1,
      "UserId": 1,
      "ProductId": 1,
      "status": false,
      "quantity": 2,
      "createdAt": "2020-12-16T14:19:28.686Z",
      "updatedAt": "2020-12-16T14:19:57.629Z",
      "Product": {
        "id": 4,
        "name": "Les Paul 4",
        "image_url": "https://www.jing.fm/clipimg/full/403-4034811_guitar-electric-guitar-clipart-les-paul-guitar-png.png",
        "price": 87000000,
        "stock": 2
      }
    }
  ]
}
```
#
##### ERROR *`'Unauthorized'`*
- Response *`(401)`*
```JS
{
  "message": "Please Login First !"
}
```
#
##### ERROR *`'Internal Server Error'`*
- Response *`(500)`*
```JS
{
  "message" : "Internal Server Error"
}
```
#
### PATCH /carts/checkout
- Request headers
```JS
access_token = 'customer access token'
```
##### SUCCESS
- Response *`(200)`*
```JS
[
  {
    "id": 1,
    "UserId": 1,
    "ProductId": 1,
    "status": true,
    "quantity": 2,
    "createdAt": "2020-12-16T14:19:28.686Z",
    "updatedAt": "2020-12-16T14:21:29.883Z"
  }
]
```
#
##### ERROR *`'Failed to buy product'`*
- Response *`(400)`*
```JS
{
  "messages": [
    "Failed to buy Les Paul 1"
  ]
}
```
#
##### ERROR *`'Unauthorized'`*
- Response *`(401)`*
```JS
{
  "message": "Please Login"
}
```
#
##### ERROR *`'Internal Server Error'`*
- Response *`(500)`*
```JS
{
  "message" : "Internal Server Error"
}
```
#
### GET /carts/histories
- Request headers
```JS
access_token = 'customer access token'
```
##### SUCCESS
- Response *`(200)`*
```JS
[
  {
    "id": 1,
    "UserId": 1,
    "ProductId": 2,
    "status": true,
    "quantity": 1,
    "createdAt": "2020-12-15T15:03:37.326Z",
    "updatedAt": "2020-12-16T12:24:22.120Z",
    "Product": {
      "id": 4,
      "name": "Les Paul 4",
      "image_url": "https://www.jing.fm/clipimg/full/403-4034811_guitar-electric-guitar-clipart-les-paul-guitar-png.png",
      "price": 87000000,
      "stock": 2
        ...
    }
  },
  ...
]
```
#
##### ERROR *`'Unauthorized'`*
- Response *`(401)`*
```JS
{
  "message": "Please Login"
}
```
#
##### ERROR *`'Internal Server Error'`*
- Response *`(500)`*
```JS
{
  "message" : "Internal Server Error"
}
```
#
### DELETE /carts/:id
- Request params
```JS
id = [integer]
```
- Request headers
```JS
access_token = 'customer access token'
```
##### SUCCESS
- Response *`(200)`*
```JS
{
  "message": "Product success to delete"
}
```
#
##### ERROR *`'Unauthorized'`*
- Response *`(401)`*
```JS
{
  "message": "not authorized"
}
```
> or
```JS
{
  "message": "Please Login"
}
```
#
##### ERROR *`'Internal Server Error'`*
- Response *`(500)`*
```JS
{
  "message" : "Internal Server Error"
}
```
#