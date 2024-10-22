const handle_response = (res, data, status,next) => {
    if (data.length != 0) {
        return res.status(status).json({ response: data })
    } else {
        return res.status(404).json({
            success: false,
            message: `No results were found for the query.`
        })
    }
    
}

export default handle_response