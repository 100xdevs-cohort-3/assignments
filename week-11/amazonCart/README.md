# Amazon Cart: Recoil State Management

## Overview

This project demonstrates a shopping cart implementation in a React application using Recoil for state management. The app enables users to manage cart items, update quantities, dynamically view the total price, and add items from a wishlist directly into the cart.

## Objectives

1. Implement shopping cart functionality using Recoil.
2. Dynamically update UI components based on cart and wishlist state.
3. Manage user actions like adding/removing items and updating quantities.
4. Allow users to add items from a wishlist into the cart.
5. Maintain routing for easy navigation between components.

## Problem Statement

Create a React application with the following features:
- A shopping cart to manage products and update item quantities.
- A wishlist that allows users to add items to the cart.
- Navigation routes linking the cart icon and logo to the Cart and Wishlist components.

## Directory Structure

- **`src/`**: Root source directory
  - **`components/`**: Contains reusable React components
    - **`AmazonCart.js`**: Main cart component with functionality to manage cart items.
    - **`WishList.js`**: Displays wishlist items with an option to add to the cart.
    - **`Navbar.js`**: Contains the navigation bar with links to the cart and wishlist.
  - **`store/`**: Contains Recoil state management files
    - **`cartItemsState.js`**: Atom for managing cart items.
    - **`wishItemsState.js`**: Atom for managing wishlist items.
    - **`cartTotalSelector.js`**: Selector for calculating total price and item count.
  - **`App.js`**: Main application component with routing setup.
  - **`index.js`**: Entry point of the application.
  - **`AmazonCart.module.css`**: CSS file for styling the cart component.
  - **`WishList.module.css`**: CSS file for styling the wishlist component.
  - **`Navbar.module.css`**: CSS file for styling the navigation bar.

## Implementation Approach

### Routing Setup

- **React Router**: Use React Router for routing between components.
- **Navbar Component**: Include a navigation bar with:
  - A logo linking to the wishlist page.
  - A cart icon linking to the `AmazonCart` component.
  

### AmazonCart Component

- **Cart State Management**: Uses `cartItemsState` Recoil atom for items in the cart.
- **Total Calculation**: Uses `cartTotalSelector` to calculate the total price and item count.
- **Cart Actions**: Users can add, remove, or update item quantities directly in the cart.
- **Wishlist Integration**: Items from the wishlist can be added to the cart, triggering an update in the total price.

### Wishlist Component

- **Wishlist Management**: Uses `wishItemsState` to store wishlist items.
- **Add to Cart**: Each wishlist item has an "Add to Cart" button, which adds the item to `cartItemsState`.
- **User Feedback**: A tooltip displays "Added to Cart" upon adding a wishlist item to the cart.

Yes, here’s a more **README-friendly format** for the Student TODOs, with clearer headings and bullet points for easy reading:

---

## TODOs

Implement the following features to improve functionality and user experience:

### 1. Delete and Undo Option
- **Objective**: Add a delete option to remove items from the wishlist, with an "Undo" option to restore the last deleted item.

### 2. Default Thumbnail for Missing Images
- **Objective**: Display a placeholder image for products at wishlist that lack a specified thumbnail.

### 3. Tooltip for Add to Cart Confirmation
- **Objective**: Show a tooltip saying "Added to Cart" when an item is added to the cart from the wishlist.

---

### Reference UI:

![Image](https://utfs.io/f/A8JZzw0Laf9jsWDdfREK4EWrL9nSe0giovIACkYzHDFRf3aM)
![Image](https://utfs.io/f/A8JZzw0Laf9j3K3HCB1eHnWBajspriovNKPtZG1MXc3mw4gR)
![Image](https://utfs.io/f/A8JZzw0Laf9jmKHTRVDI0gw2iSFX4st1yfhb5xDU6LKrBoHP)
