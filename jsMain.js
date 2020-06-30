var mobile = false; //Determines if the webpage will use Mobile or Non-Mobile functionality.

var timeout = false; //

//Retrieves the id of the specified Poem by Poem class heirarchy
function getID(y) {
  'use strict';
  var x = document.getElementsByClassName("Poem")[y].id;
  return x;

}

function myFunction(z) {
  z.classList.toggle("change");
}

//Returns the id string of the currently visible Poem, for both Mobile and Non-mobile
function getActive() {
  'use strict';
  if (mobile === false) {
    for (var poemNumber = 0; poemNumber < 11; poemNumber++) {
      var poemName = document.getElementsByClassName("Poem")[poemNumber].id;
      if ($("#" + poemName).css("opacity") == 1) {
        return poemName;
      }
    }
  }
  if (mobile === true) {
    for (var poemNumber = 0; poemNumber < 11; poemNumber++) {
      var poemName = document.getElementsByClassName("Poem")[poemNumber].id;
      if ($("#" + poemName).css("display") == "block") {
        return poemName;
      }
    }
  }

}


//Re-shapes Poem section when changing from Mobile to Non-Mobile, vice versa
function changePoemColumns() {
  'use strict';
  if (mobile === true) {
    for (var poemNumber = 0; poemNumber < 10; poemNumber++) {
      var poemName = document.getElementsByClassName("Poem")[poemNumber].id;
      $("#" + poemName).removeClass("col-8").addClass("col-12");
    }
  }
  if (mobile === false) {
    for (var poemNumber = 0; poemNumber < 10; poemNumber++) {
      var poemName = document.getElementsByClassName("Poem")[poemNumber].id;
      $("#" + poemName).removeClass("col-12").addClass("col-8");
    }
  }
}

//When resizing the webpage down to mobile, this function will take the active showing poem from the non-mobile webpage and center it with all the other poems.
function repositionActiveMobile() {
  'use strict';

  for (var poemNumber = 0; poemNumber < 10; poemNumber++) {
    var poemName = document.getElementsByClassName("Poem")[poemNumber].id;
    if ($("#" + poemName).css("transform") === "matrix(1, 0, 0, 1, 50, 0)") {
      $("#" + poemName).toggleClass("show");
      break;
    }
  }

}


