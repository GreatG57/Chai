document.getElementById('show-more-btn').addEventListener('click', function() {
    var extraTeam = document.getElementById('extra-team');
  
    if (extraTeam.style.maxHeight === '0px' || extraTeam.style.maxHeight === '') {
      // Expand the section with a smooth transition
      extraTeam.style.opacity = '1';
      extraTeam.style.maxHeight = extraTeam.scrollHeight + 'px'; // Dynamically set the height
      this.textContent = 'Show Less';
    } else {
      // Collapse the section with a smooth transition
      extraTeam.style.opacity = '0';
      extraTeam.style.maxHeight = '0px';
      this.textContent = 'Show More';
    }
  });
  