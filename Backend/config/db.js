import {pool} from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const pool = new Pool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD
})

pool.on("connect", () =>{
    console.log("connected to the database");
})

pool.on("error",(err) => {
    console.error("databse error",err);
});

export default pool;

