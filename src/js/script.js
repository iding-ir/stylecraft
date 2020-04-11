$(document).ready(() => {
  /* -------- Slide -------- */

  $(".sc-slide-open").on("click", () => {
    $(".sc-slide").addClass("sc-is-open");
  });

  $(".sc-slide-close").on("click", () => {
    $(".sc-slide").removeClass("sc-is-open");
  });

  $(".sc-slide").on("click", () => {
    $(".sc-slide").removeClass("sc-is-open");
  });

  $(".sc-slide-container").on("click", (event) => {
    event.stopPropagation();
  });

  /* -------- Modal -------- */

  $("#trigger-modal").on("click", (event) => {
    event.preventDefault();

    $(".sc-modal").addClass("sc-is-visible");
  });

  $(".sc-modal").on("click", () => {
    $(".sc-modal").removeClass("sc-is-visible");
  });

  $(".sc-modal-container").on("click", (event) => {
    event.stopPropagation();
  });

  $(".sc-modal button").on("click", () => {
    $(".sc-modal").removeClass("sc-is-visible");
  });
});
