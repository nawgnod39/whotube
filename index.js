const express = require("express");
const app = express(); //app변수를 선언해서 express를 실행시킴 


const PORT = 4000;

function handleListening() {
  console.log(`Listening on: http://localhost:${PORT}`);
}

app.listen(PORT, handleListening);