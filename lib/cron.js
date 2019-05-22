import cron from "node-cron";
import { runCron } from "./scraper";

//cron will run task every hour on the hour between 1000 - 1600, monday - friday
cron.schedule("0 10-16 * * 1-5", () => {
  console.log("running cron to fetch stocks data");
  runCron();
});

//runCron();

//0 10-16 * * 1-5
