$(document).ready(() => {
  /* -------- Slide -------- */

  $(".sc-slide-open").on("click", () => {
    $(".sc-slide").addClass("sc-is-active");
  });

  $(".sc-slide-close").on("click", () => {
    $(".sc-slide").removeClass("sc-is-active");
  });

  $(".sc-slide").on("click", () => {
    $(".sc-slide").removeClass("sc-is-active");
  });

  $(".sc-slide-container").on("click", (event) => {
    event.stopPropagation();
  });

  /* -------- Modal -------- */

  $("#trigger-modal").on("click", (event) => {
    event.preventDefault();

    $(".sc-modal").addClass("sc-is-active");
  });

  $(".sc-modal").on("click", () => {
    $(".sc-modal").removeClass("sc-is-active");
  });

  $(".sc-modal-container").on("click", (event) => {
    event.stopPropagation();
  });

  $(".sc-modal button").on("click", () => {
    $(".sc-modal").removeClass("sc-is-active");
  });
});
