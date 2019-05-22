import express from "express";
import cors from "cors";
import db from "./lib/db";
import "./lib/cron";

const app = express();

app.use(cors());

const port = process.env.PORT || 8080;

// gets all the data from the database
app.get("/data", async (req, res, next) => {
  console.log("querying data " + Date.now());

  const companyData = db.get("companies[0]").value();

  res.json({ companyData });
});

app.listen(port, () => console.log("scrapeServer running on port " + port));