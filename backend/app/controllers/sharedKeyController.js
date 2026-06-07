import { SERVER_PRIVATE_KEY,GENERATOR,PRIME } from "../config/config.js";
import { bigMod } from "../utils/bigMod.js";

const server_public_key=bigMod(GENERATOR,SERVER_PRIVATE_KEY,PRIME);
console.log("Server public key");
console.log(server_public_key);
export const sharePublicKey = async(req,res)=>{
    try{
        const {sender_public_key}=req.body;
        if(!sender_public_key)
            return res.status(400).json({success:false,message:"Your public key Not Found."});
        console.log("Sender Public key");
        console.log(sender_public_key);
        return res.status(200).json({server_public_key:server_public_key.toString()});
    }catch(error){
        return res.status(500).json({success:false,message:"Internal Server Problem"});
    }
}