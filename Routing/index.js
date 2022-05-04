const express = require("express");

const app = express();

//?.................Lab1.................
// app.get("/", (req, res) => {
//     res.send("<h2>My First Web App using Express</h2>");
//   res.json({ title: "My First Web App", message: "Our Web  App Api" });
// });
//?.................Lab1.................

//?.................Lab2.................
// app.get("/todos", (req, res) => {
//   res.json({ message: "GET todos" });
// });

// app.post("/todos", (req, res) => {
//   res.json({ message: "POST todos" });
// });

// app.put("/todos", (req, res) => {
//   res.json({ message: "PUT todos" });
// });

// app.patch("/todos", (req, res) => {
//   res.json({ message: "PATCH todos" });
// });

// app.delete("/todos", (req, res) => {
//   res.json({ message: "DELETE todos" });
// });
//?.................Lab2.................

//?.................Lab3.................
// app.get("/redirect", (req, res) => {
//   res.redirect("https://google.com");
// });
//?.................Lab3.................

//?.................Lab4.................
// app.get("/404", (req, res) => {
//   res.status(404).send("<h1>This page is not found</h1>");
// });
//?.................Lab4.................

//?.................Lab5.................
// app.get("/", (req, res) => {
//   res.status(200).send("<h1>Welcome To My Website</h1>");
// });

// app.get("/home", (req, res) => {
//   res.status(200).send("<h1>Welcome To My Homepage</h1>");
// });

// app.get("*", (req, res) => {
//   res.status(404).send("<h1>Page Not Found</h1>");
// });
//?.................Lab5.................

//?.................Lab6.................
// app.get("/", (req, res) => {
//   res.sendFile(`${__dirname}/lab6/index.html`);
// });

// app.get("/home", (req, res) => {
//   res.sendFile(`${__dirname}/lab6/home.html`);
// });

// app.all("*", (req, res) => {
//   res.sendFile(`${__dirname}/lab6/notfound.html`);
// });

//?.................Lab6.................v

//?.................Lab7.................

// app.get("/", (req, res) => {
//   res.sendFile(`${__dirname}/lab7/index.html`);
// });

// app.get("/login", (req, res) => {
//   res.sendFile(`${__dirname}/lab7/login.html`);
// });

// app.get("/register", (req, res) => {
//   res.sendFile(`${__dirname}/lab7/register.html`);
// });

// app.post("/submit-login", (req, res) => {
//   res.redirect("/");
// });

// app.post("/submit-register", (req, res) => {
//   res.redirect("/");
// });

//?.................Lab7.................

app.listen(8001, () => console.log("Server is Running on port 8080"));
