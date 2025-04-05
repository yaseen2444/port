// JavaScript for certifications horizontal scroll functionality
document.addEventListener('DOMContentLoaded', function() {
    // Get scroll container and buttons
    const scrollContainer = document.querySelector('.certifications-scroll-container');
    const scrollLeftBtn = document.getElementById('scroll-left-cert');
    const scrollRightBtn = document.getElementById('scroll-right-cert');
    
    if (scrollContainer && scrollLeftBtn && scrollRightBtn) {
      // Scroll left button functionality
      scrollLeftBtn.addEventListener('click', function() {
        scrollContainer.scrollBy({
          left: -300,
          behavior: 'smooth'
        });
      });
      
      // Scroll right button functionality
      scrollRightBtn.addEventListener('click', function() {
        scrollContainer.scrollBy({
          left: 300,
          behavior: 'smooth'
        });
      });
      
      // Show/hide scroll buttons based on scroll position
      scrollContainer.addEventListener('scroll', function() {
        // Check if scrolled to the beginning
        if (scrollContainer.scrollLeft <= 0) {
          scrollLeftBtn.classList.add('disabled');
        } else {
          scrollLeftBtn.classList.remove('disabled');
        }
        
        // Check if scrolled to the end
        const maxScrollLeft = scrollContainer.scrollWidth - scrollContainer.clientWidth;
        if (scrollContainer.scrollLeft >= maxScrollLeft - 5) {
          scrollRightBtn.classList.add('disabled');
        } else {
          scrollRightBtn.classList.remove('disabled');
        }
      });
      
      // Trigger scroll event on load to set initial state of buttons
      scrollContainer.dispatchEvent(new Event('scroll'));
    }
  });