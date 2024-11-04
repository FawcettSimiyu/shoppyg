## Shoppy Global - E-Commerce Website

- This project is a fully responsive e-commerce website built using React and Tailwind CSS. It includes various features like browsing products, adding them to the cart, viewing product details, and completing a checkout process.

## Table of Contents

- Features
- Demo
- Installation
- Usage
- Project Structure
- Technologies Used

## Features

## Home Page:

- Hero Section: Engaging banner to showcase featured products or promotions.
- Welcome Message: Personalized greeting for users.
- New Arrivals: Display the latest products added to the store.
- Top Selling Products: Highlight the best-selling items.
- Brand Logo Display: Showcase logos of brands available in the store.
- Customer Feedback: Display testimonials from satisfied customers.
- Footer: Useful links and information.

## Product Page:

- Product List: View all available products.
- Product Item: Individual product card with details.
- Search Component: Search for products based on keywords.
- Product Detail Page:

- Product Detail: Detailed information about a selected product.
- Product Review: Display customer reviews for the product.

## Cart Page:

- Cart Display: View all items added to the cart.
- Cart Item: Individual cart item with options to modify quantities or remove items.

## Checkout Page:

- Order Summary: Overview of items to be purchased.
- Payment Form: Secure payment input fields.
- Shipping Address Form: Input fields for entering shipping details.

## Popup Component:

- Display notifications when an item is added to the cart.

## Error Page:

- Display error messages for invalid URLs.

## Loading Component:

- Shows a loading spinner if a component takes time to load.

## Installation

## Clone the repository:
 
- git clone https://github.com/Dhaya3132/ShoppyGlobal

## Navigate to the project directory:

- cd ecommerce-website

## Install dependencies:

- npm install

## Start the development server:

- npm start

## Usage

- Visit the home page to browse products.
- Use the search bar to find specific items.
- Click on a product to view its details.
- Add products to the cart and proceed to checkout.
- Complete the order by filling in payment and shipping information.

## Technologies Used

- React: A JavaScript library for building user interfaces.
- Tailwind CSS: A utility-first CSS framework for styling.
- Redux: State management for React applications.
- React Router: For handling routing in React applications.

## Contributing

- Contributions are welcome! Please fork this repository and submit a pull request.

## Project Structure

src/
│
├── components/
│   ├── Home/
│   │   ├── HeroSection.js
│   │   ├── WelcomeMessage.js
│   │   ├── NewArrivals.js
│   │   ├── TopSelling.js
│   │   ├── BrandLogo.js
│   │   ├── Feedback.js
│   │   └── Footer.js
│   ├── ProductPage/
│   │   ├── ProductList.js
│   │   └── ProductItem.js
│   ├── ProductDetailPage/
│   │   ├── ProductDetail.js
│   │   └── ProductReview.js
│   ├── CartPage/
│   │   ├── CartDisplay.js
│   │   └── CartItem.js
│   ├── CheckoutPage/
│   │   ├── OrderSummary.js
│   │   ├── PaymentForm.js
│   │   └── ShippingAddress.js
│   ├── ErrorPage.js
│   ├── LoadingComponent.js
│   └── PopupComponent.js
│
├── utils/
│   ├── useFetch.js
│   ├── cartSlice.js
│   └── brandLogoData.js
│
├── App.js
├── index.js
└── ...