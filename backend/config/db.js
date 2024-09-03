import mongoose from "mongoose";
import { ENV_VARS } from "./envVars.js";

export const connectDB = async () => {
  try {
    // Connect to MongoDB
    const conn = await mongoose.connect(ENV_VARS.MONGO_URI);

    // Log connection host information
    console.log("MongoDB connected: " + conn.connection.host);
  } catch (error) {
    console.log("Error connecting to MongoDB: " + error.message);
    process.exit(1); // Exit process with failure code
  }
};
