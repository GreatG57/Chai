console.log("Script loaded");

document.getElementById('show-more-btn').addEventListener('click', function() {
  var extraTeam = document.getElementById('extra-team');
  if (extraTeam.style.display === 'none' || extraTeam.style.display === '') {
    extraTeam.style.display = 'block';
    this.textContent = 'Show Less';
  } else {
    extraTeam.style.display = 'none';
    this.textContent = 'Show More';
  }
});
