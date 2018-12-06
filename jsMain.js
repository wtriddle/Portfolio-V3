var mobile = false; //Determines if the webpage will use Mobile or Non-Mobile functionality. 

//Retrieves the id of the specified Poem by Poem class heirarchy
function getID(y) {
    'use strict';
    var x = document.getElementsByClassName("Poem")[y].id;
    return x;

}

//Returns the id string of the currently visible Poem, for both Mobile and Non-mobile
function getActive() {
    'use strict';
    if (mobile === false) {
        if ($("#GGpoem").css("opacity") === "1") {
            return document.getElementsByClassName("Poem")[0].id;
        }
        if ($("#TDWBGpoem").css("opacity") === "1") {
            return document.getElementsByClassName("Poem")[1].id;
        }
        if ($("#GOALSpoem").css("opacity") === "1") {
            return document.getElementsByClassName("Poem")[2].id;
        }
        if ($("#BDpoem").css("opacity") === "1") {
            return document.getElementsByClassName("Poem")[3].id;
        }
        if ($("#LTTGpoem").css("opacity") === "1") {
            return document.getElementsByClassName("Poem")[4].id;
        }
        if ($("#AMBIGUITYpoem").css("opacity") === "1") {
            return document.getElementsByClassName("Poem")[5].id;
        }
        if ($("#TTpoem").css("opacity") === "1") {
            return document.getElementsByClassName("Poem")[6].id;
        }
        if ($("#COMFORTpoem").css("opacity") === "1") {
            return document.getElementsByClassName("Poem")[7].id;
        }
        if ($("#TMpoem").css("opacity") === "1") {
            return document.getElementsByClassName("Poem")[8].id;
        }
        if ($("#CSpoem").css("opacity") === "1") {
            return document.getElementsByClassName("Poem")[9].id;
        }
        if ($("#INFpoem").css("opacity") === "1") {
            return document.getElementsByClassName("Poem")[10].id;
        }
    }
    if (mobile === true) {
        if ($("#GGpoem").css("display") === "block") {
            return document.getElementsByClassName("Poem")[0].id;
        }
        if ($("#TDWBGpoem").css("display") === "block") {
            return document.getElementsByClassName("Poem")[1].id;
        }
        if ($("#GOALSpoem").css("display") === "block") {
            return document.getElementsByClassName("Poem")[2].id;
        }
        if ($("#BDpoem").css("display") === "block") {
            return document.getElementsByClassName("Poem")[3].id;
        }
        if ($("#LTTGpoem").css("display") === "block") {
            return document.getElementsByClassName("Poem")[4].id;
        }
        if ($("#AMBIGUITYpoem").css("display") === "block") {
            return document.getElementsByClassName("Poem")[5].id;
        }
        if ($("#TTpoem").css("display") === "block") {
            return document.getElementsByClassName("Poem")[6].id;
        }
        if ($("#COMFORTpoem").css("display") === "block") {
            return document.getElementsByClassName("Poem")[7].id;
        }
        if ($("#TMpoem").css("display") === "block") {
            return document.getElementsByClassName("Poem")[8].id;
        }
        if ($("#CSpoem").css("display") === "block") {
            return document.getElementsByClassName("Poem")[9].id;
        }
        if ($("#INFpoem").css("display") === "block") {
            return document.getElementsByClassName("Poem")[10].id;
        }


    }

}


