import { logMessage } from "./modules/logging.js";

const PAGE_NAME = "Colour Scheme Page";
let message = "Colour Scheme page loaded.";

window.addEventListener("load", () => {
  logMessage(PAGE_NAME, message);
});
