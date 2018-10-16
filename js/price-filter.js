'use strict';

function setUpPriceFilter() {
    var price;
    var priceList = [];
    $('.product').each(function() {
        price = $(this).attr('data-price');
        if(price && priceList.indexOf(price) < 0) {
            priceList.push(price);
        }
    });
    priceList.sort();
    priceList.forEach(function(price) {
        var optionTag = `<option value="${price}">${price}</option>`;
        $('#price-filter').append(optionTag);
    });
};
setUpPriceFilter();
function handlePriceFilter() {
    $('#price-filter').on('change', function() {
        if($(this).val()) {
            $('.product').hide();
            $(`.product[data-price="${$(this).val()}"]`).fadeIn();
        }
        else {
            $('.product').fadeIn();
        }
    });
};
handlePriceFilter();
