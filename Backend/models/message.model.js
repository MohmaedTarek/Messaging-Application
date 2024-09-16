import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({

    senderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    reciverId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    message: {
        type: String,
        required: true
    }

},

    { timestamps: true } //message.createdAT (will give us the time it was sent)

);

const Message = mongoose.model("Message", messageSchema);

export default Message;