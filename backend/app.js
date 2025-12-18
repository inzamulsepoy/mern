const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = 5000;

/* ======================
   Middleware
====================== */
app.use(cors()); // ✅ FIXED CORS
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* ======================
   MongoDB Connection
====================== */
mongoose.connect('mongodb://127.0.0.1:27017/reactDatabase')
    .then(() => {
        console.log("✅ MongoDB connected");
        app.listen(port, () => {
            console.log(`🚀 Server running on http://localhost:${port}`);
        });
    })
    .catch((err) => {
        console.error("❌ MongoDB connection error:", err);
    });

/* ======================
   Schema & Model
====================== */
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// Collection name: users
const User = mongoose.model('User', userSchema, 'users');

/* ======================
   Routes
====================== */

// Test route
app.get('/', (req, res) => {
    res.send("Backend is running");
});

// Submit form
app.post('/submit', async (req, res) => {
    try {
        const { name, email } = req.body;

        if (!name || !email) {
            return res.status(400).json({
                message: "All fields are required"
            });
        }

        const newUser = new User({ name, email });
        await newUser.save();

        res.status(201).json({
            message: "User saved successfully"
        });
    } catch (error) {
        console.error("Server Error:", error);
        res.status(500).json({
            message: "Internal server error"
        });
    }
});
