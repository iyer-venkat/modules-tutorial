import express from "express";

const app = express();

app.use((req, res, next) => {
  console.log("--middleware invoked--");
  next();
});
app.get("/", (req, res) => {
  res.send("hello");
});
app.get("/about", (req, res) => {
  res.send("about");
});
app.get("/welcome", (req, res) => {
  res.send(`<div>
  <h2>Welcome to GeeksForGeeks</h2>
  <h5>Just checking Middleware</h5>
  </div>`);
});
app.listen(3000, () => {
  console.log("listening on port 3000");
});
