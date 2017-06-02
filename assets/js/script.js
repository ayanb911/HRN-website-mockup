$(document).ready(function () {
    setTimeout(autoIconScale, 14);
})

function autoIconScale(){
    console.log("icons");
    var workIcon = $(".work-icon");
    workIcon.each(function (i) {
        var workIconEach = $(this),
            notWorkIcon = $(".work-icon").not(workIconEach);
        setTimeout(function () {
            workIconEach.find("div.work-icon--title").addClass("show");
            workIconEach.find("div.work-icon--img").addClass("hovered");
            notWorkIcon.find("div.work-icon--title").removeClass("show");
            notWorkIcon.find("div.work-icon--img").removeClass("hovered");
            /*if(i === 14){
                console.log(workIcon[14]);
                workIconEach.find("div.work-icon--title").addClass("show");
                workIconEach.find("div.work-icon--img").addClass("hovered");
                setInterval(autoIconScale(), 00);
            }*/
        }, 1000*i);

    });
}