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
  stock : [integer]
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