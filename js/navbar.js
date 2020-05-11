function openNav(navName) {
  if (navName == "leftSidenav") {
    document.getElementById(navName).style.width = "20%";
  } else {
    document.getElementById(navName).style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
}

function closeNav(navName) {
  if (navName == "leftSidenav") {
    document.getElementById(navName).style.width = "0";
  } else {
    document.getElementById(navName).style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }
}
