// vanilla JS
// function toggleButton(el) {
//     var body = document.body;
//     var element = document.querySelector(el);
//     element.addEventListener(
//         "mouseenter",
//         function (e) {
//             e.target.classList.add("active");
//             body.classList.add("blur");
//         },
//         false
//     );
//     element.addEventListener(
//         "mouseleave",
//         function (e) {
//             e.target.classList.remove("active");
//             body.classList.remove("blur");
//         },
//         false
//     );
// }

// toggleButton('[data-js="btn"]');

$(document).ready((e) => {
    $("#press-me1").click((e) => {
        let x = $("#form1").fadeToggle();



    });

});

$(document).ready((e) => {
    $("#press-me2").click((e) => {
        let x = $("#form2").slideToggle();



    });

});


$(document).ready((e) => {
    $("#press-me3").click((e) => {
        let x = $("#form3").slideToggle();



    });

});




// jQuery

$('[data-js="btn"]').hover(function(){
  $(this).toggleClass('active');
  if ($(this).hasClass('active')) {
    $('body').addClass('blur');
  } else {
    $('body').removeClass('blur');
  }
});






setTimeout(function start() {
  $(".bar").each(function (i) {
    var $bar = $(this);
    $(this).append('<span class="count"></span>');
    setTimeout(function () {
      $bar.css("width", $bar.attr("data-percent"));
    }, i * 100);
  });

  $(".count").each(function () {
    $(this)
      .prop("Counter", 0)
      .animate(
        {
          Counter: $(this)
            .parent(".bar")
            .attr("data-percent")
        },
        {
          duration: 2000,
          easing: "swing",
          step: function (now) {
            $(this).text(Math.ceil(now) + "%");
          }
        }
      );
  });
}, 500);
