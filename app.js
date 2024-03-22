import { openStartMenu, closeStartMenu, darkMode } from "./functions/functions.js";

try {
    openStartMenu();
    closeStartMenu();
    darkMode();
} catch (error) {
    console.error(error);
}