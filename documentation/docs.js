import CodeMirror from "codemirror";
import "codemirror/mode/htmlmixed/htmlmixed.js";

$(document).ready(() => {
  /* -------- Docs -------- */

  setTimeout(() => {
    $("body").css({ opacity: 1 });
  }, 1000);

  /* -------- Codemirror -------- */

  $(".editor-html").each((index, item) => {
    let editor = CodeMirror.fromTextArea(item, {
      mode: "htmlmixed",
      readOnly: true,
      htmlMode: true,
      lineNumbers: true,
      theme: "material",
      lineWrapping: true,
      scrollbarStyle: null,
    });

    editor.save();

    editor.setSelection(
      {
        line: editor.firstLine(),
        ch: 0,
        sticky: null,
      },
      {
        line: editor.lastLine(),
        ch: 0,
        sticky: null,
      },
      { scroll: false }
    );

    editor.indentSelection("smart");

    $(".CodeMirror-code").trigger("mousedown");

    editor.setCursor(1, 0, { scroll: false });
  });

  /* -------- Mode -------- */

  $("#trigger-mode").on("click", (event) => {
    event.preventDefault();

    $(".sc-splash").addClass("sc-is-active");

    setTimeout(() => {
      $("body").toggleClass("sc-dark");
    }, 500);

    setTimeout(() => {
      $(".sc-splash").removeClass("sc-is-active");
    }, 1000);
  });

  /* -------- Slide -------- */

  $(".sc-slide-open, #trigger-slide").on("click", (event) => {
    event.preventDefault();

    $(".sc-slide").addClass("sc-is-active");

    $(".sc-slide + .sc-overlay").addClass("sc-is-active");
  });

  $(".sc-slide-close, .sc-slide + .sc-overlay").on("click", () => {
    $(".sc-slide").removeClass("sc-is-active");

    $(".sc-slide + .sc-overlay").removeClass("sc-is-active");
  });

  /* -------- Modal -------- */

  $("#trigger-modal").on("click", (event) => {
    event.preventDefault();

    $(".sc-modal").addClass("sc-is-active");

    $(".sc-modal + .sc-overlay").addClass("sc-is-active");
  });

  $(".sc-modal button, .sc-modal + .sc-overlay").on("click", () => {
    $(".sc-modal").removeClass("sc-is-active");

    $(".sc-modal + .sc-overlay").removeClass("sc-is-active");
  });

  /* -------- Splash -------- */

  $("#trigger-splash").on("click", (event) => {
    event.preventDefault();

    $(".sc-splash").addClass("sc-is-active");

    setTimeout(() => {
      $(".sc-splash").removeClass("sc-is-active");
    }, 5000);
  });

  /* -------- Loader -------- */

  $("#trigger-loader").on("click", (event) => {
    event.preventDefault();

    $(".sc-loader").addClass("sc-is-active");

    setTimeout(() => {
      $(".sc-loader").removeClass("sc-is-active");
    }, 5000);
  });
});
