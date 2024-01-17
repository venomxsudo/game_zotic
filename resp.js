document.addEventListener('DOMContentLoaded', function () {
    const navList = document.querySelector('.navlist');
    const burger = document.querySelector('.burger');
    const navbar = document.querySelector('.navigation');

    // Function to toggle classes
    function toggleClasses() {
        navList.classList.toggle('v-class');
        navbar.classList.toggle('h-class');
    }

    // Event listener for each list item
    navList.querySelectorAll('.list').forEach(function (listItem) {
        listItem.addEventListener('click', function () {
            toggleClasses();
        });
    });

    // Event listener for burger menu
    burger.addEventListener('click', function () {
        // Call the function to toggle classes when the burger menu is clicked
        toggleClasses();
    });
});
