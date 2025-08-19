import { logMessage } from "./modules/logging.js";

const PAGE_NAME = "Spacing Page";
let message = "Spacing page loaded.";

window.addEventListener("load", () => {
  logMessage(PAGE_NAME, message);
});
