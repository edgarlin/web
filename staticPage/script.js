console.log("AAAA");
$(() => {
  console.log("1111");
  $('[data-toggle="tooltip"]').tooltip();
  $("#id_button1").click(event => console.log("id_button1"));
  $("#id_button2").click(event => {
    console.log("id_button2");
    $(this).button("dispose");
    $("#id_button2").remove();
  });

  $("#id_fieldset").prop("disabled", true);
  $("#id_fieldset button").prop("disabled", true);
  $("#id_radio_y").prop("disabled", false);
  $("#id_radio_n").prop("disabled", false);
  $("#id_fieldset").append("<button id='id_test2'>TEST2</button>");
  $("id_test2").prop("disabled", false);
  //$("#id_text").prop("disabled", false);
  //$("#id_button").prop("disabled", false);

  //   console.log(null || "test");
  //   console.log(undefined || "test");
  //   console.log("" || "test");
  //   console.log(0 || "test");
  //   console.log(false || "test");
});
console.log("BBBB");

var APP = function() {
  return {
    init: function() {
      $("#id_button3").click(event => console.log("id_button3"));
    }
  };
};
var app = new APP();
$(app.init());
