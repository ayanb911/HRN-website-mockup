$(document).ready(function () {
    autoIconScale(); //Icon animation - Future of Work
    hamToCross();
    menuMore();
})

//Icon animation - Future of Work
function autoIconScale(){
    var workIcon = $(".work-icon");
    workIcon.each(function (i) {
        var workIconEach = $(this),
            notThis = $(".work-icon").not(workIconEach);

        setTimeout(function () {
            //add classes to 'this'
            workIconEach.find("div.work-icon--title").addClass("show");
            workIconEach.find("div.work-icon--img").addClass("hovered");

            //remove classes from other elements
            notThis.find("div.work-icon--title").removeClass("show");
            notThis.find("div.work-icon--img").removeClass("hovered");
        }, 1000*i);

    });
    setTimeout(function () { //restart the function after completion of first setTimeout
        autoIconScale();
    }, 1000 * workIcon.length-1);
}

//Hamburger icon to cross animation
function hamToCross(){
    $("#hamburgerBtn").click(function () {
        //toggle class to make it cross and for menu to slide in
        $(this).toggleClass("isCross").parent().find("#mobileMenu").toggleClass("isOpen");
    })
}


////Menu animations

//Menu More
function menuMore(){
    $("#menuMore").click(function () {
        //toggle class for translating ul menu
        $(this).parent().closest("#menuWrapper").toggleClass("expand");
    })
}