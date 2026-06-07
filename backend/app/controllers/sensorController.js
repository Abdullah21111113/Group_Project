import { insertSensorData } from "../services/sensorService.js";

export const receiveSensorData = async (req, res) => {

    try {
        const { deviceId, message,nonce } = req.body;
        // Validation
        if (!deviceId || !message) {

            return res.status(400).json({
                success: false,
                message: "deviceId and message are required"
            });
        }


        // Save data using service
        const data = await insertSensorData(
            deviceId,
            message,
            nonce,
        );

        console.log(data);

        // If insert failed
        if (!data || data.length === 0) {

            return res.status(500).json({
                success: false,
                message: "Failed to save data"
            });
        }
        return res.status(200).json({
            success: true,
            message: "Data saved successfully",
        });

    } catch (error) {

        console.log("Server Error:", error);
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};