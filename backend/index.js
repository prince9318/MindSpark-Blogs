import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { connectDB } from "./config/connectionDB.js";
import userRoutes from "./routes/user.routes.js";
import blogRoutes from "./routes/blog.routes.js";
dotenv.config();
const app = express();
const __dirname = path.resolve();
// middlewares
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
// static files
// API ENDPOINTS
app.use("/images", express.static("uploads"));
app.use("/user", userRoutes);
app.use("/blog", blogRoutes);
const PORT = process.env.PORT || 4000;
// start the server
app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on port ${PORT}`);
});
