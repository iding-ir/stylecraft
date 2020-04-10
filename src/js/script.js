$(document).ready(() => {
  $(".sc-slide-toggle").on("click", () => {
    $(".sc-slide").toggleClass("sc-is-open");
  });

  $("#trigger-modal-small").on("click", () => {
    $("#modal-small").addClass("sc-is-visible");
  });

  $("#trigger-modal-medium").on("click", () => {
    $("#modal-medium").addClass("sc-is-visible");
  });

  $("#trigger-modal-large").on("click", () => {
    $("#modal-large").addClass("sc-is-visible");
  });

  $("#trigger-modal-stretched").on("click", () => {
    $("#modal-stretched").addClass("sc-is-visible");
  });

  $("#trigger-modal-fullscreen").on("click", () => {
    $("#modal-fullscreen").addClass("sc-is-visible");
  });

  $(".sc-modal button").on("click", function () {
    $(this).parents(".sc-modal").removeClass("sc-is-visible");
  });
});
