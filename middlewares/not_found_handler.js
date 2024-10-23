const not_found_handler = (req,res,next) => {
    return res.status(404).json({
        success: false,
        messagge: `The request with the method ${req.method} with the path ${req.url} - Not Found`
    })
}

export default not_found_handler