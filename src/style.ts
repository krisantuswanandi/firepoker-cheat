export function injectStyle() {
  const style = document.createElement("style");
  style.innerHTML = `
.cheat-enabled {
  .card.ng-binding {
    display: block !important
  }
  .card.card-facedown {
    display: none !important
  }
}`;
  document.head.appendChild(style);
}
