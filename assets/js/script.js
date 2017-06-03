$(document).ready(function () {
    autoIconScale(); //Icon animation - Future of Work
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

            /*
            Debugging Purpose
            console.log("each i = ", i);
            */
        }, 1000*i);

    });
    setTimeout(function () { //restart the function after completion of first setTimeout
        autoIconScale();
    }, 1000 * workIcon.length-1);
}