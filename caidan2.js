 
 window.addEventListener('load', function() { 
    
   window.addEventListener('pagehide', function() { 
     
     var activeTabIndex = getActiveTabIndex(); 
     var scrollPosition = window.pageYOffset; 
  
     sessionStorage.setItem('activeTabIndex', activeTabIndex); 
     sessionStorage.setItem('scrollPosition', scrollPosition); 
   }); 
  
   
   window.addEventListener('pageshow', function(event) { 
     
     var activeTabIndex = sessionStorage.getItem('activeTabIndex'); 
     var scrollPosition = sessionStorage.getItem('scrollPosition'); 
  
     
     if (activeTabIndex === null) { 
       activeTabIndex = 0; 
     } 
     if (scrollPosition === null) { 
       scrollPosition = 0; 
     } 
  
     
     var tabButtons = document.querySelectorAll('.tab-menu button'); 
     tabButtons[activeTabIndex].click(); 
  
     window.scrollTo(0, scrollPosition); 
   }); 
  
   
   window.addEventListener('scroll', function() { 
     
     sessionStorage.setItem('scrollPosition', window.pageYOffset); 
   }); 
 }); 
  
 
 function getActiveTabIndex() { 
   var tabButtons = document.querySelectorAll('.tab-menu button'); 
   for (var i = 0; i < tabButtons.length; i++) { 
     if (tabButtons[i].classList.contains('active')) { 
       return i; 
     } 
   } 
   return 0; 
 } 
  document.getElementById("close-button").addEventListener("click", function() {
  document.getElementById("floating-container").style.display = "none";
});
