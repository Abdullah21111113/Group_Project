export const health = async (req,res)=>{
    try{
        return res.json({
            "message":"Working...",
        })
    }catch(error){
        return res.json(error)
    }
}