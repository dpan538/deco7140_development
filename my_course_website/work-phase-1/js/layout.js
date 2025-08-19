import { logMessage } from "./modules/logging.js";

const PAGE_NAME = "Layout Page";
let message = "Layout page loaded.";

window.addEventListener("load", () => {
    logMessage(PAGE_NAME, message);
});

