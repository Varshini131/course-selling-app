require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const { userRouter } = require("./routes/user");
const { courseRouter } = require("./routes/course");
const { adminRouter } = require("./routes/admin");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("Backend is connected 🚀");
});

// Routes
app.use("/api/v1/user", userRouter);
app.use("/api/v1/admin", adminRouter);
app.use("/api/v1/course", courseRouter);

// Connect DB + Start Server
async function main() {
  await mongoose.connect(process.env.MONGO_URL);
  console.log("MongoDB connected ✅");

  app.listen(5000, () => {
    console.log("Server running on port 5000 🚀");
  });
}

main();