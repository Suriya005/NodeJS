const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("hello world");
});

app.get('/login', (req, res)=>{
    res.send('please login !!')
})

app.listen(5000, () => {
  console.log("Server start port 5000");
});
