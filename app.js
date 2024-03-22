import { openStartMenu, closeStartMenu } from "./functions/functions.js";

try {
    openStartMenu();
    closeStartMenu();
} catch (error) {
    console.error(error);
}