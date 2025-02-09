function toggleMobileMenu(){
    document.getElementById("menu").style.width = "100%";
    document.getElementById("close_bt").style.display = "flex";
    document.getElementById("menu").style.transition = "0.3s";
}

function closeSideNav(){
    document.getElementById("menu").style.width = "0";
    document.getElementById("close_bt").style.display = "none";
    document.getElementById("menu").style.transition = "0.3s";
}