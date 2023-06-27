import { config } from "dotenv";

// Load environment variables from .env file
config();

// Export configuration object
export default {
  // Development configuration
  dev: {
    // Port number for the development server
    port: process.env.SERVERPORT,
  },
  // Application configuration
  app: {
    // Email address for authentication
    authEMAIL: String(process.env.AUTH_EMAIL) || "",

    // Password for the authentication email
    authPASSWORD: String(process.env.AUTH_EMAIL_PASSWORD) || "",

    // URL of the client application
    clientURL: String(process.env.CLIENT_URL),
  },
};
