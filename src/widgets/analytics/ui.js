export function renderAnalytics(stats) {
  const el = document.getElementById("analytics");

  el.innerHTML = `
    <h3>Analytics</h3>
    <p>Total Todos: ${stats.total}</p>
    <p>Completed: ${stats.completed}</p>
    <p>Pending: ${stats.pending}</p>
  `;
}