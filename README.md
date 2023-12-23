
<body>

  <h1>WeChat - Chat Application</h1>
<h2>Demo</h2>
  <p>Check out the live demo: https://we-chat-sinisterdaddys-projects.vercel.app/</p>
  <h2>Getting Started</h2>

  <h3>Prerequisites</h3>
  <p>- Node.js and npm installed</p>
  <p>- Stream API Key</p>
  <p>- Twilio Account SID and Auth Token</p>
  <p>- Vercel Account (for deployment)</p>

  <h3>Installation</h3>
  <p>1. Clone the repository</p>
  <pre><code>git clone https://github.com/your-username/wechat-chat-app.git
    cd wechat-chat-app
  </code></pre>

  <p>2. Install dependencies</p>
  <pre><code>cd frontend
    npm install
    cd ../backend
    npm install
  </code></pre>

  <p>3. Configure environment variables</p>
  <pre><code>&lt;!-- Create a .env file in the backend directory and set the following variables --&gt;
    STREAM_API_KEY=your_stream_api_key
    TWILIO_ACCOUNT_SID=your_twilio_account_sid
    TWILIO_AUTH_TOKEN=your_twilio_auth_token
  </code></pre>

  <h2>Features</h2>
  <p>- User Authentication (Sign Up, Login, Logout)</p>
  <p>- Real-time Chat Functionality</p>
  <p>- WeChat-Inspired UI</p>
  <p>- Customizable Channel Creation and Editing</p>
  <p>- SMS Notifications using Twilio</p>
  <p>- Channel Searching and Filtering</p>
  <p>- Context API for State Management</p>
  <p>- Responsive Design</p>

  <h2>Project Structure</h2>
  <p>- frontend: React application for the user interface.</p>
  <p>- backend: Express.js server for handling authentication, chat functionality, and Twilio integration.</p>
  <p>- docs: Documentation files, including this README.</p>

  <h2>Frontend</h2>

  <h3>User Interface</h3>
  <p>The application provides a WeChat-inspired user interface with components for authentication, chat channels, and user interactions.</p>

  <h3>Authentication</h3>
  <p>The authentication form includes fields for username, phone number, avatar URL, password, and confirm password. The user's full name is retrieved from the database to ensure accuracy.</p>

  <h3>Chat Components</h3>
  <p>- <strong>Chat Feed</strong>: Displays messages in real-time.</p>
  <p>- <strong>Sidebar and Header</strong>: Navigation components for easy channel and user switching.</p>
  <p>- <strong>Channel Creation and Editing</strong>: Components for creating new channels and editing existing ones.</p>

  <h2>Backend</h2>

  <h3>Express Server</h3>
  <p>The backend server is built with Express.js and includes routes for user authentication, chat functionality, and Twilio webhook integration.</p>

  <h3>User Authentication</h3>
  <p>The server handles user sign-up and login requests, connecting to a database to query existing users, decrypt and compare passwords, and create authentication tokens.</p>

  <h3>Chat Functionality</h3>
  <p>- <strong>Channel Management</strong>: Create, edit, and switch between channels.</p>
  <p>- <strong>User Search</strong>: Implement search functionality to find users within channels.</p>
  <p>- <strong>Context API</strong>: Utilize the Context API for better prop management.</p>

  <h3>Twilio Integration</h3>
  <p>A webhook is set up to receive new messages and send SMS notifications to offline users via Twilio. Twilio credentials are securely stored in environment variables.</p>

  <h2>Deployment</h2>

  <h3>Backend Deployment</h3>
  <p>The backend is deployed to Heroku using the Heroku CLI. The deployed backend URL is connected to both the Stream and frontend code.</p>

  <h3>Frontend Deployment</h3>
  <p>The frontend is deployed to Vercel. Update the API endpoints in the code to reflect the deployed backend URL.</p>

  <h2>Connect Backend and Frontend</h2>
  <p>Ensure that the backend URL is added to the Stream chat settings for webhook integration and included in the frontend code for authentication.</p>

  <h2>Contributing</h2>
  <p>Contributions are welcome! Fork the repository, create a new branch, make your enhancements, and submit a pull request.</p>

  <h2>License</h2>
  <p>This project is licensed under the MIT License - see the <a href="LICENSE">LICENSE</a> file for details.</p>

</body>

</html>
