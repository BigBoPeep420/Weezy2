import "./weatherAnim.css";
import { emmet } from "emmet-elem";
import { stringToElement } from "@/modules/utils/domParse.js";
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
      size: 250,
      speedBase: 0.015,
    },
    "partly-cloudy-day": {
      qty: 3,
      size: 275,
      speedBase: 0.015,
    },
    "partly-cloudy-night": {
      qty: 3,
      size: 275,
      speedBase: 0.015,
    },
    cloudy: {
      qty: 4,
      size: 300,
      speedBase: 0.015,
    },
    wind: {},
    fog: {},
    rain: {
      qty: 5,
      size: 275,
      speedBase: 0.02,
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

    this.animLayer.appendChild(this.cloudLayer);
    this.container.appendChild(this.animLayer);

    window.addEventListener("weatherupdate", (e) => {
      this.dayData = e.detail.weatherData.days[0];
      this.weatherUpdate();
    });

    parent.appendChild(this.container);
  }

  weatherUpdate() {
    const oldAnimLayer = this.animLayer;
    this.animLayer = emmet("div.animLayer");
    this.cloudLayer = emmet("div.cloudLayer");
    this.animLayer.appendChild(this.cloudLayer);
    this.container.prepend(this.animLayer);

    const cloudQty =
      this.dayData.icon in WeatherAnimationController.cloudSettings
        ? WeatherAnimationController.cloudSettings[this.dayData.icon].qty
        : WeatherAnimationController.cloudSettings.default.qty;
    for (let i = 0; i < cloudQty; i++) {
      this.generateCloud(true);
    }

    oldAnimLayer.style.zIndex = -1;
    this.animLayer.style.zIndex = -2;

    let fade = setInterval(() => {
      if (oldAnimLayer.style.opacity <= 0) {
        this.animLayer.style.zIndex = -1;
        oldAnimLayer.remove();
        clearInterval(fade);
      } else oldAnimLayer.style.opacity -= 0.05;
    }, 100);

    this.generateGrass();
  }

  generateCloud(initial = false) {
    const imgSrc =
      WeatherAnimationController.cloudImgs[
        Math.floor(Math.random() * WeatherAnimationController.cloudImgs.length)
      ];
    const settings =
      WeatherAnimationController.cloudSettings[this.dayData.icon] ||
      WeatherAnimationController.cloudSettings.default;
    const cloud = new Image();
    cloud.src = imgSrc;

    cloud.onload = () => {
      const scale = Math.random() * 2 + 0.5;
      const orientation = Math.random() > 0.5 ? 1 : -1;
      const size =
        Math.random() * (settings.size * scale - settings.size) + settings.size;
      cloud.style.width = `${size}px`;
      cloud.style.opacity = 0.6 + scale / 8;
      cloud.style.zIndex = Math.floor(scale);

      let windFactor = this.dayData.windspeed * 0.01;
      windFactor = windFactor > 0.1 ? 0.1 : windFactor;

      const speedBase = window.innerWidth / settings.speedBase + windFactor;
      const startX = initial ? `${Math.random() * 100}dvw` : "-100%";
      const offsetY = -1 * (Math.random() * (50 - 20) + 20);
      let duration;
      if (startX.includes("dvw"))
        duration = speedBase * ((100 - parseFloat(startX)) / 100);
      else duration = speedBase;

      this.cloudLayer.appendChild(cloud);

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

      anim.playbackRate = scale;

      anim.finished.then(() => {
        cloud.remove();
        this.generateCloud(false);
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
