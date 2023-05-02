import User from "../model/user.model.js"

/*
* New  User register contrller 
*/
export const userSignup = async (req, res) => {

    const exit = await User.findOne({ email: req.body.email })
    if (exit) return res.status(400).json({ message: "User alrady registred" })

    try {
        const { fastName, lastName, email, password, role, contactNumber, userName } = req.body;
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
export const userSignin = (req, res) => {

}






// test Function
export const home = (req, res) => {
    res.status(200).json({
        message: "hello  from router"
    })
} 