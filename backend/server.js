require("dotenv").config();
const express = require("express");
const cors = require("cors");
const passport = require("passport");
const cookieSession = require("cookie-session");
const expSession = require("express-session");
const passportSetup = require("./passport");
const authRoute = require("./routes/auth");
const app = express();

app.use(
    expSession({
        secret: process.env.CLIENT_ID,
        name: "session",
        keys:["eventfinder"],
        maxAge: 24*60*60*100
    })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(
    cors({
        origin: "http://localhost:3000",
        methods: "GET,POST,PUT,DELETE",
        credentials: true
    })
);

app.use("/auth", authRoute);

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log("Listening to the Port");
})