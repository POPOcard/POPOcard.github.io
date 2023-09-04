const form = document.getElementById('filterFormContainer');
const productsDiv = document.getElementById('products');

form.addEventListener('change', function (event) {
  event.preventDefault();

  const operator = getSelectedValues('operator');
  const packageType = getSelectedValues('packageType');
  const minAge = getSelectedValues('minAge');
  const deliveryArea = getSelectedValues('deliveryArea');
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

  filterAndDisplay(operator, packageType, minAge, deliveryArea, rollover, broadband, location, number, niceNumber, selfActivate, videoMember, superData, superVoice, recommended, history);
});

function getSelectedValues(name) {
  const selectedCheckboxes = Array.from(document.querySelectorAll(`input[name="${name}"]:checked`));
  return selectedCheckboxes.map(checkbox => checkbox.value);
}

function filterAndDisplay(operator, packageType, minAge, deliveryArea, rollover, broadband, location, number, niceNumber, selfActivate, videoMember, superData, superVoice, recommended, history) {
  const allProducts = document.querySelectorAll('.product');

  allProducts.forEach(product => {
    const productOperator = product.getAttribute('data-operator');
    const productPackageType = product.getAttribute('data-package-type');
    const productMinAge = product.getAttribute('data-min-age').split(' ');
    const productDeliveryArea = product.getAttribute('data-delivery-area').split(' ');
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
      (operator.includes('all') || operator.includes(productOperator)) &&
      (packageType.includes('all') || packageType.includes(productPackageType)) &&
      (minAge.includes('all') || minAge.some(age => productMinAge.includes(age))) &&
      (deliveryArea.includes('all') || deliveryArea.some(area => productDeliveryArea.includes(area))) &&
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
      product.style.display = 'block';
    } else {
      product.style.display = 'none';
    }
  });
}
