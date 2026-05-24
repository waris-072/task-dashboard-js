export function showNotification(message) {
  const container = document.getElementById("notifications");

  const div = document.createElement("div");
  div.textContent = message;

  div.style.background = "#333";
  div.style.color = "white";
  div.style.padding = "8px";
  div.style.margin = "15px";
  div.style.borderRadius = "5px";

  container.appendChild(div);

  setTimeout(() => {
    div.remove();
  }, 2000);
}