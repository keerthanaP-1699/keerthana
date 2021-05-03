const express = require("express");
const loginRoutes = require("./routes/loginRoutes");
const cors = require("cors");
const app = express();
const passport = require("passport");
const cookieSession = require("cookie-session");
const jwtToken = require("./middleware/jwtToken");
const cookieParser = require("cookie-parser");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(require('./middleware/responses'));

//test route
app.get("/", function (req, res) {
  res.json({ message: "welcome to our upload module apis" });
});
//user registeration
app.post("/register", loginRoutes.register);

//verifiying the user
app.get("/api/auth/confirm", loginRoutes.verifyUser);

//login user
app.post("/login", loginRoutes.login);

//list of user registered
app.get("/userList", jwtToken, loginRoutes.userList);

//list of users registered in desending order
app.get("/sortedList/:order", jwtToken, loginRoutes.sortUserList);

app.get("/pagination/:id", jwtToken, loginRoutes.pagination);

app.use(
  cookieSession({
    name: "test google",
    keys: ["key1", "key2"],
  })
);

const isLoggedIn = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.sendStatus(401);
  }
};

app.use(passport.initialize());
app.use(passport.session());

require("./config/passportSetup");

app.get("/failed", (req, res) => res.send("you failed to log in!"));

app.get("/good", isLoggedIn, (req, res) => res.send(`welcome`));

app.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

app.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/failed" }),
  function (req, res) {
    res.redirect("/good");
  }
);

app.post("/patientdetails", jwtToken, loginRoutes.patientDetails);

app.get("/logout", (req, res) => {
  res.clearCookie('Token');
  res.send({
    message:"you are logged out"
  })
});

app.listen(8081);
console.log("app runing at", 8081);
