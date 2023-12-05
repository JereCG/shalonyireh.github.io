const buttons = document.querySelectorAll('.read-more-btn');

buttons.forEach(button => {
  button.addEventListener('click', function() {
    const blog = this.parentNode;
    const fullText = blog.querySelector('.full-text');
    
    fullText.classList.toggle('show-full');
    
    if (fullText.classList.contains('show-full')) {
      this.textContent = 'Leer menos';
    } else {
      this.textContent = 'Leer más';
    }
  });
});
