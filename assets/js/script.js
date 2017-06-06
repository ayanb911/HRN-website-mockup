$(document).ready(function () {
    autoIconScale(); //Icon animation - Future of Work

    menuAnimate(); //animations in nav menu

    hoveringDiv();//speaker hover div
    
    $(window).on("load", function () {
       gridResize(); //for resizing of speaker grid
    })
})

//Icon animation - Future of Work
function autoIconScale(){
    var workIcon = $(".work-icon");
    workIcon.each(function (i) {
        var workIconEach = $(this),
            notThis = $(".work-icon").not(workIconEach);

        var timer =  setTimeout(function () {
            //add classes to 'this'
            workIconEach.find("div.work-icon--title").addClass("show");
            workIconEach.find("div.work-icon--img").addClass("hovered");

            //remove classes from other elements
            notThis.find("div.work-icon--title").removeClass("show");
            notThis.find("div.work-icon--img").removeClass("hovered");
        }, 1000*i);

        workIcon.hover(function () {
            //on hover stop timeout
            clearTimeout(timer);

            //remove class from other icons

            workIconEach.find("div.work-icon--title").removeClass("show");
            workIconEach.find("div.work-icon--img").removeClass("hovered");

            //add class to the icon hovered upon
            $(this).find("div.work-icon--img").addClass("hovered")
        }, function () {
            //remove class on hover out
            $(this).find("div.work-icon--img").removeClass("hovered");
        });
    });

    setTimeout(function () { //restart the function after completion of first setTimeout
        autoIconScale();
    }, 1000 * workIcon.length-1);
}


////Menu animations

//Menu More button
function menuMore(){
    $("#menuMore").click(function () {
        //toggle class for translating height of ul menu
        $(this).parent().closest("#menuWrapper").toggleClass("expand");
    })
}

//Menu slide effect and cross button
function menuAnimate(){

    //variables
    var $bdy = $('body'),
        $ham = $("#hamburgerBtn"),
        $menuItem = $("li.menu-item"),
        click = false;

    $ham.click(function () {
        $ham.toggleClass("isCross");//turn ham into cross and back
        $bdy.toggleClass("overflow-stop");//stop scroll when body is open

        click = !click; //reverse present value of click

        if(click){
            $ham.parent().find("#mobileMenu").addClass("isOpen");
            $menuItem.each(function (i) {
                var menuItemThis = $(this);
                setTimeout(function () {
                    menuItemThis.addClass("isEntering");
                }, 50*i);
            })
        }
        else{
            $menuItem.each(function (i) {
                var menuItemThis = $(this);
                setTimeout(function () {
                    menuItemThis.removeClass("isEntering");
                }, 50*i);
            })
            setTimeout(function () {
                $ham.parent().find("#mobileMenu").removeClass("isOpen");
            }, 50 * ($menuItem.length-1));
        }
    })
}


//// Attendees animation

//Hovering Div
function hoveringDiv(){
    var speakers = $(".speaker[data-about]"), //get all divs with "data-about" attribute
        infoDiv = ""; //for creating div
    speakers.each(function () {
        var speaker = $(this); //each speaker
        speaker.hover(function () {
            // get data for infoDiv
            var speakerName = speaker.find(".person-description .person-title").text(),
                speakerPosition = speaker.find(".person-description .person-position").text(),
                speakerCompany = speaker.find(".person-description .person-company").text(),
                speakerAbout = speaker.attr("data-about");

            // create infoDiv
            infoDiv =
                "<div id='infoDiv' class='hidden--lt-sm pos-absolute'>" +
                "<h3 id='hoverName'>"+speakerName+"</h3>" +
                "<p id='hoverPosition'>"+speakerPosition+"</p>" +
                "<p id='hoverCompany'>"+speakerCompany+"</p>" +
                "<p id='hoverAbout' class='layout-m-t--2'>"+speakerAbout+"</p>" +
                "</div>";


            //add class and append infoDiv
            speaker.addClass("is-showing-info").append(infoDiv);

        }, function () {
            // on hover out remove class and infoDiv
            speaker.removeClass("is-showing-info").find("#infoDiv").remove();
        });
    })
}

//Speaker grid resizing functions

//To change width of grid based on screen width
function gridResize() {
    var attendeesGrid = $("#attendeesList"),
        actualHeight = 0, //store actual height of div
        hiddenHeight = 0, //store height of visible part of div
        speaker = $(".speaker");

    //for 4*3 grid resize
    if($(window).innerWidth() <= 768 && $(window).innerWidth() > 480){
        actualHeight = attendeesGrid.prop('scrollHeight');
        hiddenHeight =  (((speaker.innerHeight()+4) * 3) - 4);
        attendeesGrid.css("height", hiddenHeight);
    }

    //for 2*4 grid resize
    else if($(window).innerWidth() <= 480) {
        actualHeight = attendeesGrid.prop('scrollHeight');
        hiddenHeight = (((speaker.innerHeight() + 4) * 4) - 4);
        attendeesGrid.css("height", hiddenHeight);
    }

    //call More button function
    seeMore(actualHeight, hiddenHeight);
}

//More button expansion of grid
function seeMore (actualHeight, hiddenHeight) {
    var actual = (actualHeight - 4) + "px";
    var hidden = hiddenHeight + "px";

    var click = false;
    $("#seeMore").click(function () {
        click  = !click;
        if(click){
            $('#attendeesList').css("height", actual); // expand to actua height
        }
        else{
            $('#attendeesList').css("height", hidden); // decrease to previous grid height
        }
    });
};






