import User from "../models/user.model.js";

export const getUserslelsidebar = async (req, res) => {
    try {
        const loggedInUserId = req.user._id;
        const allUsersexceptme = await User.find({ _id: { $ne: loggedInUserId } }).select("-password");

        return res.status(200).json(allUsersexceptme);
    } catch (error) {
        console.log("Error in getUserslelsidebar Controller:", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
}