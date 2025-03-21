// Split-layout implementation for the intro section
document.addEventListener('DOMContentLoaded', function() {
  // Check if we need to modify the intro section
  const modifyIntro = function() {
    const introSection = document.querySelector('.intro-section');
    
    if (introSection && !introSection.classList.contains('split-modified')) {
      console.log('Modifying intro section to split layout');
      
      // Save original content
      const originalContent = introSection.innerHTML;
      
      // Clear the intro section
      introSection.innerHTML = '';
      
      // Create left column with particles
      const leftColumn = document.createElement('div');
      leftColumn.className = 'intro-left';
      leftColumn.style.width = '60%';
      leftColumn.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
      leftColumn.style.position = 'relative';
      leftColumn.style.display = 'flex';
      leftColumn.style.flexDirection = 'column';
      leftColumn.style.justifyContent = 'center';
      leftColumn.style.padding = '40px';
      leftColumn.style.boxSizing = 'border-box';
      
      // Create right column with image
      const rightColumn = document.createElement('div');
      rightColumn.className = 'intro-right';
      rightColumn.style.width = '40%';
      rightColumn.style.backgroundImage = 'url(/upload/Hongzhou.jpg)';
      rightColumn.style.backgroundSize = 'cover';
      rightColumn.style.backgroundPosition = 'center';
      
      // Modify the intro section styles
      introSection.style.display = 'flex';
      introSection.style.flexDirection = 'row';
      introSection.style.backgroundImage = 'none';
      introSection.classList.add('split-modified');
      
      // Create particles container for left side only
      const particlesContainer = document.createElement('div');
      particlesContainer.id = 'particles-container';
      particlesContainer.style.position = 'absolute';
      particlesContainer.style.top = '0';
      particlesContainer.style.left = '0';
      particlesContainer.style.right = '0';
      particlesContainer.style.bottom = '0';
      particlesContainer.style.zIndex = '1';
      
      // Move the intro content into the left column
      const contentContainer = document.createElement('div');
      contentContainer.className = 'intro-content';
      contentContainer.style.position = 'relative';
      contentContainer.style.zIndex = '10';
      contentContainer.innerHTML = originalContent;
      
      // Update text alignment
      const headings = contentContainer.querySelectorAll('h2, h3');
      headings.forEach(heading => {
        heading.style.textAlign = 'left';
        heading.style.paddingLeft = '0px';
      });
      
      // Put everything together
      leftColumn.appendChild(particlesContainer);
      leftColumn.appendChild(contentContainer);
      introSection.appendChild(leftColumn);
      introSection.appendChild(rightColumn);
      
      // Find and connect to any existing particles.js instance
      setTimeout(function() {
        // Look for the particles canvas and move it to our container
        const particlesCanvas = document.querySelector('canvas.particles-js-canvas-el');
        if (particlesCanvas) {
          particlesCanvas.style.position = 'absolute';
          particlesCanvas.style.width = '100%';
          particlesCanvas.style.height = '100%';
          particlesContainer.appendChild(particlesCanvas);
        }
      }, 500);
      
      return true;
    }
    return false;
  };
  
  // Try immediately
  if (!modifyIntro()) {
    // If not successful, try again after a delay
    const interval = setInterval(function() {
      if (modifyIntro()) {
        clearInterval(interval);
      }
    }, 100);
  }
}); 