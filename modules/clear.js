import { input, error } from "./variables.js";

export function clear() {
  error.style.display = "none";
  input.value = "";
}
