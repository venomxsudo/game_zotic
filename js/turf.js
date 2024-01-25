const cities = ['Ahmedabad', 'Gandhinagar', 'Surat', 'Chicago', 'Houston', 'Phoenix', 'Philadelphia'];

function filterCities(query) {
  return cities.filter(city => city.toLowerCase().startsWith(query.toLowerCase()));
}

function updateSearchResults(query) {
  const searchResults = document.getElementById('searchResults');
  const filteredCities = filterCities(query);

  if (filteredCities.length > 0) {
    searchResults.innerHTML = '';
    filteredCities.forEach(city => {
      const resultItem = document.createElement('div');
      resultItem.className = 'searchResultItem';
      resultItem.textContent = city;
      resultItem.addEventListener('click', () => {
        document.getElementById('cityInput').value = city;
        searchResults.style.display = 'none';
      });
      searchResults.appendChild(resultItem);
    });

    searchResults.style.display = 'block';
  } else {
    searchResults.style.display = 'none';
  }
}

document.getElementById('cityInput').addEventListener('input', function () {
  const query = this.value;
  updateSearchResults(query);
});

document.addEventListener('click', function (event) {
  const searchResults = document.getElementById('searchResults');
  const cityInput = document.getElementById('cityInput');
  if (event.target !== cityInput && !cityInput.contains(event.target)) {
    searchResults.style.display = 'none';
  }
});

function searchCity() {
  const query = document.getElementById('cityInput').value;
  console.log('Search for:', query);
}


// Check screen width for specific functionality
if (screen.width > 1200) {
  // Add click event listeners to navigation links
  const list = document.querySelectorAll(".list");
  function activeLink() {
    list.forEach((item) => item.classList.remove("active"));
    this.classList.add("active");
  }
  list.forEach((item) => item.addEventListener("click", activeLink));
}


// search button

const clearInput = () => {
  const input = document.getElementsByTagName("input")[0];
  input.value = "";
};

const clearBtn = document.getElementById("clear-btn");
clearBtn.addEventListener("click", clearInput);




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
    toggleClasses();
  });
});

// slider
