function openNav() {
  document.getElementById("sidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("sidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

function toggleNav(){
  var sidebar = document.getElementById("sidebar");
  if (sidebar.style.width === "250px") {
    closeNav();
  } else {
    openNav();
  }
}

// main is all other elements on the page that are not part of the 
// sidebar. When the sidebar is open, the main content is pushed 
// to the right by 250px, and when the sidebar is closed, the main 
// content returns to its original position.