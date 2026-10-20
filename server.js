require("dotenv").config()

const path = require("node:path");
require("dotenv").config({
    path: path.resolve(__dirname, "../.env")
});

console.log("JWT secret loaded:", !!process.env.JWT_SECRET);

const app = require("./app");
const connectToDB = require("./config/db")

connectToDB();


app.listen(3000,()=>{
    console.log("Server is listening on port 3000")
})

