import { differenceInHours } from "date-fns";

class Weezy {
  static #backupData = {
    queryCost: 1,
    latitude: 29.739029,
    longitude: -95.44364,
    resolvedAddress: "77027, USA",
    address: "77027",
    timezone: "America/Chicago",
    tzoffset: -6.0,
    days: [
      {
        datetime: "2026-02-11",
        datetimeEpoch: 1770789600,
        tempmax: 76.9,
        tempmin: 63.1,
        temp: 68.8,
        feelslikemax: 76.9,
        feelslikemin: 63.1,
        feelslike: 68.8,
        dew: 61.5,
        humidity: 79.3,
        precip: 0.075,
        precipprob: 34.0,
        precipcover: 20.83,
        preciptype: ["rain"],
        snow: 0.0,
        snowdepth: 0.0,
        windgust: 17.2,
        windspeed: 8.9,
        winddir: 329.1,
        pressure: 1020.7,
        cloudcover: 49.9,
        visibility: 8.4,
        solarradiation: 126.3,
        solarenergy: 11.0,
        uvindex: 6.0,
        severerisk: 10.0,
        sunrise: "07:04:37",
        sunriseEpoch: 1770815077,
        sunset: "18:07:54",
        sunsetEpoch: 1770854874,
        moonphase: 0.82,
        conditions: "type_42",
        description: "Variablecloud.",
        icon: "partly-cloudy-day",
        stations: ["KHOU", "KSGR", "KAXH", "KIAH", "KLVJ", "KMCJ", "D0326"],
        source: "comb",
      },
      {
        datetime: "2026-02-12",
        datetimeEpoch: 1770876000,
        tempmax: 79.1,
        tempmin: 61.1,
        temp: 68.2,
        feelslikemax: 79.1,
        feelslikemin: 61.1,
        feelslike: 68.2,
        dew: 59.5,
        humidity: 75.5,
        precip: 0.012,
        precipprob: 6.0,
        precipcover: 8.33,
        preciptype: ["rain"],
        snow: 0.0,
        snowdepth: 0.0,
        windgust: 11.4,
        windspeed: 6.9,
        winddir: 134.0,
        pressure: 1021.4,
        cloudcover: 47.7,
        visibility: 7.3,
        solarradiation: 137.4,
        solarenergy: 12.1,
        uvindex: 4.0,
        severerisk: 10.0,
        sunrise: "07:03:48",
        sunriseEpoch: 1770901428,
        sunset: "18:08:41",
        sunsetEpoch: 1770941321,
        moonphase: 0.85,
        conditions: "type_42",
        description: "Variablecloud.",
        icon: "partly-cloudy-day",
        stations: null,
        source: "fcst",
      },
      {
        datetime: "2026-02-13",
        datetimeEpoch: 1770962400,
        tempmax: 78.0,
        tempmin: 62.0,
        temp: 68.6,
        feelslikemax: 78.0,
        feelslikemin: 62.0,
        feelslike: 68.6,
        dew: 62.4,
        humidity: 82.0,
        precip: 0.0,
        precipprob: 11.0,
        precipcover: 0.0,
        preciptype: null,
        snow: 0.0,
        snowdepth: 0.0,
        windgust: 16.6,
        windspeed: 10.5,
        winddir: 143.4,
        pressure: 1016.8,
        cloudcover: 79.3,
        visibility: 7.2,
        solarradiation: 205.4,
        solarenergy: 17.7,
        uvindex: 7.0,
        severerisk: 10.0,
        sunrise: "07:02:58",
        sunriseEpoch: 1770987778,
        sunset: "18:09:29",
        sunsetEpoch: 1771027769,
        moonphase: 0.88,
        conditions: "type_42",
        description: "Variablecloud.",
        icon: "partly-cloudy-day",
        stations: null,
        source: "fcst",
      },
      {
        datetime: "2026-02-14",
        datetimeEpoch: 1771048800,
        tempmax: 74.2,
        tempmin: 65.6,
        temp: 69.2,
        feelslikemax: 74.2,
        feelslikemin: 65.6,
        feelslike: 69.2,
        dew: 66.1,
        humidity: 90.1,
        precip: 0.666,
        precipprob: 92.0,
        precipcover: 54.17,
        preciptype: ["rain"],
        snow: 0.0,
        snowdepth: 0.0,
        windgust: 24.4,
        windspeed: 14.5,
        winddir: 188.5,
        pressure: 1009.9,
        cloudcover: 73.3,
        visibility: 11.2,
        solarradiation: 115.1,
        solarenergy: 9.9,
        uvindex: 4.0,
        severerisk: 10.0,
        sunrise: "07:02:07",
        sunriseEpoch: 1771074127,
        sunset: "18:10:16",
        sunsetEpoch: 1771114216,
        moonphase: 0.91,
        conditions: "type_21, type_42",
        description: "Variablecloud with raindefinite.",
        icon: "rain",
        stations: null,
        source: "fcst",
      },
    ],
    stations: {
      KHOU: {
        distance: 19944.0,
        latitude: 29.63,
        longitude: -95.28,
        useCount: 0,
        id: "KHOU",
        name: "KHOU",
        quality: 100,
        contribution: 0.0,
      },
      KSGR: {
        distance: 24768.0,
        latitude: 29.62,
        longitude: -95.66,
        useCount: 0,
        id: "KSGR",
        name: "KSGR",
        quality: 100,
        contribution: 0.0,
      },
      KAXH: {
        distance: 25737.0,
        latitude: 29.51,
        longitude: -95.48,
        useCount: 0,
        id: "KAXH",
        name: "KAXH",
        quality: 98,
        contribution: 0.0,
      },
      KIAH: {
        distance: 27255.0,
        latitude: 29.97,
        longitude: -95.35,
        useCount: 0,
        id: "KIAH",
        name: "KIAH",
        quality: 100,
        contribution: 0.0,
      },
      KLVJ: {
        distance: 31349.0,
        latitude: 29.52,
        longitude: -95.24,
        useCount: 0,
        id: "KLVJ",
        name: "KLVJ",
        quality: 99,
        contribution: 0.0,
      },
      KMCJ: {
        distance: 5314.0,
        latitude: 29.71,
        longitude: -95.4,
        useCount: 0,
        id: "KMCJ",
        name: "KMCJ",
        quality: 99,
        contribution: 0.0,
      },
      D0326: {
        distance: 742.0,
        latitude: 29.746,
        longitude: -95.445,
        useCount: 0,
        id: "D0326",
        name: "DW0326 Houston TX US",
        quality: 0,
        contribution: 0.0,
      },
    },
  };
  constructor() {
    this.cache = null;
    this.#initializeData();
    window.addEventListener("searchweather", (e) => {
      this.search(e.detail.location);
    });
  }

  async search(location) {
    const now = Date.now();
    if (
      differenceInHours(now, this.cache.timeFetched) >= 1 ||
      this.cache.address != location
    ) {
      this.cache = await this.#fetchData(location);
      localStorage.setItem("weatherData", JSON.stringify(this.cache));
    } else {
      const err = new CustomEvent("apperror", {
        detail: {
          msg: `Weather Not Updated. Location is same and current data < 1 hour old.`,
        },
      });
      window.dispatchEvent(err);
    }
    const upd = new CustomEvent("weatherupdate", {
      detail: { weatherData: { ...this.cache } },
    });
    window.dispatchEvent(upd);
  }

  #getLocalData() {
    const rawData = localStorage.getItem("weatherData");
    const data = JSON.parse(rawData) || null;
    return data;
  }

  async #fetchData(location) {
    const timeFetched = Date.now();
    return fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/today/next6days?unitGroup=us&include=days&key=GBA9MM9M3TBHMDGHXFFFGVJN8&contentType=json`,
    )
      .then((response) => {
        if (!response.ok)
          throw new Error(
            `Bad Fetch: ${response.status}:${response.statusText}`,
          );
        else return response.json();
      })
      .then((data) => {
        const fetchedData = data;
        return { timeFetched, ...fetchedData };
      })
      .catch((error) => {
        let err;
        let backupData;
        if (this.cache) {
          err = new CustomEvent("apperror", {
            detail: {
              msg: `Error fetching new weather data. Showing previous data.`,
            },
          });
          backupData = this.cache;
        } else {
          err = new CustomEvent("apperror", {
            detail: {
              msg: `Error fetching new weather data. Showing backup data.`,
            },
          });
          backupData = Weezy.#backupData;
        }
        console.error(error);
        window.dispatchEvent(err);
        return { timeFetched, ...backupData };
      });
  }

  async #getRoughLocation() {
    return fetch("https://ipapi.co/json/")
      .then((result) => {
        return result.json().then((json) => {
          return `${json.latitude},${json.longitude}`;
        });
      })
      .catch((reason) => {
        console.error(reason);
        const err = new CustomEvent("apperror", {
          detail: {
            msg: `Couldn't fetch rough location from IP Address. Using backup: 29.7438 , -95.4422`,
          },
        });
        window.dispatchEvent(err);
        return `29.7438,-95.4422`;
      });
  }

  async #initializeData() {
    const localData = this.#getLocalData();
    if (localData) {
      const now = Date.now();
      if (differenceInHours(now, localData.timeFetched) < 1) {
        this.cache = localData;
      } else {
        this.cache = await this.#fetchData(localData.resolvedAddress);
        localStorage.setItem("weatherData", JSON.stringify(this.cache));
      }
    }
    if (!this.cache) {
      const loc = await this.#getRoughLocation();
      const fetchedData = await this.#fetchData(loc);
      this.cache = fetchedData;
      localStorage.setItem("weatherData", JSON.stringify(this.cache));
    }

    const upd = new CustomEvent("weatherupdate", {
      detail: { weatherData: { ...this.cache } },
    });
    window.dispatchEvent(upd);
  }
}

export { Weezy };
