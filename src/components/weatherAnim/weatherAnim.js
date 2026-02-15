import "./weatherAnim.css";
import { emmet } from "emmet-elem";
import { stringToElement } from "@/modules/utils/domParse.js";
import { isWithinInterval } from "date-fns";
import imgCloudB from "@/assets/images/weather/cloudB.webp";
import imgCloudC from "@/assets/images/weather/cloudC.webp";
import imgCloudD from "@/assets/images/weather/cloudD.webp";
import imgCloudE from "@/assets/images/weather/cloudE.webp";
import imgCloudF from "@/assets/images/weather/cloudF.webp";
import grass1 from "@/assets/images/nature/grass1.svg";
import grass2 from "@/assets/images/nature/grass2.svg";
import grass3 from "@/assets/images/nature/grass3.svg";

class WeatherAnimationController {
  static cloudImgs = [imgCloudB, imgCloudC, imgCloudD, imgCloudE, imgCloudF];
  static cloudSettings = {
    default: {
      qty: 2,
      sizeMax: 250,
      sizeVar: 12,
      speedBase: 0.015,
    },
    "partly-cloudy-day": {
      qty: 3,
      sizeMax: 275,
      sizeVar: 16,
      speedBase: 0.01,
    },
    "partly-cloudy-night": {
      qty: 3,
      sizeMax: 275,
      sizeVar: 16,
      speedBase: 0.01,
    },
    cloudy: {
      qty: 4,
      sizeMax: 300,
      sizeVar: 16,
      speedBase: 0.01,
    },
    wind: {},
    fog: {},
    rain: {
      qty: 5,
      sizeMax: 325,
      sizeVar: 18,
      speedBase: 0.01,
    },
    snow: {},
  };
  static grassSVGs = [grass1, grass2, grass3];

  constructor(parent) {
    this.dayData = null;
    this.container = emmet(`div.animController`);
    this.animLayer = emmet(`div.animLayer`);
    this.animLayer.style.opacity = 1;
    this.cloudLayer = emmet(`div.cloudLayer`);
    const grassGradient = `
    <svg style="width:0; height:0; position:absolute;">
      <defs>
        <linearGradient id="grass-overlay" x1="0" y1="0" x2="0" y2="100%">
          <stop offset="0%" stop-color="var(--clrGrassTop, #76ba1b)" />
          <stop offset="90%" stop-color="var(--clrGrassBottom, #3d6300)" />
        </linearGradient>
      </defs>
    </svg>
    `;
    this.container.insertAdjacentHTML("afterbegin", grassGradient);

    this.animLayer.appendChild(this.cloudLayer);
    this.container.appendChild(this.animLayer);

    window.addEventListener("weatherupdate", (e) => {
      this.dayData = e.detail.weatherData.days[0];
      this.weatherUpdate();
    });

    parent.appendChild(this.container);
  }

  weatherUpdate() {
    const now = Date.now();
    const dayNight = isWithinInterval(now, {
      start: this.dayData.sunrise,
      end: this.dayData.sunset,
    })
      ? "day"
      : "night";
    document.documentElement.dataset.period = dayNight;
    document.documentElement.dataset.weather = this.dayData.icon;
    const oldAnimLayer = this.animLayer;
    this.animLayer = emmet(`div.animLayer`);
    this.animLayer.style.opacity = 1;
    this.cloudLayer = emmet(`div.cloudLayer`);
    this.animLayer.appendChild(this.cloudLayer);
    this.container.prepend(this.animLayer);

    const cloudQty =
      this.dayData.icon in WeatherAnimationController.cloudSettings
        ? WeatherAnimationController.cloudSettings[this.dayData.icon].qty
        : WeatherAnimationController.cloudSettings.default.qty;
    for (let i = 0; i < cloudQty; i++) {
      this.generateCloud(this.cloudLayer, true);
    }

    oldAnimLayer.style.zIndex = -1;
    this.animLayer.style.zIndex = -2;

    let fade = setInterval(() => {
      if (oldAnimLayer.style.opacity <= 0) {
        this.animLayer.style.zIndex = -1;
        oldAnimLayer.remove();
        clearInterval(fade);
      } else oldAnimLayer.style.opacity = oldAnimLayer.style.opacity - 0.05;
    }, 500);

    this.generateGrass();
  }

