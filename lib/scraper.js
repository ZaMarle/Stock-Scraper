import axios from "axios";
import db from "./db";

import stockSymbols from "./stock-symbols";

let reqCount = 0;
let timeOut = 120000;

async function getData(url = "fmg") {
  let asxData;

  reqCount++;
  console.log(reqCount, url);

  //gets the stock data from the asx
  //structures the data into an array of usefull points

  await axios
    .get(
      `https://www.asx.com.au/asx/1/company/${url}?fields=primary_share,latest_annual_reports,last_dividend,primary_share.indices`,
      { timeout: timeOut }
    )
    .then(
      res =>
        (asxData = [
          res.data.name_short,
          res.data.code,
          res.data.sector_name,
          res.data.primary_share.open_price
        ])
    )
    .catch(
      err => console.log(url + " asx not found"),
      (asxData = ["", url, "", ""])
    );

  //return data from yahoo
  //structure the returned data

  await axios
    .get(
      `https://query1.finance.yahoo.com/v10/finance/quoteSummary/${url}.AX?formatted=true&crumb=r%2FzOkhm9CJ6&lang=en-AU&region=AU&modules=incomeStatementHistory%2CcashflowStatementHistory%2CbalanceSheetHistory%2CincomeStatementHistoryQuarterly%2CcashflowStatementHistoryQuarterly%2CbalanceSheetHistoryQuarterly`,
      { timeout: timeOut }
    )
    .then(res =>
      asxData.push(
        //net income
        res.data.quoteSummary.result[0].incomeStatementHistory
          .incomeStatementHistory[0].netIncome.raw,
        //equity
        res.data.quoteSummary.result[0].balanceSheetHistory
          .balanceSheetStatements[0].totalStockholderEquity.raw
      )
    )
    .catch(err => console.log(url + " yahoo not found"));

  await axios
    .get(
      `https://query2.finance.yahoo.com/v7/finance/quote?formatted=true&crumb=r%2FzOkhm9CJ6&lang=en-AU&region=AU&symbols=${url}.AX&fields=messageBoardId%2ClongName%2CshortName%2CmarketCap%2CunderlyingSymbol%2CunderlyingExchangeSymbol%2CheadSymbolAsString%2CregularMarketPrice%2CregularMarketChange%2CregularMarketChangePercent%2CregularMarketVolume%2Cuuid%2CregularMarketOpen%2CfiftyTwoWeekLow%2CfiftyTwoWeekHigh&corsDomain=au.finance.yahoo.com`,
      { timeout: timeOut }
    )
    .then(res =>
      asxData.push(
        //market cap data
        res.data.quoteResponse.result[0].marketCap.raw
      )
    )
    .catch(err => console.log(url + " market cap not found"));

  let asxDataObject;

  return (asxDataObject = {
    companyName: asxData[0],
    primarySymbol: asxData[1],
    sector: asxData[2],
    openPrice: asxData[3],
    netIncome: asxData[4],
    equity: asxData[5],
    marketCap: asxData[6]
  });
}

export async function runCron() {
  console.log("scraping");

  const stocks = stockSymbols.map(s => getData(s));

  const stockData = await Promise.all(stocks);

  db.get("companies")
    .push({ stockData })
    .shift()
    .write();

  console.log("Saved Data");
}
