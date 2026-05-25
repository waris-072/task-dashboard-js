import { loadQuote } from "./actions.js";
import { renderQuote } from "./ui.js";
import { subscribe } from "../../core/store/store.js";

export function initQuote() {

  const btn = document.getElementById("newQuoteBtn");

  btn.addEventListener("click", () => {
    loadQuote();
  });

  subscribe(() => {
    renderQuote();
  });

  renderQuote();
}