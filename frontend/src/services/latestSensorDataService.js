import { supabase } from "@/lib/supabaseClient";

export const getLatestSensorData = async () => {
  try {
    const { data, error } = await supabase
      .from("sensor_datas")
      .select("id, device_id, message, nonce")
      .order("created_at", { ascending: false })
      .limit(1)
      .single();

    if (error) {
      console.log(error.message);
      return null;
    }

    return data;

  } catch (error) {
    console.log(error.message);
    return null;
  }
};