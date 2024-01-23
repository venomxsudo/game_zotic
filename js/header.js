if (screen.width > 1200) {
    // Add click event listeners to navigation links
    const list = document.querySelectorAll(".list");
    function activeLink() {
      list.forEach((item) => item.classList.remove("active"));
      this.classList.add("active");
    }
    list.forEach((item) => item.addEventListener("click", activeLink));
}




document.addEventListener('DOMContentLoaded', function () {
    const navList = document.querySelector('.navlist');
    const burger = document.querySelector('.profile-img');
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
