import "./weatherAnim.css";
import { emmet } from "emmet-elem";
import imgCloudB from "@/assets/images/weather/cloudB.webp";
import imgCloudC from "@/assets/images/weather/cloudC.webp";
import imgCloudD from "@/assets/images/weather/cloudD.webp";
import imgCloudE from "@/assets/images/weather/cloudE.webp";
import imgCloudF from "@/assets/images/weather/cloudF.webp";

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
    rain: {},
    snow: {},
  };

  constructor(parent) {
    this.dayData = null;
    this.container = emmet(`div.animController`);
    this.cloudLayer = emmet(`div.cloudLayer`);
    this.container.appendChild(this.cloudLayer);

    window.addEventListener("weatherupdate", (e) => {
      this.dayData = e.detail.weatherData.days[0];
      this.weatherUpdate();
    });

    parent.appendChild(this.container);
  }

  weatherUpdate() {
    const cloudQty =
      WeatherAnimationController.cloudSettings[this.dayData.icon].qty ||
      WeatherAnimationController.cloudSettings.default.qty;
    for (let i = 0; i < cloudQty; i++) {
      this.generateCloud(true);
    }
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
      const scale = Math.random() * 0.3 + 1;
      const size =
        Math.random() * (settings.size * scale - settings.size) + settings.size;
      cloud.style.width = `${size}px`;
      cloud.style.opacity = 0.7 + (scale - 1);
      cloud.style.zIndex = Math.floor(scale);

      let windFactor = this.dayData.windspeed * 0.01;
      windFactor = windFactor > 0.05 ? 0.05 : windFactor;
      const speedBase =
        window.innerWidth / (settings.speedBase * (scale * 1.5)) + windFactor;
      const startX = initial ? `${Math.random() * 100}dvw` : "-100%";
      const offsetY = -1 * (Math.random() * (50 - 20) + 20);
      let duration;
      if (startX.includes("dvw"))
        duration = speedBase * ((100 - parseFloat(startX)) / 100);
      else duration = speedBase;

      this.cloudLayer.appendChild(cloud);

      const delay = initial ? 0 : Math.random() * 5000;
      const anim = cloud.animate(
        [
          { transform: `translate(${startX}, ${offsetY}%)` },
          { transform: `translate(100dvw, ${offsetY}%)` },
        ],
        {
          duration,
          easing: "linear",
          fill: "both",
          delay,
        },
      );

      anim.finished.then(() => {
        cloud.remove();
        this.generateCloud(false);
      });
    };
  }
}

export { WeatherAnimationController };
