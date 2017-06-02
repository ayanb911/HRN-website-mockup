$(document).ready(function () {
    setTimeout(autoIconScale(), 14000);
})

function autoIconScale(){
    console.log("icons");
    var i = 1;
    $(".work-icon").each(function (i) {
        var workIcon = $(this),
            notWorkIcon = $(".work-icon").not(workIcon);
        console.log(i);
        setTimeout(function () {
            workIcon.find("div.work-icon--title").addClass("show");
            workIcon.find("div.work-icon--img").addClass("hovered");
            notWorkIcon.find("div.work-icon--title").removeClass("show");
            notWorkIcon.find("div.work-icon--img").removeClass("hovered");
        }, 1000*i);
    });
}