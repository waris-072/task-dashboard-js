let listeners = [];

export function getState() {
  return state;
}

export function subscribe(listener) {
  listeners.push(listener); 
}

 function notify() {
  listeners.forEach((fn) => fn(state));
}

function loadState() {
  const saved = localStorage.getItem("app_state");
  return saved ? JSON.parse(saved): {
    todos: [],
    weather: null,
    theme: "light",
    filter: "all"
  };
}
let state = loadState();

export function setState(newState) {
  state = { ...state, ...newState };

  localStorage.setItem("app_state", JSON.stringify(state));

  notify();
}