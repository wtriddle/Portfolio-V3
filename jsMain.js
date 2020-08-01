var mobile = false; //Determines if the webpage will use Mobile or Non-Mobile functionality.

//Returns the id string of the currently visible Poem, for both Mobile and Non-mobile
function getActive(poems_obj) {
  /*
  Takes DOM button list in poetry section. Maps button id to poem contianer id.
  Returns string of button id for showing poem. Null if nothing is showing
  */
  var active = null;

  if (mobile === false) {
    Array.prototype.forEach.call(poems_obj, (item) => {
      if ($("#" + item.id + "poem").css("opacity") == 1) {
        active = item.id;
      }
    });
    return active;
  }
  if (mobile === true) {
    Array.prototype.forEach.call(poems_obj, (item) => {
      if ($("#" + item.id + "poem").css("display") == "block") {
        active = item.id;
      }
    });
    return active;
  }

}

function getActiveContent() {
  let parent = document.getElementsByClassName("activity_content")[0];
  let contents = parent.childNodes;
  var active = null;
  var screenWidth = $(window).width();
  if (screenWidth <= 1238) {
    Array.prototype.forEach.call(contents, (item) => {
      if ($("#" + item.id).css("display") == "block") {
        active = item.id;
      }
    });
    return active
  }

  Array.prototype.forEach.call(contents, (item) => {
    if ($("#" + item.id).css("opacity") == 1) {
      active = item.id;
    }
  });
  return active


}

function addData(chart, label, data) {
  chart.data.labels.push(label);
  chart.data.datasets.forEach((dataset) => {
    dataset.data.push(data);
  });
  chart.update();
}


