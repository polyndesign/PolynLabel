console.log("hello");

if (jQuery) {
    console.log("jquery loaded")
}
else {
    console.log("no jquery")
}


// FOR MOBILE MENU DELETE IF NOT WORKING//
let mobileMenuOpen = false;

$("#mobile-menu-button").click(function(){
    //if mobile menu is closed , open it
   if(mobileMenuOpen == false) {
    $("#main-menu").removeClass("navigation");
    mobileMenuOpen = true;  
    $("#mobile-menu-icon").attr("src","assets/phonemenu/hamburgerbutton.svg");
   }
//    if mobile menu is open, close it
   else {
    $("#main-menu").addClass("navigation");
    mobileMenuOpen = false; 
    $("#mobile-menu-icon").attr("src","assets/phonemenu/hamburgerbutton.svg");
}
});