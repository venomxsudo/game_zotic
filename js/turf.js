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
  // Add your logic to handle the search (e.g., redirect to a search results page)
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

// Change navigation bar color on scroll
document.addEventListener("DOMContentLoaded", function () {
  var navbar = document.querySelector(".navigation");

  window.addEventListener("scroll", function () {
    var scrollPos = window.scrollY;

    if (scrollPos > 400) {
      navbar.classList.add("alt-color");
    } else {
      navbar.classList.remove("alt-color");
    }
  });
});

// search button

const clearInput = () => {
  const input = document.getElementsByTagName("input")[0];
  input.value = "";
};

const clearBtn = document.getElementById("clear-btn");
clearBtn.addEventListener("click", clearInput);

