import User from "../../models/User.js";

const updateById = async (req, res, next) => {
    try {
        const userId = req.params._id;

        const updateData = { ...req.body }
        delete updateData.email
        delete updateData.password

        const updatedUser = await User.findByIdAndUpdate(
            userId, updateData, { new: true })

        if (updatedUser) {
            return res.status(200).json({
                message: "User successfully updated",
                response: updatedUser
            })
        } else {
            return res.status(404).json({
                message: "User not found"
            })
        }
    } catch (error) {
        next(error)
    }
}

export default updateById