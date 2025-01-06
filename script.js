
function bookArtwork(bookArtworkName, price) {
    alert(`You have booked the ${ArtworkName} for ₹${price}/per hour`);
  }
  
  document.querySelectorAll('.nav-bar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
  });
  