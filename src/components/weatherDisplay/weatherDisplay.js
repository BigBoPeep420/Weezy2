import { intlFormat } from "date-fns";
import "./weatherDisplay.css";
import { emmet } from "emmet-elem";
import { stringToElement } from "@/modules/utils/domParse.js";
import iconSunrise from "@/assets/icons/weather-sunset-up.svg";
import iconSunset from "@/assets/icons/weather-sunset-down.svg";

function weatherDisplay() {
  const outer = emmet(`div.weatherDisplay`);

  window.addEventListener("weatherupdate", (e) => {
    updateCards(e.detail.weatherData);
  });

  return outer;

  function updateCards(newData) {
    const today = new Date();

    outer.replaceChildren(
      ...newData.days.map((dayData) => {
        const card = emmet(`div.card`);

        const [year, month, day] = dayData.datetime.split("-").map(Number);
        const dayDate = new Date(year, month - 1, day);
        const dateDecon = {
          weekday: intlFormat(dayDate, { weekday: "long" }),
          month: intlFormat(dayDate, { month: "long" }),
          day: intlFormat(dayDate, { day: "numeric" }),
        };

        let precipType = dayData.preciptype ? dayData.preciptype[0] : "Rain";
        precipType = precipType[0].toUpperCase() + precipType.slice(1);

        const otherData = emmet(
          `div.otherData>div.precip>span{Chance of }+span.type{${precipType}}+` +
            `span{: }+span.value{${dayData.precipprob}%}^div.humidity>span{Humidity: }+` +
            `span.value{${dayData.humidity}%}^div.uv>span{UV Index: }+span.value{${dayData.uvindex}}`,
        );
        const period = emmet(`div.period`);
        const sunrise = `${parseInt(dayData.sunrise.substring(0, 2)) % 12}:${dayData.sunrise.substring(3, 5)}am`;
        const sunset = `${parseInt(dayData.sunset.substring(0, 2)) % 12}:${dayData.sunset.substring(3, 5)}pm`;
        period.append(
          stringToElement(iconSunrise, "svg"),
          emmet(`p.sunrise{${sunrise}}`),
          stringToElement(iconSunset, "svg"),
          emmet(`p.sunset{${sunset}}`),
        );
        otherData.append(period);

        card.append(
          emmet(
            `div.date>span.weekday{${dateDecon.weekday}}+span.monthDay{, ${dateDecon.month} ` +
              `the ${ord(dateDecon.day)} ${dateDecon.day == today.getDate() ? "(Today)" : ""}}`,
          ),
          emmet(`p.conditions{${dayData.conditions}}`),
          emmet(
            `div.tempsFeel>span.label{Feels}+span.current{${dayData.feelslike}°}+` +
              `span.divider{/}+span.lowHigh{${dayData.feelslikemin}° – ${dayData.feelslikemax}°}`,
          ),
          emmet(
            `div.tempsActual>span.label{Actual}+span.current{${dayData.temp}°}+` +
              `span.divider{/}+span.lowHigh{${dayData.tempmin}° – ${dayData.tempmax}°}`,
          ),
          emmet(
            `div.wind>span.direction{${compassDirec(dayData.winddir)}}+span.labelAvg{~}+` +
              `span.avg{${dayData.windspeed}}+span.labelMax{M}+span.max{${dayData.windgust}}`,
          ),
          otherData,
        );
        return card;
      }),
    );

    function ord(num) {
      const s = ["th", "st", "nd", "rd"];
      const v = parseInt(num) % 100;
      return num + (s[(v - 20) % 10] || s[v] || s[0]);
    }

    function compassDirec(deg) {
      const direcs = [
        "North",
        "North-Northeast",
        "Northeast",
        "East-Northeast",
        "East",
        "East-Southeast",
        "Southeast",
        "South-Southeast",
        "South",
        "South-Southwest",
        "Southwest",
        "West-Southwest",
        "West",
        "West-Northwest",
        "Northwest",
        "North-Northwest",
      ];
      const norm = ((parseFloat(deg) % 360) + 360) % 360;
      const ind = Math.round(norm / 22.5) % 16;
      return direcs[ind];
    }
  }
}

export { weatherDisplay };
