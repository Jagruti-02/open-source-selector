# Open Source Selector

This exceptional open-source project enables users to select the best application that properly fulfills their needs. It is thoughtfully constructed using the dynamic combo of React and Vite for the frontend, and the reliable Python Flask handling the server operations in the backend. The outstanding Firestore serves as a database powerhouse, while Firebase contributes its abilities in order to enhance security and streamline user authentication.

# Requirements

To run this project, you will need the following:

* Node.js and npm (Node Package Manager) installed on your machine
* Python 3.x installed on your machine
* Visual Studio Code (VS Code) or any other code editor of your choice
* Firebase account with authentication and Firestore set up

# Getting Started

# Frontend Setup -

1. Clone the repository:
 
   * git clone <repository-url>

2. Navigate to the project's frontend directory:

   * cd application-selector-frontend

3. Install the required dependencies:

   * npm install

4. Create a .env file in the root of the frontend directory and add the following variables:

    * REACT_APP_FIREBASE_API_KEY=<your-firebase-api-key>
    * REACT_APP_FIREBASE_AUTH_DOMAIN=<your-firebase-auth-domain>
    * REACT_APP_FIREBASE_PROJECT_ID=<your-firebase-project-id>

Replace <your-firebase-api-key>, <your-firebase-auth-domain>, and <your-firebase-project-id> with your actual Firebase configuration values.

5. Start the frontend development server:
 
    * npm run dev


# Backend Setup

1. Open a new terminal and navigate to the project's backend directory:
(Clone the following repository to start the backend server - https://github.com/navyasharma0203/oss-content-based-filtering)

    * cd application-selector-backend


2. Install the required Python packages:

    * pip install -r requirements.txt


3. Upate the flask API server and run app.py.

    * The backend server will start running on http://localhost:5000.

# Firebase Setup

1. Create a Firebase project in the Firebase Console.

2. Enable the Authentication and Firestore services in your Firebase project.

3. Obtain your Firebase configuration values:

* API Key
* Auth Domain
* Project ID

You will need these values to set up the frontend configuration variables in the previous steps.

4. Set up Firestore collections and security rules according to your application's requirements. Refer to the Firebase documentation for more information on setting up Firestore.

# Contributing

Contributions to this project are welcome! If you find any issues or want to add new features, please feel free to submit a pull request.

When contributing, please follow the existing coding style and conventions. Make sure to test your changes thoroughly before submitting a pull request.




