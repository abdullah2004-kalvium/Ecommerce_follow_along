# Ecommerce Follow Along Project
Welcome to the **Ecommerce Follow Along Project**, this is a hands-on project where we will build a complete e-commerce application using the MERN stack(MongoDB, Express.js, and Node.js). The goal is to learn how to develop a full-stack web application step by step.

## Milestone 1: Project Overview

#### 1. Understanding the MERN Stack:
**MongoDB :** A database for storing application data in a flexible, document based format.
**Express.js :** A backend web application framework for building APIs and handling server logics.
**React.js :** A framework library for building User Interfaces.
**Node.js :** A runtime environment that allows javascript to run on the server.

#### 2. REST API Structure
REST APIs are used to allow communication between the frontend and backend.
We'll create APIs for:
- **User Authentication**: Allowing users to register and log in.
- **Product Management**: Adding, Updating, and Retrieving products data.
- **Order Handling**: Managing customer orders.

#### 3. Database Schema Design
We'll learn how to design and organize data using MongoDB. A schema helps us define how the data is stored and related.


#### 4. Authentication
Authentication ensures only the right people can access certain features. For example:
- Users need to log in to place orders or see their personal data.
- It keeps the app secure by verifying users' identities.~

#### SECTION 2:
 Milestone 2:
  In this I create a react app and design the login page and style it Tailwindcss. It gives a wonderful Experience and i get some knowledge that how to work on a professional project. 

  ## Milestone 3:
  Set up dedicated folders for organizing backend code effectively. Initialized and configured a Node.js server to handle API requests. Connected the application to MongoDB to store and manage data. Implemented basic error handling to ensure smooth server operation.

  ## Milestone 4:
  Created a User Model to define how user data is structured in the database also developed a user interactions, like adding or retrieving data. Additionally, configured Multer to handle file uploads, allowing users to store files such as images.

  ## Milestone 5:
   In this I create a react app and design the signup page and style it Tailwindcss. It gives a wonderful Experience and i get some knowledge that how to work on a professional project. 

## Milestone 6:
In this milestone, we created a backend endpoint to securely store user data during signup. Key features include:

- Password Encryption: Encrypting passwords before storing them in the database to enhance security.
- Secure Data Storage: Saving user details while following best security practices.
- Compliance: Ensuring password protection aligns with security laws like  GDPR and PCI-DSS.

## Milestone 7 :
In this milestone, we implemented user login authentication by validating credentials and comparing encrypted passwords using bcrypt. The process involves retrieving user data, hashing the entered password, and matching it with the stored hash. If authenticated, access is granted; otherwise, an error is returned. This enhances security and protects user data. 🚀

## Milestone 8:
### Learning Goals 🎯  
- Build a **frontend card component** for products.  
- Display these **product cards** on the homepage.  

This milestone focuses on designing a reusable product card and integrating it into the homepage to showcase multiple products effectively. 🚀

# Milestone 9 - Creating a Product Form

## Why Create a Product Form?
The Product Form is essential for adding new products to the database. It allows users to input product details, which will be stored in MongoDB Atlas and displayed on the Products Home Page.

## Key Features of the Product Form:
- **Product Details Input:** The form collects essential details like:
  - Product Name  
  - Price  
  - Category  
  - Description  
  - Stock Availability  
- **Data Storage:** The entered data will be saved in MongoDB Atlas.  
- **Future Enhancements (for experimentation):**  
  - **Admin Access:** Only admins can upload products.  
  - **Shop Profiles:** A user with a "Shop Profile" can add and manage products.  

## Steps to Implement:
1. **Create a Product Form** in **React/HTML** to collect product details.  
2. **Handle Form Submission** to store the product data in MongoDB.  
3. **Restrict Access** (Optional Enhancements) based on user roles (Admin/Shop).  

This milestone helps in understanding how to structure and manage product data efficiently.

# Milestone 10 Summary

In this milestone, you'll learn how to create a **mongoose schema** for products and build an **endpoint** to store product details in MongoDB. The main steps include:

## 1. Product Schema
- Define the structure for product data (e.g., name, description, price) with validation for required fields and correct data types.

## 2. Endpoint Creation
- Build a POST endpoint to receive product data, validate it, and save it to MongoDB.

## 3. Validation
- Ensure only valid data is saved, which helps maintain data integrity and prevent errors.

