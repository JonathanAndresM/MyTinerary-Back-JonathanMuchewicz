const error_handler = (error,req,res,next) => {
    console.log(error)
    return res.status(500).json({
        success: false,
        message: "500 Internal Server Error",
        response: error.message
    })
    
}

export default error_handler
