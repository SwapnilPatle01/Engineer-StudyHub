import bcrypt from "bcrypt";
// import User from "../models/User.js";
import User from "../models/register.js";

export const registerUser = async (req, res) => {
    const { firstName, lastName, email, password, role, companyDetails } = req.body;

    try {
        // Check if the user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "Email already in use" });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user
        const newUser = new User({
            firstName,
            lastName,
            email,
            password: hashedPassword,
            role,
            companyDetails,
            // ...(role === "company" && { companyDetails }),
        });

        await newUser.save();
        res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
};
