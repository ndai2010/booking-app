import jwt from "jsonwebtoken";
export const verifyTAdmin = (req, res, next) => {
    const authHeader = req.header('Authorization')
    const token = authHeader && authHeader.split(' ')[1]
    if (!token) return res.status(400).json({
        errCode: 400,
        message: 'Invalid token'
    })
    try {
        const decode = jwt.verify(token, process.env.JWT)
        if (decode.isAdmin) {
            next()
        } else {
            return res.status(200).json({
                errCode: 400,
                message: 'You are not admin'
            })
        }
    } catch (error) {
        return res.status(500).json({
            errCode: 500,
            message: 'Invalid token'
        })
    }
}
export const verifyUser = (req, res, next) => {
    const authHeader = req.header('Authorization')
    const token = authHeader && authHeader.split(' ')[1]
    if (!token) return res.status(400).json({
        errCode: 400,
        message: 'Invalid token'
    })
    try {
        const decode = jwt.verify(token, process.env.JWT)
        next()

    } catch (error) {
        return res.status(500).json({
            errCode: 500,
            message: 'Invalid token'
        })
    }
}