//Re-shapes Poem section when changing from Mobile to Non-Mobile, vice versa
function changePoemColumns() {
  'use strict';
  if (mobile === true) {
    for (var poemNumber = 0; poemNumber < 5; poemNumber++) {
      var poemName = document.getElementsByClassName("Poem")[poemNumber].id;
      $("#" + poemName).removeClass("col-8").addClass("col-12");
    }
  }
  if (mobile === false) {
    for (var poemNumber = 0; poemNumber < 5; poemNumber++) {
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

  // Set page to top initally every refresh
  window.scroll(0, 0);

  // HTML widget containers ==================================================
  var poem_div = document.getElementsByClassName("poem_nav")[0];
  var poem_buttons = poem_div.getElementsByTagName("button");

  var IFG_widgets = ["#project_title",
    "#IFG_image", "#IFG_name", "#IFG_description", "#IFG_project"
  ]

  var mTask_widgets = [
    "#mTask_image", "#mTask_name", "#mTask_description", "#mTask_project",
  ]
  // Containers ==============================================================

  // Animated scroll configurations
  $(window).scroll(function () {

    // Integer position of user on page
    var scroll_pos = $(this).scrollTop();

    // About me section loading
    if (scroll_pos >= 350) {

      // Widgets
      $(".about_section img").addClass("opacity_show");
      $(".about_section h3").addClass("slide_fade");
      $(".about_section h4").addClass("slide_fade");
      $("#Weight-Lifting").addClass("load");
      $("#Book-Reading").addClass("load");
      $("#Developing").addClass("load");
      $("#Music").addClass("load");
      $("#Yoga").addClass("load");
      $("#Education").addClass("load");
      $("#Aspirations").addClass("load");

      // About section navbar button
      if (!document.getElementById("aboutBtn")) {
        $("#aboutBtnCont").prepend("<a href='#About' class='nav-link' id='aboutBtn'>About</a>");
      }
    }

    // Project Section loading
    if (scroll_pos >= 1500) {

      // IFG widgets
      Array.prototype.forEach.call(IFG_widgets, (item) => {
        $(item).addClass("load");
      });

      // IFG arrows
      var i;
      for (i = 1; i < 4; ++i) {
        $(".arrow_wrapper_" + i).addClass("load");
      }

      // Project section navbar button
      if (!document.getElementById("projectBtn")) {
        $("#projectBtnCont").append("<a href='#project_section' class='nav-link' id='projectBtn'>Projects</a>");
      }
    }

    if (scroll_pos >= 2100) {

      // IFG widgets
      Array.prototype.forEach.call(mTask_widgets, (item) => {
        $(item).addClass("load");
      });

      // IFG arrows
      var i;
      for (i = 4; i < 7; ++i) {
        $(".arrow_wrapper_" + i).addClass("load");
      }
    }

    // Poetry Section loading
    if (scroll_pos >= 3000) {

      // Widgets
      $("#poetry_section h1").addClass("opacity_show");
      $("#poetry_section h2").addClass("opacity_show");
      Array.prototype.forEach.call(poem_buttons, (item) => {
        $("#" + item.id).addClass("load_poem");
      });

      // Poetry section navbar button
      if (!document.getElementById("poetryBtn")) {
        $("#poetryBtnCont").append("<a href='#poetry_section' class='nav-link' id='poetryBtn'>Poetry</a>");
      }

      // Footer section navbar button
      if (!document.getElementById("footerBtn")) {
        $("#footerBtnCont").append("<a href='#footer' class='nav-link' id='footerBtn'>Footer</a>");
      }
    }
  });


  var screenWidth = $(window).width();

  if (screenWidth >= 600) {
    mobile = false;
  } else {
    mobile = true;
  }


  $(".navToggle").click(function () {
    $(".navbar").toggleClass("show");
    // Toggler style
    this.classList.toggle("change");
  });

  var timeout = false;

  // Poem navbar button function
  $(".poem_nav button").click(function () {

    // Timer for buffer of animation
    if (timeout === false) {

      timeout = true;
      let selected_poem = this.id + "poem";
      let poem_to_hide = getActive(poem_buttons) + "poem";

      if (mobile === false) {
        $("#" + poem_to_hide).toggleClass("show_poem");
        $("#" + selected_poem).toggleClass("show_poem");
      }

      if (mobile === true) {
        if (poem_to_hide === undefined) {
          $("#" + selected_poem).css("display", "block");
        } else {
          $("#" + poem_to_hide).css("display", "none");
          $("#" + selected_poem).css("display", "block");
        }
        repositionActiveMobile();

      }
      setTimeout(() => {
        timeout = false;
      }, 600);
    }
  });

  $("#show_graph").click(() => {

    var fav = $('input[name="fav_section]:checked"').val();
    $('input[name="fav_section"]:checked').prop("checked", false);
    var favorites_dict = {
      'Header': 2,
      'About': 8,
      'Projects': 12,
      'Poetry': 25,
      'Footer': 16
    }
    favorites_dict[fav] += 1;
    var data = favorites_dict.values();
  });

  //Nav bar collapses if button on navbar is used on mobile
  $("nav li").on('click', () => {
    if (mobile === true) {
      $("nav button").click();
    }
  });

  function slide_arrows(arrows) {
    /*
      Activates sliding animation on arrows inside of the projects section
     @arrows {div object} reference to the arrow divs
     */
    Array.prototype.forEach.call(arrows, (item) => {
      $(item).addClass("slide_arrow");
    });
  }

  function get_remaining_time(timer_seconds) {
    /*
      Returns the number of miliseconds reamining in the sliding arrow animation
      @timer_seconds {integer} the total number of miliseconds that the animation has been running for
    */
    if (timer_seconds < 1600) {
      return (1600 - timer_seconds);
    } else {
      return (1600 - (timer_seconds % 1500));
    }
  }

  var timer_seconds_IFG = 0;
  var IFG_timer;

  $("#IFG_project").on('mouseenter', function () {
    var enter_time = new Date().getTime();

    IFG_timer = setInterval(function () {
      var now = new Date().getTime();

      var distance = now - enter_time;

      timer_seconds_IFG = Math.floor(distance % (1000 * 60));

    }, 10)

    var arrows = this.parentElement.getElementsByClassName("arrow_IFG");

    slide_arrows(arrows);

  });

  $("#IFG_project").on('mouseleave', function () {
    clearInterval(IFG_timer);
    var remaining_seconds_IFG = get_remaining_time(timer_seconds_IFG);
    timer_seconds_IFG = 0;
    setTimeout(function () {
      $(".arrow_IFG").removeClass("slide_arrow");
    }, remaining_seconds_IFG);

  });

  var timer_seconds_mTask = 0;
  var mTask_timer;


  $("#mTask_project").on('mouseenter', function () {
    var enter_time = new Date().getTime();

    mTask_timer = setInterval(function () {
      var now = new Date().getTime();

      var distance = now - enter_time;

      timer_seconds_mTask = Math.floor(distance % (1000 * 60));

    }, 10)

    var arrows = this.parentElement.getElementsByClassName("arrow_mTask");

    slide_arrows(arrows);

  });

  $("#mTask_project").on('mouseleave', function () {
    clearInterval(mTask_timer);
    var remaining_seconds_mTask = get_remaining_time(timer_seconds_mTask);
    timer_seconds_mTask = 0;
    setTimeout(function () {
      $(".arrow_mTask").removeClass("slide_arrow");
    }, remaining_seconds_mTask);

  });


  //About Button
  $(".activity_selector button").on('click', function () {

    if (timeout === false) {

      timeout = true;
      var id = this.id;
      var active = getActiveContent();

      if ((id + "-Content") == active) {
        return 0;
      }

      $("#" + this.id + "-Content").addClass("show_content");
      if (active) {
        $("#" + active).removeClass("show_content");
      }
    }
    setTimeout(() => {
      timeout = false;
    }, 600);
  });


  var counter = 0;

  var contents = ["Book-Reading-Content", "Developing-Content", "Music-Content", "Weight-Lifting-Content", "Yoga-Content", "Education-Content", "Aspirations-Content"]

  //Activity Right Arrow 
  $(".Arrow_Nav div.arrow_right").on('click', function () {

    if (timeout === false) {

      // Shift activity content right
      var active = getActiveContent();
      let re = /^\w+/;
      counter++;
      if (counter == 7) {
        counter = 0;
      }
      var activate = contents[counter];

      var toActive = re.exec(activate)[0];
      var fromActive = re.exec(active)[0];

      $(".Arrow_Nav p").addClass(toActive);
      $(".Arrow_Nav p").removeClass(fromActive);

      $("#" + activate).css("display", "block");
      $("#" + active).css("display", "none");

      // Animate arrow and add timeout
      timeout = true;
      this.classList.toggle("arrow_clicked");
      setTimeout(() => {
        this.classList.toggle("arrow_clicked");
        timeout = false;
      }, 550);
    }
  });

  //Activity Left Arrow 
  $(".Arrow_Nav div.arrow_left").on('click', function () {

    if (timeout === false) {

      // Shift activity content left
      var active = getActiveContent();
      let re = /^\w+/;
      counter--;
      if (counter == -1) {
        counter = 6;
      }
      var activate = contents[counter];

      var toActive = re.exec(activate)[0];
      var fromActive = re.exec(active)[0];

      $(".Arrow_Nav p").addClass(toActive);
      $(".Arrow_Nav p").removeClass(fromActive);

      $("#" + activate).css("display", "block");
      $("#" + active).css("display", "none");

      // Animate arrow and add timeout
      timeout = true;
      this.classList.toggle("arrow_clicked");
      setTimeout(() => {
        this.classList.toggle("arrow_clicked");
        timeout = false;
      }, 550);
    }
  });

  //Soundcloud Button
  $(".soundcloud").on('click', () => {
    window.location.href = "https://soundcloud.com/furryman654";
  });

  //Github Button
  $(".github").on('click', () => {
    window.location.href = "https://github.com/wtriddle";
  });

  //Linkedin Button
  $(".linkedin").on('click', () => {
    window.location.href = "https://www.linkedin.com/in/william-riddle-983233190/";
  });

  //IFG project Button
  $("#IFG_project").on('click', () => {
    window.location.href = "https://github.com/wtriddle/IFG";
  });

  //IFG project Button
  $("#mTask_project").on('click', () => {
    window.location.href = "https://github.com/wtriddle/mTask";
  });

  //Change Poem Section to Mobile Layout
  if (screenWidth < 560) {
    changePoemColumns();
    $(".Poem").css("opacity", "1");
    $(".Poem").removeClass("absolute").addClass("relative");
  }

  //Change Poem Section to non-Mobile layout
  if (screenWidth >= 561) {
    changePoemColumns();
    $(".Poem").removeClass("relative").addClass("absolute");
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

      if (windowWidth >= 1238) {
        var content = ["Book-Reading-Content", "Developing-Content", "Music-Content", "Weight-Lifting-Content", "Yoga-Content", "Education-Content", "Aspirations-Content"];
        Array.prototype.forEach.call(content, (item) => {
          $("#" + item).css("display", "block");
        });
      }

      if (windowWidth < 1238) {
        var active = getActiveContent();
        var content = ["Book-Reading-Content", "Developing-Content", "Music-Content", "Weight-Lifting-Content", "Yoga-Content", "Education-Content", "Aspirations-Content"];
        Array.prototype.forEach.call(content, (item) => {
          if (item != active) {
            $("#" + item).css("display", "none");
          }
        });
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