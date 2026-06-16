


export  const response = (res, code , msg, result) => {
    return res.status(code).json({status: code < 400, message:msg, result})
}