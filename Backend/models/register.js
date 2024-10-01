import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true, // Ensures unique emails
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
        enum: ['student', 'company', 'admin'], // Allowed roles
    },
    companyDetails: {
        companyName: String,
        companyEmail: String,
        linkedinProfile: String,
        websiteUrl: String,
        hiringType: String,
    },
}, { timestamps: true }); // Automatically adds createdAt and updatedAt fields

const User = mongoose.model("User", UserSchema);

export default User;


