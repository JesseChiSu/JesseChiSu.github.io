/* This is where you should put any JavaScript code from the App Academy project you're using for your site. */

/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.getElementById("sectTwo").style.marginLeft = "250px";
    document.getElementById("sectThree").style.marginLeft = "250px";
    document.getElementById("sectFour").style.marginLeft = "250px";
    document.getElementById("body").style.backgroundColor = "rgba(0,0,0,0.4)";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.getElementById("sectTwo").style.marginLeft = "0px";
    document.getElementById("sectThree").style.marginLeft = "0px";
    document.getElementById("sectFour").style.marginLeft = "0px";
    document.getElementById("body").style.backgroundColor = "white";
}