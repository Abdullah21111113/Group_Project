import express from "express";

import router from "./app/routes/api.js";

import {
    PORT,
    MAX_JSON_SIZE,
} from "./app/config/config.js";

const app = express();

// Middleware
app.use(express.json({
    limit: MAX_JSON_SIZE
}));

// Routes
app.use("/api", router);

// 404 Route
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "404 NOT FOUND"
    });
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});