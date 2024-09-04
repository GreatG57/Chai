document.getElementById('show-more-btn').addEventListener('click', function() {
    var extraTeam = document.getElementById('extra-team');
  
    if (extraTeam.style.height === '0px' || extraTeam.style.height === '') {
      // Expand the section
      extraTeam.style.opacity = '1';
      extraTeam.style.height = extraTeam.scrollHeight + 'px'; // Calculate full height dynamically
      this.textContent = 'Show Less';
  
      // Move the button to the bottom
      extraTeam.appendChild(this);
    } else {
      // Collapse the section
      extraTeam.style.opacity = '0';
      extraTeam.style.height = '0px';
      this.textContent = 'Show More';
  
      // Move the button back to original place
      document.querySelector('.meet-the-team').appendChild(this);
    }
  });
  