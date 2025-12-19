import mongoose from "mongoose";
import dotenv from "dotenv";
import User from "./models/User.js";

dotenv.config();

const MONGO_URI = process.env.MONGO_URI;

const roles = ["user", "admin"];
const statuses = ["pending", "approved"];

function randomPhone() {
  return "059" + Math.floor(1000000 + Math.random() * 9000000);
}

function generateUsers(count = 500) {
  const users = [];
  for (let i = 1; i <= count; i++) {
    users.push({
      name: `User ${i}`,
      email: `user${i}@test.com`,
      phone: randomPhone(),
      age: Math.floor(Math.random() * 40) + 18, // 18 - 58
      role: roles[Math.floor(Math.random() * roles.length)],
      status: statuses[Math.floor(Math.random() * statuses.length)],
    });
  }
  return users;
}

async function seed() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ MongoDB connected");

    await User.deleteMany();
    const users = generateUsers(500);
    await User.insertMany(users);

    console.log("🎉 500 users inserted");
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

seed();
