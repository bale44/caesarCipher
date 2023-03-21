import convertCaeser from "./modules/caesar.js";
import { input, button } from "./modules/variables.js";

button.addEventListener("click", () => {
  convertCaeser(input.value);
});
