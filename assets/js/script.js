$(document).ready(function () {
    autoIconScale(); //Icon animation - Future of Work
    menuAnimate(); //animations in nav menuu
    menuMore();//nav menu for mobile more click
    hoveringDiv();
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
        //toggle class for translating ul menu
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

        //toggle class to make it cross and for menu to slide in
        click = !click;
        if(click){
            $ham.parent().find("#mobileMenu").addClass("isOpen");
            $menuItem.each(function (i) {
                var menuItemThis = $(this);
                setTimeout(function () {
                    menuItemThis.addClass("isEntering");
                }, 30*i);
            })
        }
        else{
            $menuItem.each(function (i) {
                var menuItemThis = $(this);
                setTimeout(function () {
                    menuItemThis.removeClass("isEntering");
                }, 30*i);
            })
            setTimeout(function () {
                $ham.parent().find("#mobileMenu").removeClass("isOpen");
            }, 30 * ($menuItem.length-1));
        }
    })
}


//Attendees animation

//Hovering Div
function hoveringDiv(){
    // var speakers = $(".speaker[data-about]"),
    //     infoDiv = "",
    //     $bdy = $("body");
    // console.log(speakers);
    // speakers.each(function () {
    //     var speaker = $(this);
    //     console.log(speaker);
    //     var speakerName = speaker.find(".person-description .person-title").text(),
    //         speakerPosition = speaker.find(".person-description .person-position").text(),
    //         speakerCompany = speaker.find(".person-description .person-company").text(),
    //         speakerAbout = speaker.attr("data-about");
    //     infoDiv =
    //         "<div id='infoDiv' class='hidden--lt-sm pos-absolute showingInfo'>" +
    //         "<h3 id='hoverName'>"+speakerName+"</h3>" +
    //         "<p id='hoverPosition'>"+speakerPosition+"</p>" +
    //         "<p id='hoverCompany'>"+speakerCompany+"</p>" +
    //         "<p id='hoverAbout' class='layout-m-t--2'>"+speakerAbout+"</p>" +
    //         "</div>";
    //     speaker.hover(function () {
    //         speaker.find(".person-description").after(infoDiv);
    //         $('#infoDiv').css("left","-200px");
    //     }, function () {
    //         speaker.find("#infoDiv").remove();
    //     });
    //
    //     console.log(infoDiv);
    // });
    var speakers = $(".speaker[data-about]"),
        infoDiv = "";
    speakers.each(function () {
        var speaker = $(this);
        speaker.hover(function () {

            var speakerName = speaker.find(".person-description .person-title").text(),
                speakerPosition = speaker.find(".person-description .person-position").text(),
                speakerCompany = speaker.find(".person-description .person-company").text(),
                speakerAbout = speaker.attr("data-about");

            infoDiv =
                "<div id='infoDiv' class='hidden--lt-sm pos-absolute showingInfo'>" +
                "<h3 id='hoverName'>"+speakerName+"</h3>" +
                "<p id='hoverPosition'>"+speakerPosition+"</p>" +
                "<p id='hoverCompany'>"+speakerCompany+"</p>" +
                "<p id='hoverAbout' class='layout-m-t--2'>"+speakerAbout+"</p>" +
                "</div>";

            speaker.find(".person-description").after(infoDiv);
            $('#infoDiv').addClass("showingInfo");

        }, function () {
            speaker.find("#infoDiv").remove();
        });
    })
}

// More button
$("#seeMore").click(function () {
    $('#attendeesList').toggleClass("isExpanded");
})