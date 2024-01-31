document.addEventListener('DOMContentLoaded', function () {
    var menuItems = document.querySelectorAll('.navbar .menu-items li');

    function closeMenu() {
        var checkbox = document.querySelector('.nav-container .checkbox');
        checkbox.checked = false;
        document.getElementById("bb").style.display = "none";
    }

    menuItems.forEach(function (menuItem) {
        menuItem.addEventListener('click', closeMenu);
    });
});

var btn = document.querySelector('.checkbox');
var bgBlur = document.getElementById("bb");

btn.addEventListener('click', function () {
    if (btn.checked == false) {
        bgBlur.style.display = "none";
    }
    else{
    bgBlur.style.display = "block";
    bgBlur.style.opacity = 1;
}
});

