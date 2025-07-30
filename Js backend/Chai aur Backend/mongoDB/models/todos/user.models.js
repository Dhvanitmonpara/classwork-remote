import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    // or write username: String but it will only gets one property
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    }, 
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: [true, "Password is required"],
    }
}, { timestamps: true }) // timestamps gives createdAt and updatedAt

export const User = mongoose.model("User", userSchema)
// In this syntax User denotes to schema name, it will converted into users in mongoDb