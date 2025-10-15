// Entry point: initialize modules
import { initModal } from "./modules/modal.js";
import "./modules/lightbox.js"; // side-effect module sets up window.__openLightbox
import "./modules/secrets.js"; // side-effect module sets up secrets (Konami, cursor)

// Initialize modal/cards/navigation after DOM ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initModal);
} else {
  initModal();
}
