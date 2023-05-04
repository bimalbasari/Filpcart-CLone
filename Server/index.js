import express from "express";
import env from "dotenv"
import main from "./model/cunnections.db.js";
import router from "./routes/routes.js"
env.config();

const app = express();

app.use(express.json({ extended: true }));

main();
app.use("/", router)


app.listen(process.env.PORT, () => {
    console.log(`Server is running at
     http://localhost:${process.env.PORT}`)
})