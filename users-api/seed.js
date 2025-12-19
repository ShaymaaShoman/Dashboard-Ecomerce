import mongoose from "mongoose";
import dotenv from "dotenv";
import User from "./models/User.js";

dotenv.config();

const MONGO_URI = process.env.MONGO_URI;

const roles = ["user", "admin"];

function generateUsers(count = 500) {
  const users = [];
  for (let i = 1; i <= count; i++) {
    users.push({
      name: `Shaymaa ${i}`,
      email: `Shaymaa${i}@test.com`,
      role: roles[Math.floor(Math.random() * roles.length)],
    });
  }
  return users;
}

async function seed() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("✅ MongoDB connected");

    await User.deleteMany(); // امسحي القديم (اختياري)
    console.log("🗑 Old users removed");

    const users = generateUsers(500);
    await User.insertMany(users);

    console.log("🎉 500 users inserted successfully");
    process.exit();
  } catch (err) {
    console.error("❌ Seeding error:", err);
    process.exit(1);
  }
}

seed();
