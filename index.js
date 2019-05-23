import express from "express";
import cors from "cors";
import db from "./lib/db";
import path from "path";
import "./lib/cron";

const app = express();

const port = process.env.PORT || 8080;

app.use(cors());

// Set Static Folder
app.use(express.static(path.join(__dirname, "public")));

// gets all the data from the database
app.get("/data", async (req, res, next) => {
  console.log("querying data " + Date.now());

  const companyData = db.get("companies[0]").value();

  res.json({ companyData });
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

app.listen(port, () => console.log("scrapeServer running on port " + port));
