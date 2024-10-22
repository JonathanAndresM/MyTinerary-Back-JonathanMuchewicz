const handleResponse = (res, data, status) => {
    return res.status(status).json({ response: data })
}

export default handleResponse