  generateCloud(layer, initial = false) {
    const imgSrc =
      WeatherAnimationController.cloudImgs[
        Math.floor(Math.random() * WeatherAnimationController.cloudImgs.length)
      ];
    const settings =
      WeatherAnimationController.cloudSettings[this.dayData.icon] ||
      WeatherAnimationController.cloudSettings.default;
    const cloud = emmet(`div.cloud`);
    const cloudImg = new Image();
    cloud.style.setProperty("--img", `url(${imgSrc})`);
    cloudImg.src = imgSrc;

    cloudImg.onload = () => {
      const scale = Math.random() * 1.5 + 1;
      const orientation = Math.random() > 0.5 ? 1 : -1;
      cloud.style.width = `min(${settings.sizeMax}px, ${settings.sizeVar * scale}dvw)`;
      cloud.style.height = `min(${settings.sizeMax}px, ${settings.sizeVar * scale}dvw)`;
      cloud.style.opacity = Math.max(0.7, Math.min(1, 0.8 + (scale - 1) / 5));
      cloud.style.zIndex = Math.floor(scale);

      const windFactor = Math.max(
        1,
        Math.min(2, this.dayData.windspeed / 2 / 10),
      );

      const speedBase = window.innerWidth / (settings.speedBase * windFactor);
      const startX = initial ? `${Math.random() * 100}dvw` : "-100%";
      const offsetY = -1 * (Math.random() * (40 - 10));
      let duration;
      if (startX.includes("dvw"))
        duration = speedBase * ((100 - parseFloat(startX)) / 100);
      else duration = speedBase;

      layer.appendChild(cloud);

      const delay = initial ? 0 : Math.random() * 10000;
      const anim = cloud.animate(
        [
          {
            transform: `translate(${startX}, ${offsetY}%) scaleX(${orientation})`,
          },
          {
            transform: `translate(100dvw, ${offsetY}%) scaleX(${orientation})`,
          },
        ],
        {
          duration,
          easing: "linear",
          fill: "both",
          delay,
        },
      );

      anim.playbackRate = Math.min(scale, 2);

      anim.finished.then(() => {
        cloud.remove();
        this.generateCloud(layer, false);
      });
    };
  }

  generateGrass() {
    const windspeed = parseFloat(this.dayData.windspeed);
    const grassLayer = emmet("div.grass");
    this.animLayer.appendChild(grassLayer);
    placeStrips();

    function placeStrips() {
      let endPoint = grassLayer.children
        ? Array.from(grassLayer.children).reduce((accum, item) => {
            return accum + item.clientWidth - 20;
          }, -20)
        : -20;
      const svg =
        WeatherAnimationController.grassSVGs[
          Math.floor(
            Math.random() * WeatherAnimationController.grassSVGs.length,
          )
        ];

      const strip = stringToElement(svg, "svg");
      const path = strip.querySelector("path");
      path.setAttribute("fill", "url(#grass-overlay)");
      strip.style.width = "400px";
      strip.style.translate = `${endPoint}px 0`;
      const duration = Math.max(0.5, 3 - windspeed / 10);
      const bend = Math.min(25, windspeed * 1.5);
      strip.style.setProperty("--wind-speed", `${duration}s`);
      strip.style.setProperty("--wind-bend", `${bend}deg`);
      const delay = Math.random() * -2;
      const variance = 0.8 + Math.random() * 0.4;
      strip.style.animationDelay = `${delay}s`;
      strip.style.animationDuration = `calc(var(--wind-speed) * ${variance})`;

      grassLayer.appendChild(strip);
      if (endPoint + strip.clientWidth < window.innerWidth) placeStrips();
    }
  }
}

export { WeatherAnimationController };
