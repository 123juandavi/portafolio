document.addEventListener("DOMContentLoaded", function () {
    var textElements = document.querySelectorAll(".text-to-animate");
    var currentIndex = 0;
  
    function showText() {
     
      textElements[currentIndex].style.opacity = "1";
  
      
      setTimeout(function () {
        
        textElements[currentIndex].style.opacity = "0";
  
        
        currentIndex = (currentIndex + 1) % textElements.length;
  
       
        showText();
      }, 3000); 
    }
  
    
    showText();
  });
  
  
  