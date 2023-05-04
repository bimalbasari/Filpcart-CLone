import jwt from "jsonwebtoken";
import User from "../model/user.model.js";

/*
* New  User register contrller 
*/
export const Signup = async (req, res) => {

    const exit = await User.findOne({ email: req.body.email })
    if (exit) return res.status(400).json({ message: "User alrady registred" })

    try {
        const { fastName, lastName, email, password, contactNumber, userName } = req.body;
        const _user = new User({
            fastName,
            lastName,
            email,
            password,
            contactNumber,
            userName: userName + Math.random().toString()
        });

        _user.save()

        res.status(201).json({ message: "User created successfully..!" })

    } catch (err) {

        res.status(400).json({ message: err.message })
    }
}


/*
*User log in controller 
*/
export const Signin = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (user) {
            if (user.Authenticate(req.body.password)) {

                const token = jwt.sign({ _id: user._id, role: user.role }, process.env.JWT_SECRET)

                const { _id, fastName, lastName, email, role, fullName } = user

                res.status(200).json({ token, user: { _id, fastName, lastName, email, role, fullName } })

            } else { return res.status(400).json({ message: "Invalid Password" }) }
        }
    } catch (err) { res.status(400).json({ message: "User is not register" }) }
}


// test Function
export const profile = (req, res) => {
    res.status(200).json({
        message: "hello  from router"
    })

}

