import "./styles/main.css";
import "./styles/layout.css";
import { Weezy } from "./modules/Weezy.js";
import { weatherDisplay } from "./components/weatherDisplay/weatherDisplay.js";
import { WeatherAnimationController } from "./components/weatherAnim/weatherAnim.js";
import { emmet } from "emmet-elem";
import { stringToElement } from "@/modules/utils/domParse.js";
import iconClose from "@/assets/icons/close-thick.svg";

const content = emmet(`div#content>div.appTitle>h1{Weezy}+div.rainEmitter`);
content.appendChild(weatherDisplay());
const footer = emmet(`footer>p{Copyright © 2026 Lane Robey}`);

const creditsModal = createCreditsModal();
const creditsLink = emmet('button.creditsLink[type="button"]{Credits}');
creditsLink.addEventListener("click", (e) => {
  e.preventDefault();
  creditsModal.showPopover();
  return;
});
footer.appendChild(creditsLink);

document.body.append(content, footer, creditsModal);

const animController = new WeatherAnimationController(content);
const weezy = new Weezy();

function createCreditsModal() {
  const modal = emmet(`div.creditsModal[popover="auto"]`);
  const title = emmet(`div.modalTitle>p.title{Asset Credits}`);
  const closeBtn = emmet(`button.close[type="button"]`);
  closeBtn.appendChild(stringToElement(iconClose, "svg"));
  title.appendChild(closeBtn);
  modal.append(
    title,
    emmet(
      `div.credits>p{Icons from }>a[href="https://www.pictogrammers.com"]{Pictogrammers}^` +
        `p{Clouds and Grass from }>a[href="https://www.vecteezy.com"]{Vecteezy}^`,
    ),
  );

  modal.addEventListener("click", (e) => {
    if (e.target.closest(".close")) {
      e.preventDefault();
      modal.hidePopover();
      return;
    }
  });

  return modal;
}
