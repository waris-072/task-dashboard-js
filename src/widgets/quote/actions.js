import { setState } from "../../core/store/store.js";
import { emit } from "../../core/events/eventBus.js";

export async function loadQuote() {

  try {

    const res = await fetch("https://dummyjson.com/quotes/random");

    const data = await res.json();
    
    setState({
      quote: {
        text: data.quote ?? "Quote not found",
        author: data.author ?? "Unknown"
      }
    });

  } catch (err) {
    emit("quote:error", "Failed to load quote ❌");
  }
}