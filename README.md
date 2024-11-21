User Notification Preferences API
 Project Overview
 This project provides a serverless API for managing user notification preferences and sending
 notifications via various channels (email, SMS, push).
 It supports CRUD operations for user preferences, manages notification delivery settings, and
 simulates sending notifications. 
This API is built using NestJS, MongoDB, and integrates TypeScript and Mongoose. It is designed
 to be deployed serverlessly (e.g., on AWS Lambda or Vercel).
 Core Features- CRUD operations for user preferences.- Send notifications based on user preferences.- Rate limiting and request logging.- Basic statistics tracking (e.g., notification success/failure rate).- Validation of user inputs (email format, frequency, etc.).
 Requirements- Node.js (version 14 or later)- MongoDB (for development, use MongoDB Atlas or local setup)- NestJS framework- AWS Lambda or Vercel (for deployment)
 Installation
1. Clone the repository
   git clone <repository_url>
   cd <repository_name>
 2. Install dependencies
   npm install
 3. Set up MongoDB
   - Create a MongoDB cluster on MongoDB Atlas or use a local instance.
   - Add your MongoDB connection string in the .env file.
 4. Configure environment variables
   Create a .env file at the root of the project with the following configuration:
   MONGO_URI=mongodb://your-mongo-uri
   PORT=3000
 5. Run the application locally
   To run the app in development mode:
   npm run start:dev
 6. Run tests
   To run unit and integration tests:
   npm run test
 API Endpoints
 1. User Preferences- POST /api/preferences: Create new user preferences.- GET /api/preferences/:userId: Get the preferences of a specific user.- PATCH /api/preferences/:userId: Update the preferences of a specific user.- DELETE /api/preferences/:userId: Delete the preferences of a specific user.
 2. Notification Management- POST /api/notifications/send: Send a notification to a user (simulated).- GET /api/notifications/:userId/logs: Retrieve notification logs for a specific user.- GET /api/notifications/stats: Retrieve basic notification statistics (e.g., sent/failed notifications).
 Testing
 The project includes unit and integration tests written using Jest. The tests cover the service layer,
 validation, error handling, and API endpoints.
 Run tests with:
 npm run test
 Deployment
Serverless Deployment
 This API can be deployed to AWS Lambda or Vercel. 
For AWS Lambda, use the Serverless Framework. Ensure that the following configurations are set
 in the serverless.yml file:
 service: user-notification-api
 provider:
  name: aws
  runtime: nodejs14.x
  environment:
    MONGO_URI: ${env:MONGO_URI}
 functions:
  app:
    handler: dist/main.handler
    events:
      - http:
          path: /api/{proxy+}
          method: any
 For Vercel deployment, follow the Vercel documentation.
 Deployment Environment Variables
Make sure to add the necessary environment variables for your MongoDB URI and any other
 sensitive keys on your deployment platform.
 Example Requests
 1. Create User Preferences
 POST /api/preferences
 {
 }
  "userId": "user123",
  "email": "user@example.com",
  "preferences": {
    "marketing": true,
    "newsletter": false,
    "updates": true,
    "frequency": "weekly",
    "channels": {
      "email": true,
      "sms": false,
      "push": true
    }
  },
  "timezone": "America/New_York"
 2. Send Notification
 POST /api/notifications/send
 {
  "userId": "user123",
  "type": "marketing",
  "channel": "email",
  "content": {
    "subject": "Special Offer",
    "body": "Check out our latest deals!"
  }
 }
 Contributing
 Feel free to open issues or pull requests. Ensure that any changes you propose are thoroughly
 tested.
 License
 This project is licensed under the MIT License.