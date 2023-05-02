import mongoose from 'mongoose';



const main = async () => {
    try {
        // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
        await mongoose.connect('mongodb://127.0.0.1:27017/Bookmart')
        console.log("DataBase connected")
    } catch (err) {
        console.log(err)
    }



}
export default main