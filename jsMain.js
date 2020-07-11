var mobile = false; //Determines if the webpage will use Mobile or Non-Mobile functionality.

var timeout = false; //

//Retrieves the id of the specified Poem by Poem class heirarchy
function getID(y) {
  return document.getElementsByClassName("Poem")[y].id;
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


$(document).ready(function () {

  'use strict';

  // Collapse navbar initally
  $(".navToggle").click(() => {
    $(".navbar").toggleClass("show");
  });

  // Set page to top initally every refresh
  window.scroll(0, 0);

  // HTML widget containers ==================================================
  var about_div = document.getElementById("about_container");
  var about_widgets = about_div.getElementsByTagName("*");

  var poem_div = document.getElementById("poemNav");
  var poem_buttons = poem_div.getElementsByTagName("button");

  var project_widgets = ["#project_title", 
      "#IFG_image","#IFG_name", "#IFG_description","#IFG_project",
      "#mTask_image", "#mTask_name", "#mTask_description", "#mTask_project",
    ]
  // Containers ==============================================================

  // Animated scroll configurations
  $(window).scroll(function () {

    // Integer position of user on page
    var scroll_pos = $(this).scrollTop();

    // About me section loading
    if (scroll_pos >= 600) {

      // Widgets
      $("#aboutImg").addClass("load");
      Array.prototype.forEach.call(about_widgets, (item) => {
        $("#" + item.id).addClass("load");
      });

      // About section navbar button
      if (!document.getElementById("aboutBtn")) {
        $("#aboutBtnCont").prepend("<a href='#aboutMeSection' class='nav-link' id='aboutBtn'>About</a>");
      }
    }

    // Project Section loading
    if (scroll_pos >= 1500) {

      // Widgets
      Array.prototype.forEach.call(project_widgets, (item) => {
        $(item).addClass("load");
      });

      // Arrows
      var i;
      for (i = 1; i < 7; ++i) {
        $(".arrow_wrapper_" + i).addClass("load");
      }

    }

    // Poetry Section loading
    if (scroll_pos >= 2400) {

      // Widgets
      $("#nav_poetry_header").addClass("load");
      $("#poetry_header").addClass("load");
      Array.prototype.forEach.call(poem_buttons, (item) => {
        $("#" + item.id).addClass("load_poem");
      });

      // Poetry section navbar button
      if (!document.getElementById("poetryBtn")) {
        $("#poetryBtnCont").append("<a href='#poetrySection' class='nav-link' id='poetryBtn'>Poetry</a>");
      }

      // Footer section navbar button
      if (!document.getElementById("footerBtn")) {
        $("#footerBtnCont").append("<a href='#footer' class='nav-link' id='footerBtn'>Footer</a>");
      }
    }
  });


  var screenWidth = $(window).width();
  var onload = (() => {
    $(".greeting").toggleClass("load");
    $(".description").toggleClass("load");
  })();

  if (screenWidth >= 600) {
    mobile = false;
  }

  // Poem navbar button function
  $(".poem_btn").click(function () {
    if (timeout === false) {
      timeout = true;
      var index = $(".poem_btn").index(this);
      if (mobile === false) {
        let z = getID(index);
        let k = getActive();
        $("#" + k).toggleClass("show_poem");
        $("#" + z).toggleClass("show_poem");
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
      setTimeout(() => {
        timeout = false;
      }, 600);
    }
  });

  //Nav bar collapses if button on navbar is used on mobile
  $("#aboutBtnCont").on('click', 'a#aboutBtn', () => {
    if (mobile === true) {
      document.getElementById("navCollapse").click();
    }
  });

  $("#poetryBtnCont").on('click', 'a#poetryBtn', () => {
    if (mobile === true) {
      document.getElementById("navCollapse").click();
    }
  });

  $("#footerBtnCont").on('click', 'a#footerBtn', () => {
    if (mobile === true) {
      document.getElementById("navCollapse").click();
    }
  });

  //Secret Button
  $("#secretActivator").click(() => {
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

  var timer_seconds_IFG = 0;
  var IFG_timer;

  $("#IFG_project").on('mouseenter', function () {
    var enter_time_IFG = new Date().getTime();

    IFG_timer = setInterval( function() {
      var now_IFG = new Date().getTime();

      var distance_IFG = now_IFG - enter_time_IFG;

      timer_seconds_IFG = Math.floor(distance_IFG % (1000 * 60));
      
    }, 10)

    var arrows = this.parentElement.getElementsByClassName("arrow");

    Array.prototype.forEach.call(arrows, (item) => {
      $(item).addClass("slide_arrow");
    });

  });

  $("#IFG_project").on('mouseleave', function () {
    clearInterval(IFG_timer);
    if (timer_seconds_IFG < 1600){
      var remaining_seconds_IFG = 1600 - timer_seconds_IFG;
    }
    else {
      var remaining_seconds_IFG = 1600 - (timer_seconds_IFG % 1500);
    }
    timer_seconds_IFG = 0;
    setTimeout(function(){
      $(".arrow").removeClass("slide_arrow");
    }, remaining_seconds_IFG);

  });

  var timer_seconds_mTask = 0;
  var mTask_timer;


  $("#mTask_project").on('mouseenter', function () {
    var enter_time_mTask = new Date().getTime();

    mTask_timer = setInterval( function() {
      var now_mTask = new Date().getTime();

      var distance_mTask = now_mTask - enter_time_mTask;

      timer_seconds_mTask = Math.floor(distance_mTask % (1000 * 60));
      
    }, 10)

    var arrows = this.parentElement.getElementsByClassName("arrow");

    Array.prototype.forEach.call(arrows, (item) => {
      $(item).addClass("slide_arrow");
    });

  });

  $("#mTask_project").on('mouseleave', function () {
    clearInterval(mTask_timer);
    if (timer_seconds_mTask < 1600){
      var remaining_seconds_mTask = 1600 - timer_seconds_mTask;
    }
    else {
      var remaining_seconds_mTask = 1600 - (timer_seconds_mTask % 1500);
    }
    timer_seconds_mTask = 0;
    setTimeout(function(){
      $(".arrow").removeClass("slide_arrow");
    }, remaining_seconds_mTask);

  });
  

  //Goodreads Button
  $("#goodReadsBtn").on('click', () => {
    window.location.href = "https://www.goodreads.com/William-Riddle";
  });

  //IFG project Button
  $("#IFG_project").on('click', () => {
    window.location.href = "https://github.com/wtriddle/IFG";
  });

  //IFG project Button
  $("#mTask_project").on('click', () => {
    window.location.href = "https://github.com/wtriddle/mTask";
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
  $(window).resize(() => {
    var windowWidth = $(window).width();
    if (windowWidth < 560) {
      mobile = true; //If screen is 599px or less, activate mobile
    } else if (windowWidth >= 561) {
      mobile = false; //If screen is 600px or more, de-activate mobile, reactive non-mobile
    }
    delay(() => {
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
var delay = (() => {
  var timers = {};
  return function (callback, ms, uniqueId) {
    if (!uniqueId) {
      uniqueId = "Don't call this twice without a uniqueId";
    }
    if (timers[uniqueId]) {
      clearTimeout(timers[uniqueId]);
    }
    timers[uniqueId] = setTimeout(callback, ms);
  };
})();