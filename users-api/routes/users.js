import express from "express";
import User from "../models/User.js";

const router = express.Router();

/**
 * GET users
 * ?page=1&limit=10&search=ali&sort=name
 */
router.get("/", async (req, res) => {
  const {
    page = 1,
    limit = 10,
    search = "",
    sort = "createdAt"
  } = req.query;

  const query = {
    name: { $regex: search, $options: "i" }
  };

  const users = await User.find(query)
    .sort(sort)
    .skip((page - 1) * limit)
    .limit(Number(limit));

  const total = await User.countDocuments(query);

  res.json({
    data: users,
    pagination: {
      total,
      page: Number(page),
      pages: Math.ceil(total / limit)
    }
  });
});

/**
 * Check user exists
 */
router.get("/check/:email", async (req, res) => {
  const user = await User.findOne({ email: req.params.email });
  res.json({ exists: !!user });
});

/**
 * Create user
 */
router.post("/", async (req, res) => {
  const user = await User.create(req.body);
  res.status(201).json(user);
});

/**
 * Update user
 */
router.put("/:id", async (req, res) => {
  const user = await User.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(user);
});

/**
 * Delete user
 */
router.delete("/:id", async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ message: "User deleted" });
});

// update status
router.patch("/users/:id/status", async (req, res) => {
  const { status } = req.body;
  const user = await User.findByIdAndUpdate(
    req.params.id,
    { status },
    { new: true }
  );
  res.json(user);
});


export default router;
