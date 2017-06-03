$(document).ready(function () {
    autoIconScale(); //Icon animation - Future of Work
    menuAnimate(); //hamburger to cross icon transition
    menuMore();//nav menu for mobile more click
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
function menuAnimate(){

    //variables
    var $ham = $("#hamburgerBtn"),
        $menuItem = $("li.menu-item"),
        click = false;

    $ham.click(function () {
        $ham.toggleClass("isCross")
        //toggle class to make it cross and for menu to slide in
        click = !click;
        if(click){
            $ham.parent().find("#mobileMenu").addClass("isOpen");
            $menuItem.each(function (i) {
                var menuItemThis = $(this),
                    notThis = $menuItem.not(menuItemThis);
                console.log(this);
                setTimeout(function () {
                    menuItemThis.addClass("isEntering");
                }, 30*i);
            })
        }
        else{
            $menuItem.each(function (i) {
                var menuItemThis = $(this),
                    notThis = $menuItem.not(menuItemThis);
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


////Menu animations

//Menu More
function menuMore(){
    $("#menuMore").click(function () {
        //toggle class for translating ul menu
        $(this).parent().closest("#menuWrapper").toggleClass("expand");
    })
}
