const header = document.querySelector(".header-section").offsetHeight + 24;
let btn = document.getElementById("list");





function showdropdown() {



    document.getElementById('DropList').style.display = "flex";
    // document.getElementById('DropList').style.top = `${header}px`;
}

document.addEventListener("click", function() {

    document.getElementById("DropList").style.display = "none";
});