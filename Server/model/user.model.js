import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
    fastName: {
        type: String,
        required: true,
        trim: true,
        min: 3,
        max: 20
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        min: 3,
        max: 20
    },
     userName: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        index: true,
        lowercase: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true
    },
    hash_password: {
        type: String,
        required: true,
    },
     role: {
        type: String,
        enum: ["user", "admin"],
        default: "user"
    },
     contactNumber: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        length: 10
    },
     profilePicture: {
        type: String
    },


},
 { timestamps: true });

userSchema.virtual("password").set(function (password) {
    // Store hash in your password DB.
    this.hash_password = bcrypt.hashSync(password, 10)
});
userSchema.method = {
    Authenticate: async function (password) {
        return await bcrypt.compare(password, this.hash_password)
    }
}

const User = mongoose.model("user", userSchema);

export default User;