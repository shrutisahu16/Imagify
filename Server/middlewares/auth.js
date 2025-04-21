import jwt from 'jsonwebtoken'

const userAuth = async(req,res,next)=>{
    const {token} = req.headers;
    // const token = req.headers.authorization?.split(" ")[1];

    if(!token){
        return res.json({
            success:false,
            message:'Not Authorized.Login Again'
        });
    }

    try {
        const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);

        if(tokenDecode.id){
           //attach this id with the userproperty and user id
            req.body.userId = tokenDecode.id;
        }
        else{
            return res.json({
                success:false,
                message:'Not Authorized.Login Again'
            }); 
        }

        next();
    } catch (error) {
        res.json({
            success:false,
            message: error.message
        })  
    }

};

export default userAuth;