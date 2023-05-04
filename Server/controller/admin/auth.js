import jwt from "jsonwebtoken";
import User from "../../model/user.model.js";


/*
* New  User register contrller 
*/
export const adminSignup = async (req, res) => {

    const exit = await User.findOne({ email: req.body.email })
    if (exit) return res.status(400).json({ message: "Admin alrady registred" })

    try {
        const { fastName, lastName, email, password, contactNumber, userName } = req.body;
        const _user = new User({
            fastName,
            lastName,
            email,
            password,
            contactNumber,
            role: "admin",
            userName:Math.random().toString()
        });

        _user.save()

        res.status(201).json({ message: "Admin created successfully..!" })

    } catch (err) {

        res.status(400).json({ message: err.message })
    }
}


/*
*User log in controller 
*/
export const adminSignin = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        console.log(user.role)
        if (user) {
            if (user.Authenticate(req.body.password)&& user.role === "admin") {

                const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET)

                const { _id, fastName, lastName, email, role, fullName } = user

                res.status(200).json({ token, user: { _id, fastName, lastName, email, role, fullName } })

            } else { return res.status(400).json({ message: "Invalid Password" }) }
        }
    } catch (err) { res.status(400).json({ message: "Admin is not register" }) }
}


// test Function
