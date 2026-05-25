import { getState } from "../../core/store/store.js";

export function renderQuote() {

  const textEl = document.getElementById("quoteText");
  const authorEl = document.getElementById("quoteAuthor");

  const { quote } = getState();

  if (!quote) return;

  textEl.innerText = `"${quote.text}"`;
  authorEl.innerText = `— ${quote.author}`;
}