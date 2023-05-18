import { config } from "dotenv";

config();

export default {
  dev: {
    port: process.env.SERVERPORT,
  },
  app: {
    authEMAIL: String(process.env.AUTH_EMAIL) || "",
    authPASSWORD: String(process.env.AUTH_EMAIL_PASSWORD) || "",
    clientURL: String(process.env.CLIENT_URL),
  },
};
