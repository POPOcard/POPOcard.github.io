const form = document.getElementById('filterFormContainer'); 
     const productsDiv = document.getElementById('products'); 
     const resultsDiv = document.getElementById('resultsContainer'); 

     form.addEventListener('change', function(event) { 
       event.preventDefault(); 

       const operator = document.querySelector('input[name="operator"]:checked').value; 
       const packageType = document.querySelector('input[name="packageType"]:checked').value; 
       const minAge = document.querySelector('input[name="minAge"]:checked').value; 
       const deliveryArea = document.querySelector('input[name="deliveryArea"]:checked').value; 
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
           const yunnan = document.querySelector('input[name="yunnan"]').checked; 
const guangdong = document.querySelector('input[name="guangdong"]').checked; 
const xizang = document.querySelector('input[name="xizang"]').checked; 
const xinjiang = document.querySelector('input[name="xinjiang"]').checked; 
const beijing = document.querySelector('input[name="beijing"]').checked; 

       filterAndDisplay(operator, packageType, minAge, deliveryArea, rollover, broadband, location, number, niceNumber, selfActivate, videoMember, superData, superVoice, recommended, , xizang, guangdong, beijing, yunnan, xinjiang,  history); 
     }); 

     function filterAndDisplay(operator, packageType, minAge, deliveryArea, rollover, broadband, location, number, niceNumber, selfActivate, videoMember, superData, superVoice, recommended, xizang, guangdong, beijing, yunnan, xinjiang, history) { 
       const allProducts = document.querySelectorAll('.product'); 

       for (const product of allProducts) { 
         const productOperator = product.getAttribute('data-operator'); 
         const productPackageType = product.getAttribute('data-package-type'); 
         const productMinAge = product.getAttribute('data-min-age'); 
         const productDeliveryArea = product.getAttribute('data-delivery-area'); 
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
             const productxizang = product.getAttribute('data-xizang') === 'true'; 
         const productyunnan = product.getAttribute('data-yunnan') === 'true'; 
         const productbeijing = product.getAttribute('data-beijing') === 'true'; 
         const productguangdong = product.getAttribute('data-guangdong') === 'true'; 
     const productxinjiang = product.getAttribute('data-xinjiang') === 'true'; 

         if ( 
           (operator === 'all' || productOperator === operator) && 
           (packageType === 'all' || productPackageType === packageType) && 
           (minAge === 'all' || productMinAge === minAge) && 
           (deliveryArea === 'all' || productDeliveryArea === deliveryArea) && 
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
           (!yunnan || productYunnan) && 
           (!beijing || productBeijing) && 
           (!guangdong || productGuangdong) && 
           (!xizang || productXizang) && 
           (!xinjiang || productXinjiang) && 
           (!history || productHistory) 
         ) { 
           product.style.display = 'block'; // 显示符合条件的商品 
         } else { 
           product.style.display = 'none'; // 隐藏不符合条件的商品 
         } 
       } 
     }