$(document).ready(function() {

  'use strict';
  $(".navToggle").click(function() {
    $(".navbar").toggleClass("show");
  });

  // HTML widget containers ==================================================
  var about_div = document.getElementById("about_container");
  var about_elems = about_div.getElementsByTagName("*");

  var poem_div = document.getElementById("poemNav");
  var poem_buttons = poem_div.getElementsByTagName("button");
  // Containers ==============================================================

  // Animated scroll configurations
  $(window).scroll(function() {

    // Integer position of user on page
    var scroll_pos = $(this).scrollTop();

      // About me section loading
      if (scroll_pos >= 200) {

          $("#aboutImg").addClass("load");
          
          Array.prototype.forEach.call(about_elems, (item) => {
            $("#" + item.id).addClass("load");
          });

          // About section navbar button
          if (!document.getElementById("aboutBtn")){
              $("#aboutBtnCont").prepend("<a href='#aboutMeSection' class='nav-link' id='aboutBtn'>About</a>");
          }
      }

      // Poetry Section loading
      if (scroll_pos >= 1200) {

          $("#navPoemHead").addClass("load");
          $("#poemHead").addClass("load");

          Array.prototype.forEach.call(poem_buttons, (item) => {
            $("#" + item.id).addClass("load_poem");
          });        

          // Poetry section navbar button
          if (!document.getElementById("poetryBtn")){
              $("#poetryBtnCont").append("<a href='#poetrySection' class='nav-link' id='poetryBtn'>Poetry</a>");
          }

          // Footer section navbar button
          if (!document.getElementById("footerBtn")){
              $("#footerBtnCont").append("<a href='#footer' class='nav-link' id='footerBtn'>Footer</a>");
          }
      }
  });


  var screenWidth = $(window).width();
  var onload = (function() {
    $(".greeting").toggleClass("load");
    $(".description").toggleClass("load");
  })();

  if (screenWidth >= 600) {
    mobile = false;
  }

  //Poem navbar button function
  $(".poemHolder").click(function() {
    if (timeout === false) {
      timeout = true;
      var index = $(".poemHolder").index(this);
      if (mobile === false) {
        let z = getID(index);
        let k = getActive();
        $("#" + k).toggleClass("show");
        $("#" + z).toggleClass("show");

      }
      if (mobile === true) {
        let z = getID(index);
        let k = getActive();
        if (k === undefined) {
          $("#" + z).css("display", "block");
        } else {
          $("#" + k).css("display", "none");
          $("#" + z).css("display", "block");
        }
        repositionActiveMobile();

      }
      setTimeout(function() {
        timeout = false;
      }, 300);
    }
  });

  //Nav bar collapses if button on navbar is used on mobile
  $("#aboutBtnCont").on('click', 'a#aboutBtn', function() {
    if (mobile === true) {
      document.getElementById("navCollapse").click();
    }
  });

  $("#poetryBtnCont").on('click', 'a#poetryBtn', function() {
    if (mobile === true) {
      document.getElementById("navCollapse").click();
    }
  });

  $("#footerBtnCont").on('click', 'a#footerBtn', function() {
    if (mobile === true) {
      document.getElementById("navCollapse").click();
    }
  });

  //Secret Button
  $("#secretActivator").click(function() {
    if ($(".secret").css("display") == "none") {
      $(".secretbtn").toggleClass("showing");
      $(".secretbtn").html("Hide");
      $("#secret").css("display", "block");
      $(".secret").css("display", "block");
    } else if ($(".secret").css("display") == "block") {
      $(".secretbtn").toggleClass("showing");
      $(".secretbtn").html(" ");
      $("#secret").css("display", "none");
      $(".secret").css("display", "none");
    }

  });

  //Goodreads Button
  $("#goodReadsBtn").on('click', function() {
    window.location.replace("https://www.goodreads.com/William-Riddle");
  });

  //If mobile, change font sizes
  if (screenWidth < 576) {
    $("h1").removeClass("display-1");
    $("h1").addClass("display-4");
    $(".About-me-section").css("font-size", "20px");
  }

  //Change Poem Section to Mobile Layout
  if (screenWidth < 560) {
    changePoemColumns();
    $(".Poem").css("opacity", "1");
    $(".Poem").removeClass("absolute").addClass("relative");
    $(".list-full").removeClass("col-4");
    $(".list-full").addClass("col-xs-4");

  }

  //Change Poem Section to non-Mobile layout
  if (screenWidth >= 561) {
    changePoemColumns();
    $(".Poem").removeClass("relative").addClass("absolute");
    $(".list-full").removeClass("col-xs-4");
    $(".list-full").addClass("col-4");
  }

  //If user resizes window:
  $(window).resize(function() {
    var windowWidth = $(window).width();
    if (windowWidth < 560) {
      mobile = true; //If screen is 599px or less, activate mobile
    } else if (windowWidth >= 561) {
      mobile = false; //If screen is 600px or more, de-activate mobile, reactive non-mobile
    }
    delay(function() {
      //Mobile change for font
      if (windowWidth < 996) {
        $("h1").removeClass("display-1");
        $("h1").addClass("display-4");
      }
      //Non-mobile change for font
      if (windowWidth > 996) {
        $("h1").removeClass("display-4");
        $("h1").addClass("display-1");
      }
      //Poem Section Mobile for resize
      if (windowWidth < 560) {
        changePoemColumns();
        $(".Poem").css("opacity", "1");
        $(".Poem").removeClass("absolute").addClass("relative");
        $(".list-full").removeClass("col-4");
        $(".list-full").addClass("col-xs-4");
      }
      //Poem Section Non-Mobile for resize
      if (windowWidth >= 561) {
        changePoemColumns();
        $(".Poem").css("opacity", "0");
        $(".Poem").removeClass("relative").addClass("absolute");
        $(".list-full").removeClass("col-xs-4");
        $(".list-full").addClass("col-4");
      }



    }, 100, "STRING!");
  });
});

//Delays the time in which functions under the resize will be called, but wait x amount of time after resize before changing anything
var delay = (function() {
  var timers = {};
  return function(callback, ms, uniqueId) {
    if (!uniqueId) {
      uniqueId = "Don't call this twice without a uniqueId";
    }
    if (timers[uniqueId]) {
      clearTimeout(timers[uniqueId]);
    }
    timers[uniqueId] = setTimeout(callback, ms);
  };
})();