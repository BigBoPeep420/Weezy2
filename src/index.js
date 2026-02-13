import "./styles/main.css";
import "./styles/layout.css";
import { Weezy } from "./modules/Weezy.js";
import { weatherDisplay } from "./components/weatherDisplay/weatherDisplay.js";
import { WeatherAnimationController } from "./components/weatherAnim/weatherAnim.js";
import { emmet } from "emmet-elem";

const content = emmet(`div#content>div.appTitle>h1{Weezy}`);
content.appendChild(weatherDisplay());
const footer = emmet(`footer>p{Copyright © 2026 Lane Robey}`);

document.body.append(content, footer);

const animController = new WeatherAnimationController(document.body);
const weezy = new Weezy();
