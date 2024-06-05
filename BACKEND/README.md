# E-Commerce Backend

This project is the backend for a computer e-commerce website, providing various functionalities such as user authentication, product management, order processing, and more. It is built using Node.js, Express, and MongoDB.

## Table of Contents

- [Installation](#installation)
- [Configuration](#configuration)
- [Endpoints](#endpoints)
  - [Authentication](#authentication)
  - [User Management](#user-management)
  - [Product Management](#product-management)
  - [Category Management](#category-management)
  - [Review Management](#review-management)
  - [Order Management](#order-management)
  - [Cart Management](#cart-management)
  - [Wishlist Management](#wishlist-management)
  - [Image Upload](#image-upload)
- [License](#license)

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/e-commerce-backend.git
    ```

2. Navigate to the project directory:
    ```sh
    cd e-commerce-backend
    ```

3. Install the dependencies:
    ```sh
    npm install
    ```

## Configuration

1. Create a `.env` file in the root directory of the project and add the following environment variables:
    ```plaintext
    MONGO_COMM=your_mongodb_connection_string
    PORT=your_port_number
    JWT_SECRET=your_jwt_secret
    STRIPE_SECRET_KEY=your_stripe_secret_key
    ```

2. Ensure MongoDB is running and accessible via the connection string provided in the `.env` file.

## Endpoints

### Authentication

- **Register**: `POST /api/auth/register`
- **Login**: `POST /api/auth/login`

### User Management

- **Get All Users**: `GET /api/users`
- **Get User By ID**: `GET /api/users/:id`
- **Update User**: `PUT /api/users/:id`
- **Delete User**: `DELETE /api/users/:id`
- **Get User Count**: `GET /api/users/get/count`

### Product Management

- **Get All Products**: `GET /api/products`
- **Get Product By ID**: `GET /api/products/:id`
- **Create Product**: `POST /api/products`
- **Update Product**: `PATCH /api/products/:id`
- **Delete Product**: `DELETE /api/products/:id`

### Category Management

- **Get All Categories**: `GET /api/categories`
- **Get Category By ID**: `GET /api/categories/:id`
- **Create Category**: `POST /api/categories`
- **Update Category**: `PATCH /api/categories/:id`
- **Delete Category**: `DELETE /api/categories/:id`

### Review Management

- **Get All Reviews**: `GET /api/reviews`
- **Get Review By ID**: `GET /api/reviews/:id`
- **Create Review**: `POST /api/reviews`
- **Update Review**: `PATCH /api/reviews/:id`
- **Delete Review**: `DELETE /api/reviews/:id`

### Order Management

- **Get All Orders**: `GET /api/orders`
- **Get Order By ID**: `GET /api/orders/:id`
- **Create Order**: `POST /api/orders`
- **Update Order**: `PATCH /api/orders/:id`
- **Delete Order**: `DELETE /api/orders/:id`
- **Get Order Count**: `GET /api/orders/get/count`
- **Get User Orders**: `GET /api/orders/user/:userId`

### Cart Management

- **Get Cart By User ID**: `GET /api/cart/:userId`
- **Add To Cart**: `POST /api/cart`
- **Update Cart**: `PUT /api/cart/:userId`
- **Delete Cart Item**: `DELETE /api/cart/:userId/:productId`

### Wishlist Management

- **Get Wishlist By User ID**: `GET /api/wishlist/:userId`
- **Add To Wishlist**: `POST /api/wishlist`
- **Remove From Wishlist**: `DELETE /api/wishlist/:userId/:productId`

### Image Upload

- **Upload Image**: `POST /upload`
- **Serve Uploaded Images**: `/images/:filename`

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
