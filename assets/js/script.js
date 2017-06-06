$(document).ready(function () {
    autoIconScale(); //Icon animation - Future of Work

    menuAnimate(); //animations in nav menu

    menuMore();//nav menu for mobile more click

    hoveringDiv();//speaker hover div
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
            workIconEach.find("div.work-icon--title").removeClass("show");
            workIconEach.find("div.work-icon--img").removeClass("hovered");
        }, '');
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
                "<div id='infoDiv' class='hidden--lt-sm pos-absolute showingInfo'>" +
                "<h3 id='hoverName'>"+speakerName+"</h3>" +
                "<p id='hoverPosition'>"+speakerPosition+"</p>" +
                "<p id='hoverCompany'>"+speakerCompany+"</p>" +
                "<p id='hoverAbout' class='layout-m-t--2'>"+speakerAbout+"</p>" +
                "</div>";

            // append infoDiv
            speaker.find(".person-description").after(infoDiv);
            $('#infoDiv').addClass("showingInfo");

        }, function () {
            // on hover out remove infoDiv
            speaker.find("#infoDiv").remove();
        });
    })
}

// More button for expanding grid on mobile/tablets
$("#seeMore").click(function () {
    $('#attendeesList').toggleClass("isExpanded");
})