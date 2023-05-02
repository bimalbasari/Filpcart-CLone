import express from "express";
import env from "dotenv";
import bodyParser from "body-parser";
import main from "./model/cunnections.db.js";
import router from "./routes/routes.js"


const app = express();
env.config();
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
main();
app.use("/", router)


app.listen(process.env.PORT, () => {
    console.log(`Server is running at
     http://localhost:${process.env.PORT}`)
})