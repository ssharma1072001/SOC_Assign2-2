// function Filter(){
//       var value = $("#str").val().toLowerCase();
//       $("#myTable tr").filter(function() {
//         $(this).toggle($(this).getElementById("name").text().toLowerCase().indexOf(value) > -1)
//       });
//   };

// $(document).ready(function(){
//     $("button").click(function(){
//         var value = $("str").text().toLowerCase();
//         $("#Students tr").filter(function() {
//           $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
//         });
//     });
//   });

$(document).ready(function(){
  $("#button").on("click", function() {
    var value = $("#str").val().toLowerCase();
    $("#Students tr").filter(function() {
      $(this).toggle($("#name").val().toLowerCase().indexOf(value) > -1)
    });
  });
});