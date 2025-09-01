function toggleMenu() {
  const mobileNav = document.getElementById("mobileNav");
  if (mobileNav.style.width === "250px") {
    mobileNav.style.width = "0";
  } else {
    mobileNav.style.width = "250px";
  }
}
