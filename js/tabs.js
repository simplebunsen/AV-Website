function openTabContent(evt, cityName, containerName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them

  let currentContainer = document.getElementById(containerName);
  tabcontent = currentContainer.querySelectorAll("." + "tab-content");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = currentContainer.querySelectorAll("." + "tab-button");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  currentContainer.querySelector("#" + cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

function openDefaultTabs(evt) {
  let defaults = document.querySelectorAll(".default-tab")
  defaults.forEach(element => {
    element.style.display = "block";
  });
}