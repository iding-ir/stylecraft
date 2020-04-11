$(document).ready(() => {
  /* -------- Slide -------- */

  $(".sc-slide-toggle").on("click", () => {
    $(".sc-slide").toggleClass("sc-is-open");

    $(".sc-overlay").toggleClass("sc-is-visible");
  });

  $(".sc-overlay").on("click", () => {
    $(".sc-slide").removeClass("sc-is-open");

    $(".sc-overlay").removeClass("sc-is-visible");
  });

  /* -------- Modal -------- */

  $("#trigger-modal").on("click", () => {
    $(".sc-modal").addClass("sc-is-visible");
  });

  $(".sc-modal").on("click", () => {
    $(".sc-modal").removeClass("sc-is-visible");
  });

  $(".sc-modal-container").on("click", function (event) {
    event.stopPropagation();
  });

  $(".sc-modal button").on("click", () => {
    $(".sc-modal").removeClass("sc-is-visible");
  });
});
