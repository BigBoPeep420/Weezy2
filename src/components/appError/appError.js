import { emmet } from "emmet-elem";
import "./appError.css";

class AppError extends HTMLElement {
  constructor() {
    super();
    this.fadeTimer = null;
  }

  connectedCallback() {
    const shad = this.attachShadow({ mode: "open" });
    this.shadStyle = document.createElement("style");

    this.shadStyle.textContent = `
    .container{
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;

      .msg{
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        background-color: rgba(0,0,0,0.2);
        padding: 0.5rem;
        border-radius: 0.5rem;
      }
    }
    `;

    this.container = emmet("div.container");
    this.message = emmet("p.msg");

    this.container.appendChild(this.message);
    shad.append(this.shadStyle, this.container);

    window.addEventListener("apperror", (e) => {
      e.preventDefault();
      this.showError(e.detail.msg);
    });
  }

  showError(msg) {
    if (this.fadeTimer) {
      clearTimeout(this.fadeTimer);
      this.fadeTimer = null;
    }

    const timeout = this.hasAttribute("timeout")
      ? parseInt(this.getAttribute("timeout"))
      : 5000;
    this.message.textContent = msg;
    this.classList.add("visible");

    this.fadeTimer = setTimeout(() => {
      this.classList.remove("visible");
      clearTimeout(this.fadeTimer);
      this.fadeTimer = null;
    }, timeout);
  }
}

customElements.define("app-error", AppError);

export { AppError };
