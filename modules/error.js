import { error, result } from "./variables.js";

export function showError() {
  error.style.display = "block";
  result.textContent = "";
}
