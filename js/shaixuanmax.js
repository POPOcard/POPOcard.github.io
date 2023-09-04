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
            (minAges.includes('all') || minAges.every(age => productMinAges.includes(age))) && // 所有选择的年龄都必须包含在商品的年龄中
            (deliveryAreas.includes('all') || deliveryAreas.every(area => productDeliveryAreas.includes(area))) && // 所有选择的地区都必须包含在商品的地区中
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
