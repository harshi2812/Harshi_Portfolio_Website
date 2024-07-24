function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

  function toggleProjectDetails(projectId) {
    const detailsElement = document.getElementById(projectId + '-details');
    const allDetails = document.querySelectorAll('.project-details');
    
    // Toggle visibility of the selected project details
    if (detailsElement.classList.contains('show')) {
      detailsElement.classList.remove('show');
    } else {
      // Hide all other project details
      allDetails.forEach(el => el.classList.remove('show'));
      detailsElement.classList.add('show');
    }
  }
  