import express from "express";

import * as healthController from "../controllers/healthController.js";
import * as sensorController from "../controllers/sensorController.js";
import * as sharedKeyController from '../controllers/sharedKeyController.js';

const router = express.Router();

// Health Check
router.get("/health", healthController.health);

// ESP32 Sensor Route
router.post("/sensor", sensorController.receiveSensorData);

//Key sharing

router.post("/keyshare",sharedKeyController.sharePublicKey);

export default router;