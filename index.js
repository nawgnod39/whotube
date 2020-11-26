import express from "express";
const app = express(); //app변수를 선언해서 express를 실행시킴 

const PORT = 4000;

const handleListening = () =>
  console.log(`Listening on: http://localhost:${PORT}`);



const handleHome = (req, res) => res.send("Hello from my ass");

const betweenHome = (req, res, next) => {
  console.log("Between");
  next();
};

app.use(betweenHome);


const handleProfile = (req, res) => res.send("You are on my profile");

app.get("/", handleHome);
app.get("/profile", handleProfile);
app.listen(PORT, handleListening);