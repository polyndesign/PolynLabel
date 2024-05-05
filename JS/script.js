console.log("hello");

if (jQuery) {
    console.log("jquery loaded")
}
else {
    console.log("no jquery")
}


// FOR MOBILE MENU//
let mobileMenuOpen = false;

$("#mobile-menu-button").click(function(){
    //if mobile menu is closed , open it
   if(mobileMenuOpen == false) {

    $("#nav-items").addClass("display-flex");
    $("#nav-items").removeClassClass("display-none-mobile");
    mobileMenuOpen = true;  
    $("#mobile-menu-icon").attr("src","assets/phonemenu/hamburgerbutton.svg");
   }
//    if mobile menu is open, close it
   else {
    $("#nav-items").removeClass("display-flex");
    $("#nav-items").addClass("display-none-mobile");
    mobileMenuOpen = false; 
    $("#mobile-menu-icon").attr("src","assets/phonemenu/hamburgerbutton.svg");
}
});