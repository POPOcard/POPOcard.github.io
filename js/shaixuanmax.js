const form = document.getElementById('filterFormContainer');
const productsDiv = document.getElementById('products');
const resultsDiv = document.getElementById('resultsContainer');

form.addEventListener('change', function(event) {
  event.preventDefault();

  const operator = document.querySelector('input[name="operator"]:checked').value;
  const packageType = document.querySelector('input[name="packageType"]:checked').value;
  const selectedMinAges = document.querySelectorAll('input[name="minAge"]:checked');
  const minAges = Array.from(selectedMinAges).map(age => age.value);
  const selectedDeliveryAreas = document.querySelectorAll('input[name="deliveryArea"]:checked');
  const deliveryAreas = Array.from(selectedDeliveryAreas).map(area => area.value);
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

  filterAndDisplay(operator, packageType, minAges, deliveryAreas, rollover, broadband, location, number, niceNumber, selfActivate, videoMember, superData, superVoice, recommended, history);
});

// JavaScript代码
function filterAndDisplay(operator, packageType, minAges, deliveryAreas, rollover, broadband, location, number, niceNumber, selfActivate, videoMember, superData, superVoice, recommended, history) {
    const allProducts = document.querySelectorAll('.product');

    for (const product of allProducts) {
        const productOperator = product.getAttribute('data-operator');
        const productPackageType = product.getAttribute('data-package-type');
        const productMinAges = product.getAttribute('data-min-age').split(' '); // 分割成年龄数组
        const productDeliveryAreas = product.getAttribute('data-delivery-areas').split(' '); // 分割成地区数组
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

        if (
            (operator === 'all' || productOperator === operator) &&
            (packageType === 'all' || productPackageType === packageType) &&
            (minAges.includes('all') || minAges.some(age => productMinAges.includes(age))) && // 检查商品年龄是否包含在筛选的年龄中
            (deliveryAreas.includes('all') || deliveryAreas.some(area => productDeliveryAreas.includes(area))) && // 检查商品地区是否包含在筛选的地区中
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
            (!history || productHistory)
        ) {
            product.style.display = 'block'; // 显示符合条件的商品
        } else {
            product.style.display = 'none'; // 隐藏不符合条件的商品
        }
    }
}