//Re-shapes Poem section when changing from Mobile to Non-Mobile, vice versa
function changePoemColumns() {
    'use strict';
    if (mobile === true) {
        $("#GGpoem").removeClass("col-8").addClass("col-12");
        $("#TDWBGpoem").removeClass("col-8").addClass("col-12");
        $("#GOALSpoem").removeClass("col-8").addClass("col-12");
        $("#BDpoem").removeClass("col-8").addClass("col-12");
        $("#LTTGpoem").removeClass("col-8").addClass("col-12");
        $("#AMBIGUITYpoem").removeClass("col-8").addClass("col-12");
        $("#TTpoem").removeClass("col-8").addClass("col-12");
        $("#COMFORTpoem").removeClass("col-8").addClass("col-12");
        $("#TMpoem").removeClass("col-8").addClass("col-12");
        $("#CSpoem").removeClass("col-8").addClass("col-12");
        $("#INFpoem").removeClass("col-8").addClass("col-12");
    }
    if (mobile === false) {
        $("#GGpoem").removeClass("col-12").addClass("col-8");
        $("#TDWBGpoem").removeClass("col-12").addClass("col-8");
        $("#GOALSpoem").removeClass("col-12").addClass("col-8");
        $("#BDpoem").removeClass("col-12").addClass("col-8");
        $("#LTTGpoem").removeClass("col-12").addClass("col-8");
        $("#AMBIGUITYpoem").removeClass("col-12").addClass("col-8");
        $("#TTpoem").removeClass("col-12").addClass("col-8");
        $("#COMFORTpoem").removeClass("col-12").addClass("col-8");
        $("#TMpoem").removeClass("col-12").addClass("col-8");
        $("#CSpoem").removeClass("col-12").addClass("col-8");
        $("#INFpoem").removeClass("col-12").addClass("col-8");
    }
}

//When resizing the webpage down to mobile, this function will take the active showing poem from the non-mobile webpage and center it with all the other poems.
function repositionActiveMobile() {
    'use strict';
    if ($("#GGpoem").css("transform") === "matrix(1, 0, 0, 1, 50, 0)") {
        $("#GGpoem").toggleClass("show");
    }
    if ($("#TDWBGpoem").css("transform") === "matrix(1, 0, 0, 1, 50, 0)") {
        $("#TDWBGpoem").toggleClass("show");
    }
    if ($("#GOALSpoem").css("transform") === "matrix(1, 0, 0, 1, 50, 0)") {
        $("#GOALSpoem").toggleClass("show");
    }
    if ($("#BDpoem").css("transform") === "matrix(1, 0, 0, 1, 50, 0)") {
        $("#BDpoem").toggleClass("show");
    }
    if ($("#LTTGpoem").css("transform") === "matrix(1, 0, 0, 1, 50, 0)") {
        $("#LTTGpoem").toggleClass("show");
    }
    if ($("#AMBIGUITYpoem").css("transform") === "matrix(1, 0, 0, 1, 50, 0)") {
        $("#AMBIGUITYpoem").toggleClass("show");
    }
    if ($("#TTpoem").css("transform") === "matrix(1, 0, 0, 1, 50, 0)") {
        $("#TTpoem").toggleClass("show");
    }
    if ($("#COMFORTpoem").css("transform") === "matrix(1, 0, 0, 1, 50, 0)") {
        $("#COMFORTpoem").toggleClass("show");
    }
    if ($("#TMpoem").css("transform") === "matrix(1, 0, 0, 1, 50, 0)") {
        $("#TMpoem").toggleClass("show");
    }
    if ($("#CSpoem").css("transform") === "matrix(1, 0, 0, 1, 50, 0)") {
        $("#CSpoem").toggleClass("show");
    }
    if ($("#INFpoem").css("transform") === "matrix(1, 0, 0, 1, 50, 0)") {
        $("#INFpoem").toggleClass("show");
    }

}


