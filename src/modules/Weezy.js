import { differenceInHours } from "date-fns";

class Weezy {
  static #backupData = {
    queryCost: 1,
    latitude: 38.6278,
    longitude: -90.1996,
    resolvedAddress: "St Louis, MO, United States",
    address: "St Louis, MO",
    timezone: "America/Chicago",
    tzoffset: -6.0,
    days: [
      {
        datetime: "2026-02-17",
        datetimeEpoch: 1771308000,
        tempmax: 62.0,
        tempmin: 44.0,
        temp: 54.1,
        feelslikemax: 62.0,
        feelslikemin: 41.4,
        feelslike: 52.9,
        dew: 44.9,
        humidity: 71.7,
        precip: 0.004,
        precipprob: 8.0,
        precipcover: 4.17,
        preciptype: ["rain"],
        snow: 0.0,
        snowdepth: 0.0,
        windgust: 33.3,
        windspeed: 17.2,
        winddir: 174.8,
        pressure: 1011.6,
        cloudcover: 82.8,
        visibility: 10.1,
        solarradiation: 96.4,
        solarenergy: 8.2,
        uvindex: 3.0,
        severerisk: 10.0,
        sunrise: "06:49:05",
        sunriseEpoch: 1771332545,
        sunset: "17:41:07",
        sunsetEpoch: 1771371667,
        moonphase: 0.0,
        conditions: "Partially cloudy",
        description: "Partly cloudy throughout the day.",
        icon: "partly-cloudy-day",
        stations: ["MBGM7", "KBLV", "KSTL", "KSET", "KSUS", "KCPS", "KALN"],
        source: "comb",
      },
      {
        datetime: "2026-02-18",
        datetimeEpoch: 1771394400,
        tempmax: 72.9,
        tempmin: 55.3,
        temp: 63.1,
        feelslikemax: 72.9,
        feelslikemin: 55.3,
        feelslike: 63.1,
        dew: 45.8,
        humidity: 56.2,
        precip: 0.0,
        precipprob: 18.0,
        precipcover: 0.0,
        preciptype: null,
        snow: 0.0,
        snowdepth: 0.0,
        windgust: 32.2,
        windspeed: 17.2,
        winddir: 224.4,
        pressure: 1007.4,
        cloudcover: 19.5,
        visibility: 10.1,
        solarradiation: 187.3,
        solarenergy: 16.1,
        uvindex: 6.0,
        severerisk: 10.0,
        sunrise: "06:47:49",
        sunriseEpoch: 1771418869,
        sunset: "17:42:13",
        sunsetEpoch: 1771458133,
        moonphase: 0.04,
        conditions: "Clear",
        description: "Clear conditions throughout the day.",
        icon: "clear-day",
        stations: null,
        source: "fcst",
      },
      {
        datetime: "2026-02-19",
        datetimeEpoch: 1771480800,
        tempmax: 74.9,
        tempmin: 49.9,
        temp: 60.3,
        feelslikemax: 74.9,
        feelslikemin: 47.7,
        feelslike: 60.2,
        dew: 45.2,
        humidity: 59.5,
        precip: 0.0,
        precipprob: 51.0,
        precipcover: 0.0,
        preciptype: ["rain"],
        snow: 0.0,
        snowdepth: 0.0,
        windgust: 23.0,
        windspeed: 12.8,
        winddir: 200.5,
        pressure: 1001.0,
        cloudcover: 30.1,
        visibility: 10.1,
        solarradiation: 175.1,
        solarenergy: 15.2,
        uvindex: 6.0,
        severerisk: 10.0,
        sunrise: "06:46:32",
        sunriseEpoch: 1771505192,
        sunset: "17:43:19",
        sunsetEpoch: 1771544599,
        moonphase: 0.08,
        conditions: "Rain, Partially cloudy",
        description: "Partly cloudy throughout the day with a chance of rain.",
        icon: "rain",
        stations: null,
        source: "fcst",
      },
      {
        datetime: "2026-02-20",
        datetimeEpoch: 1771567200,
        tempmax: 50.8,
        tempmin: 39.8,
        temp: 44.9,
        feelslikemax: 50.8,
        feelslikemin: 32.7,
        feelslike: 39.9,
        dew: 26.7,
        humidity: 49.0,
        precip: 0.04,
        precipprob: 51.0,
        precipcover: 8.33,
        preciptype: ["rain"],
        snow: 0.0,
        snowdepth: 0.0,
        windgust: 25.3,
        windspeed: 14.3,
        winddir: 285.0,
        pressure: 1013.8,
        cloudcover: 21.5,
        visibility: 14.8,
        solarradiation: 168.4,
        solarenergy: 14.7,
        uvindex: 6.0,
        severerisk: 10.0,
        sunrise: "06:45:14",
        sunriseEpoch: 1771591514,
        sunset: "17:44:25",
        sunsetEpoch: 1771631065,
        moonphase: 0.12,
        conditions: "Rain, Partially cloudy",
        description:
          "Partly cloudy throughout the day with early morning rain.",
        icon: "rain",
        stations: null,
        source: "fcst",
      },
      {
        datetime: "2026-02-21",
        datetimeEpoch: 1771653600,
        tempmax: 45.2,
        tempmin: 33.9,
        temp: 38.9,
        feelslikemax: 41.0,
        feelslikemin: 29.8,
        feelslike: 34.7,
        dew: 25.2,
        humidity: 57.9,
        precip: 0.0,
        precipprob: 26.0,
        precipcover: 0.0,
        preciptype: null,
        snow: 0.0,
        snowdepth: 0.5,
        windgust: 13.9,
        windspeed: 7.8,
        winddir: 332.8,
        pressure: 1020.8,
        cloudcover: 31.0,
        visibility: 10.8,
        solarradiation: 51.4,
        solarenergy: 4.5,
        uvindex: 1.0,
        severerisk: 10.0,
        sunrise: "06:43:55",
        sunriseEpoch: 1771677835,
        sunset: "17:45:30",
        sunsetEpoch: 1771717530,
        moonphase: 0.15,
        conditions: "Partially cloudy",
        description: "Partly cloudy throughout the day.",
        icon: "partly-cloudy-day",
        stations: null,
        source: "fcst",
      },
      {
        datetime: "2026-02-22",
        datetimeEpoch: 1771740000,
        tempmax: 39.3,
        tempmin: 28.3,
        temp: 33.3,
        feelslikemax: 32.7,
        feelslikemin: 21.3,
        feelslike: 26.7,
        dew: 18.6,
        humidity: 55.3,
        precip: 0.004,
        precipprob: 26.0,
        precipcover: 4.17,
        preciptype: ["rain", "snow"],
        snow: 0.0,
        snowdepth: 0.9,
        windgust: 18.3,
        windspeed: 10.3,
        winddir: 320.4,
        pressure: 1031.3,
        cloudcover: 11.5,
        visibility: 15.0,
        solarradiation: 184.9,
        solarenergy: 16.1,
        uvindex: 6.0,
        severerisk: 10.0,
        sunrise: "06:42:35",
        sunriseEpoch: 1771764155,
        sunset: "17:46:35",
        sunsetEpoch: 1771803995,
        moonphase: 0.19,
        conditions: "Clear",
        description: "Clear conditions throughout the day.",
        icon: "clear-day",
        stations: null,
        source: "fcst",
      },
      {
        datetime: "2026-02-23",
        datetimeEpoch: 1771826400,
        tempmax: 39.8,
        tempmin: 22.2,
        temp: 30.3,
        feelslikemax: 35.4,
        feelslikemin: 14.9,
        feelslike: 24.5,
        dew: 14.2,
        humidity: 51.9,
        precip: 0.016,
        precipprob: 7.0,
        precipcover: 4.17,
        preciptype: ["snow"],
        snow: 0.1,
        snowdepth: 0.3,
        windgust: 12.8,
        windspeed: 6.7,
        winddir: 327.1,
        pressure: 1036.8,
        cloudcover: 15.0,
        visibility: 15.0,
        solarradiation: 200.8,
        solarenergy: 17.4,
        uvindex: 7.0,
        severerisk: 10.0,
        sunrise: "06:41:14",
        sunriseEpoch: 1771850474,
        sunset: "17:47:39",
        sunsetEpoch: 1771890459,
        moonphase: 0.22,
        conditions: "Clear",
        description: "Clear conditions throughout the day.",
        icon: "clear-day",
        stations: null,
        source: "fcst",
      },
    ],
    stations: {
      MBGM7: {
        distance: 5579.0,
        latitude: 38.613,
        longitude: -90.261,
        useCount: 0,
        id: "MBGM7",
        name: "MBOT MO US",
        quality: 0,
        contribution: 0.0,
      },
      KBLV: {
        distance: 31953.0,
        latitude: 38.54,
        longitude: -89.85,
        useCount: 0,
        id: "KBLV",
        name: "KBLV",
        quality: 98,
        contribution: 0.0,
      },
      KSTL: {
        distance: 20106.0,
        latitude: 38.75,
        longitude: -90.37,
        useCount: 0,
        id: "KSTL",
        name: "KSTL",
        quality: 100,
        contribution: 0.0,
      },
      KSET: {
        distance: 39134.0,
        latitude: 38.93,
        longitude: -90.43,
        useCount: 0,
        id: "KSET",
        name: "KSET",
        quality: 99,
        contribution: 0.0,
      },
      KSUS: {
        distance: 39438.0,
        latitude: 38.67,
        longitude: -90.65,
        useCount: 0,
        id: "KSUS",
        name: "KSUS",
        quality: 100,
        contribution: 0.0,
      },
      KCPS: {
        distance: 7747.0,
        latitude: 38.57,
        longitude: -90.15,
        useCount: 0,
        id: "KCPS",
        name: "KCPS",
        quality: 95,
        contribution: 0.0,
      },
      KALN: {
        distance: 32966.0,
        latitude: 38.9,
        longitude: -90.05,
        useCount: 0,
        id: "KALN",
        name: "KALN",
        quality: 95,
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
