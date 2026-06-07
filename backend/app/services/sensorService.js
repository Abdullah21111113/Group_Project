import supabase from "../config/supabase.js";

export const insertSensorData = async (
    deviceId,
    message,
    nonce
) => {

    const { data, error } = await supabase
        .from("sensor_datas")
        .insert([
            {
                device_id: deviceId,
                message: message,
                nonce,
            }
        ])
        .select();
        
    if (error) {
        console.log(error);

        throw new Error("Something went wrong");
    }

    return data;
};