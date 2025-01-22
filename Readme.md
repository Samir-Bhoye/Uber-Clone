# Uber Clone

This project is an Uber Clone application built using modern web technologies. Below is a detailed explanation of the features implemented and the process of the code.

## Features

1. **User Authentication**: 
    - Implemented user sign-up and login functionality using Firebase Authentication.
    - Password reset and email verification features.

2. **Real-time Database**:
    - Used Firebase Firestore to store user data, ride requests, and ride history.
    - Real-time updates for ride status and driver location.

3. **Map Integration**:
    - Integrated Google Maps API to display maps and routes.
    - Implemented location tracking for both drivers and riders.

4. **Ride Request and Matching**:
    - Users can request a ride by entering their destination.
    - Implemented an algorithm to match riders with nearby drivers.

5. **Payment System**:
    - Integrated Stripe API for handling payments.
    - Users can add payment methods and view transaction history.

## Code Explanation

### Authentication

- **SignUp.js**: Handles user registration with email and password.
- **Login.js**: Manages user login and session management.
- **AuthContext.js**: Provides authentication context to manage user state across the app.

### Database

- **Firestore.js**: Contains functions to interact with Firebase Firestore, including adding, updating, and retrieving data.
- **RideRequests.js**: Manages ride request data, including creating and updating ride requests.

### Map Integration

- **Map.js**: Component to render Google Maps and display user location.
- **LocationService.js**: Service to get the current location of the user and update it in real-time.

### Ride Matching

- **RideMatcher.js**: Algorithm to match riders with the nearest available drivers.
- **DriverService.js**: Manages driver availability and ride assignments.

### Payment

- **Payment.js**: Handles payment processing using Stripe API.
- **PaymentHistory.js**: Displays the user's transaction history.

## Setup and Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/Uber-Clone.git
    ```
2. Install dependencies:
    ```bash
    cd Uber-Clone
    npm install
    ```
3. Set up Firebase:
    - Create a Firebase project and add your web app.
    - Copy the Firebase config and paste it into `firebaseConfig.js`.

4. Set up Stripe:
    - Create a Stripe account and get your API keys.
    - Add your Stripe keys to the environment variables.

5. Run the application:
    ```bash
    npm start
    ```

## Conclusion

This Uber Clone project demonstrates the integration of various technologies to create a functional ride-sharing application. The code is modular and follows best practices for scalability and maintainability.
