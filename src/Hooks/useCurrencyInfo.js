import axios, { Axios } from "axios";
import { useEffect, useState } from "react";
//https://2025-02-07.currency-api.pages.dev/v1/currencies/usd.json
export function useCurrnecyRate(baseCurrency, date = null) {
  const [data, setData] = useState({});

  useEffect(() => {
    let url = "";
    if (date) {
      const date = new Date();
      const formattedDate = date.toISOString().split("T")[0];
      url = `https://${formattedDate}.currency-api.pages.dev/v1/currencies/${baseCurrency}.json`;
    } else {
      url = `https://currency-api.pages.dev/v1/currencies/${baseCurrency}.json`;
    }
    axios.get(url).then((res) => {
      setData(res.data[baseCurrency]);
    });
  }, [baseCurrency]);

  return { data };
}
export function useCurrnecyInfo() {
  const [currencyCodeDetails, setCurrencyCodeDetails] = useState({});

  useEffect(() => {
    let url = "";

    url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.min.json`;

    axios.get(url).then((res) => setCurrencyCodeDetails(res.data));
  }, []);

  return currencyCodeDetails;
}
