/// <reference lib="dom" />
/// <reference lib="dom.iterable" />

import { injectStyle } from "./style";

const INPUTS = ["game.estimate.title", "game.estimate.notes"];
const SHORTCUT_KEY = "x";
const CLASS_NAME = "cheat-enabled";

function isFocusOnInput(event: KeyboardEvent) {
  return INPUTS.includes(
    (event.target as HTMLElement).getAttribute("ng-model") || ""
  );
}

function isShortcut(event: KeyboardEvent) {
  return event.key.toLowerCase() === SHORTCUT_KEY;
}

function handleShortcut(event: KeyboardEvent) {
  if (isFocusOnInput(event) || !isShortcut(event)) return;
  if (event.type === "keydown") {
    document.body.classList.add(CLASS_NAME);
  } else if (event.type === "keyup") {
    document.body.classList.remove(CLASS_NAME);
  }
}

function init() {
  injectStyle();

  window.addEventListener("keydown", handleShortcut);
  window.addEventListener("keyup", handleShortcut);
}

init();
