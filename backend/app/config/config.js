import dotenv from "dotenv";

dotenv.config();


export const PORT = process.env.PORT || 5000;

export const SUPABASE_URL = process.env.SUPABASE_URL;
export const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY;

export const JWT_SECRET = "";
export const JWT_EXPIRATION_TIME = 3600 * 24 * 30;

export const SERVER_PRIVATE_KEY=BigInt(process.env.SERVER_PRIVATE_KEY);
export const PRIME=BigInt(process.env.PRIME);
export const GENERATOR=BigInt(process.env.GENERATOR);

export const EMAIL_HOST = "";
export const EMAIL_PORT = 25;
export const EMAIL_USER = "";
export const EMAIL_PASSWORD = "";

export const MAX_JSON_SIZE = "1mb";
export const URL_ENCODED = true;

export const REQUEST_LIMIT_TIME = 1 * 60 * 1000;
export const REQUEST_LIMIT_NUMBER = 15;

export const WEB_CACHE = false;

export const OTP_EXPIRATION_MS = 5 * 60 * 1000;

export const LOG_LEVEL = "info";
export const LOG_FILE_RELATIVE = "logs/application.log";

export const RABBITMQ_URL = "";
export const EMAIL_QUEUE_NAME = "";

export const IMAGE_UPLOAD_MAX_BYTES = 5 * 1024 * 1024;