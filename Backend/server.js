import express from 'express';
import dotenv from "dotenv";
import cookieparser from "cookie-parser";

dotenv.config();

const app = express();


app.use(express.json());
app.use(cookieparser());

app.get("/",(req,res) => {
    res.send("Hello,world!")
});

const PORT = process.env.PORT || 5000;

app.listen(5000, () => {
    console.log("server is running on port 5000");
});

 