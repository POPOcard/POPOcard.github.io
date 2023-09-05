const form = document.getElementById('filterFormContainer'); 
     const productsDiv = document.getElementById('products'); 
     const resultsDiv = document.getElementById('resultsContainer'); 

     form.addEventListener('change', function(event) { 
       event.preventDefault(); 

       const operator = document.querySelector('input[name="operator"]:checked').value; 
       const packageType = document.querySelector('input[name="packageType"]:checked').value; 
       const minAge = document.querySelector('input[name="minAge"]:checked').value; 
     
       const rollover = document.querySelector('input[name="rollover"]').checked; 
       const broadband = document.querySelector('input[name="broadband"]').checked; 
       const location = document.querySelector('input[name="location"]').checked; 
       const number = document.querySelector('input[name="number"]').checked; 
       const niceNumber = document.querySelector('input[name="niceNumber"]').checked; 
       const selfActivate = document.querySelector('input[name="selfActivate"]').checked; 
       const videoMember = document.querySelector('input[name="videoMember"]').checked; 
       const superData = document.querySelector('input[name="superData"]').checked; 
       const superVoice = document.querySelector('input[name="superVoice"]').checked; 
       const recommended = document.querySelector('input[name="recommended"]').checked; 
       const history = document.querySelector('input[name="history"]').checked; 
           const yyunnan = document.querySelector('input[name="yyunnan"]').checked; 
const gguangdong = document.querySelector('input[name="gguangdong"]').checked; 
const xxizang = document.querySelector('input[name="xxizang"]').checked; 
const xxinjiang = document.querySelector('input[name="xxinjiang"]').checked; 
const bbeijing = document.querySelector('input[name="bbeijing"]').checked; 

       filterAndDisplay(operator, packageType, minAge, deliveryArea, rollover, broadband, location, number, niceNumber, selfActivate, videoMember, superData, superVoice, recommended, , xizang, guangdong, beijing, yunnan, xinjiang,  history); 
     }); 

     function filterAndDisplay(operator, packageType, minAge, deliveryArea, rollover, broadband, location, number, niceNumber, selfActivate, videoMember, superData, superVoice, recommended, xizang, guangdong, beijing, yunnan, xinjiang, history) { 
       const allProducts = document.querySelectorAll('.product'); 

       for (const product of allProducts) { 
         const productOperator = product.getAttribute('data-operator'); 
         const productPackageType = product.getAttribute('data-package-type'); 
         const productMinAge = product.getAttribute('data-min-age'); 
          
         const productRollover = product.getAttribute('data-rollover') === 'true'; 
         const productBroadband = product.getAttribute('data-broadband') === 'true'; 
         const productLocation = product.getAttribute('data-location') === 'true'; 
         const productNumber = product.getAttribute('data-number') === 'true'; 
         const productNiceNumber = product.getAttribute('data-nice-number') === 'true'; 
         const productSelfActivate = product.getAttribute('data-self-activate') === 'true'; 
         const productVideoMember = product.getAttribute('data-video-member') === 'true'; 
         const productSuperData = product.getAttribute('data-super-data') === 'true'; 
         const productSuperVoice = product.getAttribute('data-super-voice') === 'true'; 
         const productRecommended = product.getAttribute('data-recommended') === 'true'; 
         const productHistory = product.getAttribute('data-history') === 'true'; 
             const productXxizang = product.getAttribute('data-xxizang') === 'true'; 
         const productYyunnan = product.getAttribute('data-yyunnan') === 'true'; 
         const productBbeijing = product.getAttribute('data-bbeijing') === 'true'; 
         const productGguangdong = product.getAttribute('data-gguangdong') === 'true'; 
     const productXxinjiang = product.getAttribute('data-xxinjiang') === 'true'; 

         if ( 
           (operator === 'all' || productOperator === operator) && 
           (packageType === 'all' || productPackageType === packageType) && 
           (minAge === 'all' || productMinAge === minAge) && 
          
           (!rollover || productRollover) && 
           (!broadband || productBroadband) && 
           (!location || productLocation) && 
           (!number || productNumber) && 
           (!niceNumber || productNiceNumber) && 
           (!selfActivate || productSelfActivate) && 
           (!videoMember || productVideoMember) && 
           (!superData || productSuperData) && 
           (!superVoice || productSuperVoice) && 
           (!recommended || productRecommended) && 
           (!yyunnan || productYyunnan) && 
           (!bbeijing || productBbeijing) && 
           (!gguangdong || productGguangdong) && 
           (!xxizang || productXxizang) && 
           (!xxinjiang || productXxinjiang) && 
           (!history || productHistory) 
         ) { 
           product.style.display = 'block'; // 显示符合条件的商品 
         } else { 
           product.style.display = 'none'; // 隐藏不符合条件的商品 
         } 
       } 
     }