$(document).ready(function () {

    'use strict';
    $("i").toggleClass("hide"); //initally no arrow for navbar

    //Variables to check if the HTML elements have been appended to the document
    var aboutHead, aboutPic, aboutP1, aboutList, listElem1, listElem2, listElem3, listElem4, aboutP2, poemHead, poemNavHead, aboutFull, aboutBtn, poetryBtn, navBtnShow, footerbtn;
    aboutHead = aboutPic = aboutP1 = aboutList = listElem1 = listElem2 = listElem3 = listElem4 = aboutP2 = poemHead = poemNavHead = aboutFull = aboutBtn = poetryBtn = navBtnShow = footerbtn = false;

    //Variables to check if poem buttons have appended to document
    var GGbtn, TDWBGbtn, GOALSbtn, BDbtn, LTTGbtn, AMBIGUITYbtn, TTbtn, COMFORTbtn, TMbtn, CSbtn, INFbtn;

    GGbtn = TDWBGbtn = GOALSbtn = BDbtn = LTTGbtn = AMBIGUITYbtn = TTbtn = COMFORTbtn = TMbtn = CSbtn = INFbtn = false;

    //Append animations only for Non-mobile
    $(window).scroll(function (event) {
        var x = $(this).scrollTop();
        if (mobile == false) {
            if (x >= 200) {
                setTimeout(function () {
                    aboutFull = true;
                    if (navBtnShow == false) {
                        $("i").toggleClass("hide");
                        navBtnShow = true;
                    }
                }, 3700); //Shows nav arrow only after about section has fully loaded

                $("i").css("opacity", "1"); //makes arrow visible

                //About header append
                if (aboutHead == false) {
                    $(".About-me-section").prepend("            <h4 class='display-4 text-center' id='aboutHeader'>About</h4>");
                    aboutHead = true;
                }

                //Pomona pic append
                if (aboutPic == false) {
                    $("#aboutImgContainer").prepend(" <img src='Images/Pomona.JPG' alt='clouds' id='aboutImg' class='img-fluid'>");
                    aboutPic = true;
                }

                //First paragraph append
                if (aboutP1 == false) {
                    $(".About-me-section").append("  <p id='aboutP1'>Currently a freshman at Cal Poly Pomona, I am majoring in Computer Engineering and living on campus. A lists of some of my interests includes</p>")
                    aboutP1 = true;
                }

                //About list append
                if (aboutList == false) {
                    $(".About-me-section").append("<ul id='aboutList'> </ul>");
                    aboutList = true;
                }

                //First bullet append
                if (listElem1 == false) {
                    $("#aboutList").append("<li id='listElem1'>Long Distance Running</li>");
                    listElem1 = true;
                }

                //Second "
                if (listElem2 == false) {
                    $("#aboutList").append(" <li id='listElem2''>Reading (Fantasy & Non-fiction)</li>");
                    listElem2 = true;
                }

                //Third "
                if (listElem3 == false) {
                    $("#aboutList").append(" <li id='listElem3'>Programming/coding</li>");
                    listElem3 = true;
                }

                //Fourth "
                if (listElem4 == false) {
                    $("#aboutList").append("<li id='listElem4'>Music (Indie rock and Hip-Hop)</li>");
                    listElem4 = true;
                }

                //Second paragraph append
                if (aboutP2 == false) {
                    $(".About-me-section").append("<p id='aboutP2'>When I'm not doing one of the above, I'm probably on the first floor of the Cal Poly library or in the classroom.</p>");
                    aboutP2 = true;
                }

                //Navbar About button append
                if (aboutBtn == false) {
                    $("#aboutBtnCont").prepend("<a href='#aboutMeSection' class='nav-link' id='aboutBtn'>About</a>");
                    aboutBtn = true;
                }

            }


            if (x >= 700 && aboutFull == true) {

                //Poem header append
                if (poemHead == false) {
                    $("#poemHeadContainer").append("<h2 class='display-1 text-center text-light bg-dark' id='poemHead'>Poetry</h2>");
                    poemHead = true;
                }

                //Select a poem append
                if (poemNavHead == false) {
                    $(".list-full").prepend("<h2 class='display-6 text-center text-light id='navPoemHead'>Select a Poem</h2>");
                    poemNavHead = true;
                }

                //Green Goddess button append
                if (GGbtn == false) {
                    $("#GGcont").append("<button class='btn btn-outline-secondary text-light poem-item' id='GG'>The Green Goddess</button>");
                    GGbtn = true;
                }

                //The Day Will Be Gone " "
                if (TDWBGbtn == false) {
                    $("#TDWBGcont").append("<button class='btn btn-outline-secondary text-light poem-item' id='TDWBG'>The Day Will Be Gone</button>");
                    TDWBGbtn = true;
                }

                //Goals " "
                if (GOALSbtn == false) {
                    $("#GOALScont").append("<button class='btn btn-outline-secondary text-light poem-item' id='GOALS'>Goals</button>");
                    GOALSbtn = true;
                }

                //Brighter Day " "
                if (BDbtn == false) {
                    $("#BDcont").append("<button class='btn btn-outline-secondary text-light poem-item' id='BD'>Brighter Day</button>");
                    BDbtn = true;
                }

                //Lodged to the Grave " "
                if (LTTGbtn == false) {
                    $("#LTTGcont").append("<button class='btn btn-outline-secondary text-light poem-item' id='LTTG'>Lodged to the Grave</button>");
                    LTTGbtn = true;
                }

                //Realize " "
                if (AMBIGUITYbtn == false) {
                    $("#AMBIGUITYcont").append("<button class='btn btn-outline-secondary text-light poem-item' id='AMBIGUITY'>Realize</button>");
                    AMBIGUITYbtn = true;
                }

                //The Thrill " "
                if (TTbtn == false) {
                    $("#TTcont").append("<button class='btn btn-outline-secondary text-light poem-item' id='TT'>The Thrill</button>");
                    TTbtn = true;
                }

                //Comfort " "
                if (COMFORTbtn == false) {
                    $("#COMFORTcont").append("<button class='btn btn-outline-secondary text-light poem-item' id='COMFORT'>Comfort</button>");
                    COMFORTbtn = true;
                }

                //Tell me " "
                if (TMbtn == false) {
                    $("#TMcont").append("<button class='btn btn-outline-secondary text-light poem-item' id='TM'>Tell me</button>");
                    TMbtn = true;
                }

                //Clear Sight " "
                if (CSbtn == false) {
                    $("#CScont").append("<button class='btn btn-outline-secondary text-light poem-item' id='CS'>Clear Sight</button>");
                    CSbtn = true;
                }

                //Infinity " "
                if (INFbtn == false) {
                    $("#INFcont").append("<button class='btn btn-outline-secondary text-light poem-item' id='INF'>Infinity</button>");
                    INFbtn = true;
                }

                //Navbar Poetry button append
                if (poetryBtn == false) {
                    $("#poetryBtnCont").append("<a href='#poetrySection' class='nav-link' id='poetryBtn'>Poetry</a>");
                    poetryBtn = true;
                }

                //Navbar Footer button append
                if (footerbtn == false) {
                    $("#footerBtnCont").append("<a href='#footer' class='nav-link' id='footerBtn'>Footer</a>");
                    footerbtn = true;
                }
            }




        }
    });


    var screenWidth = $(window).width();
    var onload = (function () {
        $(".greeting").toggleClass("load");
        $(".description").toggleClass("load");
    })();

    //Determines mobile or non-mobile layout/functionality on loading the page.
    if (screenWidth < 600) {
        mobile = true;
        //If screen is mobile, load all elements into page.
        if (mobile == true) {
            if (aboutHead == false) {
                $(".About-me-section").prepend("                  <h4 class='display-4 text-center' id='aboutHeader'>About</h4>");
                aboutHead = true;
            }
            if (aboutPic == false) {
                $("#aboutImgContainer").prepend(" <img src='Images/Pomona.JPG' alt='clouds' id='aboutImg' class='img-fluid'>");
                aboutPic = true;
            }
            if (aboutP1 == false) {
                $(".About-me-section").append("  <p id='aboutP1'>Currently a freshman at Cal Poly Pomona, I am majoring in Computer Engineering and living on campus. A lists of some of my interests includes</p>")
                aboutP1 = true;
            }
            if (aboutList == false) {
                $(".About-me-section").append("<ul id='aboutList'> </ul>");
                aboutList = true;
            }
            if (listElem1 == false) {
                $("#aboutList").append("<li id='listElem1'>Long Distance Running</li>");
                listElem1 = true;
            }
            if (listElem2 == false) {
                $("#aboutList").append(" <li id='listElem2''>Reading (Fantasy in particular)</li>");
                listElem2 = true;
            }
            if (listElem3 == false) {
                $("#aboutList").append(" <li id='listElem3'>Programming/coding</li>");
                listElem3 = true;
            }
            if (listElem4 == false) {
                $("#aboutList").append("<li id='listElem4'>Music (Indie rock and Hip-Hop)</li>");
                listElem4 = true;
            }
            if (aboutP2 == false) {
                $(".About-me-section").append("<p id='aboutP2'>When I'm not doing one of the above, I'm probably on the first floor of the Cal Poly library or in the classroom.</p>");
                aboutP2 = true;
            }
            if (poemHead == false) {
                $("#poemHeadContainer").append("<h2 class='display-1 text-center text-light bg-dark' id='poemHead'>Poetry</h2>");
                poemHead = true;
            }
            if (poemHead == false) {
                $("#poemHeadContainer").append("<h2 class='display-1 text-center text-light bg-dark' id='poemHead'>Poetry</h2>");
                poemHead = true;
            }
            if (poemNavHead == false) {
                $(".list-full").prepend("<h2 class='display-6 text-center text-light id='navPoemHead'>Select a Poem</h2>");
                poemNavHead = true;
            }
            if (GGbtn == false) {
                $("#GGcont").append("<button class='btn btn-outline-secondary text-light poem-item' id='GG'>The Green Goddess</button>");
                GGbtn = true;
            }
            if (TDWBGbtn == false) {
                $("#TDWBGcont").append("<button class='btn btn-outline-secondary text-light poem-item' id='TDWBG'>The Day Will Be Gone</button>");
                TDWBGbtn = true;
            }
            if (GOALSbtn == false) {
                $("#GOALScont").append("<button class='btn btn-outline-secondary text-light poem-item' id='GOALS'>Goals</button>");
                GOALSbtn = true;
            }
            if (BDbtn == false) {
                $("#BDcont").append("<button class='btn btn-outline-secondary text-light poem-item' id='BD'>Brighter Day</button>");
                BDbtn = true;
            }
            if (LTTGbtn == false) {
                $("#LTTGcont").append("<button class='btn btn-outline-secondary text-light poem-item' id='LTTG'>Lodged to the Grave</button>");
                LTTGbtn = true;
            }
            if (AMBIGUITYbtn == false) {
                $("#AMBIGUITYcont").append("<button class='btn btn-outline-secondary text-light poem-item' id='AMBIGUITY'>Ambiguity</button>");
                AMBIGUITYbtn = true;
            }
            if (TTbtn == false) {
                $("#TTcont").append("<button class='btn btn-outline-secondary text-light poem-item' id='TT'>The Thrill</button>");
                TTbtn = true;
            }
            if (COMFORTbtn == false) {
                $("#COMFORTcont").append("<button class='btn btn-outline-secondary text-light poem-item' id='COMFORT'>Comfort</button>");
                COMFORTbtn = true;
            }

            if (TMbtn == false) {
                $("#TMcont").append("<button class='btn btn-outline-secondary text-light poem-item' id='TM'>Tell me</button>");
                TMbtn = true;
            }
            if (CSbtn == false) {
                $("#CScont").append("<button class='btn btn-outline-secondary text-light poem-item' id='CS'>Clear Sight</button>");
                CSbtn = true;
            }

            if (INFbtn == false) {
                $("#INFcont").append("<button class='btn btn-outline-secondary text-light poem-item' id='INF'>Infinity</button>");
                INFbtn = true;
            }
            if (footerbtn == false) {
                $("#footerBtnCont").append("<a href='#footer' class='nav-link' id='footerBtn'>Footer</a>");
                footerbtn = true;
            }
            if (poetryBtn == false) {
                $("#poetryBtnCont").append("<a href='#poetrySection' class='nav-link' id='poetryBtn'>Poetry</a>");
                poetryBtn = true;
            }
            if (aboutBtn == false) {
                $("#aboutBtnCont").prepend("<a href='#aboutMeSection' class='nav-link' id='aboutBtn'>About</a>");
                aboutBtn = true;
            }
        }
    }

    if (screenWidth >= 600) {
        mobile = false;
    }

    //Green Goddess Button
    $("#GGcont").on('click', 'button#GG', function () {
        if (mobile === false) {
            let z = getID(0);
            let k = getActive();
            $("#" + k).toggleClass("show");
            $("#" + z).toggleClass("show");

        }
        if (mobile === true) {
            let z = getID(0);
            let k = getActive();
            if (k === undefined) {
                $("#" + z).css("display", "block");
            } else {
                $("#" + k).css("display", "none");
                $("#" + z).css("display", "block");
            }
            repositionActiveMobile();

        }
    });

    //The Day Will Be Gone Button
    $("#TDWBGcont").on('click', 'button#TDWBG', function () {
        if (mobile === false) {
            let z = getID(1);
            let k = getActive();
            $("#" + z).toggleClass("show");
            $("#" + k).toggleClass("show");

        }
        if (mobile === true) {
            let z = getID(1);
            let k = getActive();
            if (k === undefined) {
                $("#" + z).css("display", "block");
            } else {
                $("#" + k).css("display", "none");
                $("#" + z).css("display", "block");
            }
            repositionActiveMobile();
        }
    });

    //Goals Button
    $("#GOALScont").on('click', 'button#GOALS', function () {
        if (mobile === false) {
            let z = getID(2);
            let k = getActive();
            $("#" + z).toggleClass("show");
            $("#" + k).toggleClass("show");

        }
        if (mobile === true) {
            let z = getID(2);
            let k = getActive();
            if (k === undefined) {
                $("#" + z).css("display", "block");
            } else {
                $("#" + k).css("display", "none");
                $("#" + z).css("display", "block");
            }
            repositionActiveMobile();
        }
    });

    //Brighter Day Button
    $("#BDcont").on('click', 'button#BD', function () {
        if (mobile === false) {
            let z = getID(3);
            let k = getActive();
            $("#" + z).toggleClass("show");
            $("#" + k).toggleClass("show");

        }
        if (mobile === true) {
            let z = getID(3);
            let k = getActive();
            if (k === undefined) {
                $("#" + z).css("display", "block");
            } else {
                $("#" + k).css("display", "none");
                $("#" + z).css("display", "block");
            }
            repositionActiveMobile();

        }
    });

    //Lodged To The Grave Button
    $("#LTTGcont").on('click', 'button#LTTG', function () {
        if (mobile === false) {
            let z = getID(4);
            let k = getActive();
            $("#" + z).toggleClass("show");
            $("#" + k).toggleClass("show");

        }
        if (mobile === true) {
            let z = getID(4);
            let k = getActive();
            if (k === undefined) {
                $("#" + z).css("display", "block");
            } else {
                $("#" + k).css("display", "none");
                $("#" + z).css("display", "block");
            }
            repositionActiveMobile();

        }
    });

    //Ambiguity Button
    $("#AMBIGUITYcont").on('click', 'button#AMBIGUITY', function () {
        if (mobile === false) {
            let z = getID(5);
            let k = getActive();
            $("#" + z).toggleClass("show");
            $("#" + k).toggleClass("show");

        }
        if (mobile === true) {
            let z = getID(5);
            let k = getActive();
            if (k === undefined) {
                $("#" + z).css("display", "block");
            } else {
                $("#" + k).css("display", "none");
                $("#" + z).css("display", "block");
            }
            repositionActiveMobile();

        }
    });

    //The Thrill Button
    $("#TTcont").on('click', 'button#TT', function () {
        if (mobile === false) {
            let z = getID(6);
            let k = getActive();
            $("#" + z).toggleClass("show");
            $("#" + k).toggleClass("show");

        }
        if (mobile === true) {
            let z = getID(6);
            let k = getActive();
            if (k === undefined) {
                $("#" + z).css("display", "block");
            } else {
                $("#" + k).css("display", "none");
                $("#" + z).css("display", "block");
            }
            repositionActiveMobile();

        }
    });

    //Comfort Button
    $("#COMFORTcont").on('click', 'button#COMFORT', function () {
        if (mobile === false) {
            let z = getID(7);
            let k = getActive();
            $("#" + z).toggleClass("show");
            $("#" + k).toggleClass("show");

        }
        if (mobile === true) {
            let z = getID(7);
            let k = getActive();
            if (k === undefined) {
                $("#" + z).css("display", "block");
            } else {
                $("#" + k).css("display", "none");
                $("#" + z).css("display", "block");
            }
            repositionActiveMobile();

        }
    });

    //Tell me Button
    $("#TMcont").on('click', 'button#TM', function () {
        if (mobile === false) {
            let z = getID(8);
            let k = getActive();
            $("#" + z).toggleClass("show");
            $("#" + k).toggleClass("show");

        }
        if (mobile === true) {
            let z = getID(8);
            let k = getActive();
            if (k === undefined) {
                $("#" + z).css("display", "block");
            } else {
                $("#" + k).css("display", "none");
                $("#" + z).css("display", "block");
            }
            repositionActiveMobile();

        }
    });

    //Clear Sight Button
    $("#CScont").on('click', 'button#CS', function () {
        if (mobile === false) {
            let z = getID(9);
            let k = getActive();
            $("#" + z).toggleClass("show");
            $("#" + k).toggleClass("show");

        }
        if (mobile === true) {
            let z = getID(9);
            let k = getActive();
            if (k === undefined) {
                $("#" + z).css("display", "block");
            } else {
                $("#" + k).css("display", "none");
                $("#" + z).css("display", "block");
            }
            repositionActiveMobile();

        }
    });

    //Infinity Button
    $("#INFcont").on('click', 'button#INF', function () {
        if (mobile === false) {
            let z = getID(10);
            let k = getActive();
            $("#" + z).toggleClass("show");
            $("#" + k).toggleClass("show");

        }
        if (mobile === true) {
            let z = getID(10);
            let k = getActive();
            if (k === undefined) {
                $("#" + z).css("display", "block");
            } else {
                $("#" + k).css("display", "none");
                $("#" + z).css("display", "block");
            }
            repositionActiveMobile();

        }
    });


    //Nav bar collapses if button on navbar is used on mobile
    $("#aboutBtnCont").on('click', 'a#aboutBtn', function () {
        if (mobile === true) {
            document.getElementById("navCollapse").click();
        }
    });

    $("#poetryBtnCont").on('click', 'a#poetryBtn', function () {
        if (mobile === true) {
            document.getElementById("navCollapse").click();
        }
    });

    $("#footerBtnCont").on('click', 'a#footerBtn', function () {
        if (mobile === true) {
            document.getElementById("navCollapse").click();
        }
    });

    //function to toggle hiding of Nav arrow
    var toggleNav = function () {
        setTimeout(function () {
            $("i").toggleClass("hide");
        }, 550);

    }

    //Shows nav, hides arrow on enter
    $(".hideShowNav").on("mouseenter", function () {
        $("i").toggleClass("hide");
    });

    //Hides nav, shows arrow on leave, accounts for possible error in animation timing
    $(".hideShowNav").on("mouseleave", function () {
        setInterval(function () {
            if ($(".navbar").css("transform") === "matrix(1, 0, 0, 1, 0, -80)") {
                if ($("i").css("transform") === "matrix(1, 0, 0, 1, 0, -80)") {
                    $("i").toggleClass("hide");
                }
            }
        }, 100);
    });

    //when the mouse leaves the navbar
    $(".navbar").on("mouseleave", function () {
        toggleNav();
    });


    //Secret Button 
    $("#secretActivator").click(function () {
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
    $("#goodReadsBtn").on('click', function () {
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
    $(window).resize(function () {
        var windowWidth = $(window).width();
        if (windowWidth < 560) {
            mobile = true; //If screen is 599px or less, activate mobile
        } else if (windowWidth >= 561) {
            mobile = false; //If screen is 600px or more, de-activate mobile, reactive non-mobile
        }
        delay(function () {
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
var delay = (function () {
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